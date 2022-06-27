// ==UserScript==
// @name         GitHub 繁體中文化外掛
// @namespace    https://github.com/maboloshi/github-chinese
// @description  簡體中文化 GitHub 介面的部分選單及內容。原作者為樓教主(http://www.52cik.com/)，繁體中文化 GitHub 介面的部分選單及內容。修改者為 Orstudio (https://orstudio.tw/)。
// @copyright    2022, Orstudio (https://orstudio.tw/)
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @version      1.1.1
// @author       Orstudio
// @license      GPL-3.0
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @require      https://cdn.jsdelivr.net/gh/cracky5322/Github-zh_TW/locals.js
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @connect      www.githubs.cn
// ==/UserScript==

(function (window, document, undefined) {
    'use strict';

    var RegExp = GM_getValue("RegExp", 1);
    var lang = 'zh'; // 中文

    // 要翻譯的頁面
    var page = getPage();

    transTitle(); // 頁面標題翻譯
    transBySelector(); // Selector 翻譯
    traverseNode(document.body); // 立即翻譯頁面
    watchUpdate();

    // 翻譯描述
    transDesc(".f4.my-3"); //倉庫簡介翻譯
    transDesc(".gist-content [itemprop='about']"); // Gist 簡介翻譯

    /**
     * 監聽節點變化, 觸發和呼叫翻譯函式
     *
     * 2021-10-07 11:28:30
     * 使用原生API 代替 jQuery 的 `ajaxComplete`函式
     */
    function watchUpdate() {
        const m =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver;
        var currentPath = location.pathname;
        new m(function (mutations) {
            /**
             * 僅翻譯變更部分 不在全域性匹配
             *
             * 且僅監聽:
             *    1. 節點增加
             *    2. 節點屬性的變化
             *
             * 2021-10-10 15:24:49
             * 遍歷節點 函式 walk 需相應打2個補丁 適配
             * */
            if(location.pathname !== currentPath) {
                currentPath = location.pathname;
                page = getPage(); // 僅當, 頁面地址發生變化時執行 更新全域性變數 page
            }
            for(let mutation of mutations) { // for速度比forEach快
                if (mutation.addedNodes.length > 0 || mutation.type === 'attributes') { // 僅當節點增加 或者屬性更改
                    traverseNode(mutation.target);
                }
            }
        }).observe(document.body, {
            subtree: true,
            childList: true,
            attributeFilter: ['value', 'placeholder', 'aria-label', 'data-confirm'], // 僅觀察特定屬性變化(試驗測試階段，有問題再恢復)
        });

        new m(function(mutations) {
            transTitle();
            transBySelector(); // Selector 翻譯 目前先跟隨 url 即頁面標題變化
        }).observe(
            document.querySelector('title'),
            { childList: true }
        );
    }

    /**
     * 遍歷節點
     *
     * @param {Element} node 節點
     */
    function traverseNode(node) {
        // 跳過忽略
        if (I18N.conf.reIgnoreId.test(node.id) ||
            I18N.conf.reIgnoreClass.test(node.className) ||
            I18N.conf.reIgnoreTag.test(node.tagName) ||
            (node.getAttribute && I18N.conf.reIgnoreItemprop.test(node.getAttribute("itemprop")))
           ) {
            return;
        }

        if (node.nodeType === Node.ELEMENT_NODE) { // 元素節點處理

            // 翻譯時間元素
            if (node.tagName === 'RELATIVE-TIME' || node.tagName === 'TIME-AGO'|| node.tagName === 'TIME') {
                transTimeElement(node);
                return;
            }

            // 元素節點屬性翻譯
            if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') { // 輸入框 按鈕 文字域
                if (node.type === 'button' || node.type === 'submit' || node.type === 'reset') {
                    if (node.hasAttribute('data-confirm')) { // 翻譯 瀏覽器 提示對話方塊
                        transElement(node, 'data-confirm', true);
                    }
                    transElement(node, 'value');
                } else {
                    transElement(node, 'placeholder');
                }
            } else if (node.tagName === 'BUTTON'){
                if (node.hasAttribute('aria-label') && /tooltipped/.test(node.className)) {
                    transElement(node, 'aria-label', true); // 翻譯 瀏覽器 提示對話方塊
                }
                if (node.hasAttribute('title')) {
                    transElement(node, 'title', true); // 翻譯 瀏覽器 提示對話方塊
                }
                if (node.hasAttribute('data-confirm')) {
                    transElement(node, 'data-confirm', true); // 翻譯 瀏覽器 提示對話方塊 ok
                }
                if (node.hasAttribute('data-confirm-text')) {
                    transElement(node, 'data-confirm-text', true); // 翻譯 瀏覽器 提示對話方塊 ok
                }
                if (node.hasAttribute('data-confirm-cancel-text')) {
                    transElement(node, 'data-confirm-cancel-text', true); // 取消按鈕 提醒
                }
                if (node.hasAttribute('cancel-confirm-text')) {
                    transElement(node, 'cancel-confirm-text', true); // 取消按鈕 提醒
                }
                if (node.hasAttribute('data-disable-with')) { // 按鈕等待提示
                    transElement(node.dataset, 'disableWith');
                }
            } else if (node.tagName === 'OPTGROUP') { // 翻譯 <optgroup> 的 label 屬性
                transElement(node, 'label');
            } else if (/tooltipped/.test(node.className)) { // 僅當 元素存在'tooltipped'樣式 aria-label 才起效果
                transElement(node, 'aria-label', true); // 帶提示的元素，類似 tooltip 效果的
            }

            if (node.childNodes.length >0) {
                for (const child of node.childNodes) {
                    traverseNode(child); // 遍歷子節點
                }
            }

        } else if (node.nodeType === Node.TEXT_NODE) { // 文字節點翻譯
            if (node.length <= 500){ // 修復 許可證編輯框初始化載入內容被翻譯
                transElement(node, 'data');
            }
        }
    }

    /**
     * 獲取翻譯頁面
     *
     * 2021-10-07 11:48:50
     * 參考 v2.0 中規則
     */
    function getPage() {
        // 站點，如 gist, developer, help 等，預設主站是 github
        const site = location.host.replace(/\.?github\.com$/, '') || 'github'; // 站點
        const pathname = location.pathname; // 當前路徑
        const isLogin = /logged-in/.test(document.body.className); // 是否登入

        // 用於確定 個人首頁，組織首頁，倉庫頁 然後做判斷
        const analyticsLocation = (document.getElementsByName('analytics-location')[0] || 0).content || '';
        //const isProfile = analyticsLocation === '/<user-name>'; // 僅個人首頁 其標籤頁識別不了 優先使用Class 過濾
        // 如 maboloshi?tab=repositories 等
        const isOrganization = /\/<org-login>/.test(analyticsLocation); // 組織頁
        const isRepository = /\/<user-name>\/<repo-name>/.test(analyticsLocation); // 倉庫頁

        // 優先匹配 body 的 class
        let page = document.body.className.match(I18N.conf.rePageClass);
        if (page) {
            return page[1];
        }

        if (site === 'gist') { // Gist 站點
            return 'gist';
        }

        if (pathname === '/' && site === 'github') { // github.com 首頁
            return isLogin ? 'page-dashboard' : 'homepage';
        } //登入 或 未登入

        // 僅個人首頁 其標籤頁識別不了 優先使用 Class 過濾(/page-profile/)
        // if (isProfile) { // 個人首頁
        //     return 'page-profile';
        // }

        if (isRepository) { // 倉庫頁
            let t = pathname.match(I18N.conf.rePagePathRepo);
            return t ? 'repository/'+t[1] : 'repository';
        }

        if (isOrganization) { // 組織頁
            let t = pathname.match(I18N.conf.rePagePathOrg);
            return t ? 'orgs/'+t[1] : 'orgs';
        }

        // 擴充套件 pathname 匹配
        page = pathname.match(I18N.conf.rePagePath);
        return page ? page[1] : false; // 取頁面 key
    }

    /**
     * 翻譯頁面標題
     */
    function transTitle() {
        let str; // 翻譯結果
        let key = document.title;

        // 靜態翻譯
        str = I18N[lang]['title']['static'][key];
        if (str) {
            document.title =  str;
            return;
        }

        let res = I18N[lang]['title'].regexp; // 正則標題
        for (let [a, b] of res) {
            str = key.replace(a, b);
            if (str !== key) {
                document.title =  str;
                break;
            }
        }
    }

    /**
     * 時間元素翻譯
     *
     * @param {Element} node 節點
     */
    function transTimeElement(el) {
        let str; // 翻譯結果
        let key = el.textContent;
        let res = I18N[lang].pubilc.regexp;

        for (let i = 0; i < 3; i++) { // 公共正則中時間規則
            str= key.replace(res[i][0], res[i][1]);
            if (str !== key) {
                el.textContent = str;
                break;
            }
        }
    }

    /**
     * 翻譯節點對應屬性內容
     *
     * @param {object} el 物件
     * @param {string} field 屬性欄位
     * @param {boolean} isAttr 是否是 attr 屬性
     *
     * @returns {boolean}
     */
    function transElement(el, field, isAttr=false) {
        let str; // 翻譯後的文字

        if (!isAttr) { // 非屬性翻譯
            str = translate(el[field], page);
        } else {
            str = translate(el.getAttribute(field), page);
        }

        if (!str) { // 無翻譯則退出
            return false;
        }

        // 替換翻譯後的內容
        if (!isAttr) {
            el[field] = str;
        } else {
            el.setAttribute(field, str);
        }
    }

    /**
     * 翻譯文字
     *
     * @param {string} text 待翻譯字串
     * @param {string} page 頁面欄位
     *
     * @returns {string|boolean}
     */
    function translate(text, page) { // 翻譯

        // 內容為空, 空白字元和或數字, 不存在英文字母和符號,. 跳過
        if (!isNaN(text) || !/[a-zA-Z,.]+/.test(text)) {
            return false;
        }
        let str;
        let _key = text.trim(); // 去除首尾空格的 key
        let _key_neat = _key.replace(/\xa0|[\s]+/g, ' ') // 去除多餘空白字元(&nbsp; 空格 換行符)

        if (page) {
            str = transPage(page, _key_neat); // 翻譯已知頁面 (區域性優先)
        } // 未知頁面不翻譯

        if (str && str !== _key_neat) { // 已知頁面翻譯完成
            return text.replace(_key, str);  // 替換原字元，保留首尾空白部分
        }

        return false;
    }

    /**
     * 翻譯頁面內容
     *
     * @param {string} page 頁面
     * @param {string} key 待翻譯內容
     *
     * @returns {string|boolean}
     */
    function transPage(page, key) {
        let str; // 翻譯結果

        // 靜態翻譯
        str = I18N[lang][page]['static'][key] || I18N[lang]['pubilc']['static'][key]; // 預設翻譯 公共部分
        if (typeof str === 'string') {
            return str;
        }

        // 正則翻譯
        if (RegExp){
            let res = I18N[lang][page].regexp; // 正則陣列
            res.push(...I18N[lang]['pubilc'].regexp); // 追加公共正則 es6
            if (res) {
                for (let [a, b] of res) {
                    str = key.replace(a, b);
                    if (str !== key) {
                        return str;
                    }
                }
            }
        }

        return false; // 沒有翻譯條目
    }

    /**
     * 翻譯描述
     *
     * @param {string} JS 選擇器
     *
     * 2021-10-06 16:41:54
     * 來自：k1995/github-i18n-plugin
     * 改寫為原生程式碼
     */
    function transDesc(el) {
        let element = document.querySelector(el);

        if (!element) {
            return false;
        }

        element.insertAdjacentHTML('afterend', "<a id='translate-me' href='#' style='color:rgb(27, 149, 224);font-size: small'>翻譯</a>");
        let translate_me = document.getElementById('translate-me')

        translate_me.onclick = function() {
            // get description text
            const desc = element.textContent.trim();

            if(!desc) {
                return false;
            }

            GM_xmlhttpRequest({
                method: "GET",
                url: `https://www.githubs.cn/translate?q=`+ encodeURIComponent(desc),
                onload: function(res) {
                    if (res.status === 200) {
                        translate_me.style.display="none";
                        // render result
                        const text = res.responseText;
                        element.insertAdjacentHTML('afterend', "<span style='font-size: small'>由 <a target='_blank' style='color:rgb(27, 149, 224);' href='https://www.githubs.cn'>GitHub中文社群</a> 翻譯👇</span><br/>"+text);
                    } else {
                        alert("翻譯失敗");
                    }
                }
            });
        };
    }

    /**
     * js原生選擇器 翻譯元素
     *
     * @param {string} JS 選擇器或 CSS 選擇器
     *
     * 2022-02-04 19:46:44
     * 靈感參考自：k1995/github-i18n-plugin
     */
    function transBySelector() {
        let res = I18N[lang].selector; // 陣列
        if (res) {
            for (let [a, b] of res) {
                let element = document.querySelector(a)
                if (element) {
                    element.textContent = b;
                } else if (document.getElementsByClassName(a).length > 0) {
                    document.getElementsByClassName(a)[0].textContent = b;
                }
            }
        }
    }

    GM_registerMenuCommand("正則切換", () => {
        if (RegExp){
            GM_setValue("RegExp", 0);
            GM_notification("已關閉正則功能");
        } else {
            GM_setValue("RegExp", 1);
            GM_notification("已開啟正則功能");
            location.reload();
        }
    })

})(window, document);
