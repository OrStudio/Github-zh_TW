// ==UserScript==
// @name         GitHub 繁體中文化外掛
// @namespace    https://github.com/maboloshi/github-chinese
// @description  簡體中文化 GitHub 介面的部分選單及內容。原作者為樓教主(http://www.52cik.com/)，繁體中文化 GitHub 介面的部分選單及內容。修改者為 Orstudio (https://orstudio.tw/)。
// @copyright    2022, Orstudio (https://orstudio.tw/)
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @version      1.1.0
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
    translateBySelector(); // Selector 翻譯
    traverseNode(document.body); // 立即翻譯頁面
    watchUpdate();

    // 翻譯描述
    translateDesc(".f4.my-3"); //倉庫簡介翻譯
    translateDesc(".gist-content [itemprop='about']"); // Gist 簡介翻譯

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
                page = getPage(); // 僅當,頁面地址發生變化時執行
            }
            for(let mutation of mutations) { // for速度比forEach快
                if (mutation.addedNodes || mutation.type === 'attributes') { // 僅當節點增加 或者屬性更改
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
            translateBySelector(); // Selector 翻譯 目前先跟隨 url 即頁面標題變化
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

        var nodes = node.childNodes;

        for (var i = 0, len = nodes.length; i <= len; i++) { // 遍歷節點
            var el = nodes[i] ? nodes[i] : node; //可能還要最佳化 該節點不存在子節點
            // todo 1. 修復多屬性翻譯問題; 2. 新增事件翻譯, 如論預覽資訊;

            if (el.nodeType === Node.ELEMENT_NODE) { // 元素節點處理

                // 元素節點屬性翻譯
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { // 輸入框 按鈕 文字域
                    if (el.type === 'button' || el.type === 'submit' || el.type === 'reset') {
                        if (el.hasAttribute('data-confirm')) { // 翻譯 瀏覽器 提示對話方塊
                            transElement(el, 'data-confirm', true);
                        }
                        transElement(el, 'value');
                    } else {
                        transElement(el, 'placeholder');
                    }
                } else if (el.tagName === 'BUTTON'){
                    if (el.hasAttribute('aria-label') && /tooltipped/.test(el.className)) {
                        transElement(el, 'aria-label', true); // 翻譯 瀏覽器 提示對話方塊
                    }
                    if (el.hasAttribute('data-confirm')) {
                        transElement(el, 'data-confirm', true); // 翻譯 瀏覽器 提示對話方塊 ok
                    }
                    if (el.hasAttribute('data-confirm-text')) {
                        transElement(el, 'data-confirm-text', true); // 翻譯 瀏覽器 提示對話方塊 ok
                    }
                    if (el.hasAttribute('data-confirm-cancel-text')) {
                        transElement(el, 'data-confirm-cancel-text', true); // 取消按鈕 提醒
                    }
                    if (el.hasAttribute('cancel-confirm-text')) {
                        transElement(el, 'cancel-confirm-text', true); // 取消按鈕 提醒
                    }
                    if (el.hasAttribute('data-disable-with')) { // 按鈕等待提示
                        transElement(el.dataset, 'disableWith');
                    }
                } else if (el.tagName === 'OPTGROUP') { // 翻譯 <optgroup> 的 label 屬性
                    transElement(el, 'label');
                } else if (/tooltipped/.test(el.className)) { // 僅當 元素存在'tooltipped'樣式 aria-label 才起效果
                    transElement(el, 'aria-label', true); // 帶提示的元素，類似 tooltip 效果的
                }
                if (el != node) {
                    traverseNode(el); // 遍歷子節點
                }
            } else if (el.nodeType === Node.TEXT_NODE) { // 文字節點翻譯
                if (el.length <= 500){ // 修復 許可證編輯框初始化載入內容被翻譯
                    transElement(el, 'data');
                }
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

        // 匹配 body 的 class
        var page = document.body.className.match(I18N.conf.rePageClass);

        if (!page) { // 擴充套件 pathname 匹配
            page = pathname.match(I18N.conf.rePagePath);
        }

        return page ? page[1] : false; // 取頁面 key
    }

    /**
     * 翻譯頁面標題
     */
    function transTitle() {
        var title = translate(document.title, 'title');

        if (!title) { // 無翻譯則退出
            return false;
        }

        document.title = title;
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
        var transText; // 翻譯後的文字

        if (!isAttr) { // 非屬性翻譯
            transText = translate(el[field], page);
        } else {
            transText = translate(el.getAttribute(field), page);
        }

        if (!transText) { // 無翻譯則退出
            return false;
        }

        // 替換翻譯後的內容
        if (!isAttr) {
            el[field] = transText;
        } else {
            el.setAttribute(field, transText);
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

        if (!isNaN(text) || /^[\s]*[\u4e00-\u9fa5]|[\u4e00-\u9fa5][\s]*$/.test(text)) {
            return false;
        } // 內容為空, 空白字元和或數字, 已翻譯漢字 不翻譯

        var str;
        var _key = text.trim(); // 去除首尾空格的 key
        var _key_neat = _key
            .replace(/\xa0/g, ' ') // 替換 &nbsp; 空格導致的 bug
            .replace(/[\s]+/g, ' ') // 去除多餘空白字元(空格 換行符)，(試驗測試階段，有問題再恢復)

        if (page === 'title') {
            return transPage('title', _key_neat);
        } // 翻譯網頁標題

        if (page) {
            str = transPage(page, _key_neat); // 翻譯已知頁面 (區域性優先)
        } // 未知頁面不翻譯

        if (str && str !== _key_neat) { // 已知頁面翻譯完成
            return str;
        }

        str = transPage('pubilc', _key_neat); // 公共翻譯

        if (!str) {
            return false;
        } // 未知內容不翻譯

        return str;
    }


    /**
     * 翻譯頁面內容
     *
     * @param {string} page 頁面
     * @param {string} key 待翻譯內容
     * @param {boolean} isRegexp 是否僅翻譯正則部分
     *
     * @returns {string|boolean}
     */
    function transPage(page, key, isRegexp=false) {
        var str; // 翻譯結果

        // 靜態翻譯
        if (!isRegexp) {
            str = I18N[lang][page]['static'][key];
            if (typeof str === 'string') {
                return str;
            }
        }

        // 正則翻譯
        if (RegExp){
            var res = I18N[lang][page].regexp; // 正則陣列
            if (res) {
                for (var i = 0, len = res.length; i < len; i++) {
                    str = key.replace(res[i][0], res[i][1]);
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
     * 2021-10-06 16:41:54
     * 來自：k1995/github-i18n-plugin
     * 改寫為原生程式碼
     */
    function translateDesc(el) {
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
     * 2022-02-04 19:46:44
     * 靈感參考自：k1995/github-i18n-plugin
     */
    function translateBySelector() {
        var res = I18N[lang].selector; // 陣列
        if (res) {
            for (var i = 0, len = res.length; i < len; i++) {
                let element = document.querySelector(res[i][0])
                if (element) {
                    element.textContent = res[i][1];
                } else if (document.getElementsByClassName(res[i][0]).length != 0) {
                    document.getElementsByClassName(res[i][0])[0].textContent = res[i][1];
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