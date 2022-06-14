/*******************************************************************************

    locals.js - 搭配使用者指令碼外掛`GitHub 中文化外掛`的頁面匹配規則, 翻譯忽略規則,
                詞條庫檔案
    Copyright (C) 2016-2021 樓教主 (https://github.com/52cik)
    Copyright (C) 2021-當前 沙漠之子 (https://github.com/maboloshi)
    Copyright (C) 2022-當前 Orstudio (https://orstudio.tw/)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

    Home: https://github.com/cracky5322/Github-zh_TW
*/
var I18N = {};

I18N.conf = {
    /**
     * 要翻譯的頁面正則(不含倉庫頁)
     *
     * 2021-10-07 11:53:34
     * GitHub 網站更新 調整 Class 過濾規則
     * 且過濾 Class 並不是總是生效，增加 PathName 規則補充
     */
    rePageClass: /\b(page-(profile|account|new-repo|create-org)|session-authentication)\b/,

    /**
     * 匹配 pathname 頁面的正則
     *
     * 註冊頁面 /signup
     * 登入二步驗證 /login/oauth
     * 登入頁面 /login
     * 密碼重置 /password_reset
     * 組織頁面 /orgs
     * 探索頁面 /explore
     * 訂閱頁面 /notifications/subscriptions
     * 通知頁面 /notifications
     * 關注頁面 /watching
     * 星標頁面 /stars
     * 議題頁面 /issues
     * 拉取請求 /pulls
     * 搜尋頁面 /search
     * 趨勢頁面 /trending
     * 展示頁面 /showcases
     * 匯入倉庫 /new/import
     * ...
     */
    rePagePath: /\/($|signup|login\/oauth|login|sessions?|password_reset|orgs|explore|notifications\/subscriptions|notifications|watching|stars|issues|pulls|search|trending|showcases|new\/(import|project)|import|settings\/(apps\/authorizations|apps|tokens|developers|applications\/new|security-log)|settings|installations\/new|marketplace|apps|account\/organizations\/new|projects|account\/billing\/history)/,

    // 倉庫路徑
    rePagePathRepo: /\/(settings|search|projects\/new)/,

    // 組織路徑
    rePagePathOrg: /\/(dashboard|settings\/(apps\/new|applications\/new)|settings|billing_managers\/new|repositories\/new|topics|billing\/history|domain\/new)/,

    /**
     * 忽略區域的 class 正則
     *
     * 程式碼編輯器 內容 程式碼高亮 CodeMirror
     * 程式碼高亮 blob-code
     * 倉庫名和使用者名稱 repo-and-owner (已知出現在：應用安裝授權頁和設定頁 選定倉庫)
     * 檔案,目錄位置欄 |js-path-segment|final-path
     * 檔案列表 files js-navigation-container js-active-navigation-container
     * 評論內容等 js-comment-body
     * 評論編輯區域 comment-form-textarea
     * 檔案搜尋模式 js-tree-finder-virtual-filter
     * 倉庫檔案列表 js-navigation-open Link--primary
     * 快捷鍵 按鍵 js-modifier-key
     * 洞察-->流量-->熱門內容列表 capped-list-label
     */
    reIgnoreClass: /(CodeMirror|blob-code|highlight-.*|repo-and-owner|js-path-segment|final-path|files js-navigation-container|js-comment-body|comment-form-textarea|markdown-title|js-tree-finder-virtual-filter|js-navigation-open Link--primary|js-modifier-key|capped-list-label|blob-code blob-code-inner js-file-line|pl-token|Link--primary no-underline text-bold)/,

    /**
     * 忽略區域的 itemprop 屬性正則
     * name 列表頁 倉庫名
     */
    reIgnoreItemprop: /(name|description)/,

    /**
     * 忽略區域的 特定元素id 正則
     */
    reIgnoreId: /(readme)/,

    /**
     * 忽略區域的 標籤 正則
     * /i 規則不區分大小寫
     */
    reIgnoreTag: /(CODE|^SCRIPT$|^STYLE$|LINK|IMG|MARKED-TEXT|^PRE$|KBD)/,
    // marked-text --> 檔案搜尋模式/<user-name>/<repo-name>/find/<branch> 檔案列表條目
    // ^script$ --> 避免勿過濾 notifications-list-subscription-form
    // ^pre$ --> 避免勿過濾
};

I18N.zh = {
    "selector": [ // 元素篩選器規則
        ["body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mr-md-3.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex > nav > a:nth-child(2)", "拉取請求"], // 頂部條 拉取請求
        ["#type-options > summary > span:nth-child(1)", "型別"], // 個人主頁 --> 倉庫標籤頁-->型別篩選器 Type
        ["#review-changes-modal > summary > span.js-review-changes", "審查更改"], // 拉取請求 更改的檔案
        ["#review-changes-modal > summary > span.hide-sm > span.js-review-changes", "審查更改"], // 拉取請求 更改的檔案
        ["btn-primary btn float-none float-md-right", "更新評論"],
    ],

    "title": { // 標題翻譯
        "static": { // 靜態翻譯
            "Sign in to GitHub · GitHub": "登入 GitHub · GitHub",
            "Join GitHub · GitHub": "加入 GitHub · GitHub",
            "Forgot your password? · GitHub": "忘記您的密碼了嗎？· GitHub",
            "Forgot your password?": "忘記您的密碼了嗎？",
            "GitHub · Where software is built": "GitHub - 軟體構建的地方",
            "Create a New Repository": "建立新倉庫",
            "Import a Repository": "匯入倉庫",
            "New Project": "建立專案",
            "Your Repositories": "我的倉庫",
            "Your Projects": "我的專案",
            "Your Packages": "我的軟體包",
            "Your Stars": "我的星標頁面",
            "Your Profile": "個人資料",
            "Account settings": "帳戶設定",
            "Appearance": "外觀",
            "Accessibility": "無障礙",
            "Notification settingss": "通知設定",
            "Billing": "賬單",
            "Email settings": "郵箱設定",
            "Account security": "帳戶安全",
            "SSH and GPG keys": "SSH 和 GPG 公鑰",
            "Organizations": "組織",
            "Blocked users": "拉黑使用者",
            "Temporary interaction limits": "臨時互動限制",
            "Code review limits": "程式碼審查限制",
            "Repositorys": "倉庫",
            "Deleted Packages": "刪除的軟體包",
            "Pages": "GitHub 頁面",
            "Saved replies": "快捷回覆",
            "Security & analysis": "安全與分析",
            "Installed GitHub Apps": "已安裝的 GitHub 應用",
            "Scheduled reminders": "定時提醒",
            "Security log": "安全日誌",
            "Sponsorship Log": "贊助日誌",
            "GitHub Apps": "GitHub 應用",
            "Developer applications": "開發者應用",
            "Personal Access Tokens": "個人訪問令牌",
            "Register new GitHub App": "註冊新 GitHub 應用",
            "New OAuth Application": "新 OAuth 應用",
            "Create a new Gist": "建立新程式碼片段",
            "Discover gists": "探索程式碼片段",
            "Enable two-factor authentication": "啟用雙重身份驗證",
            "Manage two-factor authentication": "管理雙重身份驗證",
            "Options": "倉庫 · 選項",
            "Confirm access": "授權訪問",
            "General": "通常",
            "Manage access": "訪問管理",
            "Branches": "分支",
            "Tags": "標籤",
            "Webhooks": "Web 鉤子",
            "Environments": "環境",
            "Code security & analysis": "程式碼安全性與分析",
            "Deploy keys": "部署金鑰",
            "Add deploy key": "新增部署金鑰",
            "Actions secrets": "操作機密",
            "Dependabot secrets": "Dependabot 機密",
            "Configure email notifications": "配置郵件通知",
            "Community Standards": "社群準則",
            "General Organization Settings": "常規組織設定",
            "Member privileges": "成員許可權",
            "Teams": "團隊",
            "Repository defaults": "倉庫預設值",
            "Runners": "執行器",
            "Runner Groups": "執行器組",
            "Packages": "軟體包",
            "Security": "安全",
            "Verified & approved domains": "經驗證和批准的域名",
            "Third-party application access policy": "第三方應用訪問策略",
            "Audit log": "審計日誌",
            "Deleted Repositories": "已刪除的倉庫",
            "GitHub Publisher Verification": "GitHub 釋出者驗證",
            "Notifications": "通知",
            "Confirm your account recovery settings": "確認您的帳戶恢復設定",
            "Your stars": "我的星標",
            "Your starred repositories": "我的星標倉庫",
            "Your starred topics": "我的星標主題",
            "Pull Requests": "拉取請求",
        },
        "regexp": [ // 正則翻譯
            [/Repositories/, "倉庫"],
            [/Starred/, "星標頁面"],
            [/starred repositories/, "星標倉庫"],
            [/starred topics/, "星標主題"],
            [/starred/, "星標"],
            [/Commits/, "提交"],
            [/New Issue/, "新建議題"],
            [/Issues/, "議題"],
            [/Pull requests/, "拉取請求"],
            [/Actions/, "操作"],
            [/Projects/, "專案"],
            [/Packages/, "軟體包"],
            [/Security Overview/, "安全概述"],
            [/Security Policy/, "安全政策"],
            [/Security Advisories/, "安全公告"],
            [/Dependabot alerts/, "Dependabot 警報"],
            [/Pulse/, "統計"],
            [/Contributors to/, "貢獻者 ·"],
            [/Community/, "社群"],
            [/Traffic/, "流量"],
            [/Commit Activity/, "提交活動"],
            [/Code frequency/, "程式碼頻率"],
            [/Dependencies/, "依賴關係"],
            [/Network Dependents/, "網路依賴者"],
            [/Network Graph/, "網路圖"],
            [/Revisions/,"修訂"],
            [/Stargazers/, "追星者"],
            [/Forks/, "復刻"],
            [/Draft Advisory/, "安全公告草案"],
            [/Code scanning alerts/, "程式碼掃描警報"],
            [/Repository topics/, "倉庫主題"],
            [/Scheduled reminders/, "定時提醒"],
            [/Sponsorship Log/, "贊助日誌"],
            [/OAuth applications/, "OAuth 應用"],
            [/People · Pending Collaborators/, "成員 · 待定協作者"],
            [/People/, "成員"],
            [/Outside collaborators/, "外部協作者"],
            [/Discussions/, "討論"],
            ["_regexp_end", "end"]
        ],
    },

    "pubilc": { // 公共區域翻譯
        "static": { // 靜態翻譯
            //
            "No server is currently available to service your request.": "當前伺服器無法為您的請求提供服務。",
            "This page is taking too long to load.": "此頁面載入時間過長。",
            "Sorry about that. Please try refreshing and contact us if the problem persists.": "對此我們很抱歉。請嘗試重新整理，如果問題仍然存在，請聯絡我們。",
            "Contact Support": "聯絡 GitHub Support",
            "GitHub Status": "GitHub 狀態",

            // 頂部欄 (未登入)
            "Why GitHub?": "為何選擇 GitHub？",
            "Team": "團隊",
            "Enterprise": "企業",
            // "Pricing": "價格",
            "Search": "搜尋",
            "Sign in": "登入",
            "Sign up": "註冊",



            // 搜尋欄
            "Search or jump to…": "搜尋或跳轉到…",
            "In this repository": "當前倉庫",
            "In this organization": "當前組織",
            "In this user": "當前使用者",
            "All GitHub": "整個 GitHub",
            "Jump to": "跳轉到",

            // 頂部欄 & 小屏左上角下拉欄 (已登入)
            "Dashboard": "儀表板",
            //"Pull requests": "拉取請求"  // 使用 Selector 規則翻譯
            "Issues": "議題",
            "Marketplace": "應用商城",
            "Explore": "探索",
            "Codespaces": "程式碼空間",
            "Sponsors": "贊助",

            "Overview": "概況",
            "Repositories": "倉庫",
            "Projects": "專案",
            "Packages": "軟體包",
            "Sponsoring": "贊助",


            // 右上角通知按鈕提示
            "You have no unread notifications": "您沒有未讀通知",
            "You have unread notifications": "您有未讀通知",

            // 右上角新建按鈕下拉選單
            "New repository": "新建倉庫",
            "Import repository": "匯入倉庫",
            "New gist": "新建程式碼片段",
            "New organization": "新建組織",
            "New project": "新建專案",

            // 右上角個人圖示下拉選單
            "Signed in as": "登入身份為",
            "Set status": "狀態設定",
            "Your profile": "我的個人資料",
            "Your sponsorships": "我的捐助者",
            "Your repositories": "我的倉庫",
            "Your codespaces": "我的程式碼空間",
            "Your organizations": "我的組織",
            "Your enterprises": "我的企業",
            "Your projects": "我的專案",
            "Your discussions": "我的討論",
            "Your stars": "我的標星頁面",
            "Your gists": "我的程式碼片段",
            "Upgrade": "升級",
            "Feature preview": "功能預覽",
                // 對話方塊
                "Enable": "啟用",
                "Disable": "禁用",
            "Help": "幫助",
            "Settings": "設定",
            "Sign out": "退出",

            "Stars": "星標",


            "Prev": "上一頁",
            "Previous": "上一頁",
            "Next": "下一頁",


            // 狀態設定對話方塊
            // 出現位置: 個人資料頁, Gist 個人主頁, 倉庫頁右上角個人圖示下拉選單
            "Edit status": "編輯狀態",
            "What's happening?": "發生了什麼？",
            "Busy": "繁忙中",
            "I may be slow to respond.": "我的反應可能比較慢。",
            "When others mention you, assign you, or request your review, GitHub will let them know that you have limited availability.": "當其他人提及您、指派您或請求您進行評論時，GitHub 會告知他們您的很忙。",
            "Clear status": "清除狀態",
            "Never": "永不",
            "Visible to": "可見",
                "Everyone": "所有人",
                "Your status will be visible to everyone": "所有人都可以看到您的狀態",
                // [/Only members of ([^ ]+) will be able to see your status./, "只有 $1 的成員才能看到您的狀態。"],
            "Keep this status until you clear your status or edit your status.": "保持此狀態直到您清除或編輯您的狀態。",
            "in 30 minutes": "30 分鐘",
            "in 1 hour": "1 小時",
            "in 4 hours": "4 小時",
            "today": "今天",
            "this week": "本週",
            "Filter emoji": "過濾表情符號",

            // 底部條
            "Terms": "服務條款",
            "Privacy": "隱私",
            "Security": "安全",
            "Status": "狀態",
            "Docs": "文件",

            "Contact GitHub": "聯絡 GitHub",
            "Pricing": "價格",
            "Training": "培訓",
            "Shop": "商店",
            "Blog": "部落格",
            "About": "關於",

            // 評論編輯器翻譯
            "Write": "撰寫",
            "Preview": "預覽",
                "There is no content to preview.": "沒有內容可供預覽。",
                "This file is empty.": "這是一個空檔案。",
            "Leave a comment": "發表評論",
            "Write a reply": "發表回覆", // 具體討論頁
            "Write a comment": "發表回覆", // 具體討論頁
            "Suggest an answer": "建議一個答案", // 具體討論頁
            "Ask a question, start a conversation, or make an announcement": "提出問題、開始討論或釋出公告", // 新建討論
            "Nothing to preview": "沒有什麼可預覽",
            "This repository has been archived.": "此倉庫已存檔。", // 已存檔倉庫 某個提交的評論框
            // 取消按鈕 提醒資訊
            "Are you sure you want to discard your unsaved changes?": "您確定要放棄未儲存的更改嗎？",


            "Add a suggestion, <Ctrl+g>": "新增建議，<Ctrl+g>", // 拉取請求 程式碼審查 回覆對話方塊
            "Add heading text": "新增標題文字",
            "Add bold text, <Ctrl+b>": "新增粗體文字 <Ctrl+b>",
            "Add italic text, <Ctrl+i>": "新增斜體文字 <Ctrl+i>",
            "Add a quote, <Ctrl+Shift+.>": "新增引用 <Ctrl+Shift+.>",
            "Add code, <Ctrl+e>": "新增程式碼 <Ctrl+e>",
            "Add a link, <Ctrl+k>": "新增連結 <Ctrl+k>",
            "Add a bulleted list, <Ctrl+Shift+8>": "新增無序列表 <Ctrl+Shift+8>",
            "Add a numbered list, <Ctrl+Shift+7>": "新增有序列表 <Ctrl+Shift+7>",
            "Add a task list, <Ctrl+Shift+l>": "新增任務列表 <Ctrl+Shift+l>",
            "Directly mention a user or team": "直接提及使用者或團隊",
            "Attach an image or video": "附加圖片或影片", // 小屏
            "Reference an issue, pull request or discussion": "引用議題，拉取請求或討論",
            "Reference an issue, pull request, or discussion": "引用議題，拉取請求或討論",
            "Reference an issue or pull request": "引用議題或拉取請求",
            "Add saved reply": "新增快捷回覆",
                "Select a reply": "選擇回覆",
                "Filter replies…": "篩選回覆",
                "Default replies": "預設快捷回覆",
                "Duplicate issue": "重複議題",
                // "Duplicate of #": "重複 #",
                "Duplicate pull request": "重複拉取請求",
                // "Duplicate of #": "重複 #",
                "Create a new saved reply…": "建立新快捷回覆…",

            // 小屏 插入連結 對話方塊
                "Insert Link": "插入連結",
                "Link Text": "連結文字",
                "Add": "新增",

            "Attach files by dragging & dropping, selecting or pasting them.": "透過拖放，選擇或貼上來附加檔案。",
            "Attach files by selecting or pasting them.": "透過選擇或貼上來附加檔案。",
            "Styling with Markdown is supported": "支援 Markdown 功能哦。",
            "Uploading your files…": "正在上傳您的檔案…",

            "Close issue": "關閉議題", // issue頁 評論框
            "Close with comment": "評論並關閉議題", // issue頁 評論框
            "Close pull request": "關閉拉取請求", // pull頁 評論框
            "Comment": "評論",
            "Submit new issue": "提交新議題",
            "Comment on this commit": "評論",
            "Close and comment": "提交併關閉",
            "Reopen and comment": "提交併重新開啟",
            "Reopen issue": "重新開啟議題", // 具體議題
            "Reopen pull request": "重新開啟拉取請求", //具體拉取請求
            "Add single comment": "評論", // 具體提交頁 進行某條程式碼評論
            "Reply": "回覆", // 具體討論頁
            "Answer": "答覆", // 具體討論頁
            "Start discussion": "開始討論", // 新建討論
            "Update": "更新", // 新建討論
            "discussion": "討論", // 新建討論
            "discussions": "討論", // 新建討論

            // 全域性快捷鍵對話方塊 - 快捷鍵 ? 開啟
            "Keyboard shortcuts": "鍵盤快捷鍵",
            "Site-wide shortcuts": "全站快捷鍵",
                "Open command palette": "開啟命令面板",
                "Open command palette in command mode": "在命令模式下開啟命令面板",
                "Focus search bar": "聚焦搜尋欄",
                "Go to notifications": "跳轉到通知",
                "Go to dashboard": "跳轉到儀表板",
                "Bring up this help dialog": "彈出這個幫助對話方塊",
                "Move selection down": "向下移動選擇",
                "Move selection up": "向上移動選擇",
                "Toggle selection": "切換選擇",
                "Open selection": "開啟選擇",
            "View all keyboard shortcuts": "檢視所有鍵盤快捷鍵",

            // 命令面板 - ctrl k 或 ctrl alt k 開啟
                // Tip
                    "Go to your accessibility settings to change your keyboard shortcuts": "跳轉到您的無障礙設定，以更改您的鍵盤快捷鍵",
                    "to search discussions": "搜尋討論", // 鍵入 #
                    "to search issues": "搜尋議題", // 鍵入 #
                    "to search pull requests": "搜尋拉取請求", // 鍵入 #
                    "to search projects": "搜尋專案", // 鍵入 !
                    "to search people and organizations": "搜尋成員和組織", // 鍵入 @
                    "to activate command mode": "啟用命令模式", // 鍵入 >
                    "Type is:issue to filter to issues": "鍵入 is:issue 以篩選議題",
                    "Type is:pr to filter to pull requests": "鍵入 is:pr 以篩選拉取請求",
                    "Type is:open to filter to open content": "鍵入 is:open 以篩選開啟的內容",
                    "Type author:@me to search your content": "鍵入 author:@me 以篩選您的內容",
                    "Type": "請鍵入",
                    "for help and tips": "尋求幫助和提示", // 鍵入 ?

                "Search or jump to...": "搜尋或跳轉到…",
                "Clear": "清除",
                // "for issues and pull requests,": "議題和拉取請求，",
                // "for issues, pull requests, and projects,": "議題、拉取請求和專案，",
                // "for files, and": "檔案，",
                // "for commands, and": "命令，",
                // "for commands": "命令，",
                // "for help": "幫助",

                "Pages": "GitHub Pages",
                "Notifications": "通知",
                "Discussions": "討論",
                "Actions": "操作",
                "Insights": "洞察",
                "Organizations": "組織",
                "Users": "使用者",
                "to jump to": "去跳轉",
                "to search": "去搜索",

                "Top result": "最佳結果",
                "No results matched your search": "沒有與您的搜尋相符的結果",
                // [/in ([\w]+/[\w]+)/, "在 $1"],

                // # 模式
                "Search issues and pull requests": "搜尋議題和拉取請求",
                "Search issues, pull requests, discussions, and projects": "搜尋議題、拉取請求、討論和專案",
                "Issues, pull requests, and discussions": "議題、拉取請求和討論",

                // ! 模式
                "Search projects": "搜尋專案",

                // @ 模式
                "Search or jump to a repository": "搜尋或跳轉到倉庫",
                "Search or jump to a user, organization, or repository": "搜尋或跳轉到使用者、組織或倉庫",

                // / 檔案模式
                "Search files": "搜尋檔案",
                "Files": "檔案",

                // > 命令模式
                "Run a command": "執行命令",
                "Run command": "執行命令",
                // "Commands": "命令",
                "Global Commands": "全域性命令",
                "New issue": "新建議題",
                "New file": "新建檔案",
                "Switch theme to default dark": "切換主題為 暗 - 預設",
                "Switch theme to dark dimmed": "切換主題為 昏暗",
                "Switch theme to default light": "切換主題為 亮 - 預設",
                "Switch theme to dark high contrast": "切換主題為 暗 - 高對比",
                "Switch theme settings to sync with system": "切換主題為 與系統同步",

                // ? 模式
                "Modes": "模式",
                "Search for": "搜尋",
                "across all of GitHub": "在整個 GitHub中",
                "issues, pull requests, discussions,": "議題、拉取請求、討論",
                "organizations, repositories,": "組織、倉庫",
                "projects": "專案",
                "files": "檔案",
                "issues": "議題",
                "pull requests": "拉取請求",
                "organizations": "組織",
                "repositories": "倉庫",
                "users": "使用者",
                "Activate": "啟用",
                "command mode": "命令模式",

                "Use filters in issues, pull requests, discussions, and projects": "在議題題、拉取請求、討論和專案中使用過濾器",
                "Search your issues, pull requests, and discussions": "搜尋您的議題、拉取請求和討論",
                "Filter to pull requests": "篩選拉取請求",
                "Filter to issues": "篩選議題",
                "Filter to discussions": "篩選討論",
                "Filter to projects": "篩選專案",
                "Filter to open issues, pull requests, and discussions": "篩選開啟的議題、拉取請求和討論",

            // 公共詞 高頻詞
            "Followers": "關注者",
            "Follow": "關注",
            "Unfollow": "取消關注",
            "Star": "星標",
            // "Unstar": "已加星標",
            "Starred": "已加星標",
            "Fork": "復刻",
            "Save": "儲存",
            "Updating": "更新中",
            "Delete": "刪除",
            "Cancel": "取消",
            "Edit": "編輯",
            "Added on": "添加於",
            "Loading...": "載入中...",
            "Copied!": "複製成功!",
            "Copy to clipboard": "複製到剪下板",

            "and": "和",
            "or": "或",
            "to": "到",
            "by": "由",
            "on": "於",

            "Learn more": "瞭解更多",
            "Learn More": "瞭解更多",
            "Learn more.": "瞭解更多。",
            ",": "，",
            ".": "。",

            // 名詞
            "Code": "程式碼",
            "Pull requests": "拉取請求",
            "Collaborators": "協作者",
            "collaborators": "協作者",

            // 相對時間
            "just now": "剛剛",
            "now": "當前",
            "yesterday": "昨天",
            "last month": "上個月",

            // 狀態詞
            "Verified": "已驗證",
            "Partially verified": "部分驗證",
            "Unverified": "未驗證",

            // 郵箱驗證提示
            "Please verify your email address to access all of GitHub's features.": "請驗證您的電子郵箱地址以便開啟所有 GitHub 功能。",
            "Configure email settings": "修改電子郵箱設定",
            "Your email was verified.": "您的電子郵箱地址驗證成功！",
        },
        "regexp": [ // 正則翻譯
            /**
             * 匹配時間格式
             *
             * 月 日 或 月 日, 年
             * Mar 19, 2015 – Mar 19, 2016
             * January 26 – March 19
             * March 26
             *
             * 不知道是否穩定, 暫時先試用著. 2016-03-19 20:46:45
             *
             * 更新於 2021-10-04 15:19:18
             * 增加 帶介詞 on 的格式，on 翻譯不體現
             * on Mar 19, 2015
             * on March 26
             *
             * 更新於 2021-10-10 13:44:36
             * on 星期(簡寫), 月 日 年  // 個人訪問令牌 有效期
             * on Tue, Nov 9 2021
             *
             * 2021-10-19 12:04:19 融合更多規則
             *
             * 4 Sep
             * 30 Dec 2020
             *
             * on 4 Sep
             * on 30 Dec 2020
             *
             * 2021-11-22 12:51:57 新增 格式
             *
             * 星期(全稱), 月 日, 年 // 倉庫-->洞察-->流量 圖示標識
             * Sunday, November 14, 2021
             *
             * Tip:
             * 正則中的 ?? 前面的字元 重複0次或1次
             * 正則中的 ?: 非捕獲符號(即關閉圓括號的捕獲能力) 使用方法 (?: 匹配規則) -->該匹配不會被捕獲 為 $數字
             */
            [/(?:on |)(?:(\d{1,2}) |)(?:(Sun(?:day)?|Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?), |)(?:(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May(?:)??|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(?:,? |$))(\d{4}|)(\d{1,2}|)(?:,? (\d{4})|)/g, function (all, date1, week, month, year1, date2, year2) {
                var weekKey = {
                    "Sun"  : "週日",
                    "Mon"  : "週一",
                    "Tue"  : "週二",
                    "Wed"  : "週三",
                    "Thu"  : "週四",
                    "Fri"  : "週五",
                    "Sat"  : "週六",
                };
                var monthKey = {
                    "Jan": "1月",
                    "Feb": "2月",
                    "Mar": "3月",
                    "Apr": "4月",
                    "May": "5月",
                    "Jun": "6月",
                    "Jul": "7月",
                    "Aug": "8月",
                    "Sep": "9月",
                    "Oct": "10月",
                    "Nov": "11月",
                    "Dec": "12月"
                };
                var date = date1 ? date1 : date2;
                var year = year1 ? year1 : year2;
                return (year ? year + '年' : '') + monthKey[month.substring(0, 3)] + (date ? date + '日' : '') + (week ? ', ' + weekKey[week.substring(0, 3)] : '');
            }],
            /**
             * 相對時間格式處理
             *
             * 更新於 2021-11-21 16:47:14
             * 1. 新增 字首詞
             *    over xxx ago // 里程碑頁面 最後更新時間
             *    about xxx ago // 里程碑頁面 最後更新時間
             *    almost xxx ago // 里程碑頁面 最後更新時間
             *    less than xxx ago // 匯出帳戶資料
             * 2. xxx之內的相對時間格式
             *  in 6 minutes // 拉取請求頁面
             *
             * 更新於 2021-11-22 11:54:30
             * 1. 修復 Bug: 意外的擴大了匹配範圍(不帶字首與字尾的時間) 干擾了帶有相對時間的其他規則
             *  7 months
             */
            [/(?:(over|about|almost|in) |)(an?|\d+) (second|minute|hour|day|month|year)s?( ago|)/, function (all, prefix, d, t, suffix) {
                if (d[0] === 'a') {
                    d = '1';
                } // a, an 修改為 1

                var dt = {second: '秒', minute: '分鐘', hour: '小時', day: '天', month: '個月', year: '年'};

                if (suffix) {
                    return (prefix === 'about' || prefix === 'almost' ? '大約 ' : prefix === 'less than' ? '不到 ' : '') + d + ' ' + dt[t] + (prefix === 'over' ? '多之前' : '之前');
                } else {
                    return (prefix === 'in' ? d + ' ' + dt[t] + '之內' : all);
                }
            }],
            /**
             * 匹配時間格式 2
             *
             * in 5m 20s
             */
            [/^(?:(in) |)(?:(\d+)m |)(\d+)s/,function (all, prefix, minute, second) {
                all = minute ? minute + '分' + second + '秒' : second + '秒';
                return (prefix ? all + '之內' : all);
            }],
            [/Only members of ([^ ]+) will be able to see your status./, "只有 $1 的成員才能看到您的狀態。"],
        ],
    },

    "page-dashboard": { // 已登入的首頁 - 儀表板(含組織)
        "static": { // 靜態翻譯
            // 新手幫助
            "Learn Git and GitHub without any code!": "瞭解 Git 和 GitHub 無需任何程式碼！",
            "Using the Hello World guide, you’ll create a repository, start a branch,": "使用 Hello World 指南，您將建立一個倉庫，開始一個分支，",
            "write comments, and open a pull request.": "寫評論，並建立一個拉取請求。(教程內容就不翻譯了...)",
            "Let's get started!": "讓我們開始吧！",
            "Hide this notice forever": "永久的隱藏該資訊",

            "Welcome to GitHub! What’s next?": "歡迎來到 GitHub！下一步幹什麼？",
            "Create a repository": "建立一個倉庫",
            "Tell us about yourself": "介紹一下您自己",
            "Browse interesting repositories": "瀏覽有趣的倉庫",
            "on Twitter": "在 Twitter 上",

            "You don’t have any repositories yet!": "您目前還沒有任何倉庫！",
            "Create your first repository": "建立您的第一個倉庫",
            "or": "或者",
            "Learn more about Git and GitHub": "學習更多關於 Git 和 GitHub 知識",

            // 組織
            // [/You’re an owner of the ([^ ]+) organization!/, "您是 $1 組織的所有者！"],
            // [/Create a repository for ([^ ]+)/, "為 $1 建立倉庫"],
            "View and create teams": "檢視並建立團隊",
            "See all owners": "檢視全部所有者",
            // [/Edit ([^ ]+)’s settings/, "編輯 $1 的設定"],
            "Return to your personal dashboard": "返回到您的個人儀表板",
            // "Learn more about Git and GitHub": "瞭解更多關於 Git 和 GitHub 的資訊",

            // 已有倉庫的專案
            // 左側欄
            "View organization": "檢視組織", // 組織
            "Browse organization's repositories": "瀏覽組織的倉庫", // 組織
            "Recent Repositories": "近期倉庫",
            "New": "新建",
            "Find a repository…": "搜尋倉庫…",
            "Show more": "顯示更多",
            "Your teams": "您的團隊",
            "Find a team…": "搜尋團隊…",
            "Recent activity": "近期活動",
                "When you take actions across GitHub, we’ll provide links to that activity here.": "當您在 GitHub 上採取行動時，我們會在這裡提供該活動的連結。", // 組織

            "Public": "公共",
            "Private": "私有",
            "Public archive": "公共存檔",
            "Private archive": "私有存檔",

            // 中間欄
            "The home for all developers — including you.": "所有開發者的家園--包括您。",
            "Welcome to your personal dashboard, where you can find an introduction to how GitHub works, tools to help you build software, and help merging your first lines of code.": "歡迎來到您的個人儀表板，在這裡您可以看到關於GitHub工作原理的介紹，幫助您構建軟體的工具，以及幫助您合併您的第一行程式碼。",
            "Start writing code": "開始編寫程式碼",
                "You're seeing this because you haven't created a repository in a while.": "您看到這個是因為您有一段時間沒有建立倉庫了。",
                "Remove from dashboard": "從儀表板中刪除",
            "Tools of the trade": "貿易工具",
                "You're seeing this because you haven't opened a pull request in a while.": "您看到這個是因為您有一段時間沒有開啟拉取請求了。",
                "Write code in your web browser": "在您的網路瀏覽器中編寫程式碼",
                    "Use": "使用",
                    "the github.dev web-based editor": "基於github.dev的網路編輯器",
                    "from your repository or pull request to create and commit changes.": "從您的倉庫或拉取請求中建立和提交更改。",
            "Install a powerful code editor": "安裝一個強大的程式碼編輯器",
                "is a multi-platform code editor optimized for building and debugging software.": "是針對構建和除錯軟體進行了最佳化的多平臺程式碼編輯器。",
            "Set up your local dev environment": "設定本地開發環境",
                "set up Git": "設定 Git",
                ", simplify your dev workflow with": "，簡化您的開發工作流程，使用",
                ", or": "，或",
                "bring GitHub to the command line": "將GitHub 引入命令列",
            "Get started on GitHub": "開始使用 GitHub",
                "You're seeing this because you haven't used GitHub's core features, yet.": "您看到這個是因為您有一段時間沒有使用過 GitHub 的核心功能了。",
            "About version control and Git": "關於版本控制和 Git",
            "Learn about the version control system, Git, and how it works with GitHub.":"瞭解版本控制系統、Git 以及它如何與 GitHub 一起工作。",
            "The GitHub Flow":"GitHub 流程",
            "Adopt GitHub's lightweight, branch-based workflow to collaborate on projects.":"採用 GitHub 的輕量級、基於分支的工作流程來協作處理專案。",


            "One moment please...": "稍等一會兒...",
            "Loading activity...": "載入活動...",
            "All activity": "所有活動",

            "Following": "關注中",
                // 動態 狀態詞
                "starred": "星標了",
                "created": "建立了",
                "forked from": "復刻自",
                "generated from": "建立自",
                "forked": "復刻了",
                "from": "來自",
                "for": "",
                "pushed to": "推送到",
                "released": "釋出了",
                "started following you": "開始關注了您",
                "started following": "開始關注了",
                "Updated": "更新於",
                "created a repository": "建立了倉庫",
                "Forked to": "復刻為",
                "of": "",
                "made": "將",
                "public": "設為公共",
                "committed": "提交於",

                "Read more": "閱讀更多內容",

                "More": "更多",
                "Loading more…": "載入更多…",

                "Subscribe to your news feed": "訂閱您的新聞提要",
                "Subscribe to the": "訂閱", // 組織
                "organization news feed": "組織的新聞提要", // 組織

            "For you": "為您",
                "Welcome to the new feed!": "歡迎來到新的提要!",
                "We’re updating the cards and ranking all the time, so check back regularly. At first, you might need to follow some people or star some repositories to get started": "我們一直在更新卡片和排名，所以請定期檢視。一開始，您可能需要關注一些人或標星一些倉庫才能開始",
                "Send feedback": "傳送反饋",

                "published a release": "釋出發行版",
                "forked a repository": "復刻倉庫",
                "starred a repository": "星標倉庫",
                "followed": "關注了",
                "contributed to": "貢獻給",
                // [/You're seeing this because you collaborated with ([^ ]+)/, "您看到這個是因為您與 $1 有過合作"],

                "Contributors": "貢獻者",
                "Report": "舉報",
                "Recommended for you": "為您推薦",
                    "You're seeing this because of your activity.": "您看到這個是因為您的活動。",
                    // [/You're seeing this because you starred ([^ ]+)/, "您看到這個，是因為您星標了 $1"],
                "Recommended based on people you follow": "根據您關注的人推薦",
                "has a new discussion in": "有一條新討論，在",
                "Join discussion": "參與討論",
                "Popular among": "很受歡迎",
                "people you follow": "在您關注的人中",
                "Sponsor": "贊助",

            // 右側欄
            "Latest changes": "最新變化",
            "View changelog →": "檢視更新日誌 →",
            "Explore repositories": "探索倉庫",
            "Explore more →": "探索更多 →",

            // 使用者 浮動資訊卡
                "Member of": "隸屬組織",
                // [/, and (\d+) more/, "，以及其他 $1 個組織"],

            // 組織  浮動資訊卡
                // [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
                // [/(\d+) members?/, "$1 個成員"],

           //
            "Add to list": "新增到清單",
            "Lists": "清單",
            "You don't have any lists yet.": "您尚無任何清單。",
            "Create list": "建立清單",
                "Create a list to organize your starred repositories.": "建立一個清單來組織您的星標倉庫。",
                "⭐️ Name this list": "⭐️ 清單名稱",
                "Write a description": "簡單描述",
                "Lists are currently in beta.": "清單目前處於測試階段。",
                "Share feedback and report bugs.": "分享反饋意見和報告錯誤。",
                "Creating...": "建立中...",

            "Switch dashboard context": "切換預設身份", // 組織
            "Manage organizations": "管理組織", // 組織
            "Create organization": "建立組織", // 組織

            // 首次加入組織通知
            "You’ve been added to the": "您已經被新增到",
            "organization!": "組織！",
            "Here are some quick tips for a first-time organization member.": "以下是首次加入組織的一些提示。",
            "Use the switch context button in the upper left corner of this page to switch between your personal context (": "使用頁面左上角的切換身份按鈕，您可以在(",
            ") and organizations you are a member of.": ")和組織身份之間進行切換。",
            "After you switch contexts you’ll see an organization-focused dashboard that lists out organization repositories and activities.": "當您切換身份，您會看到一個組織為中心的頁面，其中列出了組織庫和活動。",

            // 快捷鍵
            "Dashboards": "儀表板",
            "Go to your issues": "跳轉到您的議題",
            "Go to your pull requests": "跳轉到您的拉取請求",
        },
        "regexp": [ // 正則翻譯
            [/, and (\d+) more/, "，以及其他 $1 個組織"], // 使用者 浮動資訊卡
            [/(\d+) repositor(y|ies)/, "$1 個倉庫"], // 組織  浮動資訊卡
            [/(\d+) members?/, "$1 個成員"], // 組織  浮動資訊卡
            [/is being deleted./, "正在被刪除。"], // 倉庫 組織被刪除
            [/Your repository \"([^ ]+)\" was successfully deleted./, "您的倉庫 “$1” 已成功刪除。"], // 倉庫刪除
            [/(\d+) releases?/, "$1 個發行版"],
            [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
            [/(\d+) members?/, "$1 個成員"],
            [/(\d+) followers?/, "$1 個關注者"],
            [/(\d+) commits? to/, "$1 個提交到"],
            [/(\d+) more commits? »/, "$1 個更多提交到"],
            [/(\d+) issues? needs? help/, "$1 個議題需要幫助"],
            [/Updated/, "更新於"],
            [/You’re an owner of the ([^ ]+) organization!/, "您是 $1 組織的所有者！"], // 組織
            [/Create a repository for ([^ ]+)/, "為 $1 建立倉庫"], // 組織
            [/Edit ([^ ]+)’s settings/, "編輯 $1 的設定"], // 組織
            [/You're seeing this because you collaborated with ([^ ]+)/, "您看到這個是因為您與 $1 有過合作"],
            [/You're seeing this because you starred ([^ ]+)/, "您看到這個，是因為您星標了 $1"],
            [/You're seeing this because you follow ([^ ]+)/, "您看到這個，是因為您復刻了 $1"],
        ],
    },

    "page-profile": { // 個人首頁 (含組織)
        "static": { // 靜態翻譯
            // 個人首頁 公關部分
                // 左側使用者資訊欄
                "Change your avatar": "修改頭像",
                "You have blocked this user": "您已拉黑此使用者",
                "Follow": "關注",
                "Sponsor": "贊助",
                "follower": "關注者",
                "followers": "關注者",
                "following": "關注",
                "Joined": "加入於",
                "Achievements": "成就",
                "Highlights": "高光時刻",
                "Organizations": "組織",
                "Block or Report": "拉黑或舉報",
                "Unblock or report user": "取消拉黑或舉報",

                // 編輯個人資料
                "Edit profile": "編輯個人資料",
                "Name": "名稱",
                "Bio": "個人簡介",
                "Add a bio": "添加個人簡介",
                    "You can": "您可",
                    "@mention": "@使用者名稱或組織名",
                    "other users and organizations to link to them.": "連結到其他使用者和組織。",
                "Company": "公司",
                "Location": "位置",
                "Website": "網站",
                "Twitter username": "Twitter 使用者名稱",

                // 成就浮動介面
                "Arctic Code Vault Contributor": "北極程式碼庫貢獻者",
                "contributed code to several repositories in the": "為多個倉庫貢獻了程式碼，在",
                ", and more!": "，更多！",

                // 拉黑 & 舉報使用者對話方塊
                // [/Block or report ([^ ]+)/, "拉黑或舉報 $1"],
                "Block user": "拉黑使用者",
                "Prevent this user from interacting with your repositories and sending you notifications. Learn more about": "防止該使用者與您的倉庫互動並向您傳送通知。瞭解更多關於",
                "blocking users": "拉黑使用者",

                "Unblock user": "取消拉黑",
                "Allow this user to interact with your repositories and send you notifications. Learn more about": "允許該使用者與您的倉庫互動並向您傳送通知。瞭解更多關於",

                "Report abuse": "舉報濫用",
                "Contact GitHub support about this user’s behavior. Learn more about": "就該使用者的行為聯絡 GitHub 支援部門。瞭解更多關於",
                "reporting abuse": "舉報濫用",

            // 概述標籤卡 即主頁 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "Customize your pins": "自定義置頂",
                "Customize your public pins": "自定義公共置頂", // 組織頁
                // 設定置頂專案對話方塊
                "Edit pinned public items": "設定置頂公共專案",
                "Select up to six public repositories or gists you'd like to show.": "最多選擇 6 個要顯示的公共倉庫或程式碼片段。",
                "Select up to six public repositories you'd like to show.": "最多選擇 6 個要顯示的公共倉庫。", // 組織頁
                "Filter repositories and gists": "篩選倉庫和程式碼片段",
                "Filter repositories": "篩選倉庫", // 組織頁
                "Show:": "顯示：",
                "Save pins": "儲存置頂",
                // 頂部提醒
                "Your pins have been updated. Drag and drop to reorder them.": "您的置頂已更新。拖放來重新排列它們。",
                // 拖拽排序提醒
                "Order updated.": "置頂已更新。",

                "Pinned": "已置頂",
                "Popular repositories": "流行的倉庫",

                // 公共詞
                "Public": "公共",
                "Private": "私有",
                "Public archive": "公共存檔",
                "Private archive": "私有存檔",
                "Public template": "公共模板",

                "Learn how we count contributions": "瞭解我們如何計算貢獻",
                "Less": "更少",
                "More": "更多",
                "Contribution settings": "貢獻設定",
                // 貢獻設定下拉選單
                "Private contributions": "私人貢獻",
                "Turning on private contributions will show anonymized private activity on your profile.": "開啟私人貢獻則將在您的個人資料上顯示匿名的私人活動。",
                "Visitors will now see your public and anonymized private contributions.": "訪客現在將看到您的公開和匿名的私人貢獻。",
                "Turning off private contributions will show only public activity on your profile.": "關閉私人貢獻則將僅在您的個人資料中顯示公開活動。",
                "Visitors will now see only your public contributions.": "訪客現在將只能看到您的公開貢獻。",
                "Activity overview": "活動概況",
                "Turning off the activity overview will hide the section on your profile.": "關閉活動概況則將隱藏您的個人資料中的部分內容。",
                "The 'Activity overview' section will no longer appear on your profile.": "“活動概況” 部分將不再出現在您的個人資料中。",
                "Turning on the activity overview will show an overview of your activity across organizations and repositories.": "開啟活動概況將顯示跨組織和倉庫的活動概況。",
                "Others will now see 'Activity overview' when they view your profile.": "其他人在檢視您的資料時，現在會看到 “活動概況”。",

                "Contribution activity": "貢獻活動",

                "Search by name": "搜尋組織名",
                "Contributed to": "貢獻給了",
                "Activity in": "活動在",
                "No activity overview available.": "沒有可用的活動概況。",

                "open": "開啟",
                "closed": "已關閉",
                "merged": "已合併",
                "pull request": "拉取請求",

                "commits": "次提交",
                "comments": "次評論",
                "Commits": "提交",
                "Code review": "程式碼審查",
                "Built by": "構建者",

                "Created their first repository": "建立了他們的第一個倉庫",
                "Created an issue in": "建立一個議題在",
                "Created a pull request in": "建立一個拉取請求在",
                "First repository": "第一個倉庫",
                "First pull request": "第一次拉取請求",
                "First issue": "第一次議題",
                "Opened their first issue on GitHub in": "打開了他們第一個議題",
                "Opened their first pull request on GitHub in": "打開了他們第一個拉取請求",
                "Joined GitHub": "剛加入 GitHub",
                "Joined the": "加入",
                "organization": "組織",
                //"Show more activity": "顯示更多",
                "Show more activity": "載入更多動態",
                "Loading...": "載入中...",

                "Seeing something unexpected? Take a look at the": "看到了一些意想不到的東西？請看一下",
                "GitHub profile guide": "GitHub 個人資料指南",

            // 倉庫標籤卡 ?tab=repositories >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                // "Search repositories…": "搜尋這些查庫…",
                // "Search starred repositories…": "搜尋點讚的倉庫…",

                // 搜尋, 篩選 & 排序工具欄
                "Find a repository…": "搜尋倉庫…",
                // "Type": "型別", 與全域性衝突 使用 Selector 規則翻譯
                    // 下拉選單
                    "Select type": "選擇型別",
                    "All": "全部",
                    "Public": "公共",
                    "Private": "私有",
                    "Sources": "原始碼",
                    "Forks": "復刻",
                    "Archived": "存檔",
                    "Mirrors": "映象",
                    "Templates": "模板",
                "Language": "語言",
                    // 下拉選單
                    "Select language": "選擇語言",
                    "All languages": "所有語言",
                "Sort": "排序",
                    // 下拉選單
                    "Select order": "選擇排序",
                    "Last updated": "最近更新",
                    // "Name": "倉庫名",
                    // "Recently starred": "最近星標",
                    // "Recently active": "最近活躍",
                    // "Most stars": "最多星標",
                    // "Unstar": "取消星標",
                "New": "新建",

                // 篩選結果
                "result for": "個結果在",
                "results for": "個結果在",
                    "public": "公共",
                    "private": "私有",
                    "source": "原始碼",
                    "forked": "復刻",
                    "archived": "存檔",
                    "mirror": "映象",
                    "template": "模板",
                "repositories matching": "倉庫中匹配了",
                "result for repositories matching": "個結果在倉庫中匹配了",
                "results for repositories matching": "個結果在倉庫中匹配了",
                "repositories sorted by": "倉庫，排序按",
                "written in": "，使用語言",
                "results for repositories written in": "個結果在倉庫中使用語言",
                "star matching": "個星標匹配", //?tab=stars
                "stars matching": "個星標匹配", //?tab=stars
                "star written in": "個星標使用語言", //?tab=stars
                "stars written in": "個星標使用語言", //?tab=stars
                "sorted by": "，排序按",
                    "last updated": "最近更新",
                    "name": "倉庫名",
                    "stars": "星標",

                "Clear filter": "清除篩選",

                // [/([^ ]+) doesn’t have any repositories that match./, "$1 沒有任何匹配的倉庫"],

                // 專案 狀態詞
                "Updated": "更新於",
                "Forked from": "復刻自",

                // 曲線圖提示
                "Past year of activity": "過去一年的活動",

            // 專案標籤卡 ?tab=projects >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "Welcome to the all-new projects": "歡迎訪問全新的專案",
                "Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.": "構建像電子表格一樣的專案表，給您一個實時的畫布來對議題和拉取請求進行篩選、排序和分組。透過自定義欄位和儲存的檢視，使它們符合您的需要。",

                "Sort by": "排序方式",
                    // 排序下拉選單
                    "Newest": "最新",
                    "Oldest": "最早",
                    "Recently updated": "近期更新內容",
                    "Least recently updated": "最近最少更新",
                // 清除篩選
                "Clear current search query and sorts": "清除當前的搜尋查詢和分類",

                "Plan and track work across repositories with custom fields and multiple views": "透過自定義欄位和多個檢視來計劃和跟蹤整個倉庫的工作",
                "Kanban-style project board": "看板式專案板",

                "You don't have any projects yet.": "您還沒有任何專案。",
                "There are no projects matching your search.": "沒有符合您搜尋條件的專案。",
                "Learn More": "瞭解更多",

                "No description": "無描述",
                "Close": "關閉",
                "Closed": "已關閉",
                "Reopen": "重新開啟",

                // 頂部提醒
                "Project closed.": "專案已關閉。",
                "Project reopened.": "專案已重新開啟。",

            // 軟體包標籤卡 ?tab=packages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "Get started with GitHub Packages": "開始使用 GitHub 軟體包",
                "Safely publish packages, store your packages alongside your code, and share your packages privately with your team.": "安全地釋出包，將您的包與您的程式碼一起儲存，並與您的團隊私下共享您的包。",
                "Choose a registry": "選擇一個登錄檔",
                "A software platform used for building applications based on containers — small and lightweight execution environments.": "用於構建基於容器的應用程式的軟體平臺——小型輕量級執行環境。",
                "A default package manager used for the Java programming language and the Java runtime environment.": "用於 Java 程式語言和 Java 執行環境的一個預設包管理器。",
                "A free and open source package manager used for the Microsoft development platforms including .NET.": "一個自由和開源的開源包管理器，用於包括 .NET 在內的 Microsoft 開發平臺。",
                "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.": "分發用於 Ruby 程式語言的 Ruby 程式和庫的標準格式。",
                "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.": "npm 是一個 JavaScript 的包管理器，包含在 Node.js 中。它使開發人員能夠輕鬆地分享和重用程式碼。",
                "Containers": "容器",
                "A single place for your team to manage Docker images and decide who can see and access your images.": "為您的團隊提供一個管理 Docker 映象的單一場所，並決定誰可以看到和訪問您的映象。",

            // 贊助標籤卡 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                // [/is sponsoring/, "正在贊助"],
                "organization or developer:": "個組織或開發者：",

            // 星標標籤卡 ?tab=stars >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "Lists": "清單",
                // 排序補充
                    "Name ascending (A-Z)": "名稱升序 (A-Z)",
                    "Name descending (Z-A)": "名稱降序 (Z-A)",
                "Create list": "建立清單",
                    "Create a list to organize your starred repositories.": "建立一個清單來組織您的星標倉庫。",
                    "⭐️ Name this list": "⭐️ 清單名稱",
                    "Write a description": "簡單描述",
                    "Lists are currently in beta.": "清單目前處於測試階段。",
                    "Share feedback and report bugs.": "分享反饋意見和報告錯誤。",
                    "Create": "建立",
                    "Creating...": "建立中...",

                "Create your first list": "建立您的第一個清單",
                "Lists make it easier to organize and curate repositories that you have starred.": "列表可使您更容易組織和策劃您的星標倉庫。",
                "Create your first list.": "建立您的第一個清單。",

                "Search stars": "搜尋星標",
                "Type: All"    : "型別：全部",
                "Type: Public" : "型別：公共",
                "Type: Private": "型別：私有",
                "Type: Sources": "型別：原始碼",
                "Type: Forks"  : "型別：復刻",
                "Type: Mirrors": "型別：映象",
                "Type: Templates": "型別：模板",
                "Sort by: Recently starred": "排序：最近星標",
                "Sort by: Recently active": "排序：最近活躍",
                "Sort by: Most stars": "排序：最多星標",
                    "Recently starred": "最近星標",
                    "Recently active": "最近活躍",
                    "Most stars": "最多星標",
                    "Languages": "語言",

                //篩選結果
                "starred repositories": "星標倉庫",
                // "Clear filter": "清除篩選",

                "That’s it. You’ve reached the end of your stars.": "而已。您已經到了星海的盡頭。",

                "Topics": "主題",

                "Add to list": "新增到清單",
                "Lists": "清單",
                "You don't have any lists yet.": "您尚無任何清單。",

                // [/(\d+) repositor(y|ies)/, "$1 個倉庫"],

                // 他人庫 星標頁 補充
                "Search starred repositories": "搜尋星標倉庫",
                "Starred repositories": "星標倉庫",
                "Starred topics": "星標主題",
                "See all starred topics": "檢視所有星標主題",

                // [/That’s it. You’ve reached the end of ([^ ]+)’s stars./, "而已。您已經到了$1 星海的盡頭。"], // 他人星標頁 搜尋結果

            // https://github.com/stars/<repo-name>/lists/<清單>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "Edit list": "編輯清單",
                    "Delete list": "刪除清單",
                        "Are you sure you want to delete this list?": "您確定要刪除此清單嗎？",
                            // 頂部提醒
                            // [/Deleted \"(.*)\"./, "已刪除 “$1”。], // 刪除星標清單
                    "Save list": "儲存清單",
                    "Saving...": "儲存中...",
                "Add repositories to this list": "新增倉庫到此清單",
                "Star repositories on GitHub to keep track of your favorite projects and inspirational code.": "GitHub上的星標倉庫可以跟蹤您最喜歡的專案和鼓舞人心的程式碼。",
                "Explore repositories.": "探索倉庫。",

            //>>>>>>>>>>>>>>>>>> 組織主頁 <<<<<<<<<<<<<<<<<<<<<
                // [/doesn't have any pinned public repositories yet./, "還沒有任何置頂的公共倉庫。"],

                "People": "成員",
                "Teams": "團隊",

                "Send feedback": "傳送反饋",

                // 右側欄
                    "View as:": "瀏覽：",
                        "Switch profile context": "切換視角",
                        "Member": "成員",
                    "You are viewing this page as a public user.": "您正在以公共使用者身份瀏覽此頁面。",
                    // [/You are viewing this page as a member of the ([^ ]+) organization./, "您正在以 $1 組織成員的身份瀏覽此頁面。",
                    "pin repositories": "置頂倉庫",
                    "visible to anyone.": "讓任何人都能看到",
                    "create a README file": "建立 README 檔案",
                    "visible only to members of the organization.": "僅對組織成員可見。",

                    // "People": "成員",
                        "This organization has no public members. You must be a member to see who’s a part of this organization.": "該組織沒有公共成員。您必須是成員才能檢視誰是該組織的成員。",
                        "Invite someone": "邀請他人",
                            // 邀請對話方塊
                            // [/Invite a member to/, "邀請成員加入"],
                            "Search by username, full name, or email address": "搜尋使用者名稱, 全名, 郵箱地址：",
                            "Invite": "邀請",
                            "Invite a billing manager": "邀請一位賬單管理員",
                            "Authenticate your members with SAML single sign-on": "使用 SAML 單點登入對您的成員進行身份驗證",
                            "Try risk-free for 30 days": "無風險試用 30 天",
                            "learn more about SAML": "瞭解更多關於 SAML 的資訊",
                            "dismiss this message": "忽略此訊息",
                        "View all": "檢視全部",
                    "Top languages": "熱門語言",
                        "Loading…": "載入中…",
                    "Most used topics": "最常用的話題",
                    "Developer Program Member": "開發者計劃成員",

                "This organization has no repositories.": "該組織暫無倉庫。",
                "Create a new repository": "建立新倉庫",
                "View all repositories": "檢視所有倉庫",

                // 設定置頂
                "Select up to six public repositories you’d like to show.": "最多選擇 6 個您要顯示的公共倉庫。",
                "No repositories or gists found.": "沒有發現倉庫或 Gists。",
                // 頂部提醒
                "You’re not a member of any teams in this organization.": "您不是該組織中任何團隊的成員。",

            // 軟體包 https://github.com/orgs/<orgs-name>/packages
                "Type:": "型別：",
                "Search packages…": "搜尋軟體包…",
                "Visibility:": "可見性：",
                    "Select visibility": "選擇可見性",
                    "Internal": "內部",
                "Sort by:": "排序方式：",
                    "Select sort view": "選擇排序檢視",
                    "Most downloads": "下載量最多",
                    "Least downloads": "下載量最少",
                "Clear current search query, filters, and sorts": "清除當前的搜尋查詢、過濾器和排序方式",
                "Published": "釋出於",
                "in": "在",

            // 成員標籤頁 https://github.com/orgs/<orgs-name>/people
                "Organization permissions": "組織許可權",
                "Members": "成員",
                "Outside collaborators": "外部協作者",
                "Pending collaborators": "待定協作者",
                "Pending invitations": "待定邀請",
                "Failed invitations": "失敗邀請",

                "Find a member…": "搜尋成員…",

                "Export": "匯出",
                "Invite member": "邀請成員",

                "Filter by two-factor authentication": "按雙重身份驗證篩選",
                "Everyone": "所有人",
                "Enabled": "禁用",
                "Disabled": "啟用",

                "Role": "角色",
                "Filter by role": "按角色篩選",
                "Owners": "所有者",

                "Organization visibility": "組織可見性",
                "Your membership is visible to everyone and is displayed on your public profile.": "您的成員資格對所有人都是可見的，並顯示在您的個人資料上。",
                "Your membership is only visible to other members of this organization.": "您的成員資格只對本組織的其他成員可見。",

                "Owner": "所有者",
                "Owners have full access to teams, settings, and repositories.": "所有者擁有對團隊、設定和倉庫的完全訪問許可權。",
                // [/0 teams/, ""],

                "Manage": "管理",
                "Convert to outside collaborator…": "轉為外部協作者…",
                "Remove from organization…": "從組織移除…",

                "This organization has no public members.": "該組織沒有公開的成員。",

            // 外部協作者 https://github.com/orgs/<orgs-name>/outside-collaborators
                "Find a collaborator…": "尋找協作者…",
                "Select all": "全選",
                "No one outside of the organization has access to its repositories.": "組織外部的任何人都無法訪問其倉庫。",

            // 待定協作者 https://github.com/orgs/<orgs-name>/pending_collaborators
                "Find a pending collaborator…": "尋找待定協作者…",
                "There aren't any pending collaborators.": "暫無任何待定的協作者",

            // 待定邀請 https://github.com/orgs/<orgs-name>/people/pending_invitations
                // [/(\d+) Pending invitations?/, "個待定邀請"],
                "No pending invitations.": "暫無待定邀請。",

            // 失敗邀請 https://github.com/orgs/<orgs-name>/people/failed_invitations
                // [/(\d+) Failed invitations?/, "個失敗邀請"],
                "No failed invitations.": "暫無失敗邀請。",

            // 團隊標籤卡 https://github.com/orgs/<orgs-name>/teams
                "Seamless communication with teams": "與團隊的無縫溝通",
                "Teams are a great way for groups of people to communicate and work on code together. Take a look at why they’re great.": "團隊是一群人在一起交流和編寫程式碼的好方法。看看為什麼他們很棒。",
                "Flexible repository access": "靈活的倉庫訪問",
                    "You can add repositories to your teams with more flexible levels of access (Admin, Write, Read).": "您可以將倉庫新增到您的團隊中，並有更靈活的訪問級別（管理員、寫入、讀取）。",
                "Request to join teams": "申請加入團隊",
                    "Members can quickly request to join any team. An owner or team maintainer can approve the request.": "成員可以快速申請加入任何團隊。一個所有者或團隊維護者可以批准該請求。",
                "Team mentions": "團隊提及",
                    "Use team @mentions (ex.": "使用團隊 @提及（例如",
                    "for the entire team) in any comment, issue, or pull request.": "對於整個團隊）在任何評論、議題或拉取請求中。",
                    "New team": "新建團隊",

            // 建立團隊 /orgs/<org-login>/new-team
                "Create new team": "新建團隊",
                "Team name": "團隊名稱",
                "You’ll use this name to mention this team in conversations.": "您將使用此名稱在對話中提及此團隊。",
                "Description": "描述",
                "What is this team all about?": "這個團隊是什麼？",
                "Parent team": "父團隊",
                    "There are no teams that can be selected.": "沒有可以選擇的團隊。",
                "Team visibility": "團隊可見性",
                    "Visible": "可見",
                        "Recommended": "推薦",
                        "A visible team can be seen and": "可見的團隊可以被看到並",
                        "@mentioned": "@提及",
                        "by every member of this organization.": "本組織的每一位成員。",
                    "Secret": "私密",
                        "A secret team can only be seen by its members and may not be nested.": "私密團隊只能被其成員看到，而且不能被巢狀。",
                "Create team": "建立團隊",

            // 專案標籤頁 https://github.com/orgs/<orgs-name>/projects
                "There aren't any public projects yet": "尚無任何公共專案。",
                "There aren't any projects yet": "尚無任何專案。",
                "Try starting a new one.": "嘗試開始一個新的專案。",

        },
        "regexp": [ // 正則翻譯
            [/(\d+) discussions? answered/, "$1 個討論已回答"], // 高光時刻
            [/Block or report ([^ ]+)/, "拉黑或舉報 $1"],
            [/(\d+) GitHub Archive Program/, "$1 GitHub 存檔計劃"], // 成就浮動款
            [/(\d+) remaining/, "$1 剩餘"], // 置頂專案 剩餘
            [/([^ ]+) doesn('|’)t have any public repositories yet./, "$1 尚無任何公共倉庫。"],
            [/([\d,]+) contributions? in the last year/, "在過去的一年中貢獻 $1 次"],
            [/([\d,]+) contributions? in (\d+) in ([^ ]+)/, "在 $2 年中向 $3, 貢獻 $1 次"],
            [/([\d,]+) contributions? in (\d+)/, "在 $2 年中貢獻 $1 次"],
            [/(\d+) contributions? in private repositories?/, "私有倉庫 $1 個貢獻"],
            [/(\d+|No) contributions?/, function (all, number) {
                return number === 'No' ? "無貢獻" : number+" 次貢獻";
            }],// 貢獻日曆
            [/and (\d+) other repositor(y|ies)/, "和 $1 個其他倉庫"], // 活動概覽
            // 貢獻資訊
            [/Created (\d+) commits? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中建立了 $1 次提交"],
            [/Created (\d+) repositor(y|ies)/, "建立了 $1 個倉庫"],
            [/Opened (\d+) pull requests? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中打開了 $1 個拉取請求"],
            [/Opened (\d+) other pull requests? in (\d+) repositor(y|ies)/, "在 $2 個其他倉庫中打開了 $1 個拉取請求"],
            [/Opened (\d+) issues? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中打開了 $1 個議題"],
            [/Opened (\d+) other issues? in (\d+) repositor(y|ies)/, "在 $2 個其他倉庫中打開了 $1 個其他議題"],
            [/Reviewed (\d+) pull requests? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中審查了 $1 個拉取請求"],
            [/Answered (\d+) discussions? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中答覆了 $1 個討論"],
            [/Started (\d+) discussions? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中發起了 $1 個討論"],
            [/(\d+) commits?/, "$1 次提交"],
            [/(\d+) pull requests?/, "$1 次拉取請求"],
            [/that received (\d+) comments?/  , "收到 $1 條評論"],
            [/(\d+) of (\d+) tasks?/, "$1 / $2 個任務"],
            [/(\d+) comments?/, "$1 條評論"],
            [/(\d+) tasks? done/, "$1 個任務完成"],
            [/([^ ]+) doesn't have any projects yet./, "$1 目前還沒有任何專案。"],
            [/([^ ]+) has no activity yet for this period./, "$1 目前還沒有活動。"],
            [/([^ ]+) had no activity during this period./, "$1 在此期間沒有活動。"],
            [/Contribution activity in ([^ ]+)/, "在 $1 中的貢獻活動"],
            [/([^ ]+) had no activity in ([^ ]+) during this period./, "在此期間，$1 在 $2 中沒有活動。"],
            [/([^ ]+) has no activity in ([^ ]+) yet for this period./, "在此期間，$1 在 $2 中沒有活動。"],
            [/([^ ]+) doesn’t have any repositories that match./, "$1 沒有任何匹配的倉庫"], // 倉庫標籤卡
            [/([\d,]+) Open/, "$1 開啟"], // 專案標籤卡
            [/([\d,]+) Closed/, "$1 已關閉"],
            [/Deleted \"(.*)\"./, "已刪除 “$1”。"], // 刪除星標清單 頂部提醒
            [/doesn’t have any starred repositories yet./, "尚無任何星標倉庫。"],
            [/That’s it. You’ve reached the end of ([^ ]+)’s stars./, "而已。您已經到了$1 星海的盡頭。"], // 他人星標頁 搜尋結果
            [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
            [/(\d+) members?/, "$1 個成員"],
            [/\((\d+) issues? needs? help\)/, "($1 個議題需要幫助）"],
            [/(\d+) issues? needs? help/, "$1 個議題需要幫助"],
            // 組織頁面
            [/doesn’t have any public projects./, "沒有任何公共專案。"],
            [/doesn't have any pinned public repositories yet./, "還沒有任何置頂的公共倉庫。"],
            [/Invite a member to/, "邀請成員加入"],
            [/(\d+) packages?/, "$1 軟體包"],
            [/(\d+) teams?/, "$1 團隊"],
            [/(\d+) Pending invitations?/, "待定邀請"],
            [/(\d+) Failed invitations?/, "失敗邀請"],
            [/You are viewing this page as a member of the ([^ ]+) organization./, "您正在以 $1 組織成員的身份瀏覽此頁面。"],
        ],
    },

    "page-account": { // 個人設定 = /settings
        "static": { // 靜態翻譯
            "Your personal account": "我的個人帳戶",
            "Switch to another account": "切換到另一個帳戶", // 存在組織時
            "Go to your personal profile": "去我的個人資料",
            // 左側選單
            "Profile": "個人資料",
            "Account": "帳戶",
            "Appearance": "外觀",
            "Accessibility": "無障礙",
            "Notifications": "通知",

            "Access": "訪問",
            "Billing and plans": "賬單和計劃",
            "Emails": "電子郵箱",
            "Password and authentication": "密碼和身份驗證",
            "SSH and GPG keys": "SSH 與 GPG 公鑰",
            "Organizations": "組織",
            "Moderation": "節制",
                "Blocked users": "黑名單",
                "Interaction limits": "互動限制",
                "Code review limits": "程式碼審查限制",

            "Code, planning, and automation": "程式碼、規劃和自動化",
            // "Repository": "倉庫"
            "Packages": "軟體包",
            "Pages": "GitHub Pages",
            "Saved replies": "快捷回覆",

            // "Security": "安全",
            "Code security and analysis": "程式碼安全性與分析",

            "Integrations": "整合",
            "Applications": "應用",
            "Scheduled reminders": "定時提醒",

            "Archives": "存檔",
            "Security log": "安全日誌",
            "Sponsorship log": "贊助日誌",

            "Developer settings": "開發者設定",

            // Profile 個人資料 https://github.com/settings/profile
                "Public profile": "基本資料",
                "Profile picture": "我的頭像",
                    "Edit": "編輯",
                    "Upload a photo…": "上傳圖片…",
                    // 裁剪個人頭像對話方塊
                    "Crop your new profile picture": "裁剪個人頭像",
                    "Set new profile picture": "設定新的個人頭像",
                //"You can also drag and drop a picture from your computer.": "您也可以直接拖拽照片映象上傳.",
                "Name": "暱稱",
                "Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.": "您的暱稱可能會出現在 GitHub 上，您的貢獻或被提及的地方。您可以隨時刪除它。",
                "Public email": "公開電子郵箱",
                "Select a verified email to display": "選擇顯示一個已驗證的電子郵箱",
                "You have set your email address to private. To toggle email privacy, go to": "您已將電子郵箱地址設定為私密。需要切換電子郵箱地址的私密性，請轉到",
                "email settings": "郵箱設定",
                "and uncheck \"Keep my email address private.\"": "並取消 “保持我的電子郵箱地址的私密性”。",
                //"Don’t show my email address": "不顯示我的郵箱",
                //"You can add or remove verified email addresses in your": "您可以新增或刪除郵件地址在您的",
                //"personal email settings": "郵箱設定",
                "Bio": "個人簡介",
                "Tell us a little bit about yourself": "自我介紹一下您自己的相關資訊",
                "You can": "您可以",
                "@mention": "@使用者名稱或組織名",
                "other users and organizations to link to them.": "連結到其他使用者和組織。",
                "URL": "網站",
                "Twitter username": "Twitter 使用者名稱",
                "Company": "公司",
                "your company’s GitHub organization to link it.": "連結到您所在公司的 GitHub 組織。",
                 //"your company's GitHub organization to link it.": "貴公司和GitHub的組織聯絡起來。",
                "Location": "位置",
                "All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears. Please see our": "此頁面上的所有欄位都是可選的，可以隨時刪除，填寫這些欄位，即表示您同意我們在您的個人資料出現的任何地方共享此資料。請參閱我們的",
                "privacy statement": "隱私宣告",
                "to learn more about how we use this information.": "以瞭解更多關於我們如何使用這些資訊。",
                "Update profile": "更新資料",
                // 頂部提醒
                    "Profile updated successfully": "資料更新成功。",

                "Profile settings": "個人資料設定",
                "Display Pro badge": "顯示 Pro 徽章",
                "Display Arctic Code Vault badge": "顯示北極程式碼庫徽章",
                "This will display the": "這將顯示",
                "Arctic Code Vault Contributor": "北極程式碼庫貢獻者",
                "badge on your public profile page.": "徽章在您的個人資料頁面。",
                "Update preferences": "更新設定",
                    // 頂部提醒
                    "Visitors will now see your public and anonymized private contributions.": "訪客現在將看到您的公開和匿名的私人貢獻。",
                    "Visitors will now see only your public contributions.": "訪客現在將只看到您的公開貢獻。",
                    "Your profile is now private.": "您的個人資料現在是私密的。",
                    "Your profile is now public.": "您的個人資料現已公開。",
                    "Visitors will now see your public and anonymized private contributions. Your profile is now private.": "訪客現在將看到您公開和匿名的私人貢獻。您的個人資料現在是私密的。",
                    "Visitors will now see only your public contributions. Your profile is now public.": "訪客現在將只能看到您的公開貢獻。您的個人資料現已公開。",

                "Contributions & Activity": "貢獻與活動",
                "Make profile private and hide activity": "將個人資料設定為私密，並隱藏活動",
                "Enabling this will hide your contributions and activity from your GitHub profile and from social features like followers, stars, feeds, leaderboards and releases.": "啟用此功能後，您的貢獻和活動將會從您的 GitHub 個人資料中隱藏起來，也不會被關注者、觀星者、訂閱源、排行榜和釋出等社交功能所發現。",
                "Include private contributions on my profile": "在我的個人資料顯示私人貢獻",
                "Get credit for all your work by showing the number of contributions to private repositories on your profile without any repository or organization information.": "顯示所有包括私有倉庫的貢獻到您的個人資料頁面，不包括倉庫或組織資訊。",
                "Learn how we count contributions": "瞭解我們如何計算貢獻",
                "Update contributions": "更新貢獻",

                "GitHub Developer Program": "GitHub 開發者計劃",
                "Building an application, service, or tool that integrates with GitHub?": "構建應用程式、服務或工具，整合到 GitHub 嗎？",
                "Join the GitHub Developer Program": "加入 GitHub 開發者計劃",
                ", or read more about it at our": "，或瞭解更多資訊在我們的",
                "Developer site": "開發者站點",
                "Check out the Developer site": "檢視開發者網站，",
                "for guides, our API reference, and other resources for building applications that integrate with GitHub. Make sure your contact information is up-to-date below. Thanks for being a member!": "瞭解指南、我們的 API 參考和其他用於構建與 GitHub 整合的應用程式的資源。請確保您的聯絡資訊是最新的。感謝您成為我們的會員！",

                "Jobs profile": "就業狀態",
                "Available for hire": "求 HR 帶走",
                "Save jobs profile": "儲存狀態",
                    // 頂部提醒
                    "Profile updated successfully —": "個人資料更新成功 —",
                    "view your profile.": "檢視您的個人資料。",

                "Trending settings": "趨勢設定",
                "Preferred spoken language": "首選語言",
                "No Preference": "未設定",
                "We'll use this language preference to filter the trending repository lists on": "我們將使用此語言偏好來過濾趨勢倉庫列表在",
                "and our": "和我們的",
                "Trending Repositories": "趨勢倉庫",
                "page.": "頁面。",
                "Save Trending settings": "儲存趨勢設定",

            // Account settings 帳戶設定 https://github.com/settings/admin
                "Change username": "更改使用者名稱",
                "Changing your username can have": "更改您的使用者名稱可能會有",
                "unintended side effects": "意想不到的副作用",
                    "Really change your username?": "確定要更改您的使用者名稱？",
                    "Unexpected bad things will happen if you don’t read this!": "請仔細閱讀以下提示資訊！！！",
                    "We": "我們",
                    "will not": "不會",
                    "will": "會",
                    "set up redirects for your old profile page.": "為您的舊資料頁設定重定向",
                    "set up redirects for Pages sites.": "為 Pages 站點設定重定向。",
                    "create redirects for your repositories (web and git access).": "為您的倉庫設定重定向（ web 和 git 訪問）。",
                    "Renaming may take a few minutes to complete.": "重新命名可能需要幾分鐘的時間來完成。",
                    "I understand, let’s change my username": "我明白了，依然更改我的使用者名稱",

                    "Enter a new username": "輸入一個新使用者名稱",
                    "Choose a new username": "選擇一個新使用者名稱",
                    "Change my username": "更改我的使用者名稱",
                    "Trademark Policy": "商標政策",
                    "are available.": "都可以使用。",
                    "Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.": "使用者名稱只能包含字母數字字元或單個連字元，不能以連字元開始或結束。",
                "Looking to manage account security settings? You can find them in the": "想管理帳戶安全設定？您可以找到它們在",
                "Account security": "帳戶安全",
                "tab.": "選項頁。",

                "Export account data": "匯出帳戶資料",
                "Export all repositories and profile metadata for": "匯出所有倉庫和配置元資料，自",
                ". Exports will be available for 7 days.": "。匯出結果將有 7 天有效期。",
                "Start export": "開始匯出",
                "Recent exports": "近期匯出",
                "New export": "新建匯出",
                "We're preparing your export! We'll send you an email when it's finished.": "我們正在為您準備匯出！我們完成後會發一封電子郵件。",
                "New exports cannot be requested while an export is currently in progress": "當前正在匯出中，無法請求新的匯出",
                "Resend email with link": "重新發送帶有連結的郵件",
                "Download deleted": "匯出內容已刪除",
                "Job queued to delete file.": "正在排隊刪除檔案的作業。",

                "Successor settings": "設定繼任者",
                "designated below": "下面指定的",
                ", in the event of my death. I understand that this appointment of a successor does not override legally binding next-of-kin rules or estate laws of any relevant jurisdiction, and does not create a binding will.": "，在我死亡的情況下。我明白，這種指定繼任者的做法並不凌駕於具有法律約束力的近親規則或任何相關司法管轄區的遺產法，也不產生具有約束力的遺囑。",
                "Learn more about account successors.": "瞭解更多關於帳戶繼任者的資訊。",
                "Add Successor": "新增繼任者",
                "Search by username, full name, or email address": "搜尋使用者名稱、全名、或電子郵箱",
                "You have not designated a successor.": "您還沒有指定繼任者。",

                "Delete account": "刪除帳戶",
                "Once you delete your account, there is no going back. Please be certain.": "您一旦刪除了您的帳戶，將再也無法恢復。請確認！",
                    "Your account is currently an owner in these organizations:": "您的帳戶目前是以下組織的所有者：", // 存在組織
                    "You must": "您必須先",
                    "remove yourself": "刪除您自己",
                    "transfer ownership": "轉讓所有權",
                    "delete": "刪除",
                    "these organizations before you can delete your user.": "這些組織，您才可以刪除您的使用者。",
                "Delete your account": "刪除帳戶",
                "Are you sure you don’t want to just": "您確定不希望僅僅是",
                "downgrade your account": "降級您的帳戶",
                "to a": "為",
                "FREE": "免費",
                "account? We won’t charge your payment information anymore.": "帳戶嗎？我們不會再收取您的支付資訊。",
                    "Are you sure you want to do this?": "您確定要這麼做嗎？",
                    "This is extremely important.": "這是極其重要的。",
                    "We will": "我們將",
                    ", along with all of your forks, wikis, issues, pull requests, and GitHub Pages sites.": "以及您所有的復刻、Wiki、議題、拉取請求和 GitHub Pages 站點。",
                    "You will no longer be billed, and after 90 days your username will be available to anyone on GitHub.": "您將不再被收取費用，並且 90 天后您的使用者名稱將被 GitHub 上的任何人使用。",
                    "For more help, read our article \"": "如需更多幫助，請閱讀我們的文章 “",
                    "Deleting your user account": "刪除您的帳戶",
                    "\".": "”。",
                    "Your username or email:": "您的使用者名稱或電子郵箱：",
                    "To verify, type": "為了驗證，請輸入",
                    "below:": "在下面：",
                    "Confirm your password:": "確認您的密碼：",
                    "Cancel plan and delete this account": "取消計劃並刪除此帳戶",

            // Appearance 外觀 https://github.com/settings/appearance
                "Theme preferences": "主題首選項",
                "Choose how GitHub looks to you. Select a single theme, or sync with your system and automatically switch between day and night themes.": "選擇 GitHub 在您眼中的樣子。選擇單一主題，或與您的系統同步並自動在白天和夜晚的主題之間切換。",
                "Theme mode": "主題模式",
                    "Single theme": "單一主題",
                    "Sync with system": "與系統同步",
                "GitHub will use your selected theme": "GitHub 將使用您選擇的主題",
                "GitHub theme will match your system active settings": "GitHub 主題將匹配您的系統設定",
                "Light default": "亮 - 預設",
                "Light high contrast": "亮 - 高對比",
                "Light Protanopia & Deuteranopia": "亮 - 近視和遠視",
                "Light Tritanopia": "亮 - 藍色盲",
                "Dark default": "暗 - 預設",
                "Dark high contrast": "暗 - 高對比",
                "Dark Protanopia & Deuteranopia": "暗 - 近視和遠視",
                "Dark Tritanopia": "暗 - 藍色盲",
                "Dark dimmed": "昏暗",
                "Day theme": "日間主題",
                "Night theme": "夜間主題",
                "Active": "啟用",
                "This theme will be active when your system is set to “light mode”": "當您的系統設定為 “燈光模式” 時，該主題將被啟用。",
                "This theme will be active when your system is set to “dark mode”": "當您的系統設定為 “暗夜模式” 時，該主題將被啟用。",

                "Emoji skin tone preference": "表情符號膚色首選項",
                "Preferred default emoji skin tone": "預設的表情符號膚色",

                "Tab size preference": "製表符首選項",
                "Choose the number of spaces a tab is equal to when rendering code": "在渲染程式碼時，選擇一個製表符等於多少個空格",
                "8 (Default)": "8 (預設)",

                "Markdown editor font preference": "Markdown 編輯器字型首選項",
                "Font preference for plain text editors that support Markdown styling (e.g. pull request and issue descriptions, comments.)": "支援 Markdown 樣式的純文字編輯器的字型首選項（例如拉取請求和議題描述、評論。）",
                "Use a fixed-width (monospace) font when editing Markdown": "編輯 Markdown 時使用固定寬度（等寬）字型",

            // Accessibility 無障礙 https://github.com/settings/accessibility
                "GitHub keyboard shortcuts": "GitHub 鍵盤快捷鍵",
                "General": "通常",
                "Character keys": "字元鍵",
                    "GitHub shortcuts": "GitHub 快捷鍵",
                    "that don't use modifier keys in their activation. For example, the": "，這些快捷鍵在啟用時不使用修改鍵。例如，",
                    "shortcut to navigate notifications, or": "快捷鍵來導航到通知，或",
                    "to view context relevant shortcuts.": "檢視與上下文相關的快捷鍵。",
                    "Learn more about character key shortcuts": "瞭解更多關於字元快捷鍵的資訊",

                "Command palette": "命令面板",
                    "Modify the shortcuts to trigger the Command Palette for the default search mode and the command mode": "修改快捷鍵以觸發預設搜尋模式和命令模式的命令面板",
                    "Search mode": "搜尋模式",
                        "control + k or control + alt + k (default)": "control + k 或 control + alt + k (預設)",
                        "Disabled": "禁用",
                    "Command mode": "命令模式",
                        "control + shift + k (default)": "control + shift + k (預設)",

                // 頂部提醒
                "Keyboard shortcut preference successfully saved.": "鍵盤快捷鍵首選項已成功儲存。",

            // Notification center 通知 https://github.com/settings/notifications
                //"How you receive notifications": "通知設定",
                "Choose how you receive notifications. These notification settings apply to the": "選擇接收通知的方式。這些通知設定適用於",
                "things you’re watching": "您正在關注的內容",

                "Automatic watching": "自動關注",
                    "When you’re given push access to a repository, automatically receive notifications for it.": "當您給一個倉庫推送許可權時，自動接收相關通知。",
                "Automatically watch repositories": "自動關注倉庫",
                    "When you’re added to or join a team, automatically receive notifications for that team’s discussions.": "當您被新增或加入團隊時，會自動接收該團隊討論的通知。",
                "Automatically watch teams": "自動關注團隊",

                "Participating": "參與話題",
                "Notifications for the conversations you are participating in, or if someone cites you with an": "通知您正在參與的對話，或者如果有人",
                //"@mention": "@您",
                "Email": "電子郵件",
                "Web and Mobile": "網站 和 移動裝置",

                "Watching": "關注倉庫",
                    "Notifications for all repositories, teams, or conversations you’re watching.": "所有您正在關注的倉庫、團隊或對話的通知。",

                "Dependabot alerts": "Dependabot 警報",
                    "When you’re given access to": "當您獲得",
                    ", automatically receive notifications when a new vulnerability is found in one of your dependencies.": " 訪問許可權時，當您的某個依賴關係中發現新的漏洞時，就會自動收到通知。",
                "UI alerts": "使用者介面警報",
                    "UI alerts display warnings in a repository’s file and code views.": "在倉庫的檔案和程式碼檢視中顯示警告。",
                "Command Line": "命令列",
                    "Command Line alerts display warnings as a callback when you push to a repository with vulnerabilities.": "當您推送到存在漏洞的倉庫時，命令列將發出警告。",
                "Web": "網站",

                "Receive security alert notifications via email": "透過電子郵件接收安全警報通知",
                "Email each time a vulnerability is found": "每次發現漏洞時傳送電子郵件",
                "Email a digest summary of vulnerabilities": "傳送漏洞摘要電子郵件",
                    "Daily security email digest": "每日安全郵件摘要",
                    "Weekly security email digest": "每週安全郵件摘要",

                "Actions": "操作",
                    "Notifications for workflow runs on repositories set up with": "倉庫的工作流程通知，設定在",
                    "GitHub Actions": "",
                "Send notifications for failed workflows only": "只為失敗的工作流程傳送通知",

                "Organization alerts": "組織警告",
                    "When you are given admin permissions to an organization, automatically receive notifications when a new deploy key is added.": "當您被賦予一個組織的管理許可權時，當一個新的部署金鑰被新增時，自動收到通知。",

                "Email notification preferences": "郵件通知偏好",
                "Default notification email": "預設通知電子郵箱",
                "Save": "儲存",
                "Choose which email updates you receive on conversations you’re participating in or watching": "選擇您要收到正在參與或關注的對話中的郵件更新",
                "Comments on Issues and Pull Requests": "關於議題和拉取請求的評論",
                "Pull Request reviews": "拉取請求稽核",
                "Pull Request pushes": "拉取請求推送",
                "Include your own updates": "包括您自己的更新",

                "Custom routing": "自定義",
                "You can send notifications to different": "您可以傳送通知到不同的",
                "verified": "經驗證",
                "email addresses depending on the organization that owns the repository.": "的電子郵箱，根據擁有倉庫的組織。",

            // 賬單和計劃 https://github.com/settings/billing
                "Personal billing": "個人賬單",
                "Current monthly bill": "當前月度賬單",
                "Switch to yearly billing": "切換到按年計費",
                "Next payment due": "下一次到期的支付",
                "View payment history": "檢視支付記錄",
                "Payment information": "支付資訊",
                "Update payment method": "更新支付方式",
                "Manage spending limit": "管理支出限額",
                "Redeem coupon": "兌換優惠券",
                "Current plan": "當前計劃",
                "Compare all plans": "比較所有計劃",

                //"GitHub Free": "GitHub 免費",
                "The basics for all developers": "基礎計劃（所有開發者）",
                "Unlimited public/private repos": "無限的公共/私有倉庫",
                "Unlimited collaborators": "無限協作者",
                "2,000 Actions minutes/month": "2,000 次操作 分鐘/月",
                "500MB of Packages storage": "500MB 的包儲存空間",
                "Community support": "社群支援",

                "Start your first organization account": "開設您的第一個組織帳戶",
                "With CI/CD, Dependabot, and the world's largest developer community, GitHub gives your team everything they need to ship better software faster": "藉助 CI/CD、Dependabot 和世界上最大的開發者社群，GitHub為您的團隊提供了他們所需的一切，以更快地釋出更好的軟體。",
                "Create an organization": "建立組織",

                // [/In addition to your personal account, you have (\d+) organizations? account/, "除了個人帳戶外，您還有 $1 個組織帳戶"],
                "Manage your organization accounts": "管理您的組織帳戶",
                    "Create a new organization": "建立新組織",

                "Usage this month": "本月使用情況",
                "Get usage report": "獲取使用報告",

                "GitHub Sponsors": "GitHub 贊助",
                "Connect with the community that builds the tools you use": "與構建您使用的工具的社群聯絡",
                "Start sponsoring": "開始贊助",
                "You’re currently not sponsoring anyone.": "您目前沒有贊助任何人。",
                "Learn more about GitHub Sponsors": "瞭解更多關於 GitHub 贊助",

                "Change plan": "更改計劃",
                "Cancel plan": "取消計劃",
                "Do you have any questions? Contact": "您有任何問題嗎？請聯絡",

            // 支付資訊 https://github.com/settings/billing/payment_information
                "Billing & plans": "賬單和計劃",
                "/ Payment information": "/ 支付資訊",

                "Please update your billing information in order to add a payment method.": "請更新您的賬單資訊，以便新增支付方式。",

                "Billing Information": "賬單資訊",
                "First name": "名字",
                "Last name": "姓氏",
                "Address": "地址",
                "City": "城市",
                "Postal/Zip code": "郵政編碼",
                "Country/Region": "國家/地區",
                    "Choose your country": "選擇您所在的國家/地區",
                "State/Province": "州/省",
                "You have not added any billing information.": "您尚未新增賬單方式。",

                "Payment method": "支付方式",
                "Add Information": "新增資訊",
                "You have not added a payment method.": "您尚未新增支付方式。",

                "Last payment": "最後一次支付",
                "You have not made any payments.": "您尚未支付任何款項。",

                "Coupon": "優惠劵",
                "Redeem a coupon": "兌換優惠券",
                "You don’t have an active coupon.": "您沒有有效的優惠券。",

                "Additional Information": "附加資訊",
                    "Add specific contact or tax information to your receipts, like your full business name, VAT/GST identification number, or address of record here. We’ll make sure it shows up on every receipt.": "在您的收據上新增具體的聯絡方式或稅務資訊，例如您的企業全稱、VAT/GST 識別號碼或記錄地址。我們將確保它顯示在每張收據上。",
                "Add information": "新增資訊",
                "No additional information added to your receipts.": "您的收據上沒有新增任何額外的資訊。",

                // 對話方塊
                "Extra billing information": "額外的賬單資訊",
                "This information will appear on all your receipts.": "此資訊將出現在您的所有收據上。",
                "For your security, do not include any confidential or financial information (like credit card numbers).": "為了您的安全，請勿包含任何機密或財務資訊（如信用卡號）。",
                "Full business name or address of record": "企業全稱或記錄地址",
                "Save contact information": "儲存聯絡資訊",

            // 支付方式 https://github.com/settings/billing/payment
                "/ Payment method": "/ 支付方式",
                "Loading payment information…": "正在載入支付資訊…",
                "Pay with": "支付方式：",
                    "Credit card": "信用卡",
                        "Card Number": "卡號",
                        "Expiration Date": "終止日期",
                            "- Select One -": "- 選擇一個 -",
                        "Address 1": "地址 1",
                        "Address 2": "地址 2",
                        "Country": "國家/地區",
                        "City": "城市",
                        "State": "州/省",
                        "Postal Code": "郵政編碼",
                        "Submit": "提交",
                    "PayPal account": "PayPal 帳戶",
                        "Sign in to": "登入到",
                        "Connecting to PayPal…": "正在連線到 PayPal…",
                "Back to billing settings": "返回賬單設定",
                "There are no upcoming charges to your account.": "您的帳戶沒有即將發生的費用。",

            // 支出限額 https://github.com/settings/billing/spending_limit
                "/ Monthly spending limit": "/ 每月支付限額",
                "Set up a monthly spending limit. You can adjust it at any time. Read more information about": "設定每月支出限額。您可以隨時調整它。閱讀更多關於",
                "Actions spending limits": "操作支付限額",
                "Packages spending limits": "軟體包支付限額",

                "Payment method is missing": "缺失支付方式",
                "You can’t increase the spending limits until you set up a valid payment method.": "在您設定有效的支付方式之前，您無法提高支出限額。",
                "Add payment method": "新增支付方式",

                "Limit spending": "限制支出",
                    "Set up a spending limit on a monthly basis": "設定每月支出限額",
                    "Update limit": "更新限額",
                    // [/Leaving it at (\$\d+\.\d{2}) will avoid any extra expenses/, "將其限制在 $1 美元將避免任何額外的費用。"],
                "Unlimited spending": "不限制支出",
                    "Pay as much as needed to keep Actions & Packages running": "按需支付，以保持操作和軟體包的執行",

                "Email alerts": "電子郵件提醒",
                "Receive email notifications when usage reaches 75%, 90% and 100% thresholds.": "當使用率達到 75%、90% 和 100% 的閾值時，會收到電子郵件通知。",
                "Included resources alerts": "包含資源提醒",
                "Spending limit alerts": "支出限額提醒",

            // 賬單歷史 https://github.com/account/billing/history
                "/ Payment history": "/ 支付歷史",
                "Amounts shown in USD": "以美元顯示的金額",

            // Emails 電子郵箱 https://github.com/settings/emails
                "Email settings": "電子郵箱設定",
                "Primary": "主帳戶",
                "This email will be used for account-related notifications and can also be used for password resets.": "該電子郵箱將用於與帳戶有關的通知，也可用於密碼重置。",
                "Not visible in emails": "在電子郵件中不可見",
                "Visible in emails": "在電子郵件中可見",
                    "This email may be used as the 'author' or 'committer' address for web-based Git operations, e.g., edits and merges.": "該電子郵箱可用作基於 Web 的 Git 操作（例如：編輯和合並）的 ‘作者’ 或 ‘提交者’ 地址。",
                "Receives notifications": "接收通知",
                "This email address is the default used for GitHub notifications, i.e., replies to issues, pull requests, etc.": "該電子郵箱預設用於 GitHub 的通知，即對議題和拉取請求的回覆，等等。",
                "At least one email is required.": "至少需要一個電子郵箱。",
                // 刪除按鈕 提醒資訊
                    "Are you sure you want to remove this email from your account? Once removed, commits attributed to this email address will no longer be associated with your account. One of your other emails will become your primary address.": "您確定要從您的帳戶中刪除此電子郵箱嗎？刪除後，歸因於該電子郵箱地址的提交將不再與您的帳戶相關聯。您的其他電子郵箱之一將成為您的主要地址。",

                "Add email address": "新增電子郵箱",
                "Email address": "電子郵箱",
                    // 頂部提醒
                    "Resend verification email": "重新發送驗證郵件",
                    "Your email was verified.": "您的電子郵箱地址驗證成功！",

                "Primary email address": "主電子郵箱",
                // 未電子郵箱隱私
                "will be used for account-related notifications and can be used for password resets.": "將用於與帳戶相關的通知，並可用於密碼重置。",
                // 電子郵箱隱私
                "Because you have email privacy enabled,": "因為您已經啟用了電子郵箱隱私，",
                "will be used for account-related notifications as well as password resets.": "將用於與帳戶相關的通知以及密碼重置。",
                "will be used for web-based Git operations, e.g., edits and merges.": "將用於基於 Web 的 Git 操作，例如編輯和合並。",
                // 頂部提醒
                "Your primary email was changed to": "您的主電子郵箱已更改為",
                ". Your default notification email address is still set to": "。您的預設通知電子郵箱仍然設定為",
                ". Would you like to update that as well?": "。您也想更新它嗎？",
                "Yes， update my notification email": "是的，更新我的通知電子郵箱",

                "Backup email address": "備用電子郵箱",
                "Your backup GitHub email address will be used as an additional destination for security-relevant account notifications and can also be used for password resets.": "您的備用 GitHub 電子郵箱將額外的用作安全相關帳戶通知，也可以用於密碼重置。",
                "Allow all verified emails": "允許所有已驗證的電子郵箱",
                    // 頂部提醒
                    "All verified emails can now be used for password resets.": "所有已驗證的電子郵箱現在均可用於密碼重置。",
                "Only allow primary email": "僅允許主電子郵箱",
                    // 頂部提醒
                    "Only your primary email address can now be used for password resets.": "現在只有您的主電子郵箱可用於密碼重置。",
                "Please add a verified email, in addition to your primary email, in order to choose a backup email address.": "請在您的主電子郵箱之外，新增一個經驗證的電子郵箱，以便選擇一個備用電子郵箱。",

                "Keep my email addresses private": "保持我的電子郵箱地址的私密性",
                    // 頂部提醒
                    "Your primary email address is now public. To select which email to display on your profile, visit": "您的主電子郵箱地址現已公開。要選擇在您的個人資料中顯示哪個電子郵箱，請訪問",
                    "profile settings.": "個人資料設定。",
                    "Your primary email address is now private. If you previously made your email public, we’ve removed it from your profile.": "您的主電子郵箱地址現已設為私密。如果您以前公開過您的電子郵箱，我們已經從您的個人資料中刪除了它。",
                "We’ll remove your public profile email and use": "我們將刪除您的公開個人資料中的電子郵箱，並使用",
                "when performing web-based Git operations (e.g. edits and merges) and sending email on your behalf. If you want command line Git operations to use your private email you must": "執行基於 Web 的 Git 操作（例如：編輯和合並）並以您的名義傳送電子郵件。如果您想在命令列 Git 操作中使用您的私人電子郵箱，您必須",
                "set your email in Git": "在 Git 中設定您的電子郵箱",
                "Commits pushed to GitHub using this email will still be associated with your account.": "使用此電子郵箱推送到 GitHub 的提交仍將與您的帳戶相關聯。",

                "Block command line pushes that expose my email": "阻止在命令列推送中暴露我的電子郵箱",
                    // 頂部提醒
                    "Commits pushed with a private email will no longer be blocked.": "使用私人電子郵箱推送的提交將不再被阻止。",
                    "Commits pushed with a private email will now be blocked and you will see a warning.": "使用私人電子郵箱推送的提交將被阻止，您會看到一個警告。",
                "When you push to GitHub, we’ll check the most recent commit. If the author email on that commit is a private email on your GitHub account, we will block the push and warn you about exposing your private email.": "當您推送到 GitHub 時，我們會檢查最近的提交。如果該提交的作者電子郵箱是您 GitHub 帳戶上的私人電子郵箱，我們會阻止推送並警告您不要暴露您的私人電子郵箱。",

                "Email preferences": "郵件首選項",
                    "Receive all emails, except those I unsubscribe from.": "接收所有的郵件，除了那些我取消訂閱的郵件。",
                        "We’ll occasionally contact you with the latest news and happenings from the GitHub Universe.": "我們會不定期地聯絡您，告訴您來自 GitHub 宇宙的最新訊息和發生的事情。",
                    "Only receive account related emails, and those I subscribe to.": "僅接收帳戶相關的郵件，以及我訂閱的郵件。",
                        "We’ll only send you legal or administrative emails, and any emails you’re specifically subscribed to.": "我們僅向您傳送法律或行政郵件，以及您特別訂閱的任何郵件。",

                    "You’re subscribed to:": "您已訂閱：",
                        "Vulnerability newsletter": "漏洞簡訊",
                    "Unsubscribe": "取消訂閱",
                "Save email preferences": "儲存郵件首選項",
                // 頂部提醒
                    "Successfully updated your email preferences.": "成功更新了您的郵件首選項。",

                "Looking for activity notification controls? Check the": "正在尋找活動通知控制？請檢查",
                "Notification center": "通知中心",

            // 密碼和身份身份驗證 - 帳戶安全 https://github.com/settings/security
                "Change password": "更改密碼",
                "Old password": "舊密碼",
                "New password": "新密碼",
                "Confirm new password": "確認新密碼",
                "Make sure it's": "請確保",
                "at least 15 characters": "至少需要15個字元",
                "OR": " 或者",
                "at least 8 characters": "至少需要8個字元",
                "including a number": "包括數字",
                "and a lowercase letter": "和小寫字母",
                "Password is too short (minimum is 8 characters)": "密碼太短（最少8個字元）",
                "Password is too short (minimum is 8 characters), needs at least 1 lowercase letter, and is in a list of passwords commonly used on other websites": "密碼太短（最少8個字元），至少需要1個小寫字母，而且已在其他網站常用密碼列表中",
                "Password is too short (minimum is 8 characters), needs at least 1 lowercase letter, cannot include your login, and is in a list of passwords commonly used on other websites": "密碼太短（最少為8個字元），至少需要1個小寫字母，而且不能包括您的登入名，以及在其他網站常用的密碼列表中。",
                "Password is too short (minimum is 8 characters), needs at least 1 number, cannot include your login, and is in a list of passwords commonly used on other websites": "密碼太短（最少8個字元），需要至少1個數字，不能包含您的登入名，以及在其他網站常用的密碼列表中",
                "Password is too short (minimum is 8 characters) and is in a list of passwords commonly used on other websites": "密碼太短（最少為8個字元），而且已在其他網站常用的密碼列表中。",
                "Password needs at least 1 lowercase letter and is in a list of passwords commonly used on other websites": "密碼需要至少 1 個小寫字母，而且已在其他網站常用的密碼列表中",
                "Password is in a list of passwords commonly used on other websites": "密碼在其他網站常用的密碼列表中",
                "Update password": "更新密碼",
                "I forgot my password": "我忘記了我的密碼",

                // 雙重身份驗證
                // 頂部提醒
                "Two-factor authentication successfully disabled.": "成功禁用雙重身份驗證。",

                "Two-factor authentication": "雙重身份驗證",
                "Two factor authentication is not enabled yet.": "尚未啟用雙重身份驗證。",
                "Enable two-factor authentication": "啟用雙重身份驗證",

                "Enable": "啟用",
                "Enabled": "啟用",
                "Disable": "停用",
                "Add": "新增",
                "Added": "新增",
                "Two-factor methods": "雙重身份驗證方式",
                "Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to sign in.": "雙重身份驗證不僅僅要求密碼登入，還為您的帳戶增加了一層額外的安全性。",
                "Authenticator app": "“身份驗證器” 應用",
                "Security keys": "安全金鑰",
                "Security keys are hardware devices that can be used as your second factor of authentication.": "安全金鑰是一種硬體裝置，可以作為您的第二個驗證步驟。",
                "GitHub Mobile": "GitHub 移動應用",
                "GitHub Mobile can be used for two-factor authentication by installing the GitHub Mobile app and signing in to your account.": "透過安裝 GitHub 移動應用並登入帳戶，可以使用 GitHub 移動應用來進行雙重身份驗證。",
                "No devices": "沒有裝置",
                // [/(\d+) devices?/, "$1 裝置"], // 設定--> 密碼和身份驗證頁
                "SMS number": "手機號碼",
                "Recovery options": "恢復選項",
                "Recovery codes": "恢復碼",
                "Recovery codes can be used to access your account in the event you lose access to your device and cannot receive two-factor authentication codes.": "恢復碼可用於在您無法訪問裝置且無法接收雙重身份驗證碼的情況下訪問您的帳戶。",
                "Downloaded": "已下載",
                "Show": "顯示",
                "Fallback SMS number": "備用手機號碼",
                "Providing a fallback SMS number will allow GitHub to send your two-factor authentication codes to an alternate device if you lose your primary device.": "如果您丟失主要裝置，提供備用手機號碼將允許 GitHub 將您的雙重身份驗證碼傳送到備用裝置。",
                "Recovery tokens": "恢復令牌",
                "Account recovery with Facebook is a simple way to recover your account.": "使用 Facebook 恢復帳戶是一種恢復帳戶的簡單方法。",
                "Configured": "已配置",
                "Not configured": "未配置",
                "No security keys": "未配置安全金鑰",
                "Viewed": "檢視於",
                "No fallback SMS number": "未設定備用手機號碼",
                "No recovery tokens": "未設定恢復令牌",

                "Sessions": "會話",
                "This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.": "這是已登入您帳戶的裝置列表。 撤銷任何您不認識的會話。",
                "See more": "檢視更多",
                "Your current session": "您當前的會話",
                "Last accessed on": "最後訪問日期：",
                "Session details": "會話詳情",
                "Revoke session": "撤銷會話",
                "Device:": "裝置：",
                "Last location:": "最後的位置：",
                "Signed in:": "登入：",
                "View all sessions": "檢視所有會話",

            // SSH and GPG keys SSH 與 GPG 公鑰 https://github.com/settings/keys
                "SSH keys": "SSH 金鑰",
                "New SSH key": "新建 SSH 金鑰",
                "There are no SSH keys associated with your account.": "沒有與您的帳戶關聯的 SSH 金鑰。",
                "This is a list of SSH keys associated with your account. Remove any keys that you do not recognize.": "這是與您的帳戶相關的 SSH 金鑰的列表。刪除任何您無法識別的金鑰。",
                "Check out our guide to": "請看我們的指南",
                "generating SSH keys": "生成 SSH 金鑰",
                "or troubleshoot": "或解決",
                "common SSH problems": "常見的 SSH 問題",
                "GPG keys": "GPG 金鑰",
                "New GPG key": "新建 GPG 金鑰",
                "There are no GPG keys associated with your account.": "沒有與您的帳戶關聯的 GPG 金鑰。",
                "This is a list of GPG keys associated with your account. Remove any keys that you do not recognize.": "這是與您的帳戶相關的 GPG 金鑰的列表。刪除任何您無法識別的金鑰。",
                "Email address:": "電子郵件地址：",
                "Key ID:": "金鑰 ID：",
                "Subkeys:": "子金鑰：",
                "Learn how to": "瞭解如何",
                "generate a GPG key and add it to your account": "生成 GPG 金鑰並將其新增到您的帳戶",
                "Vigilant mode": "警戒模式",
                "Flag unsigned commits as unverified": "將未簽名的提交標記為未驗證",
                "This will include any commit attributed to your account but not signed with your GPG or S/MIME key.": "這將包括任何歸屬於您的帳戶但沒有用您的 GPG 或 S/MIME 金鑰簽名的提交。",
                "Note that this will include your existing unsigned commits.": "請注意，這將包括您現有的未簽名的提交。",
                "Learn about vigilant mode": "瞭解警戒模式",
                "/ Add new": "/ 新添",
                "Title": "標題",
                "Key": "金鑰",
                "Add SSH key": "新增 SSH 金鑰",
                "Key is invalid. You must supply a key in OpenSSH public key format": "金鑰無效。您必須提供 OpenSSH 公鑰格式的金鑰",
                "We got an error doing that.": "我們在這樣做時出錯了。",
                "Add GPG key": "新增 GPG 金鑰",
                "Are you sure you want to delete this SSH key?": "您確定要刪除此 SSH 金鑰嗎？",
                "This action": "該操作",
                "cannot": "不能",
                "be undone. This will permanently delete the SSH key and if you’d like to use it in the future, you will need to upload it again.": "被撤銷。這將永久地刪除 SSH 金鑰，如果您想在未來使用它，您將需要再次上傳它。",
                "I understand, please delete this SSH key": "我明白了，依然刪除該 SSH 金鑰",
                "Are you sure you want to delete this GPG key?": "您確定要刪除此 GPG 金鑰嗎？",
                "be undone. This will permanently delete the GPG key, and if you’d like to use it in the future, you will need to upload it again.": "被撤銷。這將永久地刪除 GPG 金鑰，如果您想在未來使用它，您將需要再次上傳它。",
                "Any commits you signed with this key will become unverified after removing it.": "刪除後，您使用此金鑰簽名的任何提交都將變成未驗證。",
                "I understand, delete this GPG key": "我明白了，依然刪除該 GPG 金鑰",
                "Okay, you have successfully deleted that key.": "好的，您已成功刪除該金鑰。",

            // Organizations 組織 https://github.com/settings/organizations
                "You are not a member of any organizations.": "您暫無任何組織。",

                "owner": "所有者",
                "Leave": "離開",

                "Transform account": "帳戶變更",
                "You cannot transform this account into an organization until you leave all organizations that you’re a member of.": "在您離開您所屬的所有組織之前，您無法將此帳戶轉換為組織。", // 存在所屬組織時
                "Account transformation warning": "帳戶變更警告",
                "What you are about to do is an irreversible and destructive process. Please be aware:": "這將是一個不可逆轉的過程，請確認：",
                "Any user-specific information (OAuth tokens, SSH keys, Job Profile, etc) will be erased": "任何使用者特定的資訊（OAuth 令牌, SSH 金鑰, 職位簡介, 等）將被刪除。",
                "create a new personal account": "建立一個新的個人帳戶",
                "The total amount of collaborators across private repositories will be the total amount of seats for the organization": "跨私人倉庫的合作者總數將是該組織的席位總數",

            // Blocked users 黑名單 https://github.com/settings/blocked_users
                "Block a user": "拉黑使用者",
                "Blocking a user prevents the following on all your repositories:": "拉黑使用者可以防止所有倉庫中的以下操作：",
                "opening or commenting on issues or pull requests": "開啟或評論議題或拉取請求",
                "starring, forking, or watching": "加星標、復刻、關注",
                "adding or editing wiki pages": "新增或編輯 Wiki 頁面",
                "Additionally, blocked users are not able to:": "此外，被拉黑使用者無法：",
                "invite you as a collaborator to their repositories": "邀請您作為其倉庫的協作者",
                "follow your account’s public activity": "關注您的帳戶的公共活動",
                "send you notifications by @mentioning your username in public repositories": "在公共倉庫中透過 @您 向您傳送通知",
                "Search by username, full name or email address": "搜尋使用者名稱、全名、或電子郵箱",
                    "Learn more about blocking a user": "瞭解更多關於拉黑使用者的資訊",
                "Block user": "拉黑使用者",
                "You have not blocked any users.": "您還沒有拉黑任何使用者。",
                "Unblock": "取消拉黑",
                "Warn me when a blocked user is a prior contributor to a repository": "請警告我，當被拉黑的使用者是倉庫的先前貢獻者時",
                "On repositories you haven’t contributed to yet, we’ll warn you when a user you’ve blocked has previously made contributions.": "在您還沒有貢獻的倉庫裡，當您拉黑的使用者之前有貢獻時，我們會警告您。",

            // Interaction limits 互動限制 https://github.com/settings/interaction_limits
                "Temporary interaction limits": "臨時互動限制",
                "Temporarily restrict which external users can interact with your repositories (comment, open issues, or create pull requests) for a configurable period of time.": "在配置的時間段內，可臨時限制哪些外部使用者與您的倉庫互動（評論、開啟議題或建立拉取請求）。",
                "This may be used to force a \"cool-down\" period during heated discussions or prevent unwanted interactions.": "可用於在激烈討論期間，強制進入 “冷靜” 期或防止不必要的互動。",
                "Interaction limits may already exist in your account's": "互動限制可能已經存在於您的",
                "public repositories": "公開倉庫",
                ". Any changes here will override those limits.": " 的設定中。此處的全域性設定將覆蓋那些倉庫的區域性設定。",
                "Limit to existing users": "僅限現有使用者",
                    "Users that have recently created their account will be unable to interact with your repositories.": "最近建立帳戶的使用者將無法與您的倉庫互動。",
                "Limit to prior contributors": "僅限於先前的貢獻者",
                    "Users that have not previously committed to the default branch of one of your repositories will be unable to interact with that repository.": "以前從未提交到您某個倉庫預設分支的使用者將無法與該倉庫互動。",
                "Limit to repository collaborators": "僅限倉庫協作者",
                    "Users that are not collaborators of one of your repositories will not be able to interact with that repository.": "不是您某個倉庫的協作者將無法與該倉庫互動。",
                "New users": "新使用者",
                "Users": "使用者",
                "Contributors": "貢獻者",
                "Collaborators": "協作者",
                // 互動限制時間 下拉選單
                "Enable interaction limits for:": "啟用互動限制：",
                "24 hours": "24 小時",
                "3 days": "3 天",
                "1 week": "1 周",
                "1 month": "1 個月",
                "6 months": "6 個月",
                // 頂部提醒
                "User interaction limit settings saved.": "使用者互動限制設定已儲存。",

            // Code review limits 程式碼審查限制 https://github.com/settings/code_review_limits
                "Restrict users who are permitted to approve or request changes on pull requests in your public repositories.": "限制允許批准或請求更改公共倉庫中拉取請求的使用者。",
                "Code review limits may already be specified by individual repositories. Any changes here will override those limits until unset.": "程式碼審查限制可能已經由各個倉庫指定。此處的任何更改都將覆蓋這些限制，直至取消設定。",
                "Code review limits are currently managed individually for all repositories. Enable limits to permit only users who have explicitly been granted access to each repository to submit reviews that \"approve\" or \"request changes\". Remove limits to allow all users to submit pull request reviews. All users able to submit comment pull request reviews will continue to be able to do so.": "目前，所有倉庫程式碼審查限制都是單獨管理的。啟用限制，只允許明確授予每個倉庫訪問權的使用者提交 “批准” 或 “請求更改” 的審查。刪除限制，允許所有使用者提交拉取請求審查。所有能夠提交評論拉取請求審查的使用者將繼續能夠這樣做。",
                "Limit reviews on all repositories": "限制對所有倉庫的審查",
                "Remove review limits from all repositories": "取消對所有倉庫的審查限制",

            // Repository 倉庫 https://github.com/settings/repositories
                "Repository default branch": "倉庫預設分支",
                "Choose the default branch for your new personal repositories. You might want to change the default name due to different workflows, or because your integrations still require “master” as the default branch name. You can always change the default branch name on individual repositories.": "為您新的個人倉庫選擇預設的分支。由於工作流程的不同，或者由於您的整合仍然需要 “master” 作為預設分支名，您可能想改變預設名稱。您可以隨時改變個人倉庫的預設分支名稱。",
                "Learn more about default branches.": "瞭解更多關於預設分支的資訊。",
                "Update": "更新",
                "Deleted repositories": "刪除的倉庫",

            // 刪除的倉庫 https://github.com/settings/deleted_repositories
                "It may take up to an hour for repositories to be displayed here. You can only restore repositories that have no forks or have not been forked.": "倉庫可能需要一個小時的時間才能顯示在這裡。您只能恢復沒有復刻或沒有被複刻的倉庫。",

            // Packages 軟體包 https://github.com/settings/deleted_packages
                "Deleted Packages": "刪除軟體包",
                "These are packages that have been previously deleted belonging to you. You can restore a package deleted within the last 30 days.": "這些是先前已刪除的屬於您的軟體包。您可以恢復在過去 30 天內刪除的包。",
                "Search deleted packages": "搜尋已刪除的軟體包",

                "Deleted": "刪除於",
                // [/by/, "由"], // 刪除的倉庫
                "Restore": "恢復",
                "Queue…": "排隊中…",
                "Done!": "完成!",

                // 恢復倉庫 對話方塊
                // [/Are you sure you want to restore ([^ ]+)?/, "您確定要恢復 $1 嗎？"],
                "This repository will be in a private state when it is restored. To change this state, go to settings once the repo is restored.": "此倉庫在恢復時將處於私有狀態。要更改此狀態，請在倉庫恢復後轉到設定。",
                "Any team or collaborator permissions that previously existed for this repository will not be restored. If you require specific team or collaborator permissions, you will need to configure them in settings.": "此倉庫以前存在的任何團隊或協作者的許可權將不會被恢復。如果您需要特定的團隊或協作者許可權，則需要在設定中配置。",
                "I understand, restore this repository": "我明白了，依然恢復該倉庫。",

            // GitHub Pages https://github.com/settings/pages
                "Verified domains": "經驗證的域名",
                "Add a domain": "新增域名",
                "There are no verified domains.": "暫無經驗證的域名",
                "Verify domains to restrict who can publish GitHub Pages on them.": "驗證域名以限制誰可以在上面釋出 GitHub Pages。",

            // GitHub Pages - 新增域名 https://github.com/settings/pages_verified_domains/new
                "Add a verified domain": "經驗證的域名",
                "What domain would you like to add?": "您想新增什麼域名？",
                "Add domain": "新增域名",

            // Saved replies 快捷回覆 https://github.com/settings/replies
                "Saved replies are re-usable text snippets that you can use throughout GitHub comment fields. Saved replies can save you time if you’re often typing similar responses.": "快捷回覆是可重複使用的文字片段，您可以在整個 GitHub 評論區使用。如果您經常輸入類似的回覆，快捷回覆可以節省您的時間。",
                "No saved replies yet.": "暫時沒有快捷回覆。",
                "Add a saved reply": "新增快捷回覆",
                "Saved reply title": "快捷回覆的標題",
                "Add a short title to your reply": "為您的快捷回覆新增簡短的標題",
                "Add your saved reply": "新增您的快捷回覆",
                "Add saved reply": "新增快捷回覆",
                "Your saved reply was created successfully.": "您的快捷回覆已成功建立。",
                "Edit saved reply": "編輯快捷回覆",
                "Update saved reply": "更新快捷回覆",
                "Your saved reply was updated successfully.": "您的快捷回覆已成功更新。",

            // 程式碼安全性與分析 https://github.com/settings/security_analysis
                "Configure security and analysis features": "配置安全和分析功能",
                "Security and analysis features help keep your repositories secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your repositories.": "安全和分析功能有助於確保您的倉庫安全和更新。透過啟用這些功能，您授予我們對您的倉庫執行只讀分析的許可權。",

                "Disable all": "禁用全部",
                "Enable all": "啟用全部",

                "Dependency graph": "依賴關係圖",
                    "Understand your dependencies.": "瞭解您的依賴項。",
                    "Automatically enable for new private repositories": "為新私有倉庫自動啟用",

                    // 對話方塊
                    "Disable dependency graph": "禁用依賴關係圖",
                    "You're about to disable dependency graph on all your private repositories. This will also disable Dependabot alerts and Dependabot security updates on those repositories.": "您即將禁用您所有私有倉庫上的依賴關係圖。這也將禁用這些倉庫的 Dependabot 警報和 Dependabot 安全更新。",
                    "Enable by default for new private repositories": "預設為新私有倉庫啟用",

                    "Enable dependency graph": "啟用依賴關係圖",
                    "You're about to enable dependency graph on all your private repositories.": "您即將啟用您所有私有倉庫上的依賴關係圖。",

                // "Dependabot alerts": "Dependabot 警報",
                    "Be alerted when a new vulnerability is found in one of your dependencies.": "在您的依賴項中發現新漏洞時收到警報。",
                    "Automatically enable for new repositories": "為新倉庫自動啟用",

                    // 對話方塊
                        "Disable Dependabot alerts": "禁用 Dependabot 警報",
                        "You're about to disable Dependabot alerts on all your repositories. This will also disable Dependabot security updates on those repositories.": "您即將禁用您所有倉庫上的 Dependabot 警報。這也將禁用這些倉庫的 Dependabot 安全更新。",
                        "Enable by default for new repositories": "預設為新倉庫啟用",

                        "Enable Dependabot alerts": "啟用 Dependabot 警報",
                        "You're about to enable Dependabot alerts on all your repositories. Alerts require the dependency graph, so we'll also turn that on for all repositories.": "您即將啟用您所有倉庫上的 Dependabot 警報。Dependabot 警報需要依賴關係圖，因此我們還將為所有倉庫開啟它。",

                "Dependabot security updates": "Dependabot 安全更新",
                    "Easily upgrade to non-vulnerable dependencies.": "輕鬆升級到無漏洞的依賴項。",

                    // 對話方塊
                    "Disable Dependabot security updates": "禁用 Dependabot 安全更新",
                    "You're about to disable Dependabot security updates on all your repositories.": "您即將禁用您所有倉庫上的 Dependabot 安全更新。",
                    "Enable Dependabot security updates": "啟用 Dependabot 安全更新",
                    "You're about to enable Dependabot security updates on all your repositories. Dependabot security updates require the dependency graph and Dependabot alerts, so we'll also turn that on for all repositories.": "您即將啟用您所有倉庫上的 Dependabot 安全更新。Dependabot 安全更新需要依賴關係圖和 Dependabot 警報，因此我們還將為所有倉庫開啟它。",

            // Applications 應用 https://github.com/settings/installations
                "Installed GitHub Apps": "安裝的 GitHub 應用",
                "GitHub Apps augment and extend your workflows on GitHub with commercial, open source, and homegrown tools.": "GitHub 應用透過商業、開源和自主開發的工具來增強和擴充套件您在 GitHub 上的工作流程。",
                "Configure": "配置",

            // 定時提醒 https://github.com/settings/reminders
                "Edit reminder": "編輯提醒者",

            // 新的預定提醒 https://github.com/settings/reminders/<組織名>
                "New scheduled reminder": "新建預定提醒",
                "Slack workspace": "Slack 工作區",
                "Authorize Slack workspace": "授權 Slack 工作區",
                "Days": "天",
                    "Weekdays": "工作日",
                    "Monday"    : "週一",
                    "Tuesday"   : "週二",
                    "Wednesday" : "週三",
                    "Thursday"  : "週四",
                    "Friday"    : "週五",
                    "Saturday"  : "週六",
                    "Sunday"    : "週日",
                "Times": "時間",
                    "Filter": "篩選",
                "Review requests assigned to you": "審查分配給您的請求",
                    "Receive reminders for reviews waiting on you.": "接收等待您的審查提醒。",
                "Review requests assigned to your team": "審查分配給您團隊的請求",
                    "Receive reminders for reviews waiting on your team.": "接收等待您的團隊的審查提醒。",
                "Enable real-time alerts": "啟用實時警報",
                    "Receive immediate Slack messages when certain events happen": "當某些事件發生時，會立即收到 Slack 訊息",

                "You will only receive notifications from public repositories in this organization because the current plan for": "您將只收到來自該組織中公共倉庫的通知，因為目前",
                "does not support reminders for private repositories.": "的計劃不支援私人倉庫的提醒。",
                "Upgrade to Team": "升級為團隊",
                "Create reminder": "建立提醒者",

            // Security log 安全日誌 https://github.com/settings/security-log
                "Loading audit log entries…": "正在載入日誌條目...",
                "Filters": "篩選",
                    "Yesterday’s activity": "昨天的活動",
                    "Repository management": "倉庫管理",
                    "Billing updates": "賬單更新",
                "Search your security log": "搜尋您的安全日誌",
                "Clear current search query": "清除當前的搜尋查詢",
                "Export": "匯出",
                "Recent events": "最近的事件",
                // [/Found (\d+) events?/, "發現 $1 個活動"],
                "Newer": "新的",
                "Older": "舊的",

            // Sponsorship log 贊助日誌 https://github.com/settings/sponsors-log
                "Sponsors log": "贊助日誌",
                "New sponsorships, changes, and cancellations": "新的贊助、更改和取消",
                "Period:": "週期：",
                "Filter activity": "篩選活動",
                "All-time": "所有時間",
                "Past Day": "過去一天",
                "Past Week": "過去一週",
                "Past Month": "過去一月",
                "Past Year": "過去一年",
                "No sponsorship activity in this time period": "這段時間沒有贊助活動",
                "This is where you can review activity from your sponsorships.": "您可以在此處檢視您的贊助活動。",

            // https://github.com/settings/apps/authorizations
                "Authorized GitHub Apps": "授權的 GitHub 應用",
                "No authorized applications": "無授權申請",
                "You have no applications authorized to access your account.": "您沒有授權訪問您的帳戶的應用程式。",

            // https://github.com/settings/applications
                "Authorized OAuth Apps": "授權的 OAuth 應用",
                "You have granted": "您已經授權",
                "access to your account.": "訪問您的帳戶。",
                "Revoke all": "撤銷全部",
                "Sort": "排序",
                "Sort by": "排序方式",
                "Alphabetical": "按字母排列",
                "Recently used": "最近使用的",
                "Least recently used": "最近使用最少的",

                "Last used within the last week · Owned by": "最後一次使用是最近 1 周之內 · 作者",

                // 撤銷對話方塊
                "Are you sure you want to revoke authorization?": "您確定要撤銷授權嗎？",
                "I understand, revoke access": "我明白了，依然撤銷訪問",

                // 全部撤銷對話方塊
                "Are you sure you want to revoke access for all applications?": "您確定要撤銷對所有應用程式的訪問許可權嗎？",
                "This will revoke access for": "這將撤銷訪問",
                "all third-party": "所有第三方",
                "OAuth applications. This action cannot be undone.": "OAuth 應用程式。此操作無法撤消。",
                "Any SSH keys created on your behalf by applications will also be deleted.": "任何由應用程式代表您建立的 SSH 金鑰也將被刪除。",
                "Type your username to confirm.": "輸入您的使用者名稱進行確認。",
                "I understand, revoke access for everything": "我明白了，依然撤銷對一切的訪問",

                // 舉報濫用對話方塊
                "Report Abuse": "舉報濫用",
                "More options": "更多選項",
                "Revoking will deny future access to your account": "撤銷授權，將拒絕今後訪問您的帳戶",

            // https://github.com/settings/installations/<id>
                "Installed": "安裝於",
                "Developed by": "開發者",
                "Permissions": "許可權",
                "Repository access": "倉庫訪問許可權",
                "All repositories": "所有倉庫",
                "This applies to all current": "這適用於所有當前",
                "and": "和",
                "future repositories.": "未來的倉庫。",
                "Only select repositories": "僅選定的倉庫",
                    "Select at least one repository. Max 100 repositories.": "至少選擇一個倉庫。最多 100 個倉庫。",
                "Select repositories": "選擇倉庫",
                "Search for a repository": "搜尋倉庫",

                "Danger zone": "危險區",
                "Suspend your installation": "暫停使用",
                "This will block the app access to your resources.": "這將阻止應用訪問您的資源。",
                "Suspend": "暫停",
                    // 取消按鈕 提醒資訊
                    "Are you sure you want to suspend this GitHub App?": "您確定要暫停此 GitHub 應用程式嗎？",
                "This will remove the app and revoke access to all resources.": "這將刪除應用並撤銷對所有資源的訪問許可權。",
                "Uninstall": "解除安裝",
                    // 取消按鈕 提醒資訊
                    // [/This action cannot be undone. Are you sure you want to uninstall this GitHub App from (\d+) repositor(y|ies)?/, "此操作無法撤消。您確定要從 1 個倉庫中解除安裝此 GitHub 應用程式嗎？"],


                "Report abuse": "舉報濫用",
                "Revoke": "撤銷",
                "Read more about connecting with third-party applications at": "瞭解更多關於與第三方應用程式連線的資訊，請訪問",
                "GitHub Help": "GitHub 幫助",

            // 啟用雙重身份驗證 https://github.com/settings/two_factor_authentication/setup/intro
                // 提示
                "You’re about to change your two-factor authentication device. This will invalidate your current two-factor devices and recovery codes. This will not affect your fallback SMS configuration. It can be updated on the two-factor settings page.": "您即將更改雙重身份驗證裝置。這將使您當前的雙重身份驗證裝置和恢復碼失效。這不會影響您的備用 SMS 配置。它可以在雙重身份驗證設定頁面上更新。",
                // 第1步
                "Two-factor authentication (2FA) is an extra layer of security used when logging into websites or apps.": "雙重身份驗證 (2FA) 是登入網站或應用程式時使用的額外安全層。",
                "Set up using an app": "使用 “身份驗證器” 應用進行設定",
                "Use an application on your phone to get two-factor authentication codes when prompted. We recommend using cloud-based TOTP apps such as:": "出現提示時，使用手機上的 “身份驗證器” 應用獲取雙重身份驗證碼。我們建議使用基於雲的 TOTP 應用程式，例如：",
                ", or": " 或",
                "Set up using SMS": "使用簡訊設定",
                "GitHub will send you an SMS with a two-factor authentication code when prompted. SMS cannot be delivered in all countries. Check that": "GitHub 會在出現提示時向您傳送帶有雙重身份驗證碼的簡訊。簡訊無法在所有國家/地區傳送。請檢查一下",
                "your country is supported": "您所在的國家/地區是否受支援，",
                "before you select this option.": "在選擇此選項之前。",
                    // 取消按鈕 提醒資訊
                    "Two-factor authentication changes are not yet saved. Are you sure you want to cancel?": "尚未儲存雙重身份驗證更改。您確定要取消嗎？",
                "Continue": "繼續",

                // 第2步 app
                "Authentication verification": "身份驗證",
                "Scan the image below with the two-factor authentication app on your phone. If you can’t use a QR code,": "使用手機上的雙重 “身份驗證器” 應用掃描下面的影象。如果您無法使用二維碼，",
                "enter this text code": "輸入此文字程式碼",
                "Your two-factor secret": "您的雙重身份驗證金鑰",
                "instead.": "代替。",
                "Enter the six-digit code from the application": "輸入 “身份驗證器” 應用中的六位動態驗證碼",
                "After scanning the QR code image, the app will display a six-digit code that you can enter below.": "掃描二維碼影象後，“身份驗證器” 應用將顯示一個六位動態驗證碼，您可以在下方輸入。",
                "Two-factor code verification failed. Please try again.": "雙重身份驗證碼驗證失敗。請再試一次。",

                // 第2步 SMS
                "We will send authentication codes to your mobile phone during sign in.": "我們會在您登入時向您的手機發送驗證碼。",
                "Country code": "國家程式碼",
                "Phone number": "手機號碼",
                "Authentication codes will be sent here.": "驗證碼將傳送到此手機號碼。",
                "Send authentication code": "傳送驗證碼",
                "Enter the six-digit code sent to your phone": "輸入傳送到您手機上的六位驗證碼",
                "It may take a minute to arrive.": "可能需要一分鐘才能到達。",

                // 第3步
                "Save your recovery codes": "儲存您的恢復碼",
                "Download": "下載",
                "Why is saving you recovery codes important?": "為什麼儲存您的恢復碼很重要？",
                "If you lose access to your phone, you can authenticate to GitHub using your recovery codes. We recommend saving them with a secure password manager.": "如果您無法訪問手機，可以使用恢復碼向 GitHub 進行身份驗證。我們建議使用安全的密碼管理器儲存它們。",
                "I have saved my recovery codes": "我已經儲存了我的恢復碼",

                // 第4步
                "Two-factor authentication activated": "雙重身份驗證已啟用",
                "The next time you login from an unrecognized browser or device, you will need to provide a two-factor authentication code.": "下次從無法識別的瀏覽器或裝置登入時，您需要提供一個雙重身份驗證碼。",
                "Done": "完成",

            // 管理雙重身份驗證 https://github.com/settings/two_factor_authentication/configure
                "Two-factor authentication is currently on": "目前雙重身份驗證啟用中",
                "Disable two-factor authentication": "禁用雙重身份驗證",
                "Recover accounts elsewhere": "在別處恢復帳戶",
                "GitHub can": "GitHub 可以",
                "store a recovery token with another provider": "將恢復令牌儲存在另一個提供商處",
                ". This can be used to help verify your identity if you get locked out of your account.": " 如果您的帳戶被鎖定，這可以用來幫助驗證您的身份。",
                "Recover your GitHub account with:": "使用以下恢復您的 GitHub 帳戶：",
                // 恢復碼
                "GitHub Support cannot restore access to accounts with two-factor authentication enabled for security reasons,": "出於安全原因，GitHub 支援部門無法恢復已啟用雙重身份驗證的帳戶的訪問，",
                "saving your recovery codes in a safe place can help keep you from being locked out of your account": "將您的恢復碼儲存在一個安全的地方，可以幫助您避免您的帳戶被鎖定",
                "View recovery codes": "檢視恢復碼",
                // 備用手機
                "For security reasons, GitHub Support cannot restore access to accounts with two-factor authentication enabled. If you lose access to both your primary device and your recovery keys, a backup SMS number can get you back in to your account.": "出於安全原因，GitHub 支援部門無法恢復對啟用了雙重身份驗證的帳戶的訪問。如果您無法訪問主裝置和恢復金鑰，一個備用手機號碼可以讓您重新訪問您的帳戶。",
                "Add fallback SMS number": "新增備用手機號碼",
                // 新增備用手機號碼對話方塊
                "Please note that SMS deliverability is only available in": "請注意，簡訊送達僅適用於",
                "certain countries": "某部分國家/地區",
                "Set fallback": "設定備用手機號碼",
                "Setting fallback…": "設定備用手機號碼中…",

                "\{\"error\"\:\"We tried delivering an SMS to that number, but the number doesn't seem to be valid.\"\}": "\{\"錯誤\"\: \"我們嘗試向該號碼傳送簡訊，但該號碼似乎無效。\" \}",
                // 驗證備用手機號碼對話方塊
                "Verify your fallback number": "驗證您的備用手機號碼",
                "Verification code": "驗證碼",
                "We sent a verification code to your phone.": "我們向您的手機發送了一個驗證碼。",
                "Verify": "驗證",
                "Verifying…": "驗證中…",
                "Verification failed. Please re-enter the OTP again.": "驗證失敗。請重新輸入 OTP。",
                "You have exceeded our SMS rate limit. You will not be able to send another SMS for the next hour.": "您已經超出了我們的簡訊速率限制。在接下來的一小時內，您將不能再發送簡訊。",

                // 交付選項
                "Delivery options": "交付選項",
                "Your primary delivery method is:": "您的主要交付方式是：",
                "authenticator application": "“身份驗證器” 應用",
                "Reconfigure two-factor authentication": "重新配置雙重身份驗證",
                // 安全金鑰
                "Security keys can be used as your second factor of authentication instead of a verification code.": "安全金鑰可用作您的第二個身份驗證因素，而不是驗證碼。",
                "about configuring a security key.": "關於配置安全金鑰。",
                "Register new security key": "註冊新安全金鑰",
                "Enter a nickname for this security key": "輸入安全金鑰的暱稱",
                    "Waiting for security key": "等待安全金鑰",
                    "Follow your browser's steps to register your security key with GitHub.": "按照瀏覽器的步驟，向 Github 註冊安全金鑰。",
                    "Security key registration failed.": "安全金鑰註冊失敗。",
                    "Try again": "請重試",
                // GitHub 移動應用
                "GitHub Mobile can be used as your second factor of authentication instead of a verification code.": "GitHub 移動應用可用作您的第二個身份驗證因素，而不是驗證碼。",
                "about two-factor authentication with GitHub Mobile.": "關於 GitHub 移動應用的雙重身份驗證。",
                "To configure your device, install GitHub Mobile for": "要配置您的裝置，請安裝 GitHub 移動應用適用於",
                "and sign in to your account.": "，並登入您的帳戶。",
                // [/registered on/, "註冊於"], // 已註冊

                "Back to settings": "返回設定",

            // 檢視恢復碼 https://github.com/settings/auth/recovery-codes
                "Two-factor recovery codes": "雙重身份驗證恢復碼",
                "Treat your recovery codes with the same level of attention as you would your password! We recommend saving them with a password manager such as": "像對待密碼一樣重視您的恢復碼！我們建議使用密碼管理器儲存它們，例如",
                "Put these in a safe spot.": "將恢復碼放在安全的地方。",
                "If you lose your device and don’t have the recovery codes you will lose access to your account.": "如果您丟失了裝置並且沒有恢復碼，您將無法訪問您的帳戶。",
                "Print": "列印",
                "Copy": "複製",
                "Generate new recovery codes": "生成新的恢復碼",
                "When you generate new recovery codes, you must download or print the new codes. Your old codes won’t work anymore.": "當您生成新的恢復碼時，您必須下載或列印新恢復碼。您的舊恢復碼將失效。",

        },
        "regexp": [ // 正則翻譯
            // 帳戶 /settings/admin
            [/is available\./, "可用。"],
            [/Username ([^ ]+) is not available\. Please choose another\. To submit a trademark claim, please see our/, "使用者名稱 $1 不可用。請重新選擇一個。要提交商標索賠，請看我們的"],
            [/By clicking \"Add Successor\" below, I acknowledge that I am the owner of the([^@]+@[^\n]+) account, and am authorizing GitHub to transfer content within that account to my GitHub Successor,/, "透過點選下面的 “新增繼任者”，我承認我是 $1 帳戶的所有者，並授權 GitHub 將該帳戶內的內容轉讓給我的 GitHub 繼任者。"],
            [/immediately delete all of your repositories \((\d+)\)/, "立即刪除您所有的倉庫（$1個）"],
            // Emails 頁面
            [/This email will not be used as the 'from' address for web-based Git operations, e\.g\., edits and merges. We will instead use ([^@]+@users.noreply.github.com)\./, "該電子郵箱不會用作基於 Web 的 Git 操作（例如編輯和合並）的 “發件人” 地址。我們將改為使用 $1。"],
            [/Your primary email was changed to ([^@]+@[^\n]+)\./, "您的主電子郵箱已更改為 $1"],
            //  倉庫
            [/(\d+) collaborators/, "$1 協作者"],
            [/No recoverable repositories were found for ([^ ]+)\./, "沒有找到 $1 的可恢復倉庫。"],
            // 組織 頁面
            [/Turn ([^ ]+) into an organization/, "變更 $1 為一個組織"],
            // /settings/apps/authorizations
            [/You will no longer be able to sign in to ([^ ]+) \(all administrative privileges will be bestowed upon the owners you choose\)/, "您將無法再登入 $1（所有管理許可權都將授予您選擇的所有者）"],
            [/Any commits credited to ([^ ]+) will no longer be linked to this GitHub account/, "任何屬於 $1 的提交將不再關聯到這個 GitHub 帳戶"],
            [/If you are using ([^ ]+) as a personal account, you should/, "如果您正在使用 $1 作為個人帳戶，您應"],
            [/before transforming ([^ ]+) into an organization./, "在轉化 $1 組織之前。"],
            // 軟體庫
            [/No recoverable packages were found for ([^ ]+)./, "沒有找到 $1 的可恢復包。"],
            [/(\d+) applications?/, "$1 個應用"],
            // /settings/applications
            [/([^ ]+) will no longer be able to access your GitHub account. You cannot undo this action./, "$1 將無法再訪問您的 GitHub 帳戶。您無法撤消此操作。"],
            [/([^ ]+) has been revoked from your account./, "$1 已經從您的帳戶中被撤銷了。"],
            [/Last used within the last (\d+) weeks? · Owned by/, "最後一次使用是最近 $1 周之內 · 作者"],
            [/Last used within the last (\d+) months? · Owned by/, "最後一次使用是最近 $1 月之內 · 作者"],
            [/Reporting ([^ ]+) will contact Support about abuse on the application./, "舉報 $1 將就應用程式濫用問題聯絡支援人員。"],
            [/Revoke ([^ ]+)/, "撤銷 $1"],
            [/Report ([^ ]+)/, "舉報 $1"],
            // /settings/installations/5478903
            [/Selected (\d+) repositor(y|ies)./, "選擇了 $1 個倉庫。"],
            [/Uninstall "([^ ]+)"/, "解除安裝 “$1”"],
            // /settings/billing
            [/You've cancelled your subscription to ([^ ]+)\. This plan change will take effect on (\d{4}-\d{2}-\d{2})./, "您已取消訂閱 $1 。此計劃更改將於 $2 生效。"],
            [/Found (\d+) events?/, "發現 $1 個活動"], // 安全日誌
            [/Leaving it at (\$\d+\.\d{2}) will avoid any extra expenses/, "將其限制在 $1 美元將避免任何額外的費用。"], // 支付限額
            [/In addition to your personal account, you have (\d+) organizations? account/, "除了個人帳戶外，您還有 $1 個組織帳戶"],
            [/Okay, ([^ ]+) was updated for the ([^ ]+) account./, "好的，$1 已針對 $2 帳戶進行了更新。"],
            [/This action cannot be undone. Are you sure you want to uninstall this GitHub App from (\d+) repositor(y|ies)?/, "此操作無法撤消。您確定要從 $1 個倉庫中解除安裝此 GitHub 應用程式嗎？"],
            [/by/, "由"], // 刪除的倉庫
            [/Are you sure you want to restore ([^ ]+)?/, "您確定要恢復 $1 嗎？"], // 刪除的倉庫
            [/outside collaborator on (\d+) repositor(y|ies)/, "$1 個倉庫的外部協作者"], // 設定 - 組織
            [/Are you positive you want to leave ([^ ]+)\? You will lose access to all repositories and teams./, "您確定要離開 $1 嗎？您將失去對所有倉庫和團隊的訪問權。"], // 設定 - 組織 離開按鈕 提醒
            [/Are you positive you want to leave ([^ ]+)\? You will lose access to all repositories./, "您確定要離開 $1 嗎？您將失去對所有倉庫的訪問權。"], // 設定 - 組織 離開按鈕 提醒
            [/(\d+) devices?/, "$1 個裝置"], // 設定--> 密碼和身份驗證頁
            [/registered on/, "註冊於"], // 雙重身份驗證設定頁
        ],
    },

    "settings/apps": {
        "static": { // 靜態翻譯
            // GitHub 應用程式 https://github.com/settings/apps
                "Register a new GitHub App": "註冊新的 GitHub 應用程式",
                "Want to build something that integrates with and extends GitHub?": "想要構建與 GitHub 整合和擴充套件的東西嗎？",
                "New GitHub App": "新 GitHub 應用程式",
                "to get started developing on the GitHub API. You can also read more about building GitHub Apps in our": "，開始在 GitHub API 上進行開發。您還可以在我們的文件中閱讀有關構建 GitHub 應用程式的更多資訊",
                "developer documentation": "開發者文件",

            // 註冊 GitHub 應用程式 https://github.com/settings/apps/new
                "Register new GitHub App": "註冊新 GitHub 應用",
                "GitHub App name": "GitHub 應用名稱",
                "The name of your GitHub App.": "您的 GitHub 應用的名稱。",
                "Markdown supported": "支援 Markdown 語法",
                "This is displayed to users of your GitHub App": "展示給 GitHub 應用的使用者",
                "Homepage URL": "主頁地址",
                "The full URL to your GitHub App’s website.": "GitHub 應用網站的主頁地址",
                "Identifying and authorizing users": "識別並授權使用者",
                "The full URL to redirect to after a user authorizes an installation.": "使用者授權安裝後重定向到的完整地址。",
                "Add Callback URL": "添加回調地址",
                "Callback URL": "回撥地址",
                "Expire user authorization tokens": "使用者授權令牌",
                "This will provide a": "這將提供一個",
                "which can be used to request an updated access token when this access token expires.": "，用於在此訪問令牌到期時，請求更新訪問令牌。",
                "Request user authorization (OAuth) during installation": "在安裝期間請求使用者授權 (OAuth)",
                "Requests that the installing user grants access to their identity during installation of your App": "請求使用者在安裝應用期間授予其身份訪問許可權。",
                "Identifying and authorizing users for GitHub Apps documentation": "關於 GitHub 應用程式識別並授權使用者的文件",
                "Allow this GitHub App to authorize users via the Device Flow.": "允許此 GitHub 應用透過裝置流程授權使用者。",
                "Post installation": "安裝完成後",
                "Setup URL (optional)": "設定網址 (可選)",
                "Users will be redirected to this URL after installing your GitHub App to complete additional setup.": "使用者在安裝完 GitHub 應用後，會被重定向到這個網址，以完成額外的設定。",
                "Redirect on update": "更新時重定向",
                "Redirect users to the 'Setup URL' after installations are updated (E.g. repositories added/removed).": "在安裝後更新時將使用者重定向到 “設定網址”（例如: 新增/刪除倉庫）。",
                "Webhook": "Web 鉤子",
                "Active": "啟用",
                "We will deliver event details when this hook is triggered.": "當鉤子被觸發時，我們將提供事件詳細資訊。",
                "Webhook URL": "Web 鉤子網址",
                "Events will POST to this URL. Read our": "事件將 POST 到此網址。閱讀",
                "webhook documentation": "關於 Web 鉤子",
                "for more information.": "以獲取更多資訊。",
                "Webhook secret (optional)": "Web 鉤子隱私 (可選)",
                "Read our": "閱讀我們",
                "webhook secret documentation": "Web 鉤子隱私文件",
                "SSL verification": "SSL 驗證",
                "By default, we verify SSL certificates when delivering payloads.": "預設情況下，我們在交付有效負載時驗證 SSL 證書。",
                "Enable SSL verification": "啟用 SSL 驗證",
                "Disable": "禁用",
                "(not recommended)": "（不推薦）",
                "Access:": "訪問許可權：",
                "Select an access level": "選擇訪問級別",
                "No access": "禁止訪問",
                "Read-only": "只讀",
                "Read and write": "讀寫",

                "Repository permissions": "倉庫許可權",
                "Actions": "操作",
                    "Workflows, workflow runs and artifacts.": "工作流程、工作流程的執行和工件。",
                "Administration": "管理",
                    "Repository creation, deletion, settings, teams, and collaborators.": "倉庫建立、刪除、設定、團隊和協作者。",
                "Checks": "檢查",
                    "Checks on code.": "檢查程式碼。",
                // "Content references": "內容引用",
                    // "Get notified of content references, and create content attachments.": "獲取有關內容引用的通知，並建立內容附件。",
                "Contents": "內容",
                    "Repository contents, commits, branches, downloads, releases, and merges.": "倉庫內容、提交、分支、下載、釋出和合並。",
                "Dependabot secrets": "Dependabot 機密",
                    "Manage Dependabot repository secrets.": "管理 Dependabot 倉庫的機密。",
                "Deployments": "部署",
                    "Deployments and deployment statuses.": "部署和部署狀態。",
                "Discussions": "討論",
                    "Discussions and related comments and labels.": "討論及相關評論和標籤。",
                "Environments": "環境",
                    "Manage repository environments.": "管理倉庫環境。",
                "Issues": "議題",
                    "Issues and related comments, assignees, labels, and milestones.": "議題及相關評論、受理人、標籤和里程碑。",
                "Metadata": "元資料",
                    "Search repositories, list collaborators, and access repository metadata.": "搜尋倉庫、列出協作者，訪問倉庫元資料。",
                // "Organization packages": "組織軟體包",
                "Packages": "軟體包",
                    "Packages published to the GitHub Package Platform.": "釋出軟體包到 GitHub Package 平臺。",
                "Pages": "Github Pages",
                    "Retrieve Pages statuses, configuration, and builds, as well as create new builds.": "檢索頁面狀態、配置和構建，以及建立新的構建。",
                "Pull requests": "拉取請求",
                    "Pull requests and related comments, assignees, labels, milestones, and merges.": "拉取請求及相關評論、受讓人、標籤、里程碑和合並。",
                "Webhooks": "Web 鉤子",
                    "Manage the post-receive hooks for a repository.": "管理倉庫的接收後鉤子。",
                "Projects": "專案",
                    "Manage repository projects, columns, and cards.": "管理倉庫專案、欄目和卡片。",
                "Secret scanning alerts": "隱私掃描警報",
                    "View and manage secret scanning alerts.": "檢視和管理隱私掃描警報。",
                "Secrets": "隱私",
                    "Manage Actions repository secrets.": "管理操作倉庫隱私。",
                "Code scanning alerts": "程式碼掃描警報",
                    "View and manage security events like code scanning alerts.": "檢視和管理安全事件，如程式碼掃描警報。",
                "Single file": "單個檔案",
                    "Manage just a single file.": "只管理單個檔案。",
                "Commit statuses": "提交狀態",
                    "Commit statuses.": "提交狀態。",
                "Dependabot alerts": "Dependabot 警報",
                    "Retrieve Dependabot alerts.": "檢索 Dependabot 警報。",
                "Workflows": "工作流程",
                    "Update GitHub Action workflow files.": "更新 GitHub Actions 工作流程檔案。",

                "Organization permissions": "組織許可權",
                "Members": "成員",
                    "Organization members and teams.": "組織成員和團隊。",
                "Manage access to an organization.": "管理對組織的訪問。",
                    "Organization dependabot secrets": "組織 Dependabot 機密",
                    "Manage Dependabot organization secrets.": "管理 Dependabot 組織的機密。",
                "Events": "活動",
                    "View events triggered by an activity in an organization.": "檢視組織中某項活動所觸發的事件。",
                // Web 鉤子
                    "Manage the post-receive hooks for an organization.": "管理組織的接收後鉤子。",
                "Plan": "計劃",
                    "View an organization's plan.": "檢視組織的計劃。",
                // 專案
                    "Manage organization projects and projects beta (where available).": "管理組織專案和專案測試版（如果可用）。",
                // 隱私
                    "Manage Actions organization secrets.": "管理操作組織隱私",
                "Self-hosted runners": "自託管執行器",
                    "View and manage Actions self-hosted runners available to an organization.": "檢視和管理組織可用的'操作自託管執行器'。",
                "Blocking users": "拉黑使用者",
                    "View and manage users blocked by the organization.": "檢視和管理被組織拉黑的使用者。",
                "Team discussions": "團隊討論",
                    "Manage team discussions and related comments.": "管理團隊討論及相關評論。",

                "User permissions": "使用者許可權",
                "These permissions are granted on an individual user basis as part of the": "這些許可權是在個人使用者的基礎上授予的，作為",
                "User authorization flow": "使用者授權流程",
                ". They will be also be displayed during account installation for transparency.": "。它們也將在帳戶安裝期間顯示以確保透明度。",
                "Block another user": "拉黑其他使用者",
                    "View and manage users blocked by the user.": "檢視和管理被使用者拉黑的使用者。",
                "Email addresses": "電子郵箱地址",
                    "Manage a user's email addresses.": "管理使用者的電子郵箱地址。",
                // 關注者
                    "A user's followers": "使用者的關注者",
                // Gist
                    "Create and modify a user's gists and comments.": "建立和修改使用者的程式碼片段和評論。",
                "GPG keys": "GPG 金鑰",
                    "View and manage a user's GPG keys.": "檢視和管理使用者的 GPG 金鑰。",
                "Interaction limits": "互動限制",
                    "Interaction limits on repositories": "倉庫的互動限制",
                "Git SSH keys": "Git SSH 金鑰",
                // 計劃
                    "View a user's plan.": "檢視使用者的計劃。",
                "Profile": "個人資訊",
                    "Manage a user's profile settings.": "管理使用者的個人資訊設定。",
                "Starring": "星標",
                    "List and manage repositories a user is starring.": "列出和管理使用者已加星標的倉庫。",
                "Watching": "關注",
                    "List and change repositories a user is subscribed to.": "列出和更改使用者訂閱的倉庫。",

                "Subscribe to events": "訂閱事件",
                "Based on the permissions you’ve selected, what events would you like to subscribe to?": "根據您選擇的許可權，您想訂閱哪些事件？",
                "Meta": "元",
                    "When this App is deleted and the associated hook is removed.": "當該應用被刪除和相關的鉤子被刪除時。",
                "Security advisory": "安全提示",
                    "Security advisory published, updated, or withdrawn.": "釋出、更新或撤銷的安全提示",

                "Where can this GitHub App be installed?": "這款 GitHub 應用可以安裝在哪裡？",
                "Only on this account": "僅在當前帳戶",
                    "Only allow this GitHub App to be installed on the": "只允許該 GitHub 應用被安裝在",
                "account.": "帳戶。",
                    "Any account": "任何帳戶",
                "Allow this GitHub App to be installed by any user or organization.": "允許任何使用者或組織安裝此 GitHub 應用。",
                "Create GitHub App": "建立 GitHub 應用",

            // OAuth 應用程式 https://github.com/settings/developers
                "No OAuth applications": "沒有 OAuth 應用程式",
                "OAuth applications are used to access the GitHub API.": "OAuth 應用程式用於訪問 GitHub API。",
                "Read the docs": "閱讀文件",
                "to find out more.": "以瞭解更多情況。",
                "Register a new application": "註冊新 OAuth 應用程式",

            // 註冊 OAuth 應用 https://github.com/settings/applications/new
                "Register a new OAuth application": "註冊 OAuth 應用",
                "Application name": "應用名",
                "Something users will recognize and trust.": "讓使用者識別和信任。",
                //"Homepage URL": "主頁地址",
                "The full URL to your application homepage.": "您的應用主頁地址。",
                "Application description": "應用描述",
                "Application description is optional": "應用描述 (可選)",
                "This is displayed to all users of your application.": "所有使用者都能看到您的應用描述。",
                "Authorization callback URL": "認證回撥地址",
                "Your application’s callback URL. Read our": "您的應用授權回撥地址。閱讀我們",
                "OAuth documentation": "OAuth 文件",
                //"for more information": "。",
                "Enable Device Flow": "啟用裝置流程",
                "Allow this OAuth App to authorize users via the Device Flow.": "允許此 OAuth 應用透過裝置流程授權使用者。",
                "Read the": "閱讀",
                "Device Flow documentation": "裝置流程文件",
                "Register application": "註冊應用",

            // 開發者設定/個人訪問令牌 https://github.com/settings/tokens
                "Developer settings": "開發者設定",
                "GitHub Apps": "GitHub 應用程式",
                "OAuth Apps": "OAuth 應用程式",
                "Personal access tokens": "個人訪問令牌",
                "Generate new token": "生成新令牌",
                "Revoke all": "全部撤銷",
                "Tokens you have generated that can be used to access the": "生成令牌用於訪問",
                "Expires": "有效期至",
                "Expired": "有效期至",
                "This token has no expiration date": "此令牌未設定有效期",
                "Regenerate": "重新生成",
                "this token to take advantage of the": "此令牌使用",
                "new token formats": "新的令牌格式",
                "Personal access tokens function like ordinary OAuth access tokens. They can be used instead of a password for Git over HTTPS, or can be used to": "個人訪問令牌的功能類似於普通的 OAuth 訪問令牌。它們可以用來代替 HTTPS 上 Git 的密碼，或者可以用來",
                "authenticate to the API over Basic Authentication": "透過 ‘基本身份驗證’ 對 API 進行身份驗證",

                "Never used": "尚未使用",
                "Last used within the last week": "最後一次使用是最近 1 周之內",

                // 全部撤銷對話方塊
                "Are you sure you want to revoke access for all personal access tokens?": "對話方塊您確定要撤銷所有個人訪問令牌的訪問許可權嗎？",
                "This will revoke access for": "這將撤銷訪問",
                "all personal access tokens": "所有個人訪問令牌",
                ", but will not revoke access for any authorized third-party OAuth applications. This action cannot be undone.": "，但不會撤銷任何授權第三方 OAuth 應用程式的訪問許可權。此操作無法撤消。",
                "Any SSH keys created on your behalf by personal access tokens will also be deleted.": "任何由個人訪問令牌代表您建立的 SSH 金鑰也將被刪除",
                "Type your username to confirm": "輸入您的使用者名稱進行確認",
                "I understand, revoke access for everything": "我明白了，依然撤銷對一切的訪問",

            // 建立新個人訪問令牌 https://github.com/settings/tokens/new
                "New personal access token": "新的個人訪問令牌",
                "Note": "備註",
                    "Note can't be blank": "備註不能為空",
                "What’s this token for?": "這個令牌有什麼用？",

                "Expiration": "有效期",
                "This token expires": "該令牌有效期至",
                ". To set a new expiration date, you must": "。要設定一個新的有效期，您必須",

                // 有效期 下拉選單
                "7 days": "7天",
                "30 days": "30天",
                "60 days": "60天",
                "90 days": "90天",
                "Custom...": "自定義...",
                "No expiration": "無有效期",
                "The token will never expire!": "此令牌永不過期！",
                "GitHub strongly recommends that you set an expiration date for your token to help keep your information secure.": "GitHub 強烈建議您為令牌設定有效期，以幫助確保您的資訊保安。",

                "Select scopes": "選擇作用域",
                "Scopes define the access for personal tokens.": "作用域定義了個人令牌的訪問範圍。",
                "Read more about OAuth scopes.": "瞭解更多關於 OAuth 作用域的資訊。",
                "Full control of private repositories": "完全控制私有倉庫",
                "Access commit status": "訪問提交狀態",
                "Access deployment status": "訪問部署狀態",
                "Access public repositories": "訪問公共倉庫",
                "Access repository invitations": "訪問倉庫邀請",
                "Read and write security events": "讀寫安全事件",
                "Update GitHub Action workflows": "更新 GitHub Actions 工作流程",
                "Upload packages to GitHub Package Registry": "將包上傳到 GitHub Packages 包註冊",
                "Download packages from GitHub Package Registry": "從 GitHub Packages 包登錄檔下載包",
                "Delete packages from GitHub Package Registry": "從 GitHub Packages 包登錄檔中刪除包",
                "Full control of orgs and teams, read and write org projects": "完全控制組織和團隊，讀寫組織專案",
                "Read and write org and team membership, read and write org projects": "讀寫組織和團隊成員，讀寫組織專案",
                "Read org and team membership, read org projects": "讀取組織和團隊成員，讀取組織專案",
                "Full control of user public keys": "完全控制使用者公鑰",
                "Write user public keys": "寫入使用者公鑰",
                "Read user public keys": "讀取使用者公鑰",
                "Full control of repository hooks": "完全控制倉庫鉤子",
                "Write repository hooks": "寫入倉庫鉤子",
                "Read repository hooks": "讀取倉庫鉤子",
                "Full control of organization hooks": "完全控制組織鉤子",
                "Create gists": "建立 Gist",
                "Access notifications": "訪問通知",
                "Update ALL user data": " 更新所有使用者資料",
                "Read ALL user profile data": "讀取所有使用者個人資料資料",
                "Access user email addresses (read-only)": "訪問使用者電子郵箱地址（只讀）",
                "Follow and unfollow users": "關注和取消關注使用者",
                "Delete repositories": "刪除倉庫",
                "Read and write team discussions": "讀寫團隊討論",
                "Read team discussions": "讀取團隊討論",
                "Full control of enterprises": "完全控制企業",
                "Manage enterprise runners and runner-groups": "管理企業執行人員和執行人員小組",
                "Read and write enterprise billing data": "讀寫企業計費資料",
                "Read enterprise profile data": "讀取企業個人資料",
                "Full control of public user GPG keys": "完全控制公共使用者 GPG 金鑰",
                "(Developer Preview)": "（開發者預覽版）",
                "Write public user GPG keys": "寫入公共使用者 GPG 金鑰",
                "Read public user GPG keys": "讀取公共使用者 GPG 金鑰",
                "Generate token": "生成令牌",
                    // 頂部提醒
                    "Some of the scopes you’ve selected are included in other scopes. Only the minimum set of necessary scopes has been saved.": "您選擇的一些作用域包含在其他作用域中。只儲存了必要作用域的最小集合。",

                "Make sure to copy your personal access token now. You won’t be able to see it again!": "確保立即複製您的個人訪問令牌。您將無法再看到它！",

                "Are you sure you want to delete this token?": "您確定要刪除此令牌嗎？",
                "Any applications or scripts using this token will no longer be able to access the GitHub API. You cannot undo this action.": "任何使用此令牌的應用程式或指令碼將無法再訪問 GitHub API。您無法撤消此操作。",
                "I understand, delete this token": "我明白了，依然刪除該令牌。",

            // 編輯個人訪問令牌 https://github.com/settings/tokens/<id>
                "Edit personal access token": "編輯個人訪問令牌",
                "If you’ve lost or forgotten this token, you can regenerate it, but be aware that any scripts or applications using this token will need to be updated.": "如果您丟失或忘記了此令牌，則可以重新生成它，但請注意，需要更新使用此令牌的任何指令碼或應用程式。",
                "This token has no expiration date. To set a new expiration date, you must": "此令牌未設定有效期。要設定新的有效期，您必須",
                "regenerate the token": "重新生成令牌",
                "Update token": "更新令牌",
                "Delete personal access token": "刪除個人訪問令牌",
                "Delete this token": "刪除令牌",

            // 重新生成個人訪問令牌 https://github.com/settings/tokens/<id>/regenerate
                "Regenerate personal access token": "重新生成個人訪問令牌",
                "Submitting this form will generate a new token. Be aware that any scripts or applications using this token will need to be updated.": "提交此表單將產生一個新的令牌。請注意，任何使用該令牌的指令碼或應用程式將需要更新。",
                "Regenerate token": "重新生成令牌",

        },
        "regexp": [ // 正則翻譯
            // 開發者設定/個人訪問令牌 settings/apps
            [/The token will expire/, "該令牌有效期至"],
            [/Last used within the last (\d+) weeks?/, "最後一次使用是最近 $1 周之內"],
            [/Last used within the last (\d+) months?/, "最後一次使用是最近 $1 月之內"],
        ],
    },

    "page-new-repo": {// 新建倉庫
        "static": { // 靜態翻譯
            // 新建倉庫 https://github.com/new
                "Create a new repository": "建立新倉庫",
                "A repository contains all project files, including the revision history. Already have a project repository elsewhere?": "倉庫包含專案中的所有檔案，包括修訂歷史記錄。在其他地方已有倉庫？",
                "Import a repository.": "匯入倉庫",
                //"Cancel": "取消",
                //"Begin import": "開始匯入",
                "Owner": "所有者",
                "Repository name": "倉庫名稱",
                "Great repository names are short and memorable. Need inspiration? How about": "好的倉庫名稱應該簡單且容易記憶。需要靈感嗎？這個怎麼樣：",
                    "is available.": "名稱可用。",
                    "The repository": "倉庫",
                    "already exists on this account.": "已經存在於此帳戶。",
                    "Your new repository will be created as": "您的新倉庫將被建立為",

                    // 使用者名稱同名倉庫
                    "You found a secret!": "您發現了一個秘密！",
                    "is a ✨": "是一個",
                    "special": "特別的",
                    "✨ repository that you can use to add a": "倉庫，您可以用它來新增一個",
                    "to your GitHub profile. Make sure it’s public and initialize it with a": "到您的 GitHub 個人資料。確保它是公開的，並在初始化時加入一個",
                    "to get started.": "以便開始工作。",
                     // 組織 .github 倉庫
                    "to your organization's GitHub profile. Make sure it’s public and initialize it with a": "到您組織的 GitHub 個人資料。確保它是公開的，並在初始化時加入一個",
                    "in the": "在",
                    "directory to get started.": "目錄下以便開始工作。",

                "Description": "描述",
                "(optional)": "(可選)",
                "Public": "公共",
                "Anyone on the internet can see this repository. You choose who can commit.": "任何人都可以看到這個倉庫，您可以選擇誰能提交。",
                "Private": "私有",
                "You choose who can see and commit to this repository.": "您可以選擇誰可以看和提交到該倉庫。",
                "Initialize this repository with:": "使用以下方式初始化此倉庫：",
                "Skip this step if you’re importing an existing repository.": "如果您要匯入現有倉庫，請跳過此步驟。",
                "Add a README file": "新增 README 檔案",
                "This is where you can write a long description for your project.": "您可以在此處為您的專案編寫詳細描述。",
                "Add .gitignore": "新增 .gitignore 檔案",
                "Choose which files not to track from a list of templates.": "從模板列表中選擇哪些檔案不需要跟蹤。",
                ".gitignore template:": ".gitignore 模板：",
                    ".gitignore template": ".gitignore 模板",
                    "Filter ignores…": "篩選忽略…",
                    "None": "無",
                "Choose a license": "選擇許可證",
                "A license tells others what they can and can't do with your code.": "許可證告訴其他人，他們可以使用您的程式碼做什麼和不能做什麼。",
                "License:": "許可證：",
                    "License": "許可證",
                    "Filter licenses...": "篩選許可證…",
                "This will set": "這將設定",
                "as the default branch.": "為預設分支。",
                "Change the default name in": "改變預設名稱在",
                "your": "您的",
                "settings": "設定",
                "Create repository": "建立倉庫",
                "Creating repository…": "建立倉庫中…",

            // 匯入倉庫 第一頁 https://github.com/new/import
                "Import your project to GitHub": "將您的專案匯入到 GitHub",
                "Import all the files, including the revision history, from another version control system.": "匯入的所有檔案，包括修訂歷史記錄，來自其他版本控制系統。",
                "Your old repository’s clone URL": "您舊倉庫的克隆地址",
                "Learn more about the types of": "瞭解更多關於",
                "supported VCS.": "VCS 的支援。",
                "Your new repository details": "新倉庫詳情",
                //"Owner": "所有者",
                "Repository Name": "倉庫名稱",
                    // "is available.": "名稱可用。",
                    //"The repository": "倉庫",
                    //"already exists on this account.": "已經存在於此帳戶。",
                    //"Your new repository will be created as": "您的新倉庫將被建立為",
                //"Public": "公共",
                //"Anyone on the internet can see this repository. You choose who can commit.": "任何人都可以看到這個倉庫，您可以選擇誰能提交。",
                //"Private": "私有",
                //"You choose who can see and commit to this repository.": "您可以選擇誰可以看和提交到該倉庫。",
                "Cancel": "取消",
                "Begin import": "開始匯入",
                "Preparing import…": "準備匯入…",

        },
        "regexp": [ // 正則翻譯
            [/([^ ]+) is available\./,"$1 名稱可用。"],
        ],
    },

    "repository": { // 倉庫頁面(含組織倉庫)
        "static": { // 靜態翻譯
            // 匯入倉庫 第二頁 /<user-name>/<repo-name>/import
                "Preparing your new repository": "準備您的新倉庫",
                "There is no need to keep this window open, we’ll email you when the import is done.": "沒有必要在這個視窗傻等，當匯入完成時，我們會向您傳送電子郵件。",
                "Detecting your project’s version control system…": "檢測專案的版本控制系統…",
                "Importing  commits and revision history…": "匯入提交和歷史版本…",
                "Importing complete! Your new repository": "匯入完成，您的新倉庫",
                "is ready.": "已經就緒。",

            // 初始化空倉庫 /<user-name>/<repo-name>/
                // 組織倉庫
                "Give access to the people you work with": "授予與您一起工作的同伴的訪問許可權",
                "You should give access to the collaborators and teams you need to work with.": "您應該給您需要合作的協作者和團隊提供訪問許可權。",
                "Add teams and collaborators": "新增團隊和協作者",

                "Quick setup": "快速安裝",
                "— if you’ve done this kind of thing before": "- 如果您以前做過這樣的事",
                "Set up in Desktop": "安裝到 GitHub Desktop",
                "Get started by": "透過",
                "creating a new file": "建立一個新檔案",
                "uploading an existing file": "上傳一個現有的檔案",
                ". We recommend every repository include a": "來開始。我們推薦每個倉庫都包括",
                ", and": "，和",
                "…or create a new repository on the command line": "…或在命令列上建立一個新的倉庫",
                "…or push an existing repository from the command line": "…或從命令列中推送現有的倉庫",
                "…or import code from another repository": "…或從另一個倉庫匯入程式碼",
                "You can initialize this repository with code from a Subversion, Mercurial, or TFS project.": "您可以初始化此倉庫從一個 Subversion，Mercurial 或 TFS 專案匯入。",
                "Import code": "匯入程式碼",

            // 倉庫頁面 /<user-name>/<repo-name>/
                // 頂部提醒
                "This repository has been archived by the owner. It is now read-only.": "此倉庫已由所有者存檔。它現在是隻讀的。",

                // 被 GitHub 官方禁用
                "This repository has been disabled.": "此倉庫已被禁用。",
                "Access to this repository has been disabled by GitHub Staff due to a violation of GitHub's terms of service. If you are the owner of the repository, you may reach out to GitHub Support for more information.": "由於違反了 GitHub 的服務條款，GitHub 已禁止訪問此倉庫。如果您是倉庫的所有者，您可以聯絡 GitHub 支援以獲取更多資訊。",

                // 倉庫違反 DMCA
                "Repository unavailable due to DMCA takedown.": "由於 DMCA 刪除，倉庫不可用。",
                "This repository is currently disabled due to a DMCA takedown notice. We have disabled public access to the repository. The notice has been": "由於 DMCA 刪除通知，此倉庫當前已被禁用。我們已經禁止公眾訪問該倉庫。該通知已",
                "publicly posted": "公開發布",
                "If you are the repository owner, and you believe that your repository was disabled as a result of mistake or misidentification, you have the right to file a counter notice and have the repository reinstated. Our help articles provide more details on our": "如果您是倉庫所有者，並且您認為您的倉庫由於錯誤或誤認而被禁用，您有權提交反通知並恢復倉庫。我們的幫助文章提供了關於我們的更多詳細資訊",
                "DMCA takedown policy": "DMCA 刪除政策",
                "how to file a counter notice": "如何提交反通知",
                ". If you have any questions about the process or the risks in filing a counter notice, we suggest that you consult with a lawyer.": "。如果您對提交反通知的流程或風險有任何疑問，我們建議您諮詢律師。",

                // 公共部分 - 頭部條
                "Public": "公共",
                "Private": "私有",
                "Public archive": "公共存檔",
                "Private archive": "私有存檔",

                "forked from": "復刻自",
                "generated from": "建立自",

                "Pin": "置頂", // 組織倉庫
                "Unpin": "取消置頂",

                "Ignoring": "忽略",
                "Stop ignoring": "取消忽略",
                "Watch": "關注",
                "Unwatch": "取消關注",

                "Cannot fork because you own this repository and are not a member of any organizations.": "不能復刻，因為您擁有該倉庫，而且不是任何組織的成員。",

                "Star": "星標",
                "Unstar": "已加星標",
                "Fork": "復刻",
                "Unfork": "取消復刻",

                // 贊助對話方塊
                "External links": "外部連結",
                "Learn more about funding links in repositories": "瞭解更多關於倉庫中的贊助連結的資訊",
                "Report abuse": "舉報濫用",

                // 關注 & 訂閱通知設定 下拉選單
                "Notifications": "通知型別",
                "Participating and @mentions": "參與和 @您",
                "Only receive notifications from this repository when participating or @mentioned.": "僅在參與或 @您 時接收來自此倉庫的通知。",
                "All Activity": "所有活動",
                "Notified of all notifications on this repository.": "接收來自此倉庫所有通知。",
                "Ignore": "忽略",
                "Never be notified.": "永不接收通知。",
                "Custom": "自定義",
                "Select events you want to be notified of in addition to participating and @mentions.": "選擇除參與和 @您 之外還要接收通知的事件。",
                "Discussions are not enabled for this repo": "此倉庫未啟用討論功能",
                // "Releases": "發行版",
                // "Discussions": "討論",
                "Security alerts": "安全警報",
                //"Cancel": "取消",
                "Apply": "應用",

                //
                "Add to list": "新增到清單",
                "Lists": "清單",
                "You don't have any lists yet.": "您尚無任何清單。",
                "Create list": "建立清單",
                    "Create a list to organize your starred repositories.": "建立一個清單來組織您的星標倉庫。",
                    "⭐️ Name this list": "⭐️ 清單名稱",
                    "Write a description": "簡單描述",
                    "Lists are currently in beta.": "清單目前處於測試階段。",
                    "Share feedback and report bugs.": "分享反饋意見和報告錯誤。",
                    "Creating...": "建立中...",

                 // 使用者 浮動資訊卡
                    "Recently edited these files": "最近編輯過這些檔案",
                    "Owns this repository": "擁有這個倉庫",
                    "Left a review": "留下了一個評論",
                    "Committed to this repository": "已提交過這個倉庫",
                    "Committed to this repository in the past day": "最近一個天裡已提交過這個倉庫",
                    "Committed to this repository in the past week": "最近一個周裡已提交過這個倉庫",
                    "Committed to this repository in the past month": "最近一個月裡已提交過這個倉庫",
                    "Member of": "隸屬組織",
                    // [/, and (\d+) more/, "，以及其他 $1 個組織"],
                    "Opened this issue": "打開了該議題",
                    "Opened this pull request": "打開了該拉取請求",
                    "Opened this pull request (their first ever)": "打開了該拉取請求（他們有史以來的第一個請求）",

                // 組織  浮動資訊卡
                    // [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
                    // [/(\d+) members?/, "$1 個成員"],

                // 標籤欄
                "Code": "程式碼",
                "Pull requests": "拉取請求",
                "Discussions": "討論",
                "Actions": "操作",
                "Projects": "專案",
                "Security": "安全",
                "Insights": "洞察",
                "Settings": "設定",

                // "Pulse": "統計",
                // "Graphs": "圖表",

                // 返回通知頁狀態條
                "Back to notifications": "回到通知",
                "Done": "已完成",
                "Unsubscribe": "退訂",
                "Mark as read": "標記為已讀",
                "Mark as unread": "標記為未讀",
                "Save": "儲存",

                // 評論框頭部欄 (議題 & 拉取請求)
                "Contributor": "貢獻者",
                "Owner": "所有者",
                "Author": "作者",
                    "You are the author of this issue.": "您是這個議題的作者。",  // 議題
                    "You are the author of this pull request.": "您是這個拉取請求的作者。", // 拉取請求
                    "This user is the author of this pull request.": "該使用者是這個拉取請求的作者。",// 拉取請求
                "Member": "成員",
                    //[/This user is a member of the ([^ ]+)./, "該使用者是 $1 組織的成員。"],
                "Collaborator": "協作者",
                    //[/This user has been invited to collaborate on the ([^ ]+) repository./, "該使用者已被邀請在 $1 倉庫上進行協作。"],
                "Pick your reaction": "選擇您的表情",
                "Copy link": "複製連結",
                "Quote reply": "引用回覆",
                "Reference in new issue": "引用到新議題",
                    // 引用到新議題 對話方塊
                    "Body": "正文",
                "Report content": "舉報內容",
                "Report": "舉報",
                // 評論刪除提醒
                    "Are you sure you want to delete this?": "您定要刪除這個嗎？",

                "commented": "評論於",
                "— with": "— 透過",
                "Update comment": "更新評論",
                "Hide": "隱藏",

                "created": "建立",
                "edited": "編輯",
                "(most recent)": "(最近的)",
                "(deleted)": "(已刪除)",
                "deleted this content": "刪除了該內容",
                // 評論歷史檢視
                "Options": "選項",
                // 選項下拉選單
                "More options": "更多選項",
                "The most recent revision cannot be deleted. Need to delete sensitive information? Go to the specific edit where the information was added.": "最近的修訂版不能被刪除。需要刪除敏感資訊？請到資訊的具體編輯處修改。",
                "Delete revision from history": "從歷史記錄中刪除修訂",
                "This edit’s content will no longer be visible": "此修改的內容將不再可見",

                // 鍵盤快捷鍵
                    "Open in github.dev editor"  : "在 github.dev 編輯器中開啟",
                    "Open github.dev editor in a new tab"  : "在新標籤頁中開啟 github.dev 編輯器",
                    "Open cs.github.com in a new tab": "在新標籤頁中開啟 cs.github.com",
                    "Focus secondary search bar" : "聚焦二級搜尋欄",
                    "Go to Code"                 : "跳轉到程式碼",
                    "Go to Issues"               : "跳轉到議題",
                    "Go to Pull Requests"        : "跳轉到拉取請求",
                    "Go to Actions"              : "跳轉到操作",
                    "Go to Projects"             : "跳轉到專案",
                    "Go to Wiki"                 : "跳轉到 Wiki",
                    "Go to Discussions"          : "跳轉到討論",

                    // 議題
                    "Submit comment": "提交評論",
                    "Submit comment and close issue": "提交評論並關閉議題",
                    "Preview comment": "預覽評論",
                    "Create issue": "建立議題",
                    // "篩選使用者": "",
                    "Filter by or edit assignees"  : "按受理人篩選或編輯受理人",
                    "Filter by or edit labels"     : "按標籤篩選或編輯標籤",
                    "Filter by or edit projects"   : "按專案篩選或編輯專案",
                    "Filter by or edit milestones" : "按里程碑篩選或編輯里程碑",
                    "Reply (quoting selected text)": "答覆（引用所選文字）",
                    "Open saved replies": "開啟快捷回覆（引用所選文字）",
                    "Insert saved reply (with open saved replies)": "插入快捷回覆（開啟快捷回覆）",

                    "Pull request list": "拉取請求列表",
                    "Pull request - Conversation tab": "拉取請求 - 對話標籤卡",
                    "Submit comment and close or open pull request":"提交評論和關閉或開啟拉取請求",
                    "Request reviewers": "請求審查人",
                    "Toggle visibility of all collapsed review comments instead of just the current one": "切換所有摺疊審查評論的可見性，而不僅僅是當前的審查評論",
                    "Pull request - Files changed tab": "拉取請求 - 檔案更改標籤卡",
                        "Open commits list": "開啟提交列表",
                        "Open files list": "開啟檔案列表",
                        "Next commit": "下一個提交",
                        "Previous commit": "上一個提交",
                        "Show or hide annotations": "顯示或隱藏批註",
                        "Show or hide comments": "顯示或隱藏評論",
                        "Start a review": "開始開始審查",
                        // "評論": "",
                        "Collapse or expand all files instead of just the current one": "摺疊或展開所有檔案，而不僅僅是當前檔案",
                        "and click": "和點選",

                // 復刻中 點選復刻按鈕
                    // [/Forking ([^ ]+)/, "復刻 $1 中"], // 復刻中...
                    "It should only take a few seconds.": "應該只需要幾秒鐘的時間。",
                    "Refresh": "重新整理",

                // 程式碼標籤卡 & 倉庫首頁 /<user-name>/<repo-name>/
                // 倉庫主頁 Dependabot 警告框
                    "We found potential security vulnerabilities in your dependencies.": "我們在您的依賴項中發現了潛在的安全漏洞。",
                    "Only the owner of this repository can see this message.": "僅此倉庫的所有者可以看到此訊息。",
                    "See Dependabot alerts": "檢視 Dependabot 警報",

                // 已上架的 GitHub Action 專案
                    "Use this GitHub Action with your project": "將此 GitHub Actions 用於您的專案",
                    "Add this Action to an existing workflow or create a new one.": "將此操作新增到現有工作流程或建立新工作流程。",
                    "View on Marketplace": "去商城檢視",

                // 最近有了新提交提醒
                // [/had recent pushes less than/, "有了最近的推送，不到"], //最近有了新提交提醒
                // [/had recent pushes/, "有了最近的推送，"], //最近有了新提交提醒

                // 左側正文
                // 切換分支/標籤 下拉選單
                    "Switch branches/tags": "切換分支/標籤",
                    "Find or create a branch…": "查詢或建立分支…",
                    "Filter branches/tags": "搜尋分支/標籤",
                    "Branches": "分支",
                    "default": "預設",
                    "View all branches": "檢視全部分支",
                    "Find a tag": "查詢標籤",
                    "Tags": "標籤",
                    "Search for a tag": "搜尋標籤",
                    "Nothing to show": "暫無",
                    "View all tags": "檢視全部標籤",

                // 預設分支被重新命名提醒框
                    "The default branch has been renamed!": "預設分支已被重新命名!",
                    "is now named": "已被重新命名為",
                    "If you have a local clone, you can update it by running the following commands.": "如果您有一個本地克隆，您可以透過執行以下命令來更新它。",
                    "OK, got it": "好的，我知道了！",

                "branch": "分支",
                "branches": "分支",
                "tag": "標籤",
                "tags": "標籤",

                "Go to file": "轉到檔案",
                "Add file": "新增檔案",
                    // 新增檔案 下拉選單
                    "Create new file": "新建檔案",
                    "Upload files": "上傳檔案",

                // 程式碼克隆 下拉選單
                "Clone": "克隆",
                    // HTTPS
                    "Use Git or checkout with SVN using the web URL.": "使用 Git 或 SVN 透過該網址檢出。",
                    // SSH
                    "You don't have any public SSH keys in your GitHub account. You can": "您的 GitHub 帳戶中沒有任何公共 SSH 金鑰。您可以",
                    "add a new public key": "新增新的公共金鑰",
                    ", or try cloning this repository via HTTPS.": "，或嘗試透過 HTTPS 克隆此倉庫。",

                    "Use a password-protected SSH key.": "使用受密碼保護的 SSH 金鑰。",
                    // Github CLI
                    "Work fast with our official CLI.": "使用我們的官方 CLI 快速工作。",

                "Open with GitHub Desktop": "在 GitHub Desktop 中開啟",
                "Download ZIP": "下載 Zip 壓縮包",

                "Which remote URL should I use?": "我應該使用哪個遠端 URL ?",
                // "Copy to clipboard": "複製到剪下板",
                // "Copied!": "複製成功!",

                // 個人倉庫 當前分支狀態

                "Contribute": "貢獻",
                    // 貢獻按鈕下拉選單
                    "No new commits yet. Enjoy your day!": "尚無新提交。祝您愉快！",
                    "Open a pull request to contribute your changes upstream.": "開啟拉取請求以向上遊貢獻您的更改。",
                    "Open pull request": "開啟拉取請求",

                "Fetch upstream": "獲取上游",
                    // 獲取上游按鈕下拉選單
                    "Keep your fork up-to-date with the upstream repository.": "使您的復刻與上游倉庫保持同步。",
                    "No new commits to fetch. Enjoy your day!": "尚無新提交。祝您愉快！", //相同
                    "Compare": "對比",
                    "Fetch and merge":"獲取併合並",
                    "Fetching and merging…":"正在獲取和合並中…",
                    "Open a pull request to fetch upstream and review changes or resolve conflicts.": "開啟拉取請求去獲取上游並檢視更改或解決衝突。",
                    "and has conflicts that must be resolved.": "並且有衝突必須解決。",

                // "Choose a head ref": "選擇一個頭引用",

                // "There isn’t anything to compare.": "沒有什麼可比較的。",
                // "and": "和",
                // "are entirely different commit histories.": "是完全不同的提交歷史。",
                // "No commit comments for this range": "在此範圍內沒有提交評論",
                // "No new commits yet. enjoy your day!": "尚無新提交。祝您愉快！",
                // "Find a branch": "查詢分支",

                // 正文
                "commit": "次提交",
                "commits": "次提交",

                "View code": "檢視程式碼", //小屏模式

                // 倉庫缺失 README 提醒
                "Help people interested in this repository understand your project by adding a README.": "透過新增 README，幫助對此倉庫感興趣的人瞭解您的專案。",
                "Add a README": "新增 README",

                // 右側欄

                // 與使用者名稱同名倉庫 編輯 README
                "is a special repository. Its": "是一個特殊的倉庫。它的",
                "will appear on your public profile!": "將出現在您的公開個人資料中！",
                "Edit README": "編輯 README",
                "Visit profile": "檢視資料",

                "is special. If you": "是特殊的。如果您",
                "make this a public repository": "將倉庫設定為公開",
                ", its": "，它的",
                "Go to Settings": "前往設定",

                // 組織下.github 倉庫 README
                    "is a special repository. Create a": "是一個特殊的倉庫。建立",
                    "and it will appear on the organization's profile!": "並將出現在該組織資料中!",
                    "Add profile README": "新增 profile/README",

                    "is a special repository. The": "是一個特殊的倉庫。",
                    "will appear on the organization's profile!": "將出現在該組織資料中!",

                // "About": "關於"，
                "No description, website, or topics provided.": "未提供描述、網站或主題。",
                "Readme": "自述檔案",
                "View license": "檢視許可證",
                "Code of conduct": "行為準則",
                "star": "星標",
                "stars": "星標",
                "watching": "關注",
                "fork": "復刻",
                "forks": "復刻",

                // 倉庫描述編輯 對話方塊
                "Edit repository details": "編輯倉庫簡述",
                "Description": "描述",
                "Short description of this repository": "簡短的描述下您的倉庫",
                "Website": "網址",
                "Topics": "主題",
                "(separate with spaces)": "（空格分隔）",
                "Suggested:": "建議：",
                    "Add this topic": "接受該建議",
                    "Decline this topic": "拒絕該建議",
                        "This isn’t relevant": "這並不相關",
                        "This is too specific": "這太具體了",
                        "This is too general": "這太籠統了",
                        "I just don’t like it": "我只是不喜歡它",
                "Include in the home page": "包含在主頁中",
                "Save changes": "儲存更改",
                    // 頂部提醒
                    "Your repository details have been saved.": "您的倉庫簡述已儲存。",

                "Releases": "發行版",
                    "No releases published": "未釋出任何版本",
                    "Latest": "最新",
                    // "Create a new release": "建立發行版",
                // "Packages": "軟體包",
                    "No packages published": "未釋出軟體包",
                    "Publish your first package": "釋出軟體包",
                "Sponsor this project": "贊助本專案",
                    "Learn more about GitHub Sponsors": "瞭解更多關於 GitHub 贊助者的資訊",
                "Used by": "使用者",
                //"Contributors": "貢獻者",
                "Environments": "環境",
                "Languages": "語言",


                // "branch": "分支",
                // "branches": "分支",
                // "release": "次釋出",
                // "releases": "次釋出",
                // "contributor": "個貢獻者",
                // "contributors": "個貢獻者",

            // 檔案管理器 /<user-name>/<repo-name>/tree/<branch>/<資料夾路徑>/
                "Delete directory": "刪除資料夾",
            // 檔案管理器 - 議題模板 /<user-name>/<repo-name>/tree/<branch>/.github/ISSUE_TEMPLATE
                "Customize the issue creation experience with a": "自定義議題的建立模板使用一個",
                "file.": "檔案。",

            // 議題標籤卡 issues 頁面 /<user-name>/<repo-name>/issues
                // 歡迎資訊
                "Welcome to issues!": "歡迎關注議題！",
                "Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should": "議題用於跟蹤待辦事項、錯誤、功能請求等。建立議題後，它們將出現在可搜尋和可篩選的列表中。要開始，您應該",
                "create an issue": "建立議題",

                "Label issues and pull requests for new contributors": "標記新貢獻者的議題和拉取請求",
                "Now, GitHub will help potential first-time contributors": "現在，GitHub 將幫助潛在的首次貢獻者",
                "discover issues": "探索議題",
                "labeled with": "標記為",

                // [/Want to contribute to ([^ ]+)/, "想為 $1 做貢獻嗎？"], /issues
                "If you have a bug or an idea, read the": "如果您發現一個錯誤或有任何想法，請閱讀",
                "before opening an issue.": "，在開啟議題之前。",
                "If you have a bug or an idea, browse the open issues before opening a new one. You can also take a look at the": "如果您發現一個錯誤或有任何想法，請在開啟新議題之前瀏覽未解決的議題。您也可以看看",
                "Open Source Guide": "開源指南",
                "If you're ready to tackle some open issues,": "如果您準備好解決一些未解決的議題，",
                "we've collected some good first issues for you": "我們已為您收集了一些好的首發議題",

                // 忽略 下拉
                "Dismiss for this repository only": "僅對該倉庫不在提示",
                "Dismiss for all repositories": "對所有倉庫均不在提示",


                "There aren’t any open issues.": "暫無開放的議題。",

                // 狀態詞
                "Open": "開啟",
                "Closed": "已關閉",
                "Merged": "已合併",
                // "open": "開啟",
                // "Opened": "開啟",
                // "opened": "開啟",
                // "closed": "已關閉",

                // 置頂議題
                "Pinned issues": "置頂議題",

                "Filters": "篩選",
                    // 篩選下拉選單
                    "Filter Issues": "篩選議題",
                    "Open issues and pull requests": "開啟的議題和拉取請求",
                    "Your issues": "您提出的議題",
                    "Your pull requests": "您的拉取請求",
                    "Everything assigned to you": "任何分配給您的",
                    "Everything mentioning you": "任何提及您的",
                    "View advanced search syntax": "檢視高階搜尋語法",

                "Clear current search query, filters, and sorts": "清除當前的搜尋查詢、篩選器和排序方式",

                "Labels": "標籤",
                "Milestones": "里程碑",
                "New issue": "建立議題",

                // 篩選工作條
                // "Author": "作者",
                    "Filter by author": "按使用者篩選",
                    "Filter users": "篩選使用者名稱",

                "Label": "標籤",
                    "Filter by label": "按標籤篩選",
                    "Filter labels": "篩選標籤",
                    "Unlabeled": "無標籤",

                // "Projects": "專案",
                    "Filter by project": "按專案篩選",
                    "Filter projects": "篩選專案",
                    "Repository": "倉庫",
                    "Organization": "組織",
                    "No projects found. Sorry about that.": "很抱歉，未找到任何專案。",

                // "Milestones": "里程碑",
                    "Filter by milestone": "按里程碑篩選",
                    "Filter milestones": "篩選里程碑",
                    "Issues with no milestone": "無里程碑",

                "Assignee": "受理人",
                    "Filter by who’s assigned": "按受理人篩選",
                    "Assigned to nobody": "無受理人",
                    // [/Awaiting requested review from ([^ ]+)/, "正在等待 $1 審查請求"],
                    "Requested changes must be addressed to merge this pull request.": "要合併這個拉取請求，必須先解決所要求的更改。",

                "Sort": "排序",
                    "Sort by": "排序",
                    "Newest": "最新的",
                    "Oldest": "最早的",
                    "Most commented": "最多評論",
                    "Least commented": "最少評論",
                    "Recently updated": "最近更新",
                    "Least recently updated": "最早更新", //?
                    "Most reactions": "多數反應",

                // 選中模式
                    "selected": "選中",
                    "Mark as": "標記為",
                    "Apply labels": "應用標籤",
                    "Assign": "分配",
                        "Assign someone": "分配給某人",
                        "Assign to nobody": "分配給任何人",

                // 篩選結果
                "No results matched your search.": "沒有與您的搜尋匹配的結果。",
                "You could search": "您可以搜尋",
                "all of GitHub": "所有 Github",
                "or try an": "或者嘗試",
                "advanced search": "高階搜尋",

                // 狀態詞
                "was merged": "合併於",
                "was closed": "關閉於",
                "Approved": "已批准",
                "Review required": "需要審查", // 拉取請求 頁面狀態詞
                    "Review required before merging": "合併前需要審查",
                "outdated": "陳舊的",
                "Draft": "草案",

                // [/(\d+) linked pull requests?/, "連結 $1 個拉取請求"],

            // 新建議題 選擇議題模板  /<user-name>/<repo-name>/issues/new/choose
                "Get started": "開始",
                "Don’t see your issue here?": "在這裡沒有看到您的議題？",
                "Open a blank issue.": "開啟一個空白議題。",
                "Edit templates": "編輯模板",

                "View organization templates": "檢視組織模板", // 組織倉庫

            // 新建空白議題  /<user-name>/<repo-name>/issues/new
                "Title": "標題",

            // 從討論建立議題  /<user-name>/<repo-name>/issues/new?created_from_discussion_number=<id>
                "Documentation has changed since you last contributed": "自您上次貢獻以來，文件已更改",
                ". Take a look before submitting an issue:": "。在提交議題之前先看一下：",
                "Contributing guidelines": "貢獻指南",
                "Last updated": "最後更新",

            // 某條具體的議題 /<user-name>/<repo-name>/issues/<id> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "This issue was moved to a discussion.": "這個議題被轉移到討論中。",
                "You can continue the conversation there.": "您可以在那裡繼續討論。",
                "Go to discussion →": "轉到討論→",

                "Edit": "編輯",


                // 狀態詞
                "changed the title": "修改了標題",
                "opened this issue": "打開了該議題",
                "mentioned this issue": "提及了該議題",
                "opened this": "打開了這個",
                // "Issue": "議題",
                "added a commit that closed this issue": "在提交時關閉了這個議題",
                "closed this in": "關閉於",
                "added the": "添加了",
                "added": "添加了",
                "and removed": "並移除了",
                "removed the": "移除了",
                "removed": "移除了",
                "label": "標籤",
                "labels": "標籤",
                "self-assigned this": "自己受理了該議題",
                // "edited": "編輯的",
                "added this to the": "新增到",
                "milestone": "里程碑",
                "closed this": "關閉了",
                "reopened this": "重新打開了",
                "This was referenced": "這是引用",
                "deleted a comment from": "刪除了評論，來自",
                "· May be fixed by": " · 可透過該方案修復",
                "pinned this issue": "置頂議題",
                "unpinned this issue": "取消置頂",
                "Repository owner locked as": "倉庫所有者鎖定為",
                "locked as": "鎖定為",
                    "off-topic": "離題",
                    "too heated": "過熱",
                    "resolved": "已解決",
                    "spam": "垃圾資訊",
                "and limited conversation to collaborators": "並限制與協作者對話",
                "unlocked this conversation": "解鎖了對話",
                "merged commit": "已合併提交",
                // "into": "到",
                "deleted the": "刪除了",
                "locked and limited conversation to collaborators": "鎖定並限制與協作者對話",
                "removed their assignment": "取消了他們的任務",
                "assigned": "分配給了",
                "and unassigned": "和取消了分配給",
                "marked this pull request as draft": "將此拉取請求標記為草案",
                "marked this pull request as ready for review": "將此拉取請求標記為可供審查",
                "dismissed a stale review via": "忽略了一個陳舊的審查，透過",
                "requested changes": "請求了更改",
                "added a commit that referenced this issue": "添加了一個引用此問題的提交",

                "This comment has been minimized.": "此評論已最小化。",
                "Show comment": "顯示評論",
                "Hide comment": "隱藏評論",

                // 右側欄 補充
                // 同 /<user-name>/<repo-name>/pull/<id>
                // "Development": "進展",
                    "No branches or pull requests": "沒有分支或拉取請求",
                    "Shows branches and pull requests linked to this issue.": "顯示與該議題相關的分支和拉取請求。",
                    "Successfully merging a pull request may close this issue.": "成功合併一個拉取請求可能會關閉此議題。",
                    // 下拉
                    "Link a pull request from this repository": "關聯來自此倉庫的拉取請求",

                    "linked a pull request that will": "關聯一個拉取請求, 將會",
                    "close": "關閉",
                    "this issue": "這個議題",

                "Lock conversation": "鎖定對話",
                    "Lock conversation on this issue": "鎖定關於此議題的對話",
                    "Other users": "其他使用者",
                    "can’t add new comments": "無法新增新評論",
                    "to this issue.": "到該議題。",
                    "You and other collaborators": "您和其他協作者",
                    "with access": "有許可權訪問",
                    "to this repository": "該倉庫",
                    "can still leave comments": "仍然可以發表評論",
                    "that others can see.": "其他人可以看到。",
                    "You can always unlock this issue again in the future.": "您今後仍可以隨時再次解鎖此議題。",
                    "Reason for locking": "鎖定原因",
                    "Choose a reason": "選擇原因",
                        "Off-topic": "離題",
                        "Too heated": "過熱",
                        "Resolved": "已解決",
                        "Spam": "垃圾資訊",
                    "Optionally, choose a reason for locking that others can see. Learn more about when it’s appropriate to": "或者，選擇其他人可以看到的鎖定原因。詳細瞭解何時適合",
                    "lock conversations": "鎖定對話",
                    // "Lock conversation on this issue": "鎖定對話",
                "Unlock conversation": "解鎖對話",
                    "Unlock conversation on this issue": "解鎖關於此議題的對話",
                    "Everyone": "任何人",
                    "will be able to comment on this issue once more.": "將能夠再次對這個議題發表評論。",
                    "You can always lock this issue again in the future.": "您今後仍可以隨時再次鎖定此議題。",
                "Pin issue": "置頂議題",
                    "Up to 3 issues can be pinned and they will appear publicly at the top of the issues page": "最多可以置頂 3 個議題，它們將公開顯示在議題頁面的頂部",
                    // 頂部提醒
                    "The issue has been pinned.": "該議題已置頂。",
                "Unpin issue": "取消置頂",
                    "Up to 3 issues can be pinned and they will appear at the top of the issues page": "最多可以置頂 3 個議題，它們將顯示在議題頁面的頂部",
                    // 頂部提醒
                    "The issue has been unpinned.": "該議題已取消置頂。",
                "Transfer issue": "轉移議題",
                    // 轉移議題 對話方塊
                    "Transfer this issue": "轉移議題",
                        "Labels, milestones, and repository projects assigned to this issue will not transfer to the new location": "分配給此議題的標籤、里程碑和倉庫專案不會轉移到新位置",
                    "Choose a repository": "選擇倉庫",
                    "Find a repository": "搜尋倉庫",
                    "Warning!": "警告！",
                    "Transferring an issue does not scrub any issue content. Content such as text references to other issues, pull requests, projects, teams will remain in this issue's descriptions and comments. However, issue editing history will be removed.": "轉移議題不會清除任何議題內容。諸如對其他議題、拉取請求、專案、團隊的文字引用等內容將保留在此議題的描述和評論中。但是，議題編輯歷史將被刪除。",
                "Convert to discussion": "轉為討論",
                    "Convert issue to a discussion": "轉換議題為討論",
                    "Are you sure you want to convert this issue to a discussion?": "您確定要將議題轉換為討論嗎？",
                    "What happens when an issue is converted into a discussion:": "將議題轉化為討論時，會發生什麼：",
                    "Issue will be closed and locked": "議題將被關閉並鎖定",
                    "Title, description, and author will be the same as the issue": "標題、描述和作者將與議題相同",
                    "All comments and reactions will be the same as the issue": "所有評論和反應將與議題相同",
                    "I understand, convert this issue.": "我明白了，依然轉化該議題。",
                "Delete issue": "刪除議題",
                    "Are you sure you want to delete this issue?": "您確定要刪除此議題嗎？",
                    "This cannot be undone": "這不能被撤消",
                    "Only administrators can delete issues": "只有管理員可以刪除議題",
                    "Deletion will remove the issue from search and previous references will point to a placeholder": "刪除將會從搜尋中刪除議題，以前的引用將指向一個佔位符",
                    "Delete this issue": "刪除議題",
                    "Deleting issue…": "議題刪除中…",
                    // 頂部提醒
                    "The issue was successfully deleted.": "該議題已成功刪除。",


                "Load more…": "載入更多…",
                "Loading…": "載入中…",

                "This conversation has been locked as": "此對話已鎖定為",
                "and limited to collaborators.": "，並限制與協作者對話。",

                "Remember, contributions to this repository should follow our": "請記住，對該倉庫的貢獻應遵循我們的",
                "GitHub Community Guidelines": "GitHub 社群準則",
                "Remember, contributions to this repository should follow its": "請記住，對該倉庫的貢獻應遵循",
                "contributing guidelines": "貢獻指南",
                "and": "和",
                "code of conduct": "行為準則",

            // 拉取請求 標籤卡 /<user-name>/<repo-name>/pulls >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                // 歡迎資訊
                "Welcome to pull requests!": "歡迎使用拉取請求！",
                "Pull requests help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list. To get started, you should": "拉取請求可幫助您與其他人協作處理程式碼。建立拉取請求後，它們將出現在可搜尋和可篩選的列表中。要開始，您應該",
                "create a pull request": "建立拉取請求",

                // [/First time contributing to ([^ ]+)?/, "首次為 $1 做貢獻？"], // /pulls
                "If you know how to fix an": "如果您知道如何修復一個",
                "issue": "議題",
                ", consider opening a pull request for it.": "，可考慮為它開啟一個拉取請求。",
                "You can read this repository’s": "您可以閱讀該倉庫的",
                "to learn how to open a good pull request.": "，去學習如何開啟一個好的拉取請求。",

                "New pull request": "發起拉取請求",

                "Reviews": "審查",
                    // 篩選工作條
                    "Filter by reviews": "按審查篩選",
                    "No reviews": "未經審查",
                    // "Review required": "需要審查",
                    "Approved review": "已批准的審查",
                    "Changes requested": "已請求更改",
                    "Reviewed by you": "由您審查",
                    "Not reviewed by you": "您未審查",
                    "Awaiting review from you": "等待您審查",
                    "Awaiting review from you or your team": "等待您或您的團隊的審查",
                    "Awaiting review from you specifically": "特別等待您審查",

                    // 篩選結果
                    "There aren’t any open pull requests.": "暫無拉取請求。",

            // 某條具體的拉取請求 /<user-name>/<repo-name>/pull/<id> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                // 編輯 -> 選擇基礎庫
                "Choose a base branch": "選擇基礎分支",
                    // 更改基礎分支對話方塊
                    "Are you sure you want to change the base?": "您確定要更改基礎分支嗎？",
                    "Some commits from the old base branch may be removed from the timeline, and old review comments may become outdated.": "舊的基礎分支的一些提交可能會從時間線上刪除，而舊的審查評論可能會變得過時。",
                    "Change base": "更改基礎分支",

                // 程式碼
                "Checkout with GitHub CLI": "使用 GitHub CLI 檢出",
                "Checkout with GitHub Desktop": "使用 GitHub Desktop 檢出",

                "Jump to bottom": "跳到底部", //小屏模式

                // 自動修復漏洞 提示
                "This automated pull request fixes a": "這個自動拉取請求將修復了一個",
                "security vulnerability": "安全漏洞",
                "Only users with access to Dependabot alerts can see this message.": "只有有權訪問 Dependabot 警報的使用者才能看到此訊息。",
                "Learn more about Dependabot security updates": "瞭解更多關於 Dependabot 安全更新的資訊",
                "opt out": "選擇退出",
                // 頂部提醒
                    "Opted out of Dependabot security updates.": "選擇退出 Dependabot 安全更新。",
                "or": "或",

                // 狀態詞
                "into": "到",
                // "merged": "已合併",
                "wants to merge": "希望合併",
                "commit into": "個提交到",
                "commits into": "個提交到",
                "from": "來自",

                // 標籤欄
                "Conversation": "討論",
                // "Commits": "提交",
                "Checks": "檢查",
                "Files changed": "更改的檔案",

                // 右側欄
                "Reviewers": "審查人",
                    "Loading suggestions…": "載入推薦…",
                    // [/([^ ]+) left review comments/, "$1 發表了審查評論"],
                    "At least 1 approving review is required to merge this pull request.": "至少需要 1 次批准審查才能合併此拉取請求。",
                    "Still in progress?": "仍在進行中嗎？",
                    "Convert to draft": "設定為草案",
                    // 下拉
                    "Request up to 15 reviewers": "最多請求 15 個審查人",
                    // [/([^ ]+) approved these changes/, ""$1 批准這些更改"], // 具體的拉取請求 審查人
                    "Request": "請求",
                    // [/Request review from ([^ ]+)/, "請求 $1 審查"], // 具體的拉取請求 審查人
                    "This pull request is waiting on your review.": "此拉取請求正在等待您的稽核。",

                "Assignees": "受理人",
                    "No one assigned": "無人受理",
                    "No one—": "無人 - ",
                    "assign yourself": " 受理自己",
                    // 下拉框
                    "Assign up to 10 people to this issue": "最多指定 10 人", // 議題
                    "Assign up to 10 people to this pull request": "最多指定 10 人", // 拉取請求
                    "Clear assignees": "清除受理人",
                    "Type or choose a user": "輸入或選擇使用者",
                    "Suggestions": "建議",

                // "Labels": "標籤",
                    "None yet": "暫無",
                    // 下拉
                    "Apply labels to this issue": "應用標籤", // 議題
                    "Apply labels to this pull request": "應用標籤", // 拉取請求
                    "Edit labels": "編輯標籤",

                // 專案
                    "Recent": "最近",
                    "User": "使用者",
                    "No projects": "無專案",

                "Milestone": "里程碑",
                    "No milestone": "無里程碑",
                    //下拉
                    "Set milestone": "設定里程碑",

                "Development": "進展",
                    "Successfully merging this pull request may close these issues.": "成功合併此拉取請求可能會關閉這些議題。",
                    // 下拉
                    "Link an issue from this repository": "關聯來自此倉庫的議題",
                    "Filter": "篩選",
                    "No results": "無結果",

                // "Notifications": "通知型別",
                "Customize": "自定義",
                "Subscribe": "訂閱",
                // "Unsubscribe": "取消訂閱",
                "You’re not receiving notifications from this thread.": "您沒有收到來自該話題的通知。",
                "You’re receiving notifications because you’re watching this repository.": "您收到通知是因為您正在關注此倉庫。",
                "You’re receiving notifications because you authored the thread.": "您收到通知是因為您提出了該話題。",
                "You’re receiving notifications because you’re subscribed to this thread.": "您收到通知是因為您訂閱了該話題。",
                "You’re receiving notifications because you were mentioned.": "您收到通知是因為有人 @您。",
                "You’re receiving notifications because you commented.": "您收到通知是因為您發表了評論。",
                "You’re receiving notifications because you are watching pull requests on this repository.": "您收到通知是因為您正在關注此倉庫上的拉取請求。",
                "You’re ignoring this repository.": "您忽略了這個倉庫。",

                    // 通知設定對話方塊
                    "Notification settings": "通知設定",
                    "Not subscribed": "未訂閱",
                        "Only receive notifications from this pull request when you have participated or have been @mentioned.": "只有在您參與或被 @您時才會收到來自此拉取請求的通知。",
                        "Only receive notifications from this issue when you have participated or have been @mentioned.": "只有在您參與或被 @您時才會收到來自此議題的通知。", // 議題頁面
                    "Subscribed": "訂閱",
                        "Receive all notifications from this pull request.": "接收來自此拉取請求的所有通知。",
                        "Receive all notifications from this issue.": "接收來自此議題的所有通知。",  // 議題頁面
                    "You will only be notified for the events selected from the list below.": "您只會收到從以下列表中選擇的事件的通知。",
                    "If you participate or are @mentioned you will be subscribed.": "如果您參與或 @您時，將自動訂閱。",
                    // 議題
                        "Receive a notification when this issue has been closed.": "當議題被關閉時，收到通知。",
                        "Reopened": "重新開啟",
                            "Receive a notification when this issue has been reopened.": "當議題被重新開啟時，收到通知。",
                    // 拉取請求
                        "Receive a notification when this pull request has been merged.": "當拉取請求被合併時，收到通知。",
                        "Receive a notification when this pull request has been closed.": "當拉取請求被關閉時，收到通知。",
                        "Receive a notification when this pull request has been reopened.": "當拉取請求被重新開啟時，收到通知。",

                "Allow edits by maintainers": "允許維護者進行編輯",
                    "If checked,": "如果選中，",
                    // [/users with write access to ([^ ]+) can add new commits/, "對 $1 具有寫許可權的使用者可以新增新的提交"], // 具體拉取請求
                    "to your": "到您的",
                    "branch. You can always change this setting later.": "分支。您以後可以隨時更改此設定。",
                "Allow edits and access to secrets by maintainers": "允許維護者編輯和訪問金鑰",
                    "Maintainers could potentially edit this repository's workflows to reveal values of secrets and gain access to other branches.": "維護者有可能編輯這個倉庫的工作流程來獲取金鑰值，並獲得對其他分支的訪問。",


                // 討論標籤卡 主頁
                "View changes": "檢視更改",
                "View Changes": "檢視更改",
                "Outdated": "陳舊的",
                "Resolve conversation": "解決對話",
                "Unresolve conversation": "未解決對話",
                    "marked this conversation as resolved.": "將此對話標記為已解決。",
                // "Changes requested": "更改請求",
                "Change requested": "更改請求",
                "Show resolved": "顯示已解決",
                "Hide resolved": "隱藏已解決",
                "Show all reviewers": "顯示所有審查人",
                "Hide all reviewers": "隱藏所有審查人",
                "New changes since you last viewed": "自您上次檢視以來的新變化",
                "mentioned this pull request": "提及這個拉取請求",
                "dismissed": "忽略",
                "\’s": "的",
                "stale review": "陳舊審查",
                "via": "透過",
                "force-pushed": "強制推送了",
                "the": " ",
                "branch from": "分支從",
                "and others": "和其他成員",
                "approved these changes": "批准這些更改",
                    "See review": "檢視審查",
                "started a review": "開始審查",
                "self-requested a review": "自我要求審查",
                "left a comment": "發表評論",
                "Add more commits by pushing to the": "新增更多提交，透過推送到",
                "branch on": "分支在",

                //
                "This branch has not been deployed": "該分支尚未部署",
                "No deployments": "未部署",

                // 拉取請求狀態
                "Review requested": "請求審查",
                "Review has been requested on this pull request. It is not required to merge.": "此拉動請求已請求進行審查。這不是合併的必要條件。",
                // [/(\d+) pending reviewers?/, "$1 名待審者"],
                "was requested for review": "被請求審查",

                "This pull request is still a work in progress": "此拉取請求仍在進行中",
                "This pull request can be automatically merged by project collaborators": "此拉取請求可以由專案協作者自動合併",
                    "Only those with": "只有對此倉庫具有",
                    "write access": "寫入訪問許可權",
                    "to this repository can merge pull requests.": "的才可合併拉取請求。",
                    "to this repository can mark a draft pull request as ready for review.": "的才可將拉取請求草案標記為可供審查。",

                // "Review required": "需要審查", // 拉取請求 頁面狀態詞
                    "Add your review": "新增您的評論",
                // [/At least 1 approving review is required by reviewers with write access./, ""],
                "Changes approved": "變更已獲批准",
                // [/(\d+) approving reviews? by reviewers? with write access./, "$1 個批准的審查由具有寫入許可權的審查人進行審查。"],
                // [/(\d+) approvals?/, "$1 項批准"],
                "Some checks haven’t completed yet": "有些檢查還沒有完成",
                // [/1 in progress check/, "$1個正在進行的檢查"],
                "Some checks were not successful": "有些檢查不成功",
                // [/1 skipped, 4 successful, and 2 failing checks/, "$1 個跳過, $2 個成功, $3 失敗"],
                // [/1 skipped, 4 successful, and 2 expected checks/, "$1 個跳過, $2 個成功, $3 個預先檢查"],
                "All checks have passed": "所有檢查均已透過",
                // [/5 successful checks/, ""],
                // [/6 checks passed/, ""],
                    "Show all checks": "顯示所有檢查",
                    "Hide all checks": "隱藏所有檢查",
                    "Details": "細節",
                    "Required": "必須",
                "Merging is blocked": "合併被阻止",
                "Merging can be performed automatically once the requested changes are addressed.": "一旦請求的更改得到解決，合併就可以自動執行。",

                "The base branch restricts merging to authorized users.": "基礎分支合併僅限於授權使用者。",
                "Learn more about protected branches.": "瞭解更多關於受保護分支的資訊。",
                // [/Merging can be performed automatically with 1 approving review./, ""],


                // [/(\d+) workflow awaiting approval/, "$1 個工作流等待批准"],
                "First-time contributors need a maintainer to approve running workflows.": "首次貢獻者需要維護者來批准正在執行的工作流。",
                "The base branch does not accept merge commits. Alternate merge methods are preferred.": "基礎分支不接受合併提交。其他合併方法是首選。",
                // [/The ([^ ]+) branch requires linear history/, "$1 分支為要求線性歷史記錄"],
                "Learn more about required linear history.": "瞭解更多關於要求線性歷史記錄。",

                "Checking for ability to merge automatically…": "檢測自動合併的能力…",
                "Hang in there while we check the branch’s status.": "請等待，我們正在檢查該分支的狀態",

                "Continuous integration has not been set up": "尚未設定持續整合",
                "several other apps": "其他一些應用程式",
                "can be used to automatically catch bugs and enforce style.": "可用於自動捕獲錯誤和強制執行樣式。",

                "This branch has no conflicts with the base branch": "該分支與基礎分支沒有衝突",
                    "Merging can be performed automatically.": "可以自動地執行合併。",

                "This branch has no conflicts with the base branch when rebasing": "該分支基變時與基礎分支沒有衝突。",
                    "Rebase and merge can be performed automatically.": "可以自動執行變基和合並。",

                    "You’re not": "您無",
                    "authorized": "許可權",
                    "to merge this pull request.": "合併此拉取請求。",

                "Merge pull request": "合併拉取請求",
                // 合併拉取請求 按鈕下拉
                    "Create a merge commit": "建立合併提交",
                        "All commits from this branch will be added to the base branch via a merge commit.": "該分支的所有提交都將透過合併提交加入到基礎分支中。",
                    "Squash and merge": "壓縮合並",
                        // [/The (\d+) commits? from this branch will be added to the base branch./, "該分支的 $1 個提交將合併到基本分支中。"],
                    "Rebase and merge": "變基合併",
                        // [/The (\d+) commits? from this branch will be rebased and added to the base branch./, "該分支的 $1 個提交將變基合併到基礎分支中。"],

                //確認合併 對話方塊
                "Confirm merge": "確認合併",
                "Confirm squash and merge": "確認壓縮合並",
                "Confirm rebase and merge": "確認變基合併",
                "Merging…": "合併中…",

                "You can also": "您也可以",
                "open this in GitHub Desktop": "在 GitHub Desktop 中開啟",
                "or view": "，或檢視",
                "command line instructions": "命令列指令",

                // "Merged": "已合併",
                "View details": "檢視詳情",
                "Hide details": "隱藏詳情",
                "Revert": "還原",
                    "Create a new pull request to revert these changes": "建立一個新的拉取請求以恢復這些更改",
                "Closed with unmerged commits": "已關閉的未合併的提交",

                "Pull request successfully merged and closed": "拉取請求已成功合併並關閉",
                "Delete branch": "刪除分支",
                "Restore branch": "恢復分支",

                "Pull request closed": "拉取請求已關閉",
                "This pull request is closed, but the": "此拉取請求已關閉，但是",
                "branch has unmerged commits.": "分支具有未合併的提交。",
                "branch has unmerged commits. You can delete this branch if you wish.": "分支具有未合併的提交。您可以根據需要刪除此分支。",
                "If you wish, you can also delete this fork of": "如果需要，還可以刪除此復刻",
                "If you wish, you can delete this fork of": "如果需要，可以刪除此復刻",
                "in the":"在",
                "settings": "設定",

                // "Only those with": "只有對此倉庫具有",
                // "write access": "寫入訪問許可權",
                // "to this repository can merge pull requests.": "的才可合併拉取請求。",
                "You’re all set — the": "一切就緒 —",
                "You’re all set—the": "一切就緒 —",
                "branch can be safely deleted.": "分支可以被安全刪除。",
                "This branch has conflicts that must be resolved": "該分支存在衝突，必須解決",
                "Resolve conflicts": "解決衝突",
                "Conflicting files": "衝突的檔案:",

                // "Avoid bugs by automatically running your tests.": "透過持續整合測試來避免BUG。",
                // "Continuous integration can help catch bugs by running your tests automatically.": "持續整合可以透過自動執行您的測試有助於捕獲錯誤。",
                // "Merge your code with confidence using one of our continuous integration providers.": "合併您的程式碼使用我們信任的持續整合供應商。",

                // "Use the links above to find what you’re looking for, or try": "使用上面的連結來找到您要找的，或者嘗試",
                // "a new search query": "新的搜尋查詢",
                // ". The Filters menu is also super helpful for quickly finding issues most relevant to you.": "。搜尋欄也是快速找到議題最相關的您超級有幫助的。",


                // 狀態詞
                "reviewed": "審查",
                "requested a review from": "請求審查",
                "Reply...": "回覆...",

                // 底部捐助
                "Show your support for": "透過贊助來表達您對",
                "by sponsoring them.": "的支援。",
                "Sponsor": "贊助",

                // 程式碼審查回覆
                "Suggestions cannot be applied on outdated comments.": "建議不要應用於過時的評論。",
                "Suggested change": "更改建議",
                "This code change can be committed by users with write permissions.": "具有寫入許可權的使用者可以提交此程式碼更改。",

            // 提交 標籤卡 /<user-name>/<repo-name>/pull/<id>/commits
                "Copy the full SHA": "複製完整的 SHA",
                "View commit details": "檢視提交詳情",
                "Browse the repository at this point in the history": "瀏覽該階段的歷史倉庫內容",

            // 更改的檔案 標籤卡 /<user-name>/<repo-name>/pull/<id>/files
                // 工具條
                "Changes from": "更改自",
                    "all commits": "所有提交",
                    // 下拉
                    "Show all changes": "顯示所有更改",
                    "Show changes since your last review": "顯示自您上次評論以來的更改",
                    // "You haven‘t reviewed this pull requeste": "您尚未審查過此請求請求",
                    "You haven’t reviewed this pull request yet": "您尚未審查此請求請求",
                    "Select commit": "選擇提交",
                    "Hold shift + click to select a range": "按住 shift + 單擊以選擇一個範圍",
                "File filter": "檔案篩選",
                    "Filter by extension": "按檔案字尾名篩選",
                        "No extension": "無後綴名",
                        // [/All (\d+) file types? selected/, "所有 $1 種檔案型別被選中"],
                        // [/Select all 1 file types?/, "選擇所有 $1 種檔案型別"],
                        "Only manifest files": "僅清單檔案",
                    "There are no files selected for viewing": "沒有選擇要檢視的檔案",
                    "Viewed files": "檢視過的檔案",
                    // "filter file types": "篩選檔案型別",
                    // "filter viewed files": "篩選已檢視檔案",
                    // "hide viewed files": "隱藏已檢視檔案",
                    // "filter by context": "按內容篩選",
                "Clear filters": "清除篩選",
                "Conversations": "討論",
                    "Jump to conversation": "跳轉到討論",
                    "Give feedback": "反饋",
                    // [/Unresolved conversations/, "未解決的討論"],
                    "Nice work!": "幹得好！",
                    "All of your conversations have been resolved.": "您的所有討論都已解決。",
                    // [/Reresolved conversations/, "已解決的討論"],
                    "No conversations yet": "尚無討論",
                    "Review conversations will show up here.": "審查討論將顯示在這裡。",
                // "Jump to": "跳轉到",
                    "Jump to file": "跳轉到檔案",
                    "Filter changed files": "篩選已更改檔案",
                // 差異檢視
                    "Diff view": "差異檢視",
                    // "Always": "總是",
                    "Unified": "同屏",
                    "Split": "分屏",
                    // "Just for now": "僅當前",
                    // "Hide whitespace changes": "隱藏空白更改",
                    "Hide whitespace": "隱藏空白",
                    "Apply and reload": "應用並重新載入",
                "Show whitespace": "顯示空白",
                // "Refresh": "重新整理",

                "files viewed": "檢視過的檔案",
                    "Marking files as viewed can help keep track of your progress, but will not affect your submitted review": "將檔案標記為已檢視可以幫助您跟蹤進度，但不會糾正您提交的審查",
                // "Review changes": "審查更改", // 使用 Selector 規則翻譯
                    // 下拉
                    "Finish your review": "完成審查",
                        "Submit general feedback without explicit approval.": "未批准，並提出一般性反饋意見。",
                    "Approve": "批准",
                        "Submit feedback approving these changes.": "批准，並提出反饋意見。",
                        "Submit feedback and approve merging these changes.": "提交反饋意見並批准合併這些更改。",
                        "Pull request authors can’t approve their own pull request": "拉取請求作者無法批准自己的拉取請求",
                        "Only users with explicit access to this repository may approve pull requests": "只有對這個倉庫有明確訪問許可權的使用者才能批准拉取請求",
                    "Request changes": "請求更改",
                        "Submit feedback suggesting changes.": "請求更改，並提出更改反饋意見。",
                        "Submit feedback that must be addressed before merging.": "提交合並前必須解決的反饋意見",
                        "Pull request authors can’t request changes on their own pull request": "拉取請求作者不能在自己的拉取請求上請求更改",
                        "Only users with explicit access to this repository may request changes to pull requests": "只有對這個倉庫有明確訪問許可權的使用者才能請求更改拉取請求",
                    "Submit review": "提交審查",

                "Review changes": "審查更改",
                    // 被鎖定
                    "This conversation has been locked and limited to collaborators.": "此對話已鎖定，並限制與協作者對話。",

                "Viewed": "已檢視",

                "Load diff": "載入差異",
                "This file was deleted.": "該檔案已被刪除",
                "Large diffs are not rendered by default.": "預設情況下，大的差異不會被呈現。",
                "Some generated files are not rendered by default.": "某些生成的檔案預設不呈現。",

            // /<user-name>/<repo-name>/pull/<id>/commits/<full SHA>
                // 上一頁
                "You are viewing the earliest commit": "您正在檢視最早的提交",
                // 下一頁
                "You are viewing the latest commit": "您正在檢視最新的提交",

            "Branch:": "分支：",

            // 關注者頁面  /<user-name>/<repo-name>/watchers
                "Watchers": "關注者",
                "No one’s watching this repository yet. You could be the first.": "暫無關注者。您可以成為第一個",
                "about how watching works on GitHub.": "關於在 GitHub 上關注的工作原理。",

            // 追星者頁面  /<user-name>/<repo-name>/stargazers
                "Stargazers": "追星者",
                "All": "全部",
                "You know": "您關注的",
                "Be the first to star this repository.": "成為第一個為這個倉庫加星標的人。",
                "about how starring works on GitHub.": "關於如何在 GitHub 上加註星標。",
                "Be the first of your friends to star this repository.": "成為第一個為這個倉庫加星標的朋友。",

            // 新建檔案頁面 /<user-name>/<repo-name>/new/<branch>
                // 組織倉庫 編輯檔案頁面
                "You’re making changes in a project you don’t have write access to. We’ve": "您正在對沒有寫入許可權的專案進行更改。我們已經",
                "created a fork of this project": "為該專案建立復刻",
                "for you to commit your proposed changes to. Submitting a change will write it to a new branch in your fork, so you can send a pull request.": "供您提交建議的更改。提交更改會將其寫入復刻中的新分支，這樣您就可以傳送拉取請求。",

                "Name your file…": "檔名…",
                "in": "在",
                "Cancel changes": "取消更改",

                "Edit new file": "編輯新檔案",
                "Preview changes": "預覽更改",
                "loading preview…": "載入預覽…",
                "Loading preview…": "載入預覽…",
                "There are no changes to show.": "沒有要顯示的更改。",

                // 程式碼編輯框
                "Indent mode": "縮排模式",
                "Spaces": "空格",
                "Tabs": "Tab",
                "Indent size": "縮排大小",
                "Line wrap mode": "換行模式",
                "No wrap": "不換行",
                "Soft wrap": "軟換行",

                "Commit new file": "提交新檔案", //  自有倉庫
                "Propose new file": "提議新檔案", //  他人倉庫
                // 提交框
                    "Add an optional extended description…": "新增描述... (可選)",
                    "Commit directly to the": "提交到",
                    "branch.": "分支。",
                    "Create a": "建立",
                    "new branch": "新分支",
                    "for this commit and start a pull request.": "為這個提交，並且發起一個拉取請求。",
                    "Learn more about pull requests.": "瞭解更多關於拉取請求的資訊。",

                // 頂部提醒
                // [/Your license is ready. Please review it below and either commit it to the ([^ ]+) branch or to a new branch./, "您的許可證已準備就緒。請在下面審查它並將其提交到 $1 分支或新分支。"],

            // 編輯檔案頁面 /<user-name>/<repo-name>/edit/<branch>/<file>
                // 與使用者名稱同名倉庫 編輯 README.md 檔案
                    "is a special repository: its": "是一個特殊的倉庫：它的",
                    "will appear on your profile!": "將出現在您的個人資料中！",

                    // "New": "新",
                    "is now a special repository: its": "現在是一個特殊的倉庫：它的",

                // 組織下.github 倉庫 編輯 /profile/README.md 檔案
                    "is a special repository: this": "是一個特殊的倉庫：這個",
                    "will appear on your organization's profile!": "將出現在您的組織資料中!",

                // 編輯 .gitignore 檔案
                    "Want to use a": "想使用",
                    "template?": "模板嗎？",
                    "Filter ignores…": "篩選忽略…",
                    "Choose .gitignore:": "選擇 .gitignore：",
                    "none": "無",

                // 編輯 工作流程檔案 .github/workflows/xxxx.yml
                    "Start commit": "開始提交",
                    "Space": "空格",
                    "to trigger autocomplete in most situations.": "在大多數情況下將觸發自動完成。",
                    "Documentation": "文件",

                // 編輯 LICENSE 許可證檔案
                    "Choose a license template": "選擇一個許可證模板",

                // 快捷鍵
                "Code editor": "程式碼編輯器",
                // "Preview changes": "預覽更改",
                "Toggle line comment": "切換行評論",

                // "Edit file": "編輯檔案",
                // "Preview": "預覽",
                "Show diff": "顯示差異",

                "Commit changes": "提交更改", //  自有倉庫
                "Propose changes": "提議更改", //  他人倉庫

            // 刪除檔案頁面 /<user-name>/<repo-name>/delete/<branch>/<file>
                // 頂部提醒
                "File successfully deleted.": "檔案已成功刪除。",

            // Upload files 上傳檔案頁面 /<user-name>/<repo-name>/upload/<branch>
                // 自有倉庫
                    "Drag files here to add them to your repository": "拖拽檔案新增到當前倉庫",
                    "Drag additional files here to add them to your repository": "拖拽其他檔案新增到當前倉庫",
                    "Or": "或",
                    "choose your files": "選擇檔案",
                    "Drop to upload your files": "拖拽上傳您的檔案",
                    // 處理反饋
                    "Yowza, that’s a big file. Try again with a file smaller than 25MB.": "我勒個擦，這麼大的檔案，單檔案不得超過25MB",
                    "Yowza, that’s a lot of files. Try again with fewer than 100 files.": "我勒個擦，這麼多檔案，一次不能超過100個",
                    "This file is": "這個檔案是",
                    "empty": "空的",
                    "Something went really wrong, and we can’t process that file.": "遇到錯誤，我們無法處理這個檔案。",

                    // 檔案上傳進度條
                    "Uploading": "檔案上傳中",
                    // [/1 of 1 files/, ""],

                    // "Commit changes": "提交更改",
                    // 提交框 補充
                        "Add files via upload": "透過上傳新增檔案",
                        // "Optional extended description": "可選的描述",

                // 他人倉庫
                    "Uploads are disabled.": "上傳功能已禁用。",
                    "File uploads require push access to this repository.": "檔案上傳需要推送訪問此倉庫。",

            // Find file 頁面 /<user-name>/<repo-name>/find/<branch>
                "You’ve activated the": "您已啟用",
                "file finder": "檔案搜尋模式",
                ". Start typing to filter the file list. Use": "。輸入關鍵詞查詢您的檔案。使用",
                "and": "和",
                "to navigate,": "選擇檔案",
                "to view files,": "檢視檔案",
                "to exit.": "返回。",

            // 拉取請求資訊提示
            "Your recently pushed branches:": "您最近推送的分支：",
            "Compare & pull request": "比較 & 拉取請求",

            // wiki 頁面  /<user-name>/<repo-name>/wiki >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "Wikis provide a place in your repository to lay out the roadmap of your project, show the current status, and document software better, together.": "Wiki 為您的倉庫提供了一個更好的文件資料。",
                "Create the first page": "建立第一個頁面",

                // [/edited this page/, "編輯此頁"], // wiki
                // [/(\d+) revisions?/, "$1 次修訂"], // wiki
                "New Page": "新建頁面",
                "Add a custom footer": "新增自定義頁尾",

                // 右側欄
                "Pages": "頁面",
                    "Find a Page…": "搜尋頁面…",
                "Add a custom sidebar": "新增自定義側邊欄",
                "Clone this wiki locally": "在本地克隆這個 Wiki",

            // 新建 wiki 頁面 /<user-name>/<repo-name>/wiki/_new >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "Create new page": "建立新頁面",
                "Write": "編輯",
                "Preview": "預覽",
                "Edit mode:": "編輯模式：",
                "Edit message": "提交資訊",

                "Write a small message here explaining this change. (Optional)": "在這裡寫一條小訊息，解釋這一變化。(可選)",
                "Save Page": "儲存頁面",
                // 頂部提醒
                    "Your Wiki was created.": "您的 Wiki 已建立。",

            // 編輯 wiki 頁面 /<user-name>/<repo-name>/wiki/<page name>/_edit
                // [/Editing/, "編輯"], //編輯 wiki
                "Page History": "頁面歷史",
                "Delete Page": "刪除頁面",
                    "Are you sure you want to delete this page?": "您確定要刪除此頁面嗎？",

                "Someone has edited the wiki since you started. Please reload this page and re-apply your changes.": "自您開始以來，有人編輯了 wiki。請重新載入此頁面並重新應用您的更改。",

                // 頂部提醒
                    "The wiki page was successfully deleted.": "Wiki 頁面已成功刪除。",

            // wiki頁面歷史 /<user-name>/<repo-name>/wiki/<page name>/_history
                "Edit Page": "編輯頁面",
                "Revisions": "修訂",


            //// 直接提交拉取請求
            "Open a pull request": "新建一個拉取請求",
            "Create a new pull request by comparing changes across two branches. If you need to, you can also": "透過比較兩個分支的更改來建立一個新的拉請求。如果需要，還可以",

            "Checking mergeability…": "檢查可合併性…",
            "Don’t worry, you can still create the pull request.": "別擔心，您仍然可以建立拉取請求。",
            "Able to merge.": "可被合併。",
            "Can’t automatically merge.": "無法自動合併。",
            "These branches can be automatically merged.": "該分支可被自動合併。",

            "View pull request": "檢視拉取請求", //存在拉取請求時

            "commit comment": "次提交",
            "commit comments": "次提交",
            "file changed": "個檔案變更",
            "files changed": "個檔案變更",
            "comments": "個評論",
            "contributor": "位貢獻者",
            "contributors": "位貢獻者",
            "No commit comments for this range": "該範圍變更沒有提交註釋",

            // 建立拉取請求 按鈕下拉
            "Open a pull request that is ready for review": "開啟一個拉取請求，以供審查",
            "Create draft pull request": "建立拉取請求草案",
            "Cannot be merged until marked ready for review": "在標記為可供審查之前，不能合併",
            "Draft pull request": "拉取請求草案",

            // 右側欄補充
            // 關聯議題
            "Use": "使用",
            "Closing keywords": "關閉關鍵詞",
            "in the description to automatically close issues": "在描述中，以自動關閉議題",
            "Use Closing keywords to add a closing reference": "使用關閉關鍵詞新增一個關閉引用",

            "Helpful resources":"幫助性資源",

            // https://github.com/maboloshi/github-chinese/compare/2.0...gh-pages
            "Commit comments": "提交評論",

            // Compare changes 頁面 /compare
            ///<user-name>/<repo-name 合併到分支>/compare/<branch>...<user-name>:<branch> 提出合併分支 ?
            "Compare changes": "變更比較",
            "Compare changes across branches, commits, tags, and more below. If you need to, you can also": "比較跨分支，提交，標籤，和更多的變更。如果您需要，也可以",
            "compare across forks": "比較復刻庫和源倉庫",

            // 分支選擇欄
            "base repository:": "基礎倉庫：",
                "Choose a Base Repository": "選擇基礎倉庫",
                "Filter repos": "篩選倉庫",
            "head repository:": "頭部倉庫：",
                "Choose a Head Repository": "選擇頭部倉庫",
            "base:": "基礎庫：",
                "Choose a base ref": "選擇基礎引用",
                "Find a branch": "搜尋分支",
                "Find a tag": "搜尋標籤",
            "compare:": "比較庫：",
                "Choose a head ref": "選擇頭部引用",

            "Choose different branches or forks above to discuss and review changes.": "選擇不同的分支或復刻來討論和檢視變化。",
            "Create pull request": "建立拉取請求",

            "Compare and review just about anything": "比較和審查任何檔案",
            "Branches, tags, commit ranges, and time ranges. In the same repository and across forks.": "分支，標籤，提交範圍和時間範圍。在同一倉庫和復刻的倉庫。",
            "Example comparisons": "比較例子",

            // /<user-name>/<repo-name 合併到分支>/compare/<branch>...<user-name>:<branch> 提出合併分支
            // https://github.com/k1995/github-i18n-plugin/compare/master...maboloshi:master
            // https://github.com/maboloshi/github-i18n-plugin/compare/master...k1995:master
            "Comparing changes": "比較變更",
            "Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also": "選擇兩個分支，看看發生了什麼改變，或發起一個新的拉請求。如果您需要，您也可以",
            "base fork:": "基復刻：",

            "There isn’t anything to compare.": "沒有任何東西可比較。",
            "is up to date with all commits from": "已是最新，提交於",
            ". Try": "。嘗試",
            "switching the base": "切換基礎庫",
            "for your comparison.": "來進行比較。",


            "Discuss and review the changes in this comparison with others.": "與他人討論並回顧此次對比中的變化。",
            "Learn about pull requests": "瞭解拉取請求",

            "This comparison is big! We’re only showing the most recent 250 commits": "這個比較是很大的! 我們只顯示最近的 250 個提交。",

            "You’ll need to use two different branch names to get a valid comparison.": "您需要使用兩個不同的分支名稱來進行有效的比較。",
            "Check out some of these sample comparisons.": "看看這些比較的例子吧。",
            "are identical.": "是相同的。",

            // /<user-name>/<repo-name>/compare/<tag id1>...<tag id2> 標籤對應版本比較
            // 僅限 MD檔案
            "Display the source diff": "顯示源差異",
            "Display the rich diff": "顯示富差異",

            // 提交 commits 頁面 /<user-name>/<repo-name>/commits/<branch> 或 /<user-name>/<repo-name>/commits

            // 驗證標記浮動資訊
            "This commit was created on GitHub.com and signed with GitHub’s": "此提交是在 GitHub.com 上建立的，並簽署使用 GitHub 的",
            "This commit was signed with the committer’s": "此提交已簽署使用提交者的",
            "This tag was signed with the committer’s": "此標籤已簽署使用提交者的", // /<user-name>/<repo-name>/releases
            "verified signature": "已驗證簽名",
            "This commit is not signed, but one or more authors requires that any commit attributed to them is signed.": "此提交未簽名，但一位或多位作者要求對歸屬於他們的任何提交進行簽名。",

            "Learn about vigilant mode": "瞭解警戒模式",

            // "Copy the full SHA": "複製完整的 SHA",
            // "View commit details": "檢視提交詳情",
            // "Browse the repository at this point in the history": "瀏覽該階段的歷史倉庫內容",

            "Newer": "新的",
            "Older": "舊的",

            // 2/commits?author=maboloshi&since=2021-09-30&until=2021-10-13
            "Seeing something unexpected? Take a look at the": "看到了一些意想不到的東西？請看一下",
            "GitHub commits guide": "GitHub 提交指南",

            // 具體某個提交頁面 /<user-name>/<repo-name>/commit/<full SHA>
                // 快捷鍵
                "Browsing commits": "瀏覽提交",
                // "": "提交評論",
                "Close form": "關閉評論",
                "Parent commit": "父提交",
                "Other parent commit": "其他父提交",

                // 訪問已刪除的提交
                "This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.": "這個提交不屬於本倉庫的任何分支，可能屬於倉庫以外的分支。",

                "Browse files": "瀏覽檔案",
                "Loading branch information": "載入分支資訊",

                // [/This commit closes issue (#\d+)./, "此提交關閉了提議 $1。"], //具體提交頁面
                "committed": "提交於",
                "commit": "提交",

                "Showing": "顯示",
                "with": "包含",
                // "always": "總是",
                // "Unified": "同屏",
                // "Split": "分屏",

                "Submodule": "子模組",
                "updated": "已更新",
                // [/from ([^ ]+) to ([^ ]+)/, "從 $1 到 $2。"], //具體提交頁面

                "Binary file not shown.": "不顯示二進位制檔案",
                "Empty file.": "空檔案。",
                "File renamed without changes.": "檔案僅重新命名，內容沒有更改。",

                // 修改的檔案 左側 展開按鈕
                "Expand all": "展開全部",
                "Collapse expanded lines": "摺疊展開的線",

                // 修改的檔案 右側下拉
                "Show comments": "顯示評論",
                "Show annotations": "顯示註釋",
                "View file": "檢視檔案",
                "Edit file": "編輯檔案",
                "Delete file": "刪除檔案",
                "Open in desktop": "在 GitHub Desktop 中開啟",

                //底部評論框上部
                // "Lock conversation": "鎖定對話",
                    "Lock conversation on this commit": "鎖定關於此提交的對話",
                    "Locking the conversation means:": "鎖定對話意味著：",
                    "to this commit.": "到這個提交。",
                    "You can always unlock this commit again in the future.": "您可以隨時再次解鎖此提交。",
                // "Unlock conversation": "解鎖對話",
                    "Unlock conversation on this commit": "解鎖關於此提交的對話",
                    "Unlocking the conversation means:": "解鎖對話意味著：",
                    "will be able to comment on this commit once more.": "將能夠再次對此提交發表評論。",
                    "You can always lock this commit again in the future.": "您可以隨時再次鎖定此提交。",

            // 分支頁面 branches  /<user-name>/<repo-name>/branches
                // 標籤卡欄
                "Overview": "概況",
                "Yours": "您的",
                "Active": "活躍的",
                "Stale": "陳舊的",
                "All branches": "所有分支",

                "Search branches…": "搜尋分支…",

                "Default branch": "預設分支",
                "Switch default branch": "切換預設分支",
                "Default": "預設",

                "Updated": "更新",

                    // 重新命名分支對話方塊
                    "Rename default branch": "重新命名預設分支", // 重新命名預設分支 標題
                    "Rename this branch": "重新命名分支", // 重新命名其他分支 標題
                    "Rename": "重新命名",
                    "to:": "為：",
                    "Most projects name the default branch": "大多數專案將預設分支名為",
                    "Renaming this branch:": "重新命名此分支：",
                        // 該分支存在來自其他分支的拉取請求時
                            "Will update": "將更新",
                            "pull request targeting this branch.": "個針對該分支的拉取請求。",

                        // 該分支存在用於其他分支的拉取請求時
                            "Will close": "將關閉",
                            "open pull request for this branch.": "個該分支的拉取請求。",

                        // 重新命名 GitHub Pages 所在分支
                            "Will unpublish current GitHub Pages site.": "將取消當前釋出的 GitHub Pages 站點。",
                                "Your current GitHub Pages site will become unpublished. A new commit on the renamed branch will publish the GitHub Pages site again.": "您當前的 GitHub Pages 站點將被取消釋出。重新命名分支上的新提交將再次釋出 GitHub Pages 站點。",

                        "Will not update your members' local environments.": "不會更新您成員的本地環境。",
                    "Renaming this branch will not update your members' local environments.": "重新命名此分支不會更新您成員的本地環境。",
                        "Your members will have to manually update their local environments. We'll let them know when they visit the repository, or you can share the following commands.": "您的成員將不得不手動更新他們的本地環境。我們會在他們訪問倉庫時通知他們，或者您可以共享以下命令。",

                    "Rename branch": "重新命名分支",
                    "Saving…": "儲存中…",

                    // 刪除分支後
                    "Restore": "還原",
                    "Deleted just now by": "剛剛被刪除",

                    // 頂部提醒
                    // [/Branch main will be renamed to ([^ ]+) shortly./,"主分支將很快重新命名為 $1"], //預設主分支預設 重新命名成功

                "Your branches": "您的分支",
                "You haven’t pushed any branches to this repository.": "您沒有推送任何分支到該倉庫。",
                "Active branches": "活躍的分支",
                "There aren’t any active branches.": "沒有任何活躍的分支。",
                "Stale branches": "陳舊的分支",
                "There aren’t any stale branches.": "沒有任何陳舊的分支。",
                "View more active branches": "檢視更多活躍的分支",
                "View more stale branches": "檢視更多陳舊的分支",

                // [/(\d+) commits? ahead, (\d+) commits? behind ([^ ]+)/, "領先 $1 個提交，落後 $2 個提交於 $3"],

            // "Compare": "比較",
            // "Change default branch": "更改預設分支",

            // 發行版 頁面 /<user-name>/<repo-name>/releases
                //"Releases": "釋出",
                // 無發行版時
                "There aren’t any releases here": "沒有任何發行版",
                "You can create a release to package software, along with release notes and links to binary files, for other people to use. Learn more about releases in": "您可以建立一個發行版來打包軟體，以及發行說明和二進位制檔案連結，供其他人使用。瞭解更多關於釋出的資訊檢視",
                "our docs": "文件",
                "Releases are powered by": "發行版是指透過對倉庫中",
                "tagging specific points of history": "特定歷史點",
                "in a repository. They’re great for marking release points like": "進行標記來發布。用於釋出的版本號類似",
                "Create a new release": "建立發行版",

                // 有發行版時
                "Draft a new release": "起草發行版",
                "Find a release": "搜尋發行版",
                // 左側欄
                "Pre-release": "預發行版",
                "Latest release": "最新發行版",
                // "Draft": "草案",

                // 對比按鈕下拉
                "Choose a tag to compare": "選擇一個標籤進行比較",

                "Read more": "閱讀更多內容",
                "Assets": "資源",

                "Join discussion": "加入討論",

            // 發行版 標籤卡 /<user-name>/<repo-name>/tags
                "Create release": "建立發行版",
                "Edit release": "編輯發行版",

                "Notes": "說明",
                "Downloads": "下載",

            // 某個發行版標籤 /<user-name>/<repo-name>/releases/tag/<tag>
                // "Create release": "建立發行版",
                "from tag": "來自該標籤",
                // "Edit": "編輯",
                "release": "發行版",

                // "Read release notes": "閱讀釋出說明",
                // 狀態詞
                "released this": "釋出了",
                "tagged this": "標記了",
                "drafted this": "起草了",

                // 刪除標籤對話方塊
                "Are you sure?": "您確定嗎？",
                "This will delete the information for this tag.": "將刪除該標籤的所有資訊。",
                "Delete this tag": "刪除此標籤",

                // 刪除發行版對話方塊
                "This will delete the information for this release.": "這將會刪除該發行版的資訊。",
                "Delete this release": "刪除發行版",

                // 頂部提醒框
                "Your tag was removed": "您的標籤已刪除",
                "Your release was removed": "您的發行版已刪除",

            // 建立發行版 /releases/new 和 編輯發行版 /releases/edit/<tag>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                // 提醒條
                "This is a draft and won’t be seen by the public unless it’s published.": "這是一個草案，除非釋出，否則不會被公眾看到。",
                "Discard draft": "丟棄草案",

                "Choose a tag": "選擇標籤",
                    "Find or create a new tag": "查詢或建立新標籤",
                "Target:": "目標：",
                    "Pick a branch or recent commit": "選擇一個分支或最近的提交",
                    "Filter branches…": "篩選分支…",
                    "Filter recent commits…": "篩選最近提交…",
                    "Recent Commits": "最近提交…",
                "Choose an existing tag, or create a new tag on publish": "選擇一個現有的標籤，或在釋出時建立一個新標籤",

                "Loading tag information…": "載入標籤資訊…",
                // 在篩選標籤框輸入 標籤時
                "Create new tag:": "建立新標籤：",
                "on publish": "釋出時",
                // 輸入結果
                "Duplicate tag name": "重複的標籤名",
                    "This tag already has release notes. Would you like to": "這個標籤已經有發行說明。您是否願意",
                    "edit them?": "編輯它們？",
                    "Existing tag": "已存在的標籤",
                "Invalid tag name": "無效的標籤名",
                    "We can’t create a tag with this name. Take a look at the suggestions in the sidebar for example tag names.": "我們不能用這個名字建立標籤。看看側邊欄的建議，看看標籤名稱的例子。",
                "Excellent! This tag will be created from the target when you publish this release.": "優秀! 當您釋出這個版本時，這個標籤將從目標建立。",

                "Release title": "發行版標題",
                "Auto-generate release notes": "自動生成發行版說明",
                "Select a valid tag to automatically add the markdown for all the merged pull requests from this diff and contributors of this release": "選擇一個有效的標籤，自動為來自此差異和此發行版貢獻者的所有已合併拉取請求，新增說明。",
                "Automatically add the markdown for all the merged pull requests from this diff and contributors of this release": "自動為來自此差異和此發行版貢獻者的所有已合併拉取請求，新增說明。",
                "Describe this release": "描述此發行版",

                // 附加檔案
                "Attach binaries by dropping them here or selecting them.": "拖拽檔案到這來或選擇它們來附加檔案。",
                "Uploading your release now…": "正在上傳到您的發行版…",
                "An attachment with that filename already exists.": "同名附件已經存在。",
                "Try a different file.": "請嘗試不同的檔案。",
                "We don’t support that file type.  try zipping it.": "我們不支援該檔案型別，請嘗試壓縮它。",
                "Try another file.": "請嘗試另一個檔案。",
                "Yowza, that’s a big file.": "喲，這可是個大檔案。",
                "Try again": "請嘗試",
                "With a file smaller than 2GB.": "一個小於 2GB 的檔案。",
                // "This file is empty.": "這是一個空檔案。",
                "with a file that’s not empty.": "一個非空的檔案。",
                // "Something went really wrong, and we can’t process that file.": "確實出了點問題，我們無法處理該檔案。",
                "Try again.": "請重試。",

                "Delete and try uploading this file again.": "刪除並重新上傳。",
                "will be deleted": "將被刪除",
                "(undo)": "(撤銷)",

                "This is a pre-release": "這是一個預釋出版",
                "We’ll point out that this release is identified as non-production ready.": "我們需要指出，該版本為非正式釋出。", //我們需要指出的是，這個版本被認定為非生產準備。

                "Publish release": "釋出發行版",
                    "Publishing…": "釋出中…",
                "Update release": "更新發行版",
                    "Updating…": "更新中…",
                    "Saving release…": "儲存中…",
                "Save draft": "儲存草案",
                "Saved!": "已儲存",
                "Saving draft failed. Try again?": "儲存草案失敗。請重試？",

                // 丟棄草案 對話方塊
                // "Are you sure?": "您確定哇?",
                "This will delete the information for this draft.": "這將會刪除該草案的資訊。",
                "Delete this draft": "刪除草案",

                // 頂部提醒欄
                // "Your release was removed": "您的發行版已刪除",

                // 右側欄
                "Tagging suggestions": "標籤建議",
                "It’s common practice to prefix your version names with the letter": "通常的做法是在版本名稱前加上字母",
                ". Some good tag names might be": "。一些好的標籤名稱可能是",
                "If the tag isn’t meant for production use, add a pre-release version after the version name. Some good pre-release versions might be": "如果標籤不是用於生產的，就在版本名後面加上預釋出版本。一些好的預釋出版本可能是",

                "Semantic versioning": "語義化版本",
                "If you’re new to releasing software, we highly recommend reading about": "如果您是釋出新手，我們強烈建議閱讀關於",
                "semantic versioning.": "語義化版本。",

            // "Add release notes": "添加發布說明",
            // "Edit release notes": "編輯釋出說明",
            // "(No release notes)": "(沒有釋出說明)",
            // "Release notes": "釋出說明",

            // "Edit tag": "修改標籤",

            // "Markdown supported": "Markdown 語法支援",


            // 洞察頁面 /<user-name>/<repo-name>/pulse >>>>>>>>>>>>>>>>>>>
                // 公共部分
                // 左側選單
                "Pulse": "統計",
                "Contributors": "貢獻者",
                "Community": "社群",
                "Community Standards": "社群準則",
                "Traffic": "流量",
                "Commits": "提交",
                "Code frequency": "程式碼頻率",
                "Dependency graph": "依賴關係圖",
                // "Punch card": "時刻",
                "Network": "網路",
                // "Members": "成員",
                "Forks": "復刻",

                "People": "成員", //組織倉庫

                // 私有庫禁用部分功能的提醒
                "Upgrade to GitHub Pro or make this repository public to enable this feature.": "升級到 GitHub Pro 或將此倉庫設為公開以啟用此功能。",
                // 他人私有庫
                "Contact an administrator to upgrade to GitHub Team or make this repository public to enable this feature.": "請聯絡管理員升級到 GitHub 團隊或將此設為倉庫公開以啟用此功能。",

            // 統計 /<user-name>/<repo-name>/pulse
                "Period:": "週期：",
                    "Filter activity": "篩選活動",
                    "24 hours": "24 小時",
                    "3 days": "3 天",
                    "1 week": "1 周",
                    "1 month": "1 個月",
                "Active pull request": "活躍的拉取請求",
                "Active pull requests": "活躍的拉取請求",
                "Active issue": "活躍的議題",
                "Active issues": "活躍的議題",
                "Merged pull request": "合併的拉取請求",
                "Merged pull requests": "合併的拉取請求",
                "Open pull request": "開啟的拉取請求",
                "Open pull requests": "開啟的拉取請求",
                "Closed issue": "關閉的議題",
                "Closed issues": "關閉的議題",
                "New issue": "新議題",
                "New issues": "新議題",

                "Excluding merges,": "不包括合併，",
                // [/(\d+) authors?/, "$1 位作者"],
                "have pushed": "推送了",
                "has pushed": "推送了",
                // [/to gh-pages and/, "到 $1 分支和"],
                // [/to all branches. On gh-pages,/ "到全部分支。在 $1 分支，"],
                // [/(\d+) files?/, "$1 個檔案"],
                "have changed and there have been": "已經發生了變化，並且有",
                "has changed and there have been": "已經發生了變化，並且有",
                "additions": "處增加",
                "deletions": "處刪除",
                "Want to help out?": "想幫忙嗎？",
                "Fork this repository": "復刻倉庫",
                "Release published by": "個發行版已釋出由",
                "published": "釋出",
                "Pull request merged by": "個拉取請求已合併由",
                "Pull requests merged by": "個拉取請求已合併由",
                "Pull request opened by": "個拉取請求開啟由",
                "Pull requests opened by": "個拉取請求開啟由",
                "Issue closed by": "個議題已關閉由",
                "Issues closed by": "個議題已關閉由",
                "Issue opened by": "個議題開啟由",
                "Issues opened by": "個議題開啟由",
                "person": "人",
                "people": "人",
                "Sometimes conversations happen on old items that aren’t yet closed. Here is a list of all the Issues and Pull Requests with unresolved conversations.": "有時會針對尚未關閉的舊專案進行討論。以下是所有未解決的討論的議題和拉取請求的列表。",
                // [/• (\d+) new comments/, "• $1 個新評論"],
                "Unresolved conversation": "個未解決的討論",

                "merged": "已合併",
                "opened": "開啟",
                "closed": "已關閉",

            // 貢獻者 /<user-name>/<repo-name>/graphs/contributors
                "Loading contributions…": "載入貢獻者…",
                // "Contributions to master, excluding merge commits and bot accounts": "對主分支的貢獻，不包括合併提交和機器人帳戶",
                "Contributions:": "貢獻者：",
                    // 下拉選單
                    "Filter contributions": "篩選貢獻者",
                    "Additions": "新增數量",
                    "Deletions": "刪除數量",
                    // [/Contributions to (.*), excluding merge commits and bot accounts/, "貢獻到 $1分支，不包括合併提交和機器人帳戶"],
                "Crunching the latest data, just for you. Hang tight…": "正在為您準備最新資料，請稍後…",

            // 社群 /<user-name>/<repo-name>/graphs/community
                "Community insights": "社群見解",
                "Last 30 days": "最近 30 天",
                "Last 3 months": "最近 3 個月",
                "Last year": "最近 1 年",

                "Contribution activity": "貢獻活動",
                    "Count of total contribution activity to Discussions, Issues, and PRs": "對討論、議題和拉取請求的總貢獻活動計數",
                    "discussions": "討論",
                    "Quantity": "數量",
                    "Timeline": "時間軸",
                    // [/(\d+) pull requests created/, "$1 個拉取請求建立"],
                "We tried our best, but the graph wouldn’t load. Try reloading the page.": "我們盡了最大努力，但圖表無法載入。嘗試重新載入頁面。",
                "Discussions page views": "討論頁面瀏覽量",
                    "Total page views to Discussions segmented by logged in vs anonymous users.": "按登入使用者與匿名使用者劃分的討論的總頁面瀏覽量。",
                "Discussions daily contributors": "每日討論的貢獻者",
                    "Count of unique users who have reacted, upvoted, marked an answer, commented, or posted in the selected period.": "在所選時間段內，作出反應、投票、標記答案、評論或發帖的唯一使用者的數量。",
                "Discussions new contributors": "討論的新貢獻者",
                    "Count of unique new users to Discussions who have reacted, upvoted, marked an answer, commented, or posted in the selected period.": "在所選時間段內，對討論作出反應、投票、標記答案、評論或發帖的唯一新使用者的數量。",

            // 社群準則 /<user-name>/<repo-name>/community
                "Here’s how this project compares to": "以下是該專案內容，不同於",
                "recommended community standards": "推薦的社群標準",
                "Checklist": "檢查清單",
                "Add": "新增",
                "Propose": "提議",

                // "Description": "描述",
                    "Add a description to your repository so people understand the goals of your project.": "向您的倉庫新增描述，以便人們瞭解您專案的目標。",
                "README": "自述檔案（README）",
                    "Writing a README": "編寫自述檔案（README）",
                // "Code of conduct": "行為準則",
                    "What is a code of conduct?": "什麼是行為準則？",
                "Contributing": "貢獻",
                    "Writing contributing guidelines": "編寫貢獻指南",
                "License": "許可證",
                    "Choosing a license": "選擇許可證",
                "Issue templates": "議題模板",
                "Pull request template": "拉取請求模板",
                "Repository admins accept content reports": "倉庫管理員接受內容報告", // 組織倉庫?
                "What is": "什麼是",
                "the community profile": "社群簡介",

            // 流量 /<user-name>/<repo-name>/graphs/traffic
                "Git clones":"Git 克隆",
                "Clones":"克隆",
                "Unique cloners":"唯一克隆者",
                "clones":"次克隆",
                "clone":"次克隆",
                "unique cloners":"個唯一克隆者",
                "unique cloner":"個唯一克隆者",
                "Visitors":"訪客",

                "Referring sites":"引薦網站",
                "Site":"站點",
                "Views":"瀏覽",
                "Unique visitors":"唯一訪客",
                "views":"次瀏覽",
                "view":"次瀏覽",
                "unique visitors":"個唯一訪客",
                "unique visitor":"個唯一訪客",
                "Popular content":"熱門內容",
                "Content":"內容",

                "We don’t have enough data to show anything useful.": "我們沒有足夠的資料來顯示任何有用的東西。",
                "It usually takes about a week to populate this graph.": "通常需要一週左右的時間來填充此圖表。",
                "It looks like traffic to your repository is a little light. Go spread the word and check back later!": "看起來您的倉庫的流量有點少呀。去宣傳一下吧，稍後再回來檢視！",

            // 提交 /<user-name>/<repo-name>/graphs/commit-activity
                "Sunday"    : "週日",
                "Monday"    : "週一",
                "Tuesday"   : "週二",
                "Wednesday" : "週三",
                "Thursday"  : "週四",
                "Friday"    : "週五",
                "Saturday"  : "週六",

            // 程式碼頻率 /<user-name>/<repo-name>/graphs/code-frequency
                "per week": "每週",

            // 依賴關係圖 - 依賴關係 /network/dependencies
                "The dependency graph is not enabled": "依賴關係圖未啟用",
                "The dependency graph has not yet been enabled by an organization owner or a user with admin permissions for this repository. Once enabled, you can": "依賴關係圖還沒有被組織所有者或具有該倉庫管理許可權的使用者啟用。一旦啟用，您可以",
                "track this repository’s dependencies": "追蹤此倉庫的依賴關係",

                "Enable the dependency graph": "啟用依賴關係圖",
                "Track this repository’s dependencies and sub-dependencies": "追蹤該倉庫的依賴關係和子依賴關係",
                "The": " ",
                "is not enabled for this repository. Click on “Enable the dependency graph” below to enable it.": "暫未啟用。單擊下面的 “啟用依賴關係圖” 以啟用它。",
                "If you’d like to enable the": "如果您想啟用",
                "dependency graph": "依賴關係圖",
                "vulnerability alerting": "漏洞警報",
                "click on \"Allow access\" below to enable it.": "點選下面的 “允許訪問” 來啟用它。",
                "Learn more about how we use your data": "瞭解更多關於我們如何使用您的資料的資訊",
                "Allow access": "允許訪問",

                "No manifest files found": "未找到清單檔案",
                "To enable the dependency graph, your repository must define dependencies in": "要啟用依賴關係圖，您的倉庫必須存在",
                "one of the supported manifest file types": "一個支援的清單檔案",
                ", like": "，例如",

                "Dependencies": "依賴關係",
                "These dependencies are defined in": "這些依賴關係被定義在",
                "’s manifest files, such as": "的清單檔案，例如",
                "Dependencies defined in": "依賴關係被定義在",

                // 發現已知漏洞
                "Dependencies defined in these manifest files have known security vulnerabilities and should be updated:": "這些清單檔案中定義的依賴項具有已知的安全漏洞，應更新：",
                // [/(\d+) vulnerabilities? found/, "發現 $1 個漏洞"],
                "Known security vulnerability in": "已知的安全漏洞，在",
                    "Known vulnerability found": "發現已知漏洞",
                    "update suggested:": "更新建議：",
                    "Always verify the validity and compatibility of suggestions with your codebase.": "始終驗證建議與程式碼庫的有效性和相容性。",

                // [/(\d+) more dependencies/, "更多 $1 個依賴項"],
                // [/Load (\d+) more…/, "載入更多 $1個…"],

            // 依賴關係圖 - 依賴者 /network/dependents
                "GitHub does not currently determine the dependents of private repositories": "GitHub 目前無法確定私有倉庫的依賴者",

                "Dependents": "依賴者",
                "We haven’t found any dependents for this repository yet.": "我們尚未找到這個倉庫的任何依賴者。",
                "We’ll keep looking!": "我們會繼續尋找！",

                // [/(\d+) Repositor(y|ies)/, "$1 倉庫"],
                // [/(\d+) Packages?/, "$1 軟體包"],

            // 依賴關係圖 - 依賴機器人 /network/updates
                "Enable Dependabot": "啟用 Dependabot",
                "Dependabot isn't enabled": "未啟用 Dependabot",
                "Dependabot isn't enabled on forks by default": "預設情況下，Dependabot 不會在復刻上啟用。",

                "Dependabot version updates aren't configured yet": "尚未配置 Dependabot 版本更新",
                "Dependabot creates pull requests to keep your dependencies up-to-date.": "Dependabot 建立拉取請求以保持您的依賴項是最新的。",
                "Create config file": "建立配置檔案",

            // 網路圖 /<user-name>/<repo-name>/network
                "Network graph": "網路圖",
                "Timeline of the most recent commits to this repository and its network ordered by most recently pushed to.": "最近提交到此倉庫的時間軸及其網路圖按最近推送的順序排序。",

                "The repository network shows the 100 most recently pushed forks. Do you need to see more forks? Please": "倉庫網路圖顯示最近推送的 100 個復刻。您需要看到更多的復刻嗎？請",
                "give us feedback": "給我們反饋",
                "on your usage of this feature.": "關於您使用此功能的情況。",

                "Loading graph data": "載入網路圖資料",
                "Keyboard shortcuts available": "可用的鍵盤快捷鍵",

            // 復刻 /<user-name>/<repo-name>/network/members
                "No one has forked this repository yet.": "目前，暫無人復刻該倉庫。",
                "Forks are a great way to contribute to a repository. After": "復刻是給該倉庫做貢獻的好方法。首先",
                "forking a repository": "復刻倉庫",
                ", you can send the original author a": "，然後您可向原作者傳送",
                "pull request": "拉取請求",

                "Woah, this network is huge! We’re showing only some of this network’s repositories.": "哇，這個網路太龐大了! 我們只展示了這個網路中的一部分倉庫。",

            // 成員 /<組織名>/<repo-name>/people
                "Outside collaborators": "外部協作者",

                // [/(\d+) person has access to this repository/, "$1 人有權訪問此倉庫"],

            // 成員許可權詳情 /orgs/<組織名>/people/<使用者名稱>/repositories/<組織名>/<repo-name>

            // 安全標籤卡 & 安全概述 /<user-name>/<repo-name>/security
                "Security overview": "安全概述",
                "Security policy": "安全政策",
                    "Define how users should report security vulnerabilities for this repository": "定義使用者應如何報告此倉庫的安全漏洞",

                    "Suggest how users should report security vulnerabilities for this repository": "建議使用者應如何報告此倉庫的安全漏洞",
                    "Suggest a security policy": "安全政策建議",

                    "View how to securely report security vulnerabilities for this repository": "檢視如何安全地報告此倉庫的安全漏洞",
                    "View security policy": "檢視安全策略",

                "Security advisories": "安全公告",
                    "View or disclose security advisories for this repository": "檢視或公開此倉庫的安全公告",
                    "View security advisories": "檢視安全公告",
                    "View security advisories for this repository": "檢視此倉庫的安全公告",

                "Dependabot alerts": "Dependabot 警報",
                    "— Active": "— 啟用",
                    "Get notified when one of your dependencies has a vulnerability": "當您的一個依賴項存在漏洞時得到通知",
                    "Enable Dependabot alerts": "啟用 Dependabot 警報",
                    "View Dependabot alerts": "檢視 Dependabot 警報",

                "Code scanning alerts": "程式碼掃描警報",
                    "Automatically detect common vulnerability and coding errors": "自動檢測常見漏洞和編碼錯誤",
                    "Set up code scanning": "設定程式碼掃描",
                    // 私有庫
                    "Advanced Security is only available for Organizations": "高階安全只適用於組織",
                    "Find out more": "瞭解更多",
                    "Code scanning for private repositories is part of GitHub Advanced Security": "私有倉庫的程式碼掃描是 GitHub 高階安全的一部分", //組織倉庫
                    "Contact sales": "聯絡銷售", //組織倉庫

                // "Vulnerability details": "漏洞詳情",
                "High severity": "高風險",
                "Moderate severity": "中風險",
                "Low severity": "低風險",
                // "Create dependabot security update": "建立可靠的安全更新",

            // 安全政策 /<user-name>/<repo-name>/security/policy
                "Set up a security policy": "制定安全政策",
                "Help your community understand how to securely report security vulnerabilities for your project.": "幫助您的社群瞭解如何安全地報告專案的安全漏洞。",
                "Start setup": "開始設定",

                "No security policy detected": "未檢測到安全策略",
                "This project has not set up a": "該專案尚未設定",
                "file yet.": "檔案。",

            // 安全公告 /<user-name>/<repo-name>/security/advisories
                "Security Advisories": "安全公告",
                "Privately discuss, fix, and publish information about security vulnerabilities in your repository's code.": "私人討論，修復和釋出倉庫程式碼中的安全漏洞的資訊。",
                "New draft security advisory": "新的安全建議草案",
                "There aren’t any draft security advisories": "沒有任何安全建議草案",

                // 他人庫
                "View information about security vulnerabilities from this repository's maintainers.": "檢視倉庫維護者提供的安全漏洞資訊。",
                "There aren’t any published security advisories": "沒有任何已釋出的安全公告",

            // Dependabot 警報 /<user-name>/<repo-name>/security/dependabot
                "Dependabot alerts are disabled.": "Dependabot 警報已禁用。",
                "To receive Dependabot alerts, you must first enable Dependabot alerts in": "要接收 Dependabot 警報，必須首先啟用 Dependabot 警報",
                "this repository’s settings": "在倉庫的設定中",

                "Tell us how to make Dependabot alerts work better for you with three quick questions.": "透過三個快速問題告訴我們如何讓 Dependabot 警報更好地為您服務。",

                "Welcome to Dependabot alerts!": "歡迎使用 Dependabot 警報！",
                "Dependabot alerts track security vulnerabilities that apply to your repository’s dependencies. As alerts are created, they’ll appear here.": "Dependabot 警報跟蹤適用於倉庫依賴項的安全漏洞。建立警報後，它們將顯示在此處。",

                "Dismiss all": "忽略全部",
                    // 下拉選單
                    "A fix has already been started": "修復已經開始",
                    "No bandwidth to fix this": "沒有頻寬來修復",
                    "Risk is tolerable to this project": "風險可承受",
                    "Vulnerable code is not actually used": "漏洞程式碼實際未使用",
                    "Manage repository vulnerability settings": "管理倉庫漏洞設定",
                    "Manage account notification settings": "管理帳戶通知設定",

                "Package": "軟體包",
                    "Filter by package": "按軟體包篩選",
                    "Filter package": "篩選軟體包",
                "Ecosystem": "生態系統",
                    "Filter by ecosystem": "按生態系統篩選",
                    "Filter ecosystem": "篩選生態系統",
                "Manifest": "清單",
                    // 清單下拉
                    "Filter by manifest": "按清單篩選",
                    "Filter manifest": "篩選清單",
                    "All": "所有",

                // 排序下拉 補充詞條
                "Severity": "嚴重等級",
                "Manifest path": "表現方式",
                "Package name": "軟體包名稱",

                // 底部資訊
                "surface known security vulnerabilities in some dependency manifest files.": "表面已知的安全漏洞在某些依賴性清單檔案中。",
                "Dependabot security updates": "Dependabot 安全更新",
                "automatically keep your application up-to-date by updating dependencies in response to these alerts.": "透過響應這些警報更新依賴項，自動保持您的應用程式是最新的。",
                "Dependabot version updates": "Dependabot 版本更新",
                "can also help keep dependencies updated.": "也可以幫助保持依賴項的更新。",

             // 具體某條Dependabot 警報 /security/dependabot/<id>
                "Dismiss": "忽略",
                    // 下拉選單 補充
                    "Reason": "原因",
                        "This alert is inaccurate or incorrect": "此警報不準確或不正確",

                "Opened": "開啟",
                // [/Upgrade ([^ ]+) to fix/, "升級 $1 去修復"], // 某個 Dependabot 警報
                // [/Upgrade ([^ ]+) to version/, "升級 $1 到版本"], // 某個 Dependabot 警報
                "Create Dependabot security update": "建立 Dependabot 安全更新",

                // [/Dependabot cannot update ([^ ]+) to a non-vulnerable version/, "Dependabot 無法將 $1 更新為無漏洞的版本"],
                "The latest possible version that can be installed is": "最新可以安裝版本是",
                "because of the following conflicting dependency:": "，但是存在以下衝突的依賴關係：",
                "because of the following conflicting dependencies:": "，但是存在以下衝突的依賴關係：",
                "The earliest fixed version is": "最早修復版本為",
                "View logs": "檢視日誌",
                "Learn more about troubleshooting Dependabot errors": "瞭解更多關於排除 Dependabot 錯誤的資訊",

                "Patched version": "補丁版本",

                "Impact": "影響",
                "Patches": "補丁",
                "Workarounds": "解決方法",
                "Workarounds / Mitigations": "解決方法/緩解措施",
                "References": "參考資訊",
                "For more information": "更多資訊",

                // [/Bump ([^ ]+) from ([^ ]+) to ([^ ]+)/, "將 $1 從 $2 升級到 $3"],
                "Merging this pull request would fix": "合併此拉取請求將修復",
                "Review security update": "審查安全更新",

                // 右側欄
                    "CVSS base metrics": "CVSS 基本指標",
                        "Attack vector": "攻擊載體",
                            "More severe the more the remote (logically and physically) an attacker can be in order to exploit the vulnerability": "攻擊者為了利用該漏洞，可以在遠端（邏輯上和物理上）攻擊時更嚴重",
                            "Local": "本地",
                        "Attack complexity": "攻擊複雜性",
                            "More severe for the least complex attacks": "當最不復雜的攻擊時更嚴重",
                        "Privileges required": "所需許可權",
                            "More severe if no privileges are required": "當不需要許可權時更嚴重",
                            "None": "無",
                        "User interaction": "使用者互動",
                            "More severe when no user interaction is required": "當不需要使用者互動時更嚴重",
                        "Scope": "範圍",
                            "More severe when a scope change occurs, e.g. one vulnerable component impacts resources in components beyond its security scope": "當範圍發生變化時更嚴重，例如一個易受攻擊的元件會影響超出其安全範圍的元件中的資源",
                            "Unchanged": "無變化",
                            "Changed": "已變化",
                        "Confidentiality": "保密性",
                            "More severe when loss of data confidentiality is highest, measuring the level of data access available to an unauthorized user": "當資料保密性損失最高時更為嚴重，衡量未授權使用者可獲得的資料訪問級別",
                        "Integrity": "完整性",
                            "More severe when loss of data integrity is the highest, measuring the consequence of data modification possible by an unauthorized user": "當資料完整性損失最高時更為嚴重，衡量未授權使用者可能修改資料的後果",
                        "Availability": "可利用性",
                            "More severe when the loss of impacted component availability is highest": "當受影響的元件可用性損失最高時更為嚴重",
                    "Weaknesses": "缺陷",
                    "See advisory in GitHub Advisory Database": "請參閱 GitHub 諮詢資料庫中的諮詢",
                    "See all of your affected repositories": "檢視您所有受影響的倉庫",

                // 生成安全更新
                    // 頂部提醒
                        // [/Started generating a security update for ([^ ]+)./, "開始為 $1 生成安全更新。"],
                    // [/Creating a security update for ([^ ]+)/, "為 $1 建立安全更新"],
                    "Dependabot is creating a security update to fix": "Dependabot 正在建立一個安全更新來修復",
                    // [/(\d+) Dependabot alerts?/, "$1 個 Dependabot 警報"],
                    // [/on ([^ ]+) in/, "關於 $1 在"],
                    // [/Or, manually upgrade ([^ ]+) to version/, "或者，手動將 $1 升級到版本"],
                    "or later. For example:": "或更高。例如：",

             // 具體某條Dependabot 警報 日誌 /security/dependabot/<id>/update-logs/<id2>
                "Update logs": "更新日誌",

            // 程式碼掃描器 /<user-name>/<repo-name>/security/code-scanning
                "Automatically detect vulnerabilities in your code.": "自動檢測您程式碼中的漏洞。",
                "Configure tools that integrate with Code Scanning to keep the quality of your code under control. Learn more about": "與程式碼掃描整合的配置工具，使您的程式碼質量得到控制。瞭解更多關於",
                "Code Scanning": "程式碼掃描",
                "Configure scanning tool": "配置掃描工具",

            // 新建安全公告草案 /security/advisories/new >>>>>>>>>>>>>>>>>>>>>>
                "Open a draft security advisory": "開啟一個安全公告草案",
                "After the draft security advisory is open, you can privately discuss it with collaborators and create a temporary private fork where you can collaborate on a fix. If you've already fixed the vulnerability, just fill out the draft security advisory and then publish it.": "在安全公告草案開啟後，您可以與協作者私下討論，並建立一個臨時的私有復刻，在那裡您們可以協作進行修復。如果您已經修復了該漏洞，只需填寫安全公告草案，然後釋出即可。",
                "Affected product": "受影響的產品",
                "Ecosystem": "生態系統",
                    "Select an ecosystem": "選擇一個生態系統",
                    "Go": "",
                    "Other": "其他",
                "Affected versions": "受影響的版本",
                "Patched versions": "補丁版本",
                "Add another affected product": "新增另一個受影響的產品",
                "Select severity": "選擇嚴重程度",
                    "Low": "低風險",
                    "Moderate": "中風險",
                    "High": "高風險",
                    "Critical": "關鍵風險",
                    "Assess severity using CVSS": "使用 CVSS 評估嚴重程度",
                "Common weakness enumerator (CWE)": "常見弱點列舉器 (CWE)",
                    "Search by CWE": "按 CWE 搜尋",
                "CVE identifier": "CVE 識別符號",
                    "Request CVE ID later": "稍後請求 CVE ID",
                    "I have an existing CVE ID": "我有一個現有的 CVE ID",

                "Create draft security advisory": "建立安全公告草案",

                // 右側欄
                "Access and visibility": "訪問和可見性",
                    "Until it is published, this draft security advisory will only be visible to the owner of": "在釋出之前，此安全公告草案僅對以下的所有者可見",
                    ". Other users and teams may be added once the advisory is created.": "。 其他使用者和團隊可以在諮詢建立後加入。",
                "Once published, security advisories on public repositories are visible to everyone.": "一旦釋出，公共倉庫上的安全公告對所有人都是可見的。",
                "Once reviewed by GitHub, security advisories may be broadcast on the": "一旦透過 GitHub 的審查，安全公告就可以出現在",
                "GitHub Advisory Database": "GitHub 諮詢資料庫",
                ". They may also trigger Dependabot alerts to users that depend on this repository.": "。它們還可能向依賴此倉庫的使用者觸發 Dependabot 警報。",

            // 檔案程式碼頁面 /<user-name>/<repo-name>/blob/<brach>/<Patch>/<file_name> >>>>>>>>>>>>>>>>>>>>>>
                // 快捷鍵
                    "Source code browsing": "原始碼瀏覽",
                    "Activates the file finder": "啟用檔案查詢器",
                    "Jump to line": "跳轉到行",
                    "Switch branch/tag": "切換分支/標籤",
                    "Expand URL to its canonical form": "將 URL 擴充套件為其規範形式",
                    "Show/hide all inline notes": "顯示/隱藏所有內嵌註釋",
                    "Open blame": "開啟追溯檢視",

                "Download": "下載",
                "View raw": "檢視原始資料",
                "(Sorry about that, but we can’t show files that are this big right now.)": "（很抱歉，但我們現在無法顯示這麼大的檔案。）",
                "Sorry, something went wrong.": "抱歉，出了一些問題。",
                "Reload?": "重新載入？",

                "View runs": "檢視工作流程", // 工作流程檔案 /blob/<brach>/.github/workflows/xxxx.yml
                // 位址列 最右側 下拉選單
                "Go to line": "跳轉到行",
                    "Jump to line…": "跳轉到行",
                    // "Go":"確定",
                "Go to definition": "跳轉到定義",
                    // 程式碼定義篩選對話方塊
                    "Code definitions": "程式碼定義",
                    "Filter definitions": "篩選定義",
                    "Function": "函式",
                    "Method": "方法",
                    "Code navigation index up-to-date": "程式碼導航索引最新",
                    "No definitions found in this file.": "本檔案中沒有發現任何定義。",
                    "Code navigation not available for this commit": "該提交的程式碼導航不可用",
                "Copy path": "複製路徑",
                "Copy permalink": "複製永久連結",

                "Latest commit": "最新提交",
                "History": "歷史",

                "Display the source blob": "原始碼檢視", // md 檔案
                "Display the rendered blob": "解析後檢視", // md 檔案
                "Raw": "原始碼",
                "Blame": "追溯",
                // GitHub Desktop 圖示
                    "Open this file in GitHub Desktop":"在 GitHub Desktop 中開啟",
                    "You must be on a branch to open this file in GitHub Desktop": "您必須在分支上才能在 GitHub Desktop 中開啟",
                "Copy raw contents": "複製原始碼內容",
                // 檔案編輯圖示
                "Edit this file": "編輯本檔案",
                    "Edit the file in your fork of this project": "在您的復刻中編輯該檔案", // 他人庫
                    "Fork this project and edit the file": "復刻專案再編輯檔案", // 他人庫
                    "You must be able to fork a repository to propose changes": "您必須復刻倉庫以提出更改", // 存檔倉庫
                // 檔案刪除圖示
                "Delete this file":"刪除本檔案",
                    "Delete the file in your fork of this project": "在您的復刻中刪除該檔案", // 他人庫
                    "Fork this project and delete the file": "復刻專案再刪除檔案", // 他人庫
                "You must be on a branch to make or propose changes to this file": "您必須在分支上才能對此檔案進行操作或提議更改", // 歷史檔案

                "Copy line": "複製行",
                "Copy lines": "複製行",
                // "Copy permalink": "複製永久連結",
                "View git blame": "瀏覽 Git 追溯",
                // "Reference in new issue": "引用到新議題",
                "Reference in new discussion": "引用到新討論",

                "Search this file…": "搜尋這個檔案...", // csv 檔案

                //
                "This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.": "此檔案包含雙向 Unicode 文字，其解釋或編譯方式可能與下面的顯示不同。要檢視，請在一個能顯示隱藏的 Unicode 字元的編輯器中開啟檔案。",
                "Learn more about bidirectional Unicode characters": "瞭解更多關於雙向 Unicode 字元的資訊",
                "Show hidden characters": "顯示隱藏字元",

                "Definition": "定義",
                "Defined on": "定義在",
                "Definitions": "定義",
                "Present in": "出現在",

            // 程式碼追溯頁面 /<user-name>/<repo-name>/blame/<branch>/<file>
                "Normal view": "正常檢視",
                "View blame prior to this change": "檢視此修改的早期修訂",

            // 提交中檔案歷史 /<user-name>/<repo-name>/commits/<branch>/<file> 或 /<user-name>/<repo-name>/commits/<full SHA>/<file>
                "History for": "歷史：",
                "View at this point in the history": "在這一歷史節點上檢視",

            // 討論分類 /<user-name>/<repo-name>/discussions/categories
                // [/(\d+) categories?/, "$1 個分類"],
                "Announcements": "公告",
                    "Updates from maintainers": "維護者的更新資訊",
                "General": "通常",
                    "Chat about anything and everything here": "在這裡談論任何事情",
                "Ideas": "想法",
                    "Share ideas for new features":"分享對新功能的想法",
                "Q&A": "問與答",
                    "Ask the community for help": "向社會尋求幫助",
                    "Answers enabled": "已啟用答案",
                "Show and tell": "展示與講述",
                    "Show off something you've made": "炫耀您所做的事情",

                "New category": "新建分類",
                    "Create category": "建立分類",
                    "Category name": "分類名稱",
                    "Add a description (optional)": "新增描述（可選）",
                    "Discussion Format": "討論形式",
                    "Open ended discussion": "開放式討論",
                        "Enable your community to have conversations that don't require a definitive answer to a question. Great for sharing tips and tricks or just chatting.": "使您的社群能夠進行對話，不需要對問題作出明確的回答。很適合分享技巧和竅門，或者只是聊天。",
                    "Question / Answer": "問與答",
                        "Enable your community to ask questions, suggest answers, and vote on the best suggested answer.": "使您的社群能夠提出問題、建議答案並投票選出最佳建議答案。",
                    "Announcement": "公告",
                        "Share updates and news with your community. Only maintainers and admins can post new discussions in these categories, but anyone can comment and reply.": "與您的社群分享更新和新聞。只有維護者和管理員可以在這些類別中釋出新討論，但任何人都可以發表評論和回覆。",
                    "Poll": "投票",
                        "Gauge interest, vote, and interact with other community members using polls.": "調查興趣，投票，並使用投票與其他社群成員互動。",
                    "Create": "建立",
                "Edit category": "編輯分類",
                // 刪除
                    "If this category has discussions associated, where would you like to reassign them?": "如果此類別有相關的討論，您希望將它們重新分配到何處？",
                    "Delete and move": "刪除並移動",

            // 討論頁面 /<user-name>/<repo-name>/discussions
                "Start a new discussion": "開始新的討論",
                "Get started by creating the first": "開始吧，為您的社群建立",
                "discussion for your community.": "第一個討論。",
                "Got it": "知道了",

                "About pinned discussions": "關於置頂討論",
                "When you start a discussion,": "當您開始討論時，",
                "you can choose to feature it": "您可以選擇將",
                "here by pinning it.": "其置頂在此處。",
                // 左側欄
                "Search all discussions": "搜尋所有討論",
                "Suggested filters": "推薦的篩選器",
                "filter by discussion author": "按討論作者篩選",
                "filter by discussion category": "按討論分類篩選",
                "filter by answered or unanswered": "按已答覆或未答覆篩選",

                "Categories": "分類",
                "View all": "檢視全部",

                "Most helpful": "最有幫助",
                "Be sure to mark someone’s comment as an answer if it helps you resolve your question — they deserve the credit!": "如果某人的評論有助於您解決問題，請務必將其標記為答案——他們值得稱讚！",
                "Community guidelines": "社群指南",
                "New": "新",
                "Top:": "頂部：",
                "Today": "今天",
                "Past week": "上週",
                "Past month": "上個月",
                "Past year": "過去一年",
                "Answered": "已答覆",
                "Unanswered": "未答覆",

                "New discussion": "新建討論",

                "There aren't any discussions.": "暫無任何討論。",
                "There are no matching answered discussions.": "沒有匹配的已答覆討論。",
                "There are no matching unanswered discussions.": "沒有匹配的未答覆討論。",
                "You can open a": "您可以開啟一個",
                "new discussion": "新討論",
                "to ask questions about this repository or get help.": "，詢問關於這個倉庫的問題或獲得幫助。",

                "asked": "回覆",
                "started": "標星",
                "· Unanswered":" · 未答覆",
                "· Answered":" · 已答覆",

                // 下拉補充
                "to exclude labels.": "去排除標籤。",

            // 新建討論頁面 /<user-name>/<repo-name>/discussions/new
                "Select category": "選擇分類",
                "Category:": "分類：",
                "Contributing": "貢獻",
                "It looks like this is your first time starting a discussion in this repository!": "看起來這是您第一次在此倉庫中開始討論！",
                "This is a community we build together. Please be welcoming and open minded.": "這是我們共同建立的社群。請保持熱情和開放的態度。",

            // 新建討論頁面 /<user-name>/<repo-name>/discussions/new?category=general

            // 某個討論頁面 /<user-name>/<repo-name>/discussions/<id>
                // [/Congratulations, you've created the first discussion in ([^ ]+)!/, "恭喜您，您已經在 $1 中建立了第一個討論!"],

                "announced in": "宣佈於",
                "started this conversation in": "開始了這次討論，在",
                "asked this question in": "提出了這個問題，在",
                "Maintainer": "維護者",
                "Category": "分類",

                // [/(\d+) answers?/, "$1 位答覆者"],
                "Return to top": "返回頂部",
                // [/(\d+) comments?/, "$1 條評論"],
                // [/(\d+) replies?/, "$1 條回覆"],
                // [/(\d+) suggested answer/, "$1 個建議答案"],
                "Events": "活動",
                "Marked": "標記為",
                "an": "一個",
                "Marked then unmarked an answer": "標記後，又取消標記",
                "Marked as answer": "標記為答案",
                "Answer selected by": "被標記答案由",

                // 右側欄
                "Change category": "更改類別",
                "Converted from issue": "由議題轉化而來",

                // 鎖定對話
                    "Lock conversation on this discussion": "鎖定關於此討論的對話",
                    "to this discussion.": "到該討論。",
                    "You can always unlock this discussion again in the future.": "您今後仍可以隨時再次解鎖此討論。 ",
                "Transfer discussion": "轉移討論",
                    // 轉移議題 對話方塊
                    "Transfer this discussion": "轉移討論",
                    "Choose another repository you own to move this discussion to:": "選擇您擁有的另一個倉庫以將此討論移至：",
                "Pin discussion": "置頂討論",
                    "Up to 4 discussions can be pinned and they will appear publicly at the top of the discussions page.": "最多可以置頂 4 個討論，它們將公開顯示在討論頁面的頂部。",
                    "Configure pinned discussion": "設定置頂討論",
                        "Background": "背景色",
                        "Pattern": "圖案",
                    "Pinning discussion…": "置頂討論…",
                "Edit pinned discussion": "編輯置頂討論",
                "Unpin discussion": "取消置頂討論",
                    "Are you sure you want to unpin this discussion?": "您確定要取消置頂討論嗎？",
                    "The discussion itself won't be deleted, it just won't be shown prominently above the list of discussions.": "討論本身不會被刪除，只是不會突出顯示在討論列表上方。",
                    "Deleting spotlight…": "刪除聚光燈…",
                    // 頂部提醒
                    // [/Discussion \"([^ ]+)\" has been unpinned./, "討論 “$1” 已取消固定。"],
                "Create issue from discussion": "從討論中建立議題",
                "Delete discussion": "刪除討論",
                    "Are you sure you want to delete this discussion?": "您確定要刪除此討論嗎？",
                    "The discussion will be deleted permanently": "該討論將被永久刪除",
                    "You will not be able to restore the discussion or its comments": "您將無法恢復討論或其評論",
                    "Delete this discussion": "刪除討論",
                    "Deleting discussion…": "討論刪除中…",
                    // 頂部提醒
                    "The discussion was successfully deleted.": "該討論已成功刪除。",


                "The original post will be copied into a new issue, and the discussion will remain active.": "原帖將被複制到一個新的議題中，討論將保持活躍。",
                "OK, got it!": "好的，我知道了！",

                "Convert issues": "轉換為議題",
                // [/Convert (\d+) issues? to discussions?/, "將 $1 個議題轉換為討論"], // 標籤頁面
                // [/Are you sure you want to convert (\d+) issues? with the following label to discussions?/, "您確定要將帶有以下標籤的 2 個議題轉換為討論嗎？"], // 標籤頁面
                // "What happens when an issue is converted into a discussion:": "將議題轉化為討論時，會發生什麼：",
                "Issue will be locked": "議題將被鎖定",
                // "Title, description, and author will be the same as the issue": "標題、描述和作者將與議題相同",
                "Existing links will redirect to the new discussion": "現有連結將重定向到新討論",
                // "All comments and reactions will be the same as the issue": "所有評論和反應將與議題相同",
                "Discussions do not have milestones": "討論沒有里程碑",
                "Discussions cannot be added to projects": "討論不能被新增到專案中",
                "Discussions do not have assignees": "討論沒有受理人",
                "You must choose a category for the discussion to belong to. You will be able to change this after the conversion is complete.": "您必須為討論選擇一個所屬的類別。在轉換完成後，您將能夠更改此設定。",
                "Choose a category": "選擇類別",
                "Future issues with this label will not be automatically converted into discussions.": "今後帶有此標籤的議題並不會自動轉化為討論。",
                "I understand, convert these issues to discussions.": "我明白了，依然把這些議題轉化為討論。",
                // 頂部提醒
                // [/Open issues with label \'([^ ]+)\' are being converted to discussions./, "帶有 “$1” 標籤的開啟議題正在被轉換為討論。"], // 標籤頁面

            // 標籤頁面 /<user-name>/<repo-name>/labels
                "Search all labels": "搜尋所有標籤",
                "New label": "新建標籤",
                    "Label preview": "標籤預覽",
                    "Label name": "標籤名",
                    "Description (optional)": "描述（可選）",
                    "Color": "顏色",
                        "Get a new color": "獲得新顏色",
                        "Choose from default colors:": "從預設顏色中選擇：",
                    "Create label": "建立標籤",

                "Alphabetically": "按字母順序",
                "Reverse alphabetically": "按字母倒序",
                "Most issues": "最多的議題",
                "Fewest issues": "最少的議題",

                "bug": "BUG",
                    "Something isn't working": "有些東西不工作",
                "dependencies": "依賴性",
                    "Pull requests that update a dependency file": "更新一個依賴檔案的拉取請求",
                "documentation": "文件",
                    "Improvements or additions to documentation": "文件的改進或補充",
                "duplicate": "重複",
                    "This issue or pull request already exists": "這個議題或拉取請求已經存在",
                "enhancement": "增強",
                    "New feature or request": "新功能或請求",
                "good first issue": "好的首發議題",
                    "Good for newcomers": "適合新人",
                "help wanted": "需要幫助",
                    "Extra attention is needed": "需要特別關注",
                "invalid": "無效",
                    "This doesn't seem right": "這似乎不對",
                "question": "問題",
                    "Further information is requested": "要求提供更多資訊",
                "wontfix": "不會修復",
                    "This will not be worked on": "這將不會被處理",

                // [/open issues? and pull requests?/, "個開啟的議題和拉取請求"], // 標籤頁面
                // [/open issues? or pull requests?/, "個開啟的議題或拉取請求"], // 標籤頁面

            // 里程碑頁面 /<user-name>/<repo-name>/milestones
                "You haven’t created any Milestones.": "您尚未建立任何里程碑。",
                "Use Milestones to create collections of Issues and Pull Requests for a particular release or project.": "使用里程碑為特定版本或專案建立議題和拉取請求的集合。",

                // 組織 倉庫 里程碑
                "No Milestones found!": "沒有發現里程碑!",
                "If this project had milestones, we’d show you them here. Promise!": "如果該專案有里程碑，我們會在此處向您展示。",

                "Create a Milestone": "建立里程碑",

                // 排序補充
                "Furthest due date": "最遲到期日",
                "Closest due date": "最近到期日",
                "Least complete": "最不完整",
                "Most complete": "最完整",
                "Least issues": "最少的議題",

                "No due date": "沒有截止日期",
                // [/Due by (.*)/, "截止日期 $1"], // 里程碑截止日期
                "(more)": "（更多）",
                "Show less": "顯示更少",
                // 完成進度條
                "complete": "已完成",
                "open": "開啟",
                "closed": "關閉",

            // 新建里程碑頁面 /<user-name>/<repo-name>/milestones/new
                "New milestone": "新建里程牌",
                "Create a new milestone to help organize your issues and pull requests. Learn more about": "建立一個新的里程碑來幫助組織您的議題和拉取請求。瞭解更多關於",
                "milestones and issues": "里程碑和議題",
                "Due date (optional)": "截止日期（可選）",

                "Create milestone": "建立里程碑",

            // 新建操作 /<user-name>/<repo-name>/actions/new
                "Get started with GitHub Actions": "開始使用 GitHub Actions",
                "Choose a workflow": "選擇一個工作流程",
                "Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow to get started.": "構建、測試和部署您的程式碼。以您想要的方式進行程式碼審查、分支管理和議題分類。選擇一個工作流以開始使用。",
                "Skip this and": "跳過並",
                "set up a workflow yourself": "建立工作流程",
                "Search workflows": "搜尋工作流",

                "Suggested for this repository": "建議該倉庫採用",
                "Configure": "設定",
                "Deployment": "部署",
                "Continuous integration": "持續整合",
                "Automation": "自動化",
                "Browse all categories": "瀏覽所有類別",
                    "Code scanning": "程式碼掃描",

                "Learn more about GitHub Actions": "瞭解更多關於 GitHub Actions 的資訊",
                "Getting started and core concepts": "入門和核心概念",
                "New to Actions? Start here. Learn the core concepts and how to get started.": "初次接觸 Actions？從這裡開始。瞭解核心概念和如何開始。",
                "Configuring and managing workflows": "配置和管理工作流程",
                "Create custom workflows to control your project's life cycle processes.": "建立自定義工作流程以控制專案的生命週期過程。",
                "Language and framework guides": "語言與框架指南",
                "Guides for projects written in many programming languages.": "專案指南由多種程式語言編寫。",

            // 新建操作 /<user-name>/<repo-name>/actions/new?category=xxxx
                // [/Found (\d+) workflows?/, "發現 $1 個工作流程"],

            // 操作 /<user-name>/<repo-name>/actions
                "Automate your workflow from idea to production": "從創意到產品，使您的工作流程自動化",
                "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.": "GitHub Actions 現在可以使用世界一流的 CI/CD 輕鬆自動化所有軟體工作流程。直接從 GitHub 構建、測試和部署您的程式碼。",
                "Linux, macOS, Windows, ARM, and containers": "Linux、macOS、Windows、ARM 和容器",
                "Hosted runners for every major OS make it easy to build and test all your projects. Run directly on a VM or inside a container. Use your own VMs, in the cloud or on-prem, with self-hosted runners.": "為每一個主要的作業系統提供的託管執行程式，使您能夠輕鬆地構建和測試您的所有專案。直接在虛擬機器上或容器內執行。在雲端或本地使用您自己的虛擬機器，以及自託管的執行器。",

                "Matrix builds": "矩陣式構建",
                "Save time with matrix workflows that simultaneously test across multiple operating systems and versions of your runtime.": "使用矩陣工作流程可同時跨多個作業系統和版本執行，節省時間",

                "Any language": "任何語言",
                "GitHub Actions supports Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET, and more. Build, test, and deploy applications in your language of choice.": "GitHub Actions 支援 Node.js、Python、Java、Ruby、PHP、Go、Rust、.NET 等。以您選擇的語言構建、測試和部署應用程式。",

                "Live logs": "實時日誌",
                "See your workflow run in realtime with color and emoji. It’s one click to copy a link that highlights a specific line number to share a CI/CD failure.": "使用顏色和表情符號實時檢視您的工作流程。只需單擊即可複製突出顯示特定行號的連結以共享 CI/CD 故障。",

                "Built-in secret store": "內建的秘密儲存",
                "Automate your software development practices with workflow files embracing the Git flow by codifying it in your repository.": "透過將工作流程檔案編碼到您的倉庫，您的軟體開發實踐，包括 Git 流程自動化。",

                "Multi-container testing": "多容器測試",
                "Test your web service and its DB in your workflow by simply adding some": "在您的工作流程中測試您的網路服務和它的資料庫，只需新增一些",
                "docker-compose": "docker-組合",
                "to your workflow file.": "到您的工作流程檔案。",


                // 左側欄
                "Workflows": "工作流程",
                "New workflow": "新建工作流程",
                // "Select workflow": "選擇工作流程",

                "Tell us how to make GitHub Actions work better for you with three quick questions.": "透過三個快速問題告訴我們如何讓 GitHub Actions 更好地為您服務。",

                "All workflows": "全部工作流程",
                "Showing runs from all workflows": "顯示所有工作流程的執行情況",

                //篩選條
                "Filter workflow runs": "篩選工作流程",
                    "Narrow your search": "縮小搜尋範圍",

                // [/(\d+) workflow runs?$/, "$1 個工作流程執行"],
                // [/(\d+) workflow runs results/, "$1 個工作流程執行結果"],
                "Event": "事件",
                    "Filter by event": "按事件篩選",
                    "Find an event": "查詢事件",
                    "push": "推送",
                    "schedule": "日程",
                    "watch": "關注",
                    "workflow_dispatch": "工作流程排程",
                    "dynamic": "動態",
                // 狀態
                    "Filter by status": "按狀態篩選",
                    "Find a status": "查詢狀態",
                    "queued": "排隊",
                    "in progress": "正在進行中",
                    "waiting": "等待中",
                    "completed": "已完成",
                    "neutral": "中立",
                    "success": "成功",
                    "failure": "失敗",
                    "cancelled": "已取消",
                    "action required": "需要採取行動",
                    "timed out": "已超時",
                    "skipped": "跳過",
                    "stale": "陳舊",
                "Branch": "分支",
                    "Filter by branch": "按分支篩選",
                "Actor": "角色",
                    "Filter by actor": "按角色篩選",
                    "Find a user": "查詢使用者",

                // 日誌 右側按鈕
                "Cancel run": "取消執行",
                "Delete workflow run": "刪除工作流程執行",

                // 篩選結果
                "all workflow runs": "所有工作流程執行",
                "or try different filters.": "或嘗試不同的篩選器。",

                // 列表區域
                    // 工作流程執行狀態
                    "In progress": "進行中",
                    "Pending": "待定中",

            // /<user-name>/<repo-name>/actions/workflows/<file>.yml
                "This workflow has a": "這個工作流程有一個",
                "event trigger.": "事件觸發器。",

                "Run workflow": "執行工作流程",
                    "Use workflow from": "使用工作流程來自：",
                    "Select branch": "選擇分支",
                    "Select ref": "選擇引用",
                    "Select a tag": "選擇標籤",

                        "Workflow does not exist or does not have a": "工作流程不存在或沒有",
                        "trigger in this branch.": "觸發在此分支。",
                        "Learn more about manual workflows": "瞭解更多關於手工工作流程的資訊",
                    // 頂部提醒
                    "Workflow run was successfully requested.": "工作流程已成功請求執行。",

                "This scheduled workflow is disabled because there hasn't been activity in this repository for at least 60 days.": "此計劃工作流程已禁用，因為此倉庫至少 60 天沒有活動。",
                "Enable workflow": "啟用工作流程",
                    // 頂部提醒
                    "Workflow enabled successfully.": "工作流程已成功啟用。",
                "Disable workflow": "禁用工作流程",
                    // 提醒
                    "This workflow was disabled manually.": "工作流程已被手動禁用。",
                    // 頂部提醒
                    "Workflow disabled successfully.": "工作流程已成功禁用。",
                // "Re-run jobs": "重新執行作業",

                "This workflow has no runs yet.": "此工作流程尚未執行。",

            // /<user-name>/<repo-name>/actions/runs/<id>
                // 快捷鍵
                "Go to workflow file": "跳轉到工作流程檔案",
                "Toggle timestamps in logs": "切換日誌中的時間戳",
                "Toggle fullscreen logs": "切換全屏日誌",
                "Exit fullscreen logs": "退出全屏日誌",

                // 標題
                "Re-run all jobs": "重新執行所有作業",
                //右側按鈕
                "View workflow file": "檢視工作流程檔案",
                "View workflow runs": "檢視工作流程執行",
                "Create status badge": "建立狀態徽章",
                    "Copy status badge Markdown": "複製狀態徽章 Markdown 程式碼",
                "Delete all logs": "刪除所有日誌",

                // 左側欄
                "Summary": "摘要",
                "Jobs": "作業",

                //狀態條
                "Triggered via pull request": "透過拉取請求觸發",
                "Triggered via issues": "透過議題觸發",
                "Triggered via push": "透過推送觸發",
                "Triggered via schedule": "透過計劃表觸發",
                "Triggered via dynamic": "透過動態觸發",
                "Triggered via GitHub Pages": "透過 GitHub 頁面觸發",
                "Manually triggered": "手動觸發",

                // 狀態
                    "Success": "成功",
                    "Failure": "失敗",
                    "Cancelled": "取消",
                "Total duration": "總時長",
                "Billable time": "計費時間",
                "Artifacts": "附件",
                    "Produced during runtime": "在執行期間生成",
                    "Size": "大小",
                "Annotations": "說明",
                    // [/1 error/, "$1 個錯誤"],
                    "Show more": "顯示更多",

            // /<user-name>/<repo-name>/actions/runs/<id>/workflow
                "Workflow file": "工作流程檔案",
                "Workflow file for this run": "本次執行的工作流程檔案",

            // /<user-name>/<repo-name>/runs/<id>?check_suite_focus=true
                "The logs for this run have expired and are no longer available.": "此執行日誌已過期，不再可用。",

                "Search logs": "搜尋日誌",
                // 設定按鈕
                    "Show timestamps": "顯示時間戳",
                    "Show full screen (Shift+F)": "全屏顯示（Shift+F）",
                    "Download log archive": "下載日誌存檔",
                    "View raw logs": "檢視原始日誌",

                "Try broadening your search filters.": "嘗試擴大您的搜尋篩選器。",

                // GitHub Pages
                "GitHub Pages / Page Build": "GitHub Pages / 頁面構建",
                "Page Build": "頁面構建",
                "succeeded": "成功於",
                "GitHub Pages successfully built your site.": "GitHub Pages 成功構建了您的站點。",
                "Your website is ready at": "您的網站已準備就緒，網址為",
                "View more details on GitHub Pages": "在 GitHub Pages 檢視更多細節",

                "Re-run all checks": "重新執行所有檢查",
                //頂部提醒
                "You have successfully requested checks from GitHub Pages.": "您已成功請求來自 GitHub Pages 的檢查。",

            // /<user-name>/<repo-name>/deployments
                // [/Deployed to ([^ ]+)/, "部署到 $1"],
                "was deployed by": "被部署",
                "Deployment history": "部署歷史",
                "Show:": "顯示：",
                    "All environments": "所有環境",
                "Loading information…": "載入資訊…",
                "at": "在",
                "Deployed": "部署",
                "Deployed by": "部署者",
                "Inactive": "不活躍",
                "Abandoned": "廢棄",
                "View deployment": "檢視部署情況",

                "View full deployment history": "檢視完整的部署歷史",

            // /<user-name>/<repo-name>/deployments/activity_log?environment=github-pages
                "Deployments": "部署",
                "/ History": "/ 歷史",

            // 軟體包 /<user-name>/<repo-name>/packages
                "Get started with GitHub Packages": "開始使用 GitHub 軟體包",
                "Safely publish packages, store your packages alongside your code, and share your packages privately with your team.": "安全地釋出包，將您的包與您的程式碼一起儲存，並與您的團隊私下共享您的包。",
                "Choose a registry": "選擇一個登錄檔",

            // /<user-name>/<repo-name>/pkgs/container/<pag name>
                "Installation": "安裝",
                "Install from the command line:": "從命令列安裝：",
                "Recent tagged image versions": "最近被標記的映像版本",
                "latest": "最新",
                // [/Published (\d.*) · Digest/, "釋出於 $1 · 摘要"],
                "Number of downloads for the version": "該版本的下載量",
                "View all tagged versions": "檢視所有被標記的版本",
                "Last published": "最新發布",
                "Total downloads": "總下載量",
                "Open an issue": "開啟一個議題",

            // /<user-name>/<repo-name>/pkgs/container/<pag name>/versions
                "All Versions": "所有版本",
                // [/(\d+) tagged/, "$1 個標記"],
                // [/(\d+) untagged/, "$1 個未標記"],

            // 新增許可證 /community/license/new?branch=main
                "Add a license to your project": "為您的專案新增許可證",
                "Choose a license to add to your project": "選擇要新增到專案的許可證",
                "Select a template on the left to get started.": "在左側選擇一個模板開始。",
                "Learn more about": "瞭解更多關於",
                "which license best fits your project": "哪種許可證最適合您的專案",

            // 新增許可證 /community/license/new?branch=<branch name>&template=<template name>
                // 右側欄
                    "You’ll have a chance to review before committing a": "您將有機會在提交之前進行審查",
                    "file to a new branch or the root of your project.": "檔案到新分支或專案的根目錄。",

                    "To adopt": "採用",
                    ", enter your details. You’ll have a chance to review before committing a": "，輸入您的詳細資訊。您將有機會在提交之前進行審查",
                    "Year": "年份",
                        "The current year": "當前年份",
                    "Full name": "全名",
                        "The full name or username of the repository owner": "倉庫所有者的全名或使用者名稱",
                    "Review and submit": "審查並提交",

                // 中間欄 頂部 許可權資訊
                    "Permissions": "許可事項",
                    "Limitations": "限制條件",
                        "Commercial use": "商業用途",
                        "Modification": "修改",
                        "Distribution": "分佈",
                        "Patent use": "專利使用",
                        "Private use": "私人使用",
                        "Trademark use": "商標使用",
                        "Liability": "責任",
                        "Warranty": "擔保",
                        "Disclose source": "開源",
                        "Same license": "相同的許可證",
                    "Conditions": "條件",
                        "License and copyright notice": "許可和版權宣告",
                        "State changes": "狀態變化",
                        "License and copyright notice for source": "來源許可和版權宣告",
                        "Network use is distribution": "網路使用即分發",
                        "Same license (library)": "相同的許可證（庫）",
                        "Same license (file)": "相同的許可證（檔案）",

                    "This is not legal advice.": "這並不是法律建議。",
                    "Learn more about repository licenses": "瞭解更多關於倉庫許可證的資訊",

            // /<user-name>/<repo-name>/contribute
                "Contribute to": "貢獻於",
                "Make your first contribution to this repository by tackling one of the issues listed below.": "透過解決下面列出的一個議題，為這個倉庫做出您的第一個貢獻。",
                "Each issue displayed here is a \"good first issue,\" selected for its relative approachability for first-time contributors.": "此處顯示的每個議題都是 “好的首發議題”，因其對首次貢獻者來說相對容易。",

                "Read the contributing guidelines": "閱讀貢獻指南",

                "Good first issues": "好的首發議題",
                "See all issues": "檢視所有議題",

                "This repo doesn't have any good first issues, yet": "該倉庫暫無任何好的首發議題",
                "Once its maintainers label issues and pull requests for new contributors, they will begin to appear here.": "一旦它的維護者為新的貢獻者標記了議題和拉取請求，它們就會開始出現在這裡。",
                "All issues in this repository": "此倉庫中的所有議題",

            // 接受邀請 /<user-name>/<repo-name>/invitations
                "invited you to collaborate": "邀請您進行協作",
                "Accept invitation": "接受邀請",
                "Decline": "拒絕",
                "Owners": "所有者",
                "Your public profile information": "您的公開個人資料資訊",
                "Certain activity": "某些活動",
                "within this repository": "在這個倉庫中",
                "Country of request origin": "請求的來源國",
                "Your access level for this repository": "您對該倉庫的訪問等級",
                "Your IP address": "您的 IP 地址",
                "Is this user sending spam or malicious content?": "此使用者是否傳送垃圾郵件或惡意內容？",

            // 倉庫通知狀態管理 /<user-name>/<repo-name>/subscription
                "Your": "您的",
                "notifications status": "通知狀態",
                "A notification is created every time someone discusses something inside of the repository — Pull Requests, Issues, Comments, and Commit discussions. Whether you are watching the repository, not watching it, or ignoring it determines which notifications you receive.": "每當有人在版本庫內討論什麼，比如拉取請求、議題、評論和提交討論，都會產生一個通知。無論您是關注倉庫、不關注還是忽略它，都決定了您會收到哪些通知。",
                "Not watching": "不關注",
                    "You will only receive notifications when you participate or are @mentioned.": "只有當您參與或被 @您 時，您才會收到通知。",
                "Releases only": "僅發行版",
                    "You will only receive notifications for new releases, or when you participate or are @mentioned.": "您只會收到新版本的通知，或者當您參與或被 @您 時。",
                "Watching": "關注",
                    "You will receive all notifications for this repository.": "您將收到此倉庫的所有通知。",
                "Ignored": "忽略",
                    "You will not receive any notifications for this repository.": "您將不會收到有關此倉庫的任何通知。",

            // 專案標籤卡 /<user-name>/<repo-name>/projects >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                // "Sort by": "排序方式",
                //     // 排序下拉選單
                //     "Newest": "最新",
                //     "Oldest": "最早",
                //     "Recently updated": "近期更新內容",
                //     "Least recently updated": "最近最少更新",
                    "Name": "名稱",
                // 清除篩選
                "Clear current search query and sorts": "清除當前的搜尋查詢和分類",

                "There aren't any projects yet": "尚無任何專案",
                "Try starting a new one.": "嘗試開始一個新的。",

                "No description": "無描述",
                "Close": "關閉",
                "Closed": "已關閉",
                "Reopen": "重新開啟",

                // 頂部提醒
                "Project closed.": "專案已關閉。",
                "Project reopened.": "專案已重新開啟。",

            // 專案標籤卡 /<user-name>/<repo-name>/projects?type=beta >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "Welcome to the all-new projects": "歡迎訪問全新的專案",
                "Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.": "構建像電子表格一樣的專案表，給您一個實時的畫布來對議題和拉取請求進行篩選、排序和分組。透過自定義欄位和儲存的檢視，使它們符合您的需要。",

                // [/(\d+) projects?/, "$1 個專案"],
                "Add project": "新增專案",
                    "No recent projects": "沒有近期專案",
                    "Go to your profile to create a new project": "轉到您的個人資料，以建立新專案",
                    // [/Go to the ([^ ]+) organization to create a new project/, "轉到 $1 組織，以建立新專案"],

                "Easily access your projects here": "在此輕鬆訪問您的專案",
                "Add a project for it to appear in this list or go to": "新增專案，使其出現在此列表中，或進入",
                "your projects": "您的專案",
                "Add an organization project for it to appear in this list or go to": "新增組織專案，使其出現在此列表中，或進入", // 組織倉庫 專案
                "organization projects": "組織專案", // 組織倉庫 專案
                "to create a new one.": "去建立新專案。",
        },
        "regexp": [ // 正則翻譯
            [/, and (\d+) more/, "，以及其他 $1 個組織"], // 使用者 浮動資訊卡
            [/(\d+) repositor(y|ies)/, "$1 個倉庫"], // 組織  浮動資訊卡
            [/(\d+) members?/, "$1 個成員"], // 組織  浮動資訊卡
            [/Forking ([^ ]+)/, "復刻 $1 中"], // 倉庫首頁 復刻中...
            [/had recent pushes/, "分支有了最近的推送，"], // 倉庫首頁 最近有了新提交提醒
            // 評論框頭部欄 (議題 & 拉取請求)
            // 成員
            [/This user is a member of the ([^ ]+) organization./, "該使用者是 $1 組織的成員。"],
            // 協作者
            [/This user has been invited to collaborate on the ([^ ]+) repository./, "該使用者已被邀請在 $1 倉庫上進行協作。"],
            // 貢獻者
            [/You have previously committed to the ([^ ]+) repository./, "您之前已經提交到過 $1 倉庫。"],
            [/This user has previously committed to the ([^ ]+) repository./, "該使用者之前已提交給 $1 倉庫。"],
            // 所有者
            [/This user is the owner of the ([^ ]+) repository./, "該使用者是 $1 倉庫的所有者。"],
            [/You are the owner of the ([^ ]+) repository./, "您是 $1 倉庫的所有者。"],
            [/Sponsor ([^ ]+)?/, "贊助 $1"], // 贊助按鈕 對話方塊 標題
            [/\+ ([\d,]+) releases?/, "+ $1 個發行版"], // 倉庫首頁右側欄 發行版
            [/\+ ([\d,]+) contributors?/, "+ $1 位貢獻者"], // 倉庫首頁右側欄 貢獻者
            // 個人倉庫 貢獻和獲取操作後 資訊提示條
            [/Successfully fetched and fast-forwarded from upstream ([^ ]+)\./, "成功從上游的 $1 中獲取並快速轉發。"],
            // 個人倉庫當前分支狀態
            // [/This branch is even with ([^ ]+)\./, "該分支與上游 $1 相同。"],
            [/This branch is up to date with ([^ ]+)\./, "該分支與上游 $1 保持同步。"],
            [/This branch is (\d+) commits? behind ([^ ]+)\./, "該分支落後上游 $2 $1 個提交。"],
            [/This branch is (\d+) commits? ahead, (\d+) commits? behind ([^ ]+)\./, "該分支領先上游 $3 $1 個提交，落後 $2 個提交。"],
            // 貢獻
            [/This branch is not ahead of the upstream ([^ ]+)\./, "該分支並不領先上游 $1。"],
            [/This branch is (\d+) commits? ahead of ([^ ]+)\./, "該分支領先上游 $2 $1個提交。"],
            //獲取上游.
            [/This branch is not behind the upstream ([^ ]+)\./, "該分支並不落後上游 $1。"], //相同時
            [/This branch is (\d+) commits? behind the upstream/, "該分支落後上游 $1 個提交,"],
            [/Fetch and merge (\d+) upstream commits? from ([^ ]+)\./, "從上游 $2 獲取併合並 $1 個提交。"],
            [/Save (.+?) to your computer and use it in GitHub Desktop./, "使用 GitHub Desktop，儲存 $1 到您的電腦。"],
            // 議題 & 拉取請求
            [/([\d,]+) Open/, "$1 開啟"],
            [/([\d,]+) Closed/, "$1 已關閉"],
            [/#(\d+) opened/, "#$1 開啟於"],
            [/#(\d+) by/, "#$1 開啟者"],
            [/([\d,]+) linked issues?/, "$1 個關聯議題"],
            [/(\d+) tasks? done/, "$1 個任務完成"],
            [/(\d+) of (\d+) tasks?/, "$1 / $2 個任務"],
            [/(\d+) tasks?/, "$1 個任務"],
            [/This issue will close once commit ([^ ]+) is merged into the \'([^ ]+)\' branch./, "一旦提交 $1 被合併到 '$2' 分支，這個議題就會關閉。"],
            [/This issue will close when (\d+) is merged/, "這個議題將在 $1 合併後關閉"],
            [/(\d+) contributors?/, "$1 位貢獻者"],
            [/Failure: Your tests failed on ([^ ]+)/, "失敗：您的測試在 $1 上失敗了"], // X 的提醒
            [/Success: Your tests passed on ([^ ]+)/, "成功：您的測試在 $1 上通過了"], // 對勾 的提醒
            [/Want to contribute to ([^ ]+)\?/, "想為 $1 做貢獻嗎？"], // /issues
            [/(\d+) linked pull requests?/, "連結 $1 個拉取請求"], // /issues
            [/First time contributing to ([^ ]+)\?/, "首次為 $1 做貢獻？"], // /pulls
            [/(\d+) \/ (\d+) checks? OK/, "$1 / $2 檢查 OK"], // 對勾 的提醒 /pulls
            [/(\d+) reviews? requesting changes/, "$1 項更改請求審查"], // 已請求更改 的提醒 /pulls
            [/View all issues opened by (.+)/, "檢視所有 $1 的議題"],
            // 具體拉取請求 /<user-name>/<repo-name>/pull/<id>
            [/([\d,]+) participants?/, "$1 位參與者"],
            [/([^ ]+) left review comments/, "$1 發表了審查評論"],
            [/users with write access to ([^ ]+) can add new commits/, "對 $1 具有寫許可權的使用者可以新增新的提交"],
            [/The ([^ ]+) branch has been deleted./, "$1 分支已被刪除。"], // 具體拉取請求 重新開啟拉取請求
            [/merged (\d+) commits? into/, "已合併 $1 個提交到"],
            [/The (\d+) commits? from this branch will be added to the base branch./, "該分支的 $1 個提交將合併到基本分支中。"],
            [/The (\d+) commits? from this branch will be rebased and added to the base branch./, "該分支的 $1 個提交將變基合併到基礎分支中。"],
            [/added a commit to ([^ ]+) that referenced this issue/, "為 $1 添加了引用這個議題的提交"],
            [/Awaiting requested review from ([^ ]+)/, "正在等待 $1 審查請求"], // 具體的拉取請求 審查人
            [/([^ ]+) requested changes/, "$1 請求更改"], // 具體的拉取請求 審查人
            [/([^ ]+) approved these changes/, "$1 批准這些更改"], // 具體的拉取請求 審查人
            [/Request review from ([^ ]+)/, "請求 $1 審查"], // 具體的拉取請求 審查人
            // [/Commits on (.+)/, "提交於 $1"],
            [/Commits (.+)/, "提交於 $1"], // 提交頁面 /<user-name>/<repo-name>/commits/<branch
            // bug [/from (.+)/, "從 $1"],
            [/wants to merge ([\d,]+) commits? into/, "需要合併 $1 次提交到"],
            [/([\d,]+) commits?$/, "$1 次提交"],
            [/· ([\d,]+) comments?/, "$1 次提交"],
            [/Edited (\d+) times?/,"編輯 $1 次"], //評論框編輯次數
            [/edited by ([^ ]+)/,"被 $1 編輯"], //評論框 被他人編輯
            [/(\d+) hidden items/,"$1 條隱藏資訊"], //議題頁 評論太多 需要點選載入
            [/(\d+) Draft/,"$1 草案"],// 安全建議頁
            [/(\d+) Published/,"$1 釋出"],// 安全建議頁
            // 具體某個提交頁面
            [/This commit closes issue (#\d+)./, "此提交關閉了提議 $1。"],
            [/from ([^ ]+) to ([^ ]+)/, "從 $1 到 $2。"],
            [/(\d+) parents?/, "$1 個父"],
            [/(\d+) changed files?/, "$1 個更改的檔案"],
            [/(\d+) additions?$/, "$1 處增加"],
            [/(\d+) deletions?$/, "$1 處刪除"],
            [/([\d,]+) additions, ([\d,]+) deletions not shown because the diff is too large. Please use a local Git client to view these changes./, "$1 處增加，$2 處刪除未顯示，因為差異太大。請使用本地 Git 客戶端檢視這些更改。"],
            [/(\d+) comments? on commit/, "該提交有 $1 條評論"],
            //某個標籤 tag /releases/tag/<tag>
            [/to ([^ ]+) since this tag/, "到 $1，從這個標籤開始"],
            [/to ([^ ]+) since this release/, "到 $1，從這個發行版開始"],
            [/(\d+) review approvals?/, "$1 次審查批准"],// 拉取請求頁 "已批准' 浮動提示
            [/Joined/,"加入於"], // 追星者，關注者頁面
            [/You’re making changes in a project you don’t have write access to. Submitting a change will write it to a new branch in your fork ([^ ]+), so you can send a pull request./, "您正在對沒有寫入許可權的專案進行更改。提交更改會將其寫入您的復刻 $1 中的新分支，這樣您就可以傳送拉取請求。"], // 新建, 編輯檔案頁面
            [/(\d+) pending reviewers?/, "$1 名待審者"],
            [/At least (\d+) approving reviews? is required by reviewers with write access./, "具有寫入許可權的審查者至少需要 $1 次批准審查。"],
            [/(\d+) approving reviews? by reviewers? with write access./, "$1 個批准的審查由具有寫入許可權的審查人進行審查。"],
            [/(\d+) approvals?/, "$1 項批准"],
            [/(\d+) reviews? requesting changes by reviewers with write access/, "$1 項審查，要求有寫入許可權的審查人進行更改"],
            [/(\d+) change requested/, "$1 項更改請求"],
            [/(\d+) in progress checks?/, "$1 個正在進行的檢查"],
            [/(\d+) skipped and (\d+) successful checks?/, "$1 個跳過, $2 個成功檢查"],
            [/(\d+) successful and (\d+) failing checks?/, "$1 個成功, $2 個失敗檢查"],
            [/(\d+) skipped, (\d+) successful, and (\d+) failing checks?/, "$1 個跳過, $2 個成功, $3 個失敗檢查"],
            [/(\d+) skipped, (\d+) successful, (\d+) cancelled, and (\d+) failing checks?/, "$1 個跳過, $2 個成功, $3 個取消, $4 個失敗檢查"],
            [/(\d+) skipped, (\d+) successful, and (\d+) expected checks?/, "$1 個跳過, $2 個成功, $3 個預先檢查"],
            [/(\d+) skipped, (\d+) successful, (\d+) queue, and (\d+) expected checks?/, "$1 個跳過, $2 個成功, $3 個排隊, $4 個預先檢查"],
            [/(\d+) skipped, (\d+) successful, (\d+) in progress, and (\d+) expected checks?/, "$1 個跳過, $2 個成功, $3 個正在進行, $4 個預先檢查"],
            [/(\d+) neutral checks?/, "$1 次中立檢查"],
            [/(\d+) successful checks?/, "$1 次成功檢查"],
            [/(\d+) checks? passed/, "$1 次檢查透過"],
            [/Merging can be performed automatically with (\d+) approving review./, "合併可以透過 $1 次批准審查自動執行。"],
            [/All (\d+) file types? selected/, "所有 $1 種檔案型別被選中"],
            [/Select all (\d+) file types?/, "選擇所有 $1 種檔案型別"],
            [/Unresolved conversations/, "未解決的討論"],
            [/Reresolved conversations/, "已解決的討論"],
            [/(\d+) of (\d+) files?/, "$1 / $2 個檔案"],
            [/(\d+) workflow awaiting approval/, "$1 個工作流等待批准"],
            [/The ([^ ]+) branch requires linear history/, "$1 分支為要求線性歷史記錄"],
            [/(\d+) similar comments?/, "$1 條類似評論"],
            [/Welcome to the ([^ ]+) wiki!/, "歡迎訪問 $1 的 Wiki"], // wiki頁面
            [/edited this page/, "編輯此頁"], // wiki
            [/(\d+) revisions?/, "$1 次修訂"], // wiki
            [/Editing/, "編輯"], //編輯 wiki
            [/Discussion \"([^ ]+)\" has been unpinned./, "討論 “$1” 已取消置頂。"],// 討論頁面
            [/(\d+) categories?/, "$1 個分類"], // 討論分類
            [/Congratulations, you've created the first discussion in ([^ ]+)!/, "恭喜您，您已經在 $1 中建立了第一個討論!"],  // 具體討論
            [/(\d+) answers?/, "$1 位答覆者"], // 具體討論
            [/(\d+) comments?$/, "$1 條評論"], // 具體討論
            [/(\d+) repl(y|ies)?/, "$1 條回覆"], // 具體討論
            [/(\d+) suggested answers?/, "$1 個建議答案"], // 具體討論
            [/Convert (\d+) issues? to (a |)discussions?/, "將 $1 個議題轉換為討論"], // 標籤頁面?
            [/Are you sure you want to convert (\d+) issues? with the following label to (a |)discussions?\?/, "您確定要將帶有以下標籤的 $1 個議題轉換為討論嗎？"], // 標籤頁面
            [/Open issues? with label \'([^ ]+)\' are being converted to discussions./, "帶有 “$1” 標籤的開啟議題正在被轉換為討論。"], // 標籤頁面
            // [/Closed issues? with label \'([^ ]+)\' are being converted to discussions./, "帶有 “$1” 標籤的已關閉議題正在被轉換為討論。"], // 標籤頁面
            [/open issues? and pull requests?/, "個開啟的議題和拉取請求"], // 標籤頁面
            [/open issues? or pull requests?/, "個開啟的議題或拉取請求"], // 標籤頁面
            [/(\d+) commits? ahead, (\d+) commits? behind ([^ ]+)/, "領先 $1 個提交，落後 $2 個提交於 $3"], // 分支頁面 /<user-name>/<repo-name>/branches
            [/(\d+) commits? ahead ([^ ]+)/, "領先 $1 個提交於 $2"], // 分支頁面 /<user-name>/<repo-name>/branches
            [/(\d+) commits? behind ([^ ]+)/, "落後 $1 個提交於 $2"], // 分支頁面 /<user-name>/<repo-name>/branches
            [/Branch ([^ ]+) will be renamed to ([^ ]+) shortly./,"$1 分支將很快重新命名為 $2"],  // 分支頁面 頂部提醒 當分支重新命名成功
            [/is already the branch name./, "已經是分支的名稱了。"], // 分支頁面 重新命名分支
            [/Your branch name will be/, "您的分支的名稱將重新命名為"], // 分支頁面 重新命名分支
            [/Deployed to ([^ ]+)/, "部署到 $1"], // 部署頁面 /deployments
            [/(\d+) workflow runs?$/, "$1 個工作流程執行"], // 操作 /<user-name>/<repo-name>/actions
            [/(\d+) workflow run results?/, "$1 個工作流程執行結果"],
            [/Published (.*) · Digest/, "釋出於 $1 · 摘要"], // 倉庫-->包
            // [/Published about (\d.*) · Digest/, "釋出於大約 $1 · 摘要"], // 倉庫-->包
            [/(\d+) tagged/, "$1 個標記"], // 倉庫-->包-->所有版本
            [/(\d+) untagged/, "$1 個未標記"], // 倉庫-->包-->所有版本
            [/Downloads for the last (\d+) days/, "過去 $1 天的下載量"],
            // 統計頁
            [/(\d+) authors?/, "$1 位作者"],
            [/to ([^ ]+) and/, "到 $1 分支和"],
            [/to all branches. On ([^ ]+),/, "到全部分支。在 $1 分支，"],
            [/(\d+) files?/, "$1 個檔案"],
            [/Contributions to ([^ ]+), excluding merge commits and bot accounts/, "貢獻到 $1 分支，不包括合併提交和機器人帳戶"],
            [/(\d+) commented on/, "$1 評論於",],
            [/• (\d+) new comments?/, "• $1 個新評論"],
            // 依賴關係圖- 依賴關係
            [/(\d+) vulnerabilities? found/, "發現 $1 個漏洞"],
            [/(\d+) more dependencies/, "更多 $1 個依賴項"],
            [/Load (\d+) more…/, "載入更多 $1個…"],
            // 依賴關係圖- 依賴項
            [/(\d+) Repositor(y|ies)/, "$1 倉庫"],
            [/(\d+) Packages?/, "$1 軟體包"],
            [/Your license is ready. Please review it below and either commit it to the ([^ ]+) branch or to a new branch./, "您的許可證已準備就緒。請在下面審查它並將其提交到 $1 分支或新分支。"], // /new/<branch> 選擇了許可證
            [/Due by (.*)/, "截止日期 $1"], // 里程碑頁面 里程碑截止日期
            [/Branch main will be renamed to ([^ ]+) shortly./,"主分支將很快重新命名為 $1"],
            [/Branch ([^ ]+) was renamed to ([^ ]+)./,"分支 $1 已經重新命名為 $2 。"],
            [/You now have triage access to the ([^ ]+) repository./,"您現在擁有了對 $1 倉庫的分級訪問許可權。"],
            [/of ([^ ]+) will be able to see:/, "$1 將能夠看到："], // 邀請頁
            [/Block ([^ ]+)/, "拉黑 $1"],
            [/There hasn’t been any commit activity on ([^ ]+) in the last 24 hours./, "在過去的 24 小時裡，$1 沒有任何提交活動。"],
            [/There hasn’t been any commit activity on ([^ ]+) in the last 3 days./, "在過去的 3 天裡，$1 沒有任何提交活動。"],
            [/There hasn’t been any commit activity on ([^ ]+) in the last week./, "在過去的 1 周裡，$1 沒有任何提交活動。"],
            [/There hasn’t been any commit activity on ([^ ]+) in the last month./, "在過去的 1 月裡，$1 沒有任何提交活動。"],
            [/Started generating a security update for ([^ ]+)./, "開始為 $1 生成安全更新。"], // 某個 Dependabot 警報 建立 Dependabot 警報更新 頂部提醒
            [/Dependabot cannot update ([^ ]+) to a non-vulnerable version/, "Dependabot 無法將 $1 更新為無漏洞的版本"], // 某個 Dependabot 警報
            [/Creating a security update for ([^ ]+)/, "為 $1 建立安全更新"], // 某個 Dependabot 警報
            [/(\d+) Dependabot alerts?/, "$1 個 Dependabot 警報"], // 某個 Dependabot 警報
            [/on ([^ ]+) in/, "關於 $1 在"], // 某個 Dependabot 警報
            [/Or, manually upgrade ([^ ]+) to version/, "或者，手動將 $1 升級到版本"], // 某個 Dependabot 警報
            [/Bump ([^ ]+) from ([^ ]+) to ([^ ]+)/, "將 $1 從 $2 升級到 $3"], // 某個 Dependabot 警報
            [/Upgrade ([^ ]+) to fix/, "升級 $1 去修復"], // 某個 Dependabot 警報
            [/Upgrade ([^ ]+) to version/, "升級 $1 到版本"], // 某個 Dependabot 警報
            [/commits? the week of (\d+月\d+日)/, "個提交在 $1 該星期"], // 洞察 --> 提交
            [/Found (\d+) workflows?/, "發現 $1 個工作流程"], // 新建操作 類別
            [/(\d+) projects?/, "$1 個專案"], // projects?type=beta
            [/Go to the ([^ ]+) organization to create a new project/, "轉到 $1 組織，以建立新專案"],
        ],
    },

    "repository/settings": { // 倉庫設定頁面(含組織倉庫) /<user-name>/<repo-name>/settings
        "static": { // 靜態翻譯
            // 授權訪問 (已經合併到倉庫設定)
                "Confirm access": "授權訪問",
                "Password": "密碼",
                "Forgot password?": "忘記密碼？",
                "Confirm password": "確認密碼",
                "You are entering": "您正在進入",
                "sudo mode": "Sudo 模式",
                ". We won’t ask for your password again for a few hours.": " 。我們將在未來幾個小時內不再要求您輸入密碼。",

            // >>>>>>>>>>>>>>>>>>倉庫 公共部分<<<<<<<<<<<<<<<<<<<<<<<<<<<
                // 頭部條
                "Public": "公共",
                "Private": "私有",
                "Public archive": "公共存檔",
                "Private archive": "私有存檔",

                "forked from": "復刻自",

                "Pin": "置頂", // 組織倉庫
                "Unpin": "取消置頂",

                "Ignoring": "忽略",
                "Stop ignoring": "取消忽略",
                "Watch": "關注",
                "Unwatch": "取消關注",

                "Cannot fork because you own this repository and are not a member of any organizations.": "不能復刻，因為您擁有該倉庫，而且不是任何組織的成員。",

                "Star": "星標",
                "Unstar": "已加星標",
                "Fork": "復刻",
                "Unfork": "取消復刻",

                // 贊助對話方塊
                "External links": "外部連結",
                "Learn more about funding links in repositories": "瞭解更多關於倉庫中的贊助連結的資訊",
                "Report abuse": "舉報濫用",

                // 關注 & 訂閱通知設定 下拉選單
                "Notifications": "通知型別",
                "Participating and @mentions": "參與和 @您",
                "Only receive notifications from this repository when participating or @mentioned.": "僅在參與或 @您時接收來自此倉庫的通知。",
                "All Activity": "所有活動",
                "Notified of all notifications on this repository.": "接收來自此倉庫所有通知。",
                "Ignore": "忽略",
                "Never be notified.": "永不接收通知。",
                "Custom": "自定義",
                "Select events you want to be notified of in addition to participating and @mentions.": "選擇除參與和 @您之外還要接收通知的事件。",
                "Discussions are not enabled for this repo": "此倉庫未啟用討論功能",
                // "Releases": "發行版",
                // "Discussions": "討論",
                "Security alerts": "安全警報",
                //"Cancel": "取消",
                "Apply": "應用",

                //
                "Add to list": "新增到清單",
                "Lists": "清單",
                "You don't have any lists yet.": "您尚無任何清單。",
                "Create list": "建立清單",
                    "Create a list to organize your starred repositories.": "建立一個清單來組織您的星標倉庫。",
                    "⭐️ Name this list": "⭐️ 清單名稱",
                    "Write a description": "簡單描述",
                    "Lists are currently in beta.": "清單目前處於測試階段。",
                    "Share feedback and report bugs.": "分享反饋意見和報告錯誤。",
                    "Creating...": "建立中...",

                // 標籤欄
                "Code": "程式碼",
                "Pull requests": "拉取請求",
                "Discussions": "討論",
                "Actions": "操作",
                "Projects": "專案",
                "Security": "安全",
                "Insights": "洞察",
                "Settings": "設定",

                // 鍵盤快捷鍵
                    "Open in github.dev editor"  : "在 github.dev 編輯器中開啟",
                    "Open github.dev editor in a new tab"  : "在新標籤頁中開啟 github.dev 編輯器",
                    "Open cs.github.com in a new tab": "在新標籤頁中開啟 cs.github.com",
                    "Focus secondary search bar" : "聚焦二級搜尋欄",
                    "Go to Code"                 : "跳轉到程式碼",
                    "Go to Issues"               : "跳轉到議題",
                    "Go to Pull Requests"        : "跳轉到拉取請求",
                    "Go to Actions"              : "跳轉到操作",
                    "Go to Projects"             : "跳轉到專案",
                    "Go to Wiki"                 : "跳轉到 Wiki",
                    "Go to Discussions"          : "跳轉到討論",

            // >>>>>>>>>>>>>>>>>>   倉庫設定  <<<<<<<<<<<<<<<<<<<<<<<<<<<
                // 頂部提醒欄
                "Most repository settings are hidden for archived repositories. This repository must be unarchived to change them.": "對於存檔的倉庫，大多數倉庫設定都是隱藏的。 必須解除倉庫存檔才能更改它們。",
                "This repository has been archived by the owner. It is now read-only.": "此倉庫已由所有者存檔。它現在是隻讀的。",
                "Repository settings saved.": "倉庫設定已儲存。",


                // 左側選單
                "General": "通常",

                "Access": "訪問",
                // "Collaborators": "協作者",
                "Collaborators and teams": "協作者和團隊", // 組織倉庫
                "Team and member roles": "團隊和成員職責",  // 組織倉庫
                "Moderation options": "節制選項",
                    "Interaction limits": "互動限制",
                    "Code review limits": "程式碼審查限制",

                "Code and automation": "程式碼與自動化",
                "Branches": "分支",
                "Tags": "標籤",
                // "Actions": "操作",
                    // "General": "通常",
                    "Runners": "執行器",
                "Webhooks": "Web 鉤子",
                "Environments": "環境",
                "Pages": "GitHub Pages",

                // "Security": "安全",
                "Code security and analysis": "程式碼安全性與分析",
                "Deploy keys": "部署金鑰",
                "Secrets": "機密",

                "Integrations": "整合",
                "GitHub apps": "GitHub 應用",
                "Email notifications": "郵件通知",

            // 通常 - 設定頁面 /<user-name>/<repo-name>/settings ====================================
                "Repository name": "倉庫名稱",
                "Rename": "重新命名",
                    // [/is available./, "名稱可用。"],
                    "The repository": "倉庫",
                    "already exists on this account.": "已經存在於此帳戶。",
                    "Your new repository will be created as": "您的新倉庫將被建立為",
                    // 頂部提醒
                    "Repository name was not changed": "倉庫名稱未更改",

                "Template repository": "模板庫",
                "Template repositories let users generate new repositories with the same directory structure and files.": "模板倉庫允許使用者生成具有相同目錄結構和檔案的新倉庫。",
                "A repository with LFS content cannot be used as a template.": "帶有 LFS 內容的倉庫不能作為模板使用。",

                "Social preview": "社交預覽",
                // 關於私有庫提醒
                "You can upload a social image, but it will not be visible publicly while": "您可以上傳社交圖片，但當",
                "is private.": "是私密時，它不會公開顯示。",
                "Upload an image to customize your repository’s social media preview.": "上傳影象以自定義倉庫的社交媒體預覽。",
                "Images should be at least 640×320px (1280×640px for best display).": "圖片至少應為 640×320 畫素（1280×640 畫素以獲得最佳顯示效果）。",
                "Download template": "下載模板",
                "Edit": "編輯",
                    "Upload an image…": "上傳圖片…",
                    "Remove image": "刪除圖片",

                "Features": "功能",
                // "Wikis": "",
                    "Wikis host documentation for your repository.": "Wikis 為您的倉庫託管文件。",
                    "Restrict editing to collaborators only": "僅限協作者進行編輯",
                    "Restrict editing to users in teams with push access only": "僅限具有推送訪問許可權的團隊中的成員進行編輯", //組織倉庫
                        "Public wikis will still be readable by everyone.": "公共 Wikis 仍然可供所有人閱讀。",

                // 私人庫 啟用 Wiki 提醒
                    "Upgrade or make this repository public to enable Wikis": "升級或公開此倉庫，以啟用 Wiki",
                    "GitHub Wikis is a simple way to let others contribute content. Any GitHub user can create and edit pages to use for documentation, examples, support, or anything you wish.": "GitHub Wikis 是一種讓他人貢獻內容的簡單方法。任何 GitHub 使用者都可以建立和編輯頁面，用於文件、示例、支援或任何您想要的東西。",
                    // "Upgrade": "升級",

                // 議題
                "Issues integrate lightweight task tracking into your repository. Keep projects on track with issue labels and milestones, and reference them in commit messages.": "議題將輕量級任務跟蹤整合到您的倉庫中。使用議題標籤和里程碑保持專案正常執行，並在提交訊息中引用它們。",
                "Get organized with issue templates": "使用議題模板進行組織",
                "Give contributors issue templates that help you cut through the noise and help them push your project forward.": "為貢獻者提供議題模板，幫助您消除干擾並幫助他們推進您的專案。",
                "Set up templates": "設定模板",

                "Allow forking": "允許復刻", // 組織倉庫
                "If disabled, existing forks will be unaffected.": "如果禁用，現有復刻將不受影響。", // 組織倉庫

                // 贊助
                "Sponsorships": "贊助",
                "Sponsorships help your community know how to financially support this repository.": "贊助可幫助您的社群瞭解如何在資金上支援此倉庫。",
                "Display a \"Sponsor\" button": "顯示 “贊助” 按鈕",
                "Add links to GitHub Sponsors or third-party methods your repository accepts for financial contributions to your project.": "新增指向 GitHub 贊助者或您的倉庫接受的第三方收款連結，以便為您的專案提供資金捐助。",
                "Set up sponsor button": "設定贊助按鈕",

                // 專案
                "Project boards on GitHub help you organize and prioritize your work. You can create project boards for specific feature work, comprehensive roadmaps, or even release checklists.": "GitHub 上的專案板可以幫助您組織工作並確定其優先次序。您可以為特定的功能工作、全面的路線圖、甚至是釋出清單建立專案板",

                "Preserve this repository": "保留這個倉庫",
                "Include this code in the": "將此程式碼包含在",
                "GitHub Archive Program": "GitHub 存檔計劃中",

                "Table of contents": "目錄",
                "Autogenerate table of contents for markdown files in this repository. the table of contents will be displayed near the top of the file.": "自動生成此倉庫中 Markdown 檔案的目錄。目錄將顯示在檔案頂部附近。",

                // "Discussions": "討論",
                "Discussions is the space for your community to have conversations, ask questions and post answers without opening issues.": "討論是您的社群進行對話、提問和釋出答案的地方，而無需開啟議題。",
                "Get started with Discussions": "開始討論",
                "Engage your community by having discussions right in your repository, where your community already lives": "透過在您的社群已經存在的倉庫中進行討論來吸引您的社群",
                "Set up discussions": "建立討論",

                // "Pull Requests": "拉取請求",
                    "When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing. At least one option must be enabled. If you have linear history requirement enabled on any protected branch, you must enable squashing or rebasing.": "當合並拉取請求時，您可以允許合併提交、壓縮或變基的任意組合。必須至少啟用一個選項。如果您在任何受保護分支上啟用了線性歷史要求，則必須啟用壓縮或變基。",

                    "You must select at least one option": "您必須至少選擇一個選項",
                    "Allow merge commits": "允許合併提交",
                        "Add all commits from the head branch to the base branch with a merge commit.": "使用合併提交將所有從頭部分支的提交新增到基礎分支。",

                    "Allow squash merging": "允許壓縮合並",
                        "Combine all commits from the head branch into a single commit in the base branch.": "將來自頭部分支的所有提交合併到基礎分支中的單個提交中。",

                    "Allow rebase merging": "允許變基合併",
                        "Add all commits from the head branch onto the base branch individually.": "將來自頭部分支的所有提交單獨新增到基礎分支。",

                    "Control how and when users are prompted to update their branches if there are new changes available in the base branch.": "如果基礎分支中有可用的新更改，則控制提示使用者更新其分支的方式和時間。",
                    "Always suggest updating pull request branches": "始終建議更新拉取請求分支",
                        "Whenever there are new changes available in the base branch, present an “update branch” option in the pull request.": "每當基礎分支中有可用的新更改時，就在拉取請求中顯示 “更新分支” 選項。",

                    "You can allow setting pull requests to merge automatically once all required reviews and status checks have passed.": "一旦所有必需的審查和狀態檢查都透過，您可以允許設定拉取請求自動合併。",

                    "Allow auto-merge": "允許自動合併",
                        "Waits for merge requirements to be met and then merges automatically.": "等待滿足合併要求，然後自動合併。",
                        "Why is this option disabled?": "為什麼該選項被禁用？",

                    "After pull requests are merged, you can have head branches deleted automatically.": "合併拉取請求後，您可以自動刪除頭部分支。",

                        "Automatically delete head branches": "自動刪除頭部分支",
                            "Deleted branches will still be able to be restored.": "刪除的分支仍然可以恢復。",

                "Archives": "檔案",
                "When creating source code archives, you can choose to include files stored using Git LFS in the archive.": "建立原始碼存檔時，您可以選擇在存檔中包含使用 Git LFS 儲存的檔案。",

                "Include Git LFS objects in archives": "在檔案中包含 Git LFS 物件",
                "Git LFS usage in archives is billed at the same rate as usage with the client.": "歸檔中的 Git LFS 使用率與客戶端的使用率相同。",

                // GitHub Pages
                "Pages settings now has its own dedicated tab!": "Pages 設定現在有其專用選項卡！",
                "Check it out here!": "看看這裡！",

                "Danger Zone": "危險區",

                "Change repository visibility": "更改倉庫可見性",
                "You cannot change the visibility of a fork. please": "您無法更改復刻倉庫的可見性。請",
                "Duplicate the repository": "複製倉庫",
                "For security reasons, you cannot change the visibility of a fork.": "出於安全原因，您無法更改復刻倉庫的可見性。",

                // 更改倉庫可見性對話方塊
                "Change visibility": "更改可見性",
                "Warning: this is a potentially destructive action.": "警告：這是一個潛在的破壞性操作。",
                "Make public": "轉為公開",
                "This repository is currently public.": "該倉庫當前是公開的。",
                "Make this repository visible to anyone.": "讓任何人都能看到這個倉庫。",
                    "The code will be visible to everyone who can visit https://github.com": "所有可以訪問 https://github.com 的人都可以看到程式碼",
                    "Anyone can fork your repository.": "任何人都可以復刻您的倉庫。",
                    "Your changes will be published as activity.": "您的更改將作為活動釋出。",
                    "The README in this repository will be shown on your public profile.": "該倉庫中的 README 將顯示在您的公開個人資料中。", // 僅與使用者名稱同名倉庫
                "Make private": "轉為私有",
                "This repository is currently private.": "該倉庫當前是私有的。",
                "Hide this repository from the public.": "向公眾隱藏這個倉庫。",
                    "You will": "您將會",
                    "permanently": "永久地",
                    "lose:": "丟失：",
                    "All": "所有",
                        "stars and watchers": "追星者和關注者",
                        "of this repository.": "對於這個倉庫。",
                        "pages": "GitHub Page",
                        "published from this repository.": "釋出自這個倉庫。",
                    "Dependency graph, Dependabot alerts, and Dependabot security updates will remain enabled. Leaving them enabled grants us permission to perform read-only analysis on this repository.": "依賴關係圖、Dependabot 警報和 Dependabot 安全更新將繼續保持啟用狀態。啟用它們將授予我們對此倉庫執行只讀分析的許可權。",
                    "Dependency graph and Dependabot alerts will remain enabled. Leaving them enabled grants us permission to perform read-only analysis on this repository.": "依賴關係圖和 Dependabot 警報將繼續保持啟用狀態。啟用它們將授予我們對此倉庫執行只讀分析的許可權。",
                    "Dependency graph will remain enabled. Leaving them enabled grants us permission to perform read-only analysis on this repository.": "依賴關係圖將保持啟用狀態。啟用它們將授予我們對此倉庫執行只讀分析的許可權。",
                    // 與使用者名稱同名倉庫
                    "The README in this repository will no longer be shown on your public profile once this repository is private.": "一旦此倉庫設定為私有的，此倉庫中的 README 將不再顯示在您的公開個人資料中。",
                    "Code scanning will become unavailable.": "程式碼掃描將不可用。",
                    "Current forks will remain public and will be separated from this repository.": "當前的復刻將繼續保持公開狀態，並將與此倉庫分離。",
                    // 組織倉庫
                    "You can": "您可以",
                    "upgrade your plan": "升級您的計劃",
                    "to also avoid losing access to:": "以避免失去對以下內容的訪問許可權：",
                        "Codeowners": "程式碼所有者",
                        "functionality.": "功能。",
                        "wikis.": "Wiki。",
                        "Pulse, Contributors, Community, Traffic, Commits, Code Frequency": "統計、貢獻者、社群、流量、提交、程式碼頻率",
                        "Network": "網路",
                        "Insights page.": "洞察標籤卡",
                        "Branch protection rules.": "分支保護規則。",
                "Please type": "請鍵入",
                "to confirm.": "進行確定。",
                "I understand, change repository visibility.": "我明白了，依然更改該倉庫的可見性。",

                "Transfer ownership": "轉讓所有權",
                "Transfer": "轉讓",
                "Transfer this repository to another user or to an organization where you have the ability to create repositories.": "將此倉庫轉讓給另一位使用者或您可以建立倉庫的組織。",

                // 倉庫轉讓對話方塊
                "Transfer repository": "轉讓倉庫",
                "To understand admin access, teams, issue assignments, and redirects after a repository is transferred, see": "要了解倉庫轉讓後的管理員訪問、團隊、議題分配和重定向，請參閱",
                "Transferring a repository": "轉讓倉庫",
                "in GitHub Help.": "在 GitHub 幫助中所示。",
                "Transferring may be delayed until the new owner approves the transfer.": "在新所有者批准接受轉讓之前，轉讓可能會延遲。",
                "New owner’s GitHub username or organization name": "新所有者的 GitHub 使用者名稱或組織名稱",
                "Warning: This is a potentially destructive action.": "警告：這是一個潛在的破壞性操作。",
                "If": "如果",
                "username": "指定的使用者",
                "is using GitHub Free and accepts the transfer, they will lose access to private repository features:": "正在使用 GitHub Free 計劃並接受轉讓，那麼他們將無法訪問私有倉庫如下功能：",
                "Code owners": "程式碼所有者",
                "Any existing": "任何現有的",
                "wikis": "Wiki",
                "Pulse, Contributors, Community, Traffic, Commits, Code Frequency, Network,": "統計、貢獻者、社群、流量、提交、程式碼頻率、網路、",
                "and": "和",
                "Forks": "復刻",
                "on the": "在",
                "tab": "標籤頁中",
                "Draft": "草案",
                "PRs": "拉取請求",
                "Multiple assignees": "多位受理人",
                "for issues and PRs": "關於議題和拉取請求",
                "Multiple reviewers": "多位審查人",
                "for PRs": "關於拉取請求",
                // "Branch protection rules": "分支保護規則",
                "can": "可",
                "upgrade": "升級",
                "their plan before accepting the transfer to avoid losing access.": "他們的計劃在接受轉讓之前，以避免失去訪問權。",
                "Username or organization name": "使用者名稱或組織名稱",
                "Type": "請鍵入",
                // "to confirm.": "進行確定。",
                "I understand, transfer this repository.": "我明白了，依然轉讓該倉庫。",

                "Archive this repository": "歸檔倉庫",
                "Mark this repository as archived and read-only.": "將此倉庫標記為已存檔和只讀。",

                // 歸檔倉庫對話方塊
                "Archive repository": "歸檔倉庫",
                "This repository will become read-only.": "該倉庫將設定為只讀。",
                "You will still be able to fork the repository and unarchive it at any time.": "您仍然可以隨時訪問復刻倉庫並取消存檔。",
                "Unexpected bad things will happen if you don’t read this!": "如果您不閱讀此說明，將會發生意想不到的事情！",
                "All scheduled workflows will stop running.": "所有預定的工作流程將停止執行。",
                "Security features will be unavailable:": "安全功能將無法使用：",
                "Code scanning": "程式碼掃描",
                "Before you archive, please consider:": "在您歸檔之前，請考慮：",
                "Updating any repository settings": "更新倉庫設定",
                "Closing all open issues and pull requests": "關閉所有開啟的議題和拉取請求",
                "Making a note in your README": "在您的 README 中做個說明",
                // "Please type": "請鍵入",
                "I understand the consequences, archive this repository": "我明白後果，依然存檔該倉庫",
                // "This repository has been archived by the owner. It is now read-only.": "此倉庫已由所有者存檔。它現在是隻讀的。",

                // 頂部提醒
                // [/Your repository \"([^ ]+)\" was successfully archived./, "您的倉庫 “$1” 已成功歸檔。"], //倉庫歸檔

                "Unarchive this repository": "解除倉庫存檔",
                "Mark this repository as unarchived and read-write.": "將此倉庫標記為未歸檔和可讀寫。",

                // 解除倉庫存檔對話方塊
                "Unarchive repository": "解除倉庫存檔",
                "This will make": "這將使",
                "read-write.": "可讀寫。",
                "Once unarchived, the following can be modified and commented on:": "一旦解除存檔，就可以對以下內容進行修改和評論：",
                "Pull Requests": "拉取請求",
                "Labels": "標籤",
                "Releases": "發行版",
                "Milestones": "里程碑",
                "Security features will become available:": "安全功能將不可用：",
                "I understand the consequences, unarchive this repository": "我明白後果，依然解除該倉庫存檔",

                "Delete this repository": "刪除倉庫",
                "Once you delete a repository, there is no going back. Please be certain.": "您一旦刪除倉庫，將再也無法恢復。請確認。",

                // 頂部提醒
                // [/Your repository \"([^ ]+)\" was successfully unarchived./, "您的倉庫 “$1” 已成功解除歸檔。"], //倉庫解除歸檔

                // 刪除倉庫對話方塊
                "Are you absolutely sure?": "您完全確定嗎？",
                "This action": "該操作",
                "cannot": "不能",
                "be undone. This will permanently delete the": "被撤消。這將永久刪除",
                "repository, wiki, issues, comments, packages, secrets, workflow runs, and remove all collaborator associations.": "倉庫、Wiki、議題、評論、軟體包、金鑰、工作流程，並刪除所有協作者關聯。",
                "repository, wiki, issues, comments, packages, secrets, workflow runs, and remove all team associations.": "倉庫、Wiki、議題、評論、軟體包、金鑰、工作流程，並刪除所有團隊關聯。", // 組織倉庫
                "This will not change your billing plan. If you want to downgrade, you can do so in your Billing Settings.": "這並不會更改您的結算方案。 如果您想降級，可以在結算設定中進行降級。",
                "I understand the consequences, delete this repository": "我明白後果，依然刪除該倉庫",

            // 協作者 / 協作者和團隊 - 訪問管理頁面 /<user-name>/<repo-name>/settings/access ====================================
                "Who has access": "誰有權訪問",
                "public repository": "公共倉庫",
                "This repository is public and visible to anyone.": "該倉庫是公開的，對任何人都可見。",
                "private repository": "私有倉庫",
                "Only those with access to this repository can view it.": "只有擁有該倉庫訪問權的使用者才能檢視。",
                "Manage": "管理",

                "Direct access": "直接訪問",
                "collaborators have access to this repository. Only you can contribute to this repository.": "個協作者有權訪問此倉庫。 只有您可以對此倉庫做出貢獻。",
                // 組織倉庫
                "teams or members have access to this repository. Only": "團隊或成員有權訪問此倉庫。只有",
                "Owners": "所有者",
                "can contribute to this repository.": "可以為此倉庫做出貢獻。",

                // 組織倉庫
                "Base role": "基本角色",
                "can access this repository.": "可以訪問此倉庫。",

                "Manage access": "訪問管理",
                "You haven't invited any collaborators yet": "您尚未邀請任何協作者",
                // "invite a collaborator": "邀請協作者",
                "Add people": "新增他人",
                // 邀請對話方塊
                "Add a collaborator to": "新增協作者到",
                "Search by username, full name, or email": "搜尋使用者名稱、全名、或電子郵箱",
                "Select a collaborator above": "從上方選擇協作者",
                "Invite collaborator": "邀請協作者",
                "Add": "新增",
                "to this repository": "到這個倉庫",

                // 組織倉庫
                "Create team": "建立組織",
                "You haven't added any teams or people yet": "您尚未新增團隊或成員",
                "Organization owners can manage individual and team access to the organization's repositories. Team maintainers can also manage a team's repository access.": "組織所有者可以管理成員和團隊對組織倉庫的訪問。團隊維護者也可以管理一個團隊的倉庫訪問。",
                "Learn more about organization access": "瞭解更多關於組織訪問許可權的資訊",
                "Add teams": "新增團隊",

                "Add people to": "新增成員到",
                "Select a member above": "在上面選擇一名成員",
                "Add teams to": "新增團隊",
                "Search by team name": "按團隊名稱搜尋",
                "Select a team above": "在上面選擇一個團隊",

            // 團隊和成員職責 (組織倉庫) /<user-name>/<repo-name>/settings/role_details
                "Manage Access": "管理訪問",
                "Role Details": "角色詳情",

                "Repository Roles": "倉庫角色",
                "Listed below are all the available roles that can be granted to members and teams in this organization. Expand a role to view the details of the permissions included.": "下面列出了可以授予該組織的成員和團隊的所有可用角色。展開角色，檢視所包含的許可權細節。",

                "Pre-defined Roles": "預定義角色",
                "Read": "只讀",
                    "Default repository role": "預設倉庫角色",
                    "Read and clone repositories. Open and comment on issues and pull requests.": "讀取和克隆倉庫。開啟並評論議題和拉取請求。",
                "Triage": "分級",
                    "Read permissions plus manage issues and pull requests.": "讀取許可權以及管理議題和拉取請求。",
                    "Issue and Pull Request": "議題和拉取請求",
                        "Assign or remove a user": "分配或刪除使用者",
                        "Remove an assigned user": "刪除分配的使用者",
                        "Remove a label": "刪除標籤",
                        "Add or remove a label": "新增或刪除標籤",
                    "Issue": "議題",
                        "Close an issue": "關閉議題",
                        "Reopen a closed issue": "重新開啟已關閉的議題",
                        "Mark an issue as a duplicate": "將議題標記為重複",
                    "Pull Request": "拉取請求",
                        "Close a pull request": "關閉拉取請求",
                        "Reopen a closed pull request": "重新開啟已關閉的拉取請求",
                        "Request a pull request review": "請求拉取請求審查",
                    "Repository": "倉庫",
                        "Set milestones": "設定里程碑",
                    // "": "討論",
                        "Convert issues to discussions": "將議題轉化為討論",
                        "Delete a discussion": "刪除討論",
                        "Edit a discussion category": "編輯討論類別",
                        "Create a discussion category": "建立討論類別",
                        "Mark or unmark discussion answers": "標記或取消標記討論答案",
                        "Hide or unhide discussion comments": "隱藏或取消隱藏討論評論",
                "Write": "可寫",
                    "Triage permissions plus read, clone and push to repositories.": "分級許可權以及讀取、克隆和推送到倉庫。",
                    // "": "安全",
                        "View code scanning results": "檢視程式碼掃描結果",
                        "Dismiss or reopen code scanning results": "忽略或重新開啟程式碼掃描結果",
                "Maintain": "維護",
                    "Write permissions plus manage issues, pull requests and some repository settings.": "寫入許可權以及管理議題、拉取請求和一些倉庫設定。",
                    // "": "倉庫",
                        "Manage pull request merging settings": "管理拉取請求的合併設定",
                        "Manage GitHub Page settings": "管理 GitHub 頁面設定",
                        "Manage project settings": "管理專案設定",
                        "Manage wiki settings": "管理 wiki 設定",
                        "Manage topics": "管理主題",
                        "Push commits to protected branches": "將提交推送到受保護的分支",
                        "Set interaction limits": "設定互動限制",
                        // "": "",
                        "Set the social preview": "設定社交預覽",
                        "Edit repository metadata": "編輯倉庫元資料",
                "Admin": "管理員",
                    "Full access to repositories including sensitive and destructive actions.": "對倉庫的完全訪問許可權，包括敏感和破壞性操作。",
                    // "": "議題",
                        "Delete an issue": "刪除議題",
                    // "": "倉庫",
                        "Manage deploy keys": "管理部署金鑰",
                        "Manage webhooks": "管理 web 鉤子",
                    // "": "安全",
                        "Delete code scanning results": "刪除程式碼掃描結果",
                        "View secret scanning results": "檢視金鑰掃描結果",
                        "Dismiss or reopen secret scanning results": "忽略或重新開啟金鑰掃描結果",
                        "View Dependabot alerts results": "檢視 Dependabot 警報結果",
                        "Dismiss Dependabot alerts results": "忽略 Dependabot 警報結果",
                "Custom Roles": "自定義角色",
                    "These roles are created and managed by organization administrators.": "這些角色由組織管理員建立和管理。",
                    "There are no custom roles yet!": "目前尚無自定義的角色!",
                    "Learn more about custom roles": "瞭解更多關於自定義角色的資訊",

            // 程式碼安全性與分析 /<user-name>/<repo-name>/settings/security_analysis
                "Configure security and analysis features": "配置安全和分析功能",
                "Security and analysis features help keep your repository secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your repository.": "安全和分析功能有助於確保您的倉庫安全和更新。透過啟用這些功能，您授予我們對您的倉庫執行只讀分析的許可權。",
                "Dependency graph": "依賴關係圖",
                    "Understand your dependencies.": "瞭解您的依賴項。",
                    "Dependency graph is always enabled for public repos.": "公共倉庫始終啟用依賴關係圖。",

                    //對話方塊
                    "Disable dependency graph": "禁用依賴關係圖",
                    "Disabling the dependency graph will also disable Dependabot alerts.": "禁用依賴關係圖也會禁用 Dependabot 警報。",
                "Dependabot alerts": "Dependabot 警報",
                    "Receive alerts of new vulnerabilities that affect your dependencies.": "接收有關影響您的依賴項的新漏洞的警報。",
                    "Enable Dependabot alerts": "啟用 Dependabot 警報",
                        "Dependabot alerts need the dependency graph to be enabled, so we'll turn that on too.": "Dependabot 警報需要啟用依賴關係圖，因此我們也將啟用它。",

                    // 對話方塊
                    "Disable Dependabot alerts": "禁用 Dependabot 警報",
                    "Disabling Dependabot alerts will also disable Dependabot security updates.": "禁用 Dependabot 警報也將禁用 Dependabot 安全更新。",
                "Dependabot security updates": "Dependabot 安全更新",
                    "Easily upgrade to non-vulnerable dependencies.": "輕鬆升級到無漏洞的依賴項。",
                    "Enable Dependabot security updates": "啟用 Dependabot 安全更新",
                        "Dependabot security updates need Dependabot alerts to be enabled, so we'll turn that on too.": "Dependabot 安全更新需要啟用 Dependabot 警報，因此我們也將啟用它。",
                        "Dependabot security updates need the dependency graph and Dependabot alerts to be enabled, so we'll turn them on too.": "Dependabot 安全更新需要啟用依賴關係圖和  Dependabot 警報，因此我們也將啟用它。",
                // "Code scanning": "程式碼掃描",
                    "Automatically detect common vulnerabilities and coding errors.": "自動檢測常見漏洞和編碼錯誤。",
                    "Set up": "設定",

                "Secret scanning": "機密掃描",
                    "GitHub will always send alerts to partners for detected secrets in public repositories.": "GitHub 會始終向合作伙伴傳送檢測到公共倉庫中機密的警報。",

                // 組織倉庫
                "Access to alerts": "訪問警報",
                "Admins, users, and teams in the list below have permission to view and manage Dependabot or secret scanning alerts. These users may be notified when a new vulnerability is found in one of this repository's dependencies and when a secret or key is checked in. They will also see additional details when viewing Dependabot security updates. Individuals can manage how they receive these alerts in their": "以下列表中的管理員、使用者和團隊有許可權檢視和管理 Dependabot 或秘鑰掃描警報。當在此倉庫的依賴項之一中發現新的漏洞，以及當金鑰或令牌被嵌入時，可能會通知這些使用者。在檢視 Dependabot 安全更新時，他們還會看到其他詳細資訊。使用者可以管理他們如何接收這些警報，在他們的",
                "notification settings": "通知設定",

                "Choose the people or teams you would like to grant access": "選擇您要授予訪問許可權的人員或團隊",
                "Search for people or teams": "搜尋人員或團隊",
                "People and teams with access": "具有訪問許可權的人員和團隊",
                "Organization administrators, repository administrators, and teams with the security manager role": "具有安全管理員角色的組織管理員、倉庫管理員和團隊",
                "These members always see Dependabot and secret scanning alerts.": "這些成員總是能看到 Dependabot 和金鑰掃描警報。",
                "Save changes": "儲存更改",

            // 分支管理頁面 /<user-name>/<repo-name>/settings/branches====================================
                "Default branch": "預設分支",
                "The default branch is considered the “base” branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.": "預設分支被認為是倉庫中的 “基礎” 分支，所有的拉取請求和程式碼提交都是針對該分支進行的，除非您指定一個不同的分支。",
                "Rename branch": "重新命名分支",
                    // 重新命名分支對話方塊
                    "Rename this branch": "重新命名分支",
                    // "Rename": "重新命名",
                    "to:": "為：",
                    // [/is already the branch name./, "已經是分支的名稱了。"],
                    // [/Your branch name will be/, "您的分支的名稱將重新命名為"],
                    "Most projects name the default branch": "大多數專案將預設分支名為",
                    "Renaming this branch:": "重新命名此分支：",
                        // 該分支存在來自其他分支的拉取請求時
                            "Will update": "將更新",
                            "pull request targeting this branch.": "個針對該分支的拉取請求。",

                        // 該分支存在用於其他分支的拉取請求時
                            "Will close": "將關閉",
                            "open pull request for this branch.": "個該分支的拉取請求。",

                        // 重新命名 GitHub Pages 所在分支
                            "Will unpublish current GitHub Pages site.": "將取消當前釋出的 GitHub Pages 站點。",
                                "Your current GitHub Pages site will become unpublished. A new commit on the renamed branch will publish the GitHub Pages site again.": "您當前的 GitHub Pages 站點將被取消釋出。重新命名分支上的新提交將再次釋出 GitHub Pages 站點。",

                        "Will not update your members' local environments.": "不會更新您成員的本地環境。",
                    "Renaming this branch will not update your members' local environments.": "重新命名此分支不會更新您成員的本地環境。",
                        "Your members will have to manually update their local environments. We'll let them know when they visit the repository, or you can share the following commands.": "您的成員將不得不手動更新他們的本地環境。我們會在他們訪問倉庫時通知他們，或者您可以共享以下命令。",
                    "Saving…": "儲存中…",

                "Switch to another branch": "切換到另一分支",
                    // 分支切換對話方塊
                    "Switch default branch to another branch": "將預設分支切換到另一分支",
                    "Update": "更新",
                    "Switch default branch": "切換預設分支",
                    "Filter branches": "篩選分支",
                    // 更新預設分支對話方塊
                    "Update default branch": "更新預設分支",
                    "Changing your default branch": "更改您的預設分支",
                    "can have unintended consequences that can affect new pull requests and clones.": "可能會產生意想不到的後果，影響新的拉取請求和克隆。",
                    "I understand, update the default branch.": "我明白了，依然更新預設分支",

                "Branch protection rules": "分支保護規則",
                // 私有庫 啟用 分支保護 提醒
                "Protected branches are available to Pro, Team, and Enterprise users": "專業版、團隊版和企業版使用者均可使用分支保護功能",
                "Enforce restrictions on how code branches are merged, including requiring reviews by selected collaborators, or allowing only specific contributors to work on a particular branch.": "對程式碼分支的合併方式實施限制，包括要求由選定的協作者進行審查，或者只允許特定的貢獻者在特定的分支上工作。",

                "Add rule": "新增規則",
                "Define branch protection rules to disable force pushing, prevent branches from being deleted, and optionally require status checks before merging. New to branch protection rules?": "定義分支保護規則，以禁止強制推送，防止分支被刪除，並可選擇要求在合併前進行狀態檢查。對分支保護規則感到陌生？",
                "No branch protection rules defined yet.": "尚未定義分支保護規則。",

            // 新建分支保護規則 頁面 /<user-name>/<repo-name>/settings/branch_protection_rules/new====================================
                "Branch protection rule": "分支保護規則",
                "Branch name pattern": "分支名稱模式",
                "Protect matching branches": "保護匹配的分支",
                "Require a pull request before merging": "要求在合併前提交拉取請求",
                "When enabled, all commits must be made to a non-protected branch and submitted via a pull request before they can be merged into a branch that matches this rule.": "啟用後，所有提交都必須提交到不受保護的分支，並透過拉取請求提交，然後才能將它們合併到與此規則匹配的分支中。",
                    "Require approvals": "需要批准",
                    "When enabled, pull requests targeting a matching branch require a number of approvals and no changes requested before they can be merged.": "啟用後，針對匹配分支的拉取請求需要經過多次批准，並且在合併之前不需要更改。",
                    "Required number of approvals before merging:": "合併前所需的審批數量：",
                    "Dismiss stale pull request approvals when new commits are pushed": "當新的提交被推送時，撤銷陳舊的拉取請求審批",
                    "New reviewable commits pushed to a matching branch will dismiss pull request review approvals.": "推送到匹配分支的新的可審查提交將撤銷拉取請求的審查批准。",
                        "Require review from Code Owners": "要求程式碼所有者的審查",
                        "Require an approved review in pull requests including files with a designated code owner.": "要求在拉取請求中進行批准審查，包括有指定程式碼所有者的檔案。",
                    "Require status checks to pass before merging": "要求在合併前透過狀態檢查",
                    "Choose which": "選擇那些",
                    "status checks": "狀態檢查",
                    "must pass before branches can be merged into a branch that matches this rule. When enabled, commits must first be pushed to another branch, then merged or pushed directly to a branch that matches this rule after status checks have passed.": "必須透過，才能將分支合併到符合此規則的分支。啟用後，提交的內容必須先推送到另一個分支，然後在狀態檢查通過後再合併或直接推送到符合此規則的分支。",
                        "Require branches to be up to date before merging": "要求分支在合併前必須是最新的",
                    "This ensures pull requests targeting a matching branch have been tested with the latest code. This setting will not take effect unless at least one status check is enabled (see below).": "這可確保針對匹配分支的拉取請求已使用最新的程式碼進行了測試。除非啟用了至少一個狀態檢查，否則這個設定不會生效（見下文）。",
                    "Search for status checks in the last week for this repository": "搜尋此倉庫最近一週的狀態檢查",
                    "Status checks that are required.": "需要進行的狀態檢查。",
                "Require conversation resolution before merging": "要求在合併前解決對話",
                "When enabled, all conversations on code must be resolved before a pull request can be merged into a branch that matches this rule.": "啟用後，必須先解決所有有關程式碼的對話，然後才能將拉取請求合併到與此規則匹配的分支中。",
                "Require signed commits": "要求帶簽名的提交",
                "Commits pushed to matching branches must have verified signatures.": "推送到匹配分支的提交必須帶有經過驗證的簽名。",
                "Require linear history": "要求線性歷史記錄",
                "Prevent merge commits from being pushed to matching branches.": "防止合併後的提交被推送到匹配的分支。",
                "Include administrators": "包括管理員",
                "Enforce all configured restrictions above for administrators.": "對管理員執行上述所有配置進行限制。",

                "Rules applied to everyone including administrators": "規則適用於每個人，包括管理員",
                "Allow force pushes": "允許強制推送",
                "Permit force pushes for all users with push access.": "允許所有有推送許可權的使用者強制推送。",
                "Allow deletions": "允許刪除",
                "Allow users with push access to delete matching branches.": "允許有推送許可權的使用者刪除匹配的分支。",

                "Create": "建立",

            // 標籤 頁面 /<user-name>/<repo-name>/settings/tag_protection===============================
                "Protected tags": "受保護的標籤",
                "Protected tags can only be created or deleted by users with enhanced permissions defined by your organization owners.": "受保護的標籤只能由具有由組織所有者定義的增強許可權的使用者建立或刪除。",
                "Learn more about protected tags": "瞭解更多關於受保護標籤的資訊",
                "No protected tag rules exist yet": "尚無受保護的標籤規則存在",
                "New rule": "新建規則",

            // 新建標籤規則 頁面 /<user-name>/<repo-name>/settings/tag_protection/new===============================
                "/ New rule": "/ 新建規則",
                "Tag name pattern": "標籤名稱模式",
                "Example: You can use": "示例：您可以使用",
                "to target tags named": "來鎖定名為",
                ", and so on.": "等的標籤。",

            // Web 鉤子 頁面 /<user-name>/<repo-name>/settings/hooks====================================
                "Add webhook": "新增 Web 鉤子",
                "Webhooks allow external services to be notified when certain events happen. When the specified events happen, we’ll send a POST request to each of the URLs you provide. Learn more in our": "Web 鉤子允許在發生某些事件時通知外部服務。當指定的事件發生時，我們將向您提供的每個 URL 傳送 POST 請求。瞭解更多資訊，在我們的",
                "Webhooks Guide": "Web 鉤子指南",

                "We will also send events from this repository to your": "我們還將把這個倉庫的事件傳送到您的", // 組織倉庫
                "organization webhooks": "組織 Web 鉤子", // 組織倉庫

                // 刪除對話方塊
                    "Delete webhook?": "刪除 Web 鉤子？",
                    "This action cannot be undone. Future events will no longer be delivered to this webhook": "此操作無法撤消。未來的事件將不再傳遞到此 Web 鉤子",
                    "Yes, delete webhook": "是的，刪除 Web 鉤子",

            // 新增鉤子 頁面 /<user-name>/<repo-name>/settings/hooks/new ====================================
                "Webhooks /": "Web 鉤子 /",
                "We’ll send a": "我們將",
                "request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON,": "請求到以下 URL，其中包含任何訂閱事件的詳細資訊。您還可以指定要接收的資料格式（JSON、",
                "etc": "等",
                "). More information can be found in": "）。更多資訊可以在",
                "our developer documentation": "開發人員文件",

                "Payload URL": "有效負載 URL",
                "Content type": "內容型別",
                "Secret": "金鑰",
                    "Leave blank to remove secret": "留空以刪除金鑰",

                "SSL verification": "SSL 驗證",
                "By default, we verify SSL certificates when delivering payloads.": "預設情況下，我們在交付有效負載時驗證 SSL 證書。",
                "Enable SSL verification": "啟用 SSL 驗證",
                "Disable": "禁用",
                "(not recommended)": "（不推薦）",
                    "Are you sure?": "您確定嗎？",
                    "Warning": "警告",
                    ": Disabling SSL verification has serious implications.": "：禁用 SSL 驗證具有嚴重的影響。",
                    "SSL verification helps ensure that hook payloads are delivered to your URL endpoint securely, keeping your data away from prying eyes. Disabling this option is": "SSL 驗證有助於確保鉤子有效負載安全地傳送到您的 URL 端點，使您的資料遠離窺探。禁用此選項是",
                    "not recommended": "不推薦的",
                    "Disable, I understand my webhooks may not be secure": "禁用，我明白我的 web 鉤子可能不安全",

                "Which events would you like to trigger this webhook?": "您希望哪些事件觸發此 Web 鉤子？",
                    "Just the": "僅",
                    "push": "推送",
                    "event.": "事件。",
                    "Send me": "傳送給我",
                    "everything": "所有",
                    "Let me select individual events.": "讓我選擇單個事件。",
                        "Branch or tag creation": "分支或標籤建立",
                            "Branch or tag created.": "分支或標籤的建立。",
                        "Branch or tag deletion": "分支或標籤刪除",
                            "Branch or tag deleted.": "分支或標籤的刪除。",
                        // "Branch protection rules": "分支保護規則",
                            "Branch protection rule created, deleted or edited.": "分支保護規則的建立、刪除或編輯。",
                        "Check runs": "檢查執行",
                            "Check run is created, requested, rerequested, or completed.": "檢查執行的建立、請求、重新請求或完成。",
                        "Check suites": "檢查套件",
                            "Check suite is requested, rerequested, or completed.": "檢查套件的請求、重新請求或已完成。",
                        "Code scanning alerts": "程式碼掃描警報",
                            "Code Scanning alert created, fixed in branch, or closed": "程式碼掃描警報的建立、在分支中的修復或關閉",
                        "Collaborator add, remove, or changed": "協作者的新增、刪除或更改",
                            "Collaborator added to, removed from, or has changed permissions for a repository.": "協作者新增到倉庫、從倉庫中刪除或更改了倉庫的許可權。",
                        "Commit comments": "提交評論",
                            "Commit or diff commented on.": "提交或差異評論。",
                        // "Deploy keys": "部署金鑰",
                            "A deploy key is created or deleted from a repository.": "在倉庫中部署金鑰的建立或刪除。",
                        "Deployment statuses": "部署狀態",
                            "Deployment status updated from the API.": "從 API 更新的部署狀態。",
                        "Deployments": "部署",
                            "Repository was deployed or a deployment was deleted.": "倉庫的部署或刪除部署。",
                        "Discussion comments": "討論評論",
                            "Discussion comment created, edited, or deleted.": "討論評論的建立、編輯或刪除。",
                        // "Discussion": "討論",
                            "Discussion created, edited, pinned, unpinned, locked, unlocked, transferred, answered, unanswered, labeled, unlabeled, had its category changed, or was deleted.": "討論的建立、編輯、固定、取消固定、鎖定、解鎖、轉移、回答、未回答、標記、未標記、更改其類別或刪除。",
                        // "Forks": "復刻",
                            "Repository forked.": "倉庫復刻。",
                        "Issue comments": "發表評論",
                            "Issue comment created, edited, or deleted.": "議題評論的建立、編輯或刪除。",
                        // "Issue": "議題",
                            "Issue opened, edited, deleted, transferred, pinned, unpinned, closed, reopened, assigned, unassigned, labeled, unlabeled, milestoned, demilestoned, locked, or unlocked.": "議題的開啟、編輯、刪除、轉移、釘住、取消釘住、關閉、重新開啟、分配、未分配、標記、未標記、密閉、去密閉、鎖定或解鎖。",
                        // "Labels": "標籤",
                            "Label created, edited or deleted.": "標籤的建立、編輯或刪除。",
                        "Meta": "元資料",
                            "This particular hook is deleted.": "這個特定的鉤子被刪除。",
                        // "Milestones": "里程碑",
                        "Milestone created, closed, opened, edited, or deleted.": "里程碑的建立、關閉、開啟、編輯或刪除。",
                        // "Packages": "軟體包",
                            "GitHub Packages published or updated in a repository.": "在倉庫中 GitHub 軟體包的釋出或更新 。",
                        "Page builds": "頁面構建",
                            "Pages site built.": "頁面站點建成。",
                        "Project cards": "專案卡",
                            "Project card created, updated, or deleted.": "專案卡的建立、更新或刪除。",
                        "Project columns": "專案欄目",
                            "Project column created, updated, moved or deleted.": "專案列目的建立、更新、移動或刪除。",
                        // "": "專案",
                            "Project created, updated, or deleted.": "專案的建立、更新或刪除。",
                        "Pull request review comments": "拉取請求的審查評論",
                            "Pull request diff comment created, edited, or deleted.": "拉取請求差異評論的建立、編輯或刪除。",
                        "Pull request review threads": "拉取請求的審查執行緒",
                            "A pull request review thread was resolved or unresolved.": "拉取請求審查執行緒的解決或未解決。",
                        "Pull request reviews": "拉取請求審查",
                            "Pull request review submitted, edited, or dismissed.": "拉取請求審查的提交、編輯或忽略。",
                        // "": "拉取請求",
                            "Pull request opened, closed, reopened, edited, assigned, unassigned, review requested, review request removed, labeled, unlabeled, synchronized, ready for review, converted to draft, locked, unlocked, auto merge enabled, auto merge disabled, milestoned, or demilestoned.": "拉取請求的開啟、關閉、重新開啟、編輯、分配、未分配、審查請求、審查請求的刪除、標記、未標記、同步、準備審查、轉換為草稿、鎖定、解鎖、啟用自動合併、禁用自動合併、里程碑或取消里程碑。",
                        "Pushes": "推送",
                            "Git push to a repository.": "Git 推送到倉庫。",
                        "Registry packages": "註冊軟體包",
                            "Registry package published or updated in a repository.": "註冊軟體包的釋出或更新。",
                        // "Releases": "發行版",
                            "Release created, edited, published, unpublished, or deleted.": "發行版的建立、編輯、釋出、取消釋出或刪除。",
                        // "": "倉庫",
                            "Repository created, deleted, archived, unarchived, publicized, privatized, edited, renamed, or transferred.": "倉庫的建立、刪除、存檔、取消存檔、公開、私有化、編輯、重新命名或轉讓。",
                        "Repository imports": "倉庫匯入",
                            "Repository import succeeded, failed, or cancelled.": "倉庫匯入的成功、失敗或取消。",
                        "Repository vulnerability alerts": "倉庫漏洞警報",
                            "Dependabot alert (aka dependency vulnerability alert) created, resolved, or dismissed on a repository.": "Dependabot 警報（又名依賴漏洞警報）在倉庫上的建立、解決或解除。",
                        "Secret scanning alerts": "金鑰掃描警報",
                            "Secrets scanning alert created, resolved, or reopened": "金鑰掃描警報的建立、解決或重新開啟",
                        // "": "星標",
                            "A star is created or deleted from a repository.": "從倉庫中建立或刪除星標。",
                        "Statuses": "狀態",
                            "Commit status updated from the API.": "從 API 更新的提交狀態。",
                        "Team adds": "團隊新增",
                            "Team added or modified on a repository.": "在倉庫上新增或修改的團隊。",
                        "Visibility changes": "可見性變化",
                            "Repository changes from private to public.": "倉庫從私有更改為公共。",
                        "Watches": "關注",
                            "User stars a repository.": "使用者給一個倉庫加星標。",
                        "Wiki": "",
                            "Wiki page updated.": "Wiki 頁面的更新。",
                        "Workflow jobs": "工作流程的工作",
                            "Workflow job queued, requested or completed on a repository.": "在倉庫上工作流程的排隊、請求或完成。",
                        "Workflow runs": "工作流程的執行",
                            "Workflow run requested or completed on a repository.": "在倉庫上的工作流程的請求或完成。",
                    "Active": "啟用",
                    "We will deliver event details when this hook is triggered.": "當鉤子被觸發時，我們將提供事件詳細資訊。",

                // 頂部提醒
                "Okay, that hook was successfully created. We sent a ping payload to test it out! Read more about it at https://docs.github.com/webhooks/#ping-event.": "好的，這個鉤子已經成功建立。我們傳送了一個 ping 負載來測試它! 閱讀更多關於它的資訊，請訪問 https://docs.github.com/webhooks/#ping-event。",

            // 管理 鉤子 /<user-name>/<repo-name>/settings/hooks/<id>
                "Manage webhook": "管理 Web 鉤子",
                "If you've lost or forgotten this secret, you can change it, but be aware that any integrations using this secret will need to be updated. —": "如果您丟失或忘記了此金鑰，則可以更改它，但請注意，使用此金鑰的任何整合都需要更新。 —",
                "Change Secret": "更改金鑰",
                "Update webhook": "更新 Web 鉤子",
                // 頂部提醒
                    "Okay, the hook was successfully updated.": "好的，Web 鉤子已經成功更新。",
                "Delete webhook": "刪除 Web 鉤子",

            //  /<user-name>/<repo-name>/settings/hooks/<id>/deliveries
                "Recent Deliveries": "最近交付",
                    "redelivery": "再交付",
                "Request": "請求",
                "Response": "應答",
                "Redeliver": "重新交付",
                    "Redeliver payload?": "重新交付有效負載？",
                    "The payload will be delivered to": "該有效負載將被髮送到",
                    "using the current webhook configuration.": "使用當前的 Web 鉤子 配置。",
                    "Yes, redeliver this payload": "是的，重新發送此有效負載",

                // [/Completed in (\d+) seconds./, "在 (\d+) 秒內完成。"],


            // 郵件通知管理 頁面 /<user-name>/<repo-name>/settings/notifications/edit ====================================
                "Setup email addresses to receive notifications when push events are triggered.": "設定電子郵箱地址，以便在推送事件被觸發時收到通知。",
                "Address": "電子郵箱地址",
                "Whitespace separated email addresses (at most two).": "用空格分隔的電子郵箱地址（最多兩個）。",
                "Approved header": "批准的標題",
                "Sets the": "設定",
                "Approved": "批准",
                "header to automatically approve the message in a read-only or moderated mailing list.": "標頭以自動批准只讀或稽核郵件列表中的郵件。",
                "We will send notification emails to the listed addresses when a":"我們將向所列地址傳送通知郵件，當",
                "event is triggered.":"事件被觸發。",
                "Setup notifications": "設定通知",

            // 整合應用 頁面 /<user-name>/<repo-name>/settings/installations====================================
            // 全域性設定在 Applications 應用 /settings/installations
                "Installed GitHub Apps": "安裝的 GitHub 應用",
                "GitHub Apps augment and extend your workflows on GitHub with commercial, open source, and homegrown tools.": "GitHub 應用透過商業、開源和自主開發的工具來增強和擴充套件您在 GitHub 上的工作流程。",
                "Configure": "配置",

            // 部署金鑰 頁面 /<user-name>/<repo-name>/settings/keys====================================
                "Add deploy key": "新增部署金鑰",
                "There are no deploy keys for this repository": "此倉庫暫無部署金鑰",
                "Check out our": "檢視我們的",
                "guide on deploy keys": "部署金鑰指南",
                "to learn more.": "瞭解更多。",
                "Last used within the last week": "最後一次使用是最近 1 周之內",

                // 金鑰刪除對話方塊
                "Are you sure you want to delete this SSH key?": "您確定要刪除此 SSH 金鑰嗎？",
                // "This action": "該操作",
                // "cannot": "不能",
                "be undone. This will permanently delete the SSH key, and if you’d like to use it in the future, you will need to upload it again.": "被撤銷。這將永久地刪除 SSH 金鑰，如果您想在未來使用它，您將需要再次上傳它。",
                "I understand, delete this SSH key": "我明白了，依然刪除該 SSH 金鑰",

                // 頂部提醒
                "Okay, you have successfully deleted that key.": "好的，您已成功刪除該金鑰。",

            // 部署金鑰新建 頁面 /<user-name>/<repo-name>/settings/keys/new====================================
                "/ Add new": "/ 新添",
                "Title": "標題",
                "Key": "金鑰",
                "Allow write access": "允許寫訪問",
                "Can this key be used to": "該金鑰允許",
                "push": "推送",
                "to this repository? Deploy keys always have pull access.": "到這個倉庫？部署金鑰始終具有拉取訪問許可權。",
                "Add key": "新增金鑰",
                // 頂部提醒
                "Key is invalid. You must supply a key in OpenSSH public key format": "金鑰無效。您必須提供 OpenSSH 公鑰格式的金鑰",

            // 操作頁面 /<user-name>/<repo-name>/settings/actions
                "Actions permissions": "操作許可權",
                    "This setting has been disabled by organization administrators.": "此設定已被組織管理員禁用。", // 組織倉庫
                    "Allow all actions and reusable workflows": "允許所有操作和可複用的工作流程",
                        "Any action or reusable workflow can be used, regardless of who authored it or where it is defined.": "可以使用任何操作或可複用的工作流程，而不管它是誰創作的或在哪裡定義的。",
                "Disable Actions": "禁用操作",
                    "The Actions tab is hidden and no workflows can run.": "“操作” 選項卡將被隱藏，無法執行任何工作流程。",
                // [/Allow ([^ ]+) actions and reusable workflows/, "允許 $1 的操作和可複用的工作流程"],
                    // [/Any action or reusable workflow defined in a repository within ([^ ]+) can be used./, "可以使用在 $1 的倉庫中定義的任何操作或可複用的工作流程。"], // 操作頁面
                // [/Allow ([^ ]+), and select non-([^ ]+), actions and reusable workflows/, "允許 $1，並選擇非 $2、操作和可複用的工作流程"],
                    // [/Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within ([^ ]+), can be used./, "可以使用符合指定條件的操作或工作流程，以及在 $1 的倉庫中定義的操作或可複用的工作流程。"], // 操作頁面
                    "Learn more about allowing specific actions and reusable workflows to run.": "瞭解更多關於允許執行特定操作和可複用的工作流程的資訊。",
                    "Allow actions created by GitHub": "允許由 GitHub 建立的操作",
                    "Allow actions by Marketplace": "允許來自市場的操作，",
                    "verified creators": "由經驗證的建立者建立",
                    "Allow specified actions and reusable workflows": "允許指定的操作和可複用的工作流程",
                    "Enter a comma-separated list of actions and reusable workflows": "輸入以逗號分隔的操作和可複用的工作流程列表",
                    "Wildcards, tags, and SHAs are allowed.": "允許使用萬用字元、標籤和 SHA。",
                    "Action examples:": "操作示例：",
                    "Reusable workflow examples:": "可複用的工作流程示例：",
                    "Entire organisation or repository examples:": "整個組織或倉庫的示例：",
                    // "Save": "儲存",
                    "Saving...": "儲存中...",
                    // 頂部提醒
                        "Actions policy updated.": "操作政策已更新",

                "Artifact and log retention": "工件和日誌保留",
                    "This is the duration that artifacts and logs will be retained.": "這是工件和日誌將被保留的時間。",
                    "Your organization administrator has set a maximum limit of": "您的組織管理員已將上限設定為", //組織倉庫
                    "days.": "天。", //組織倉庫

                    "days": "天",

                "Fork pull request workflows": "復刻拉取請求工作流程",
                    "Run workflows from fork pull requests": "從復刻拉取請求執行工作流程",
                        "This tells Actions to run workflows from pull requests originating from repository forks. Note that doing so will give maintainers of those forks the ability to use tokens with read permissions on the source repository.": "這告訴 Actions 執行工作流程，來自倉庫復刻的拉取請求。請注意，這樣做將使這些復刻的維護者有能力在原始碼庫上使用具有讀取許可權的令牌。",
                    "Send write tokens to workflows from fork pull requests.": "從復刻拉取請求，傳送可寫令牌到工作流程",
                        "This tells Actions to send tokens with": "這告訴 Actions 傳送令牌",
                        "write": "寫入",
                        "permissions to workflows from pull requests originating from repository forks. Note that doing so will give maintainers of those forks": "許可權到工作流程，來自倉庫復刻的拉取請求。請注意，這樣做將授予這些復刻的維護者",
                        "permissions against the source repository.": "許可權，針對源倉庫。",
                    "Send secrets to workflows from fork pull requests.": "從復刻拉取請求，傳送機密到工作流程",
                        "This tells Actions to send repository secrets to workflows from pull requests originating from repository forks.": "這告訴 Actions 傳送倉庫機密到工作流程，來自倉庫復刻的拉取請求。",

                "Fork pull request workflows from outside collaborators": "從外部協作者，復刻拉取請求工作流程",
                    "Choose which subset of outside collaborators will require approval to run workflows on their pull requests.": "選擇哪些外部協作者的子集需要批准才能對他們的拉取請求執行工作流程。",
                "Require approval for first-time contributors who are new to GitHub": "要求對首次加入 GitHub 的貢獻者進行審批",
                    "Only first-time contributors who recently created a GitHub account will require approval to run workflows.": "只有最近建立 GitHub 帳戶的首次貢獻者才需要獲得批准才能執行工作流程。",
                "Require approval for first-time contributors": "要求對首次貢獻者進行審批",
                    "Only first-time contributors will require approval to run workflows.": "只有首次貢獻者才需要獲得批准才能執行工作流程。",
                "Require approval for all outside collaborators": "要求對所有外部協作者進行審批",
                    "All outside collaborators will always require approval to run workflows on their pull requests.": "所有外部協作者將始終需要批准才能在他們的拉取請求上執行工作流程。",

                "Workflow permissions": "工作流程許可權",
                    "Choose the default permissions granted to the GITHUB_TOKEN when running workflows in this repository. You can specify more granular permissions in the workflow using YAML.": "在倉庫中執行工作流程時，選擇授予 GITHUB_TOKEN 的預設許可權。您可以使用 YAML 在工作流程中指定更細化的許可權。",
                    "Read and write permissions": "讀取和寫入許可權",
                        "Workflows have read and write permissions in the repository for all scopes.": "工作流程在倉庫中對所有作用域具有讀和寫的許可權。",
                    "Read repository contents permission": "只讀許可權",
                        "Workflows have read permissions in the repository for the contents scope only.": "工作流程在倉庫中對所有作用域具有隻讀的許可權。",

            // 執行器頁面 /<user-name>/<repo-name>/settings/actions/runners
                "New self-hosted runner": "新建自託管執行器",
                "Host your own runners and customize the environment used to run jobs in your GitHub Actions workflows.": "託管您自己的執行器，並定製用於在您的 GitHub Actions 工作流程中執行作業的環境。",
                "Learn more about self-hosted runners": "瞭解更多關於自託管執行器的資訊",
                "There are no runners configured": "暫無設定執行器",
                "Learn more about using runners": "瞭解更多關於使用執行器的資訊",
                "to run actions on your own servers.": "在您自己的伺服器上執行操作的資訊。",

            // 建立執行器頁面 /<user-name>/<repo-name>/settings/actions/runners/new
                "/ Create self-hosted runner": "/ 建立自託管執行器",
                "Adding a self-hosted runner requires that you download, configure, and execute the GitHub Actions Runner. By downloading and configuring the GitHub Actions Runner, you agree to the": "新增一個自託管執行器需要您下載、配置並執行 GitHub Actions 執行器。下載並配置 GitHub Actions 執行器 後，您同意",
                    "GitHub Terms of Service": "GitHub 服務條款",
                    "GitHub Corporate Terms of Service": "GitHub 企業服務條款",
                    ", as applicable.": "，如適用。",
                "Runner image": "執行器映象",
                "Architecture": "架構",
                "Download": "下載",
                "We recommend configuring the runner under \"\\actions-runner\". This will help avoid issues related to service identity folder permissions and long path restrictions on Windows.": "我們建議在 “\\actions-runner” 下配置執行器。這將有助於避免與 Windows 上的服務標識資料夾許可權和長路徑限制相關的議題。",
                "Using your self-hosted runner": "使用您的自託管執行器",
                "For additional details about configuring, running, or shutting down the runner, please check out our": "關於配置、執行或關閉執行器的其他細節，請檢視我們的",
                "product docs": "產品文件",

            // 倉庫 環境 /<user-name>/<repo-name>/settings/environments
                "New environment": "新建環境",
                "There are no environments for this repository": "此倉庫尚無環境",
                "Environments are used by your workflows for deployments.": "您的工作流程使用環境進行部署。",
                "You can configure environments with protection rules and secrets.": "您可以使用保護規則和機密配置環境。",

                // 刪除環境對話方塊
                "Are you sure you want to delete this environment?": "您確定要刪除此環境嗎？",
                "Deleting an environment will delete all secrets and protection rules associated with the environment.": "刪除環境將刪除與環境關聯的所有機密和保護規則。",
                "I understand, delete this environment": "我明白了，依然刪除這個環境",
                // 頂部提醒
                "Environment deleted.": "環境已刪除。",

            // 倉庫 新建環境 /<user-name>/<repo-name>/settings/environments/new
                "/ Add": "/ 新增",
                "Name": "名稱",
                "Configure environment": "設定環境",
                // [/Environment \"([^ ]+)\" created./, "環境 “$1” 已建立。"],

            // 編輯環境 /<user-name>/<repo-name>/settings/environments/19897411/edit
                "/ Configure": "/ 設定",
                "Environment protection rules": "環境保護規則",
                "Can be used to configure manual approvals and timeouts.": "可用於配置人工審批和超時。",

                "Required reviewers": "所需的審查人",
                "Specify people or teams that may approve workflow runs when they access this environment.": "指定訪問此環境時可以批准工作流執行的人員或團隊。",
                    "Add up to": "最多新增",
                    "more reviewers": "位審查人",
                    "Search for people or teams...": "搜尋人員或團隊...",
                "Wait timer": "等待計時器",
                "Set an amount of time to wait before allowing deployments to proceed.": "設定一個允許部署前的等待時間。",
                    "minutes": "分鐘",
                "Save protection rules": "儲存保護規則",

                "Deployment branches": "部署分支",
                    "Can be used to limit what branches can deploy to this environment using branch name patterns.": "可以使用分支名稱模式來限制哪些分支可以部署到這個環境。",
                    "All branches": "全部分支",
                    "Any branch from this repository can deploy.": "該倉庫的任何分支都可以部署。",
                    "Protected branches": "受保護的分支",
                    "Deployment limited to branches with protection rules.": "部署僅限於具有保護規則的分支。",
                    "Selected branches": "選中的分支",
                    "Specify a list of branches using branch name patterns.": "使用分支名稱模式指定一個分支列表",
                "Environment secrets": "環境機密",
                "Secrets are encrypted environment variables. They are accessible only by GitHub Actions in the context of this environment.": "機密是加密的環境變數。它們只能由 GitHub Actions 在這個環境中訪問。",
                "Add Secret": "新增機密",
                    // 新增機密對話方塊
                    "Value": "值",
                    "Secret value": "機密值",

            // 操作機密 /<user-name>/<repo-name>/settings/secrets/actions
                "Actions secrets": "操作機密",
                "New repository secret": "新建倉庫機密",
                "Secrets are environment variables that are": "機密是環境變數",
                "encrypted": "被加密",
                ". Anyone with": "。任何對此倉庫具有",
                "collaborator": "協作者",
                "access to this repository can use these secrets for Actions.": "訪問許可權的人都可以將這些機密用於操作。",
                "Secrets are not passed to workflows that are triggered by a pull request from a fork.": "機密不會傳遞給來自復刻的拉取請求觸發的工作流程。",

                "Updated": "更新於",

                // 頂部提醒
                "Failed to add secret. Secret names can only contain alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed. Must start with a letter ([a-z], [A-Z]) or underscores (_).": "新增機密失敗。機密名稱只能包含字母數字字元（[a-z]、[A-Z]、[0-9]）或下劃線 (_)。不允許有空格。必須以字母 ([a-z], [A-Z]) 或下劃線 (_) 開頭。",

                // 環境機密
                "There are no secrets for this repository's environments.": "此倉庫的環境暫無機密。",
                "Encrypted environment secrets allow you to store sensitive information, such as access tokens, in your repository environments.": "加密的環境機密允許您在倉庫環境中儲存敏感資訊，例如訪問令牌。",
                "Manage your environments and add environment secrets": "管理您的環境並新增環境機密",

                "Repository secrets": "倉庫機密",
                "There are no secrets for this repository.": "此倉庫暫無機密。",
                "Encrypted secrets allow you to store sensitive information, such as access tokens, in your repository.": "加密的機密允許您在倉庫中儲存敏感資訊，例如訪問令牌。",

                //組織倉庫
                "Secrets can also be created at the organization level and authorized for use in this repository.": "機密也可以在組織層面上建立，並授權在這個倉庫中使用。",
                "Organization secrets": "組織機密",
                "Manage organization secrets": "管理組織機密",
                "Organization secrets can only be used by public repositories on your plan.": "組織機密只能由您計劃中的公共倉庫使用。",
                "If you would like to use organization secrets in a private repository, you will need to upgrade your plan.": "如果您想在私有倉庫中使用組織機密，則需要升級您的計劃。",

                // 刪除機密對話方塊
                "Remove secret": "刪除機密",
                    "Are you sure you want to delete": "您確定要刪除",
                    "Yes, remove this secret": "是的，刪除該機密",

                // 頂部提醒
                    "Repository secret added.": "添加了倉庫機密。",
                    "Repository secret deleted.": "刪除了倉庫機密。",

            // 更新操作機密 /<user-name>/<repo-name>/settings/secrets/actions/<name>
                "/ Update secret": "/ 更新機密",
                "Update secret": "更新機密",
                    "Updating…": "更新中…",

            // 新建倉庫機密 /<user-name>/<repo-name>/settings/secrets/actions/new
                "/ New secret": "/ 新建機密",
                "Add secret": "新增機密",
                    "Adding…": "新增中…",

            // Dependabot 機密 /<user-name>/<repo-name>/settings/secrets/dependabot
                "Dependabot secrets": "Dependabot 機密",
                "Secrets are credentials that are": "機密是憑證",
                "access to this repository can use these secrets for Dependabot.": "訪問許可權的人可以將這些機密用於 Dependabot。",
                "Secrets are not passed to forks.": "機密不會傳遞給復刻。",
                "Encrypted secrets allow you to store private access tokens so that Dependabot can update dependencies from private registries.": "加密的機密允許您儲存私有訪問令牌，以便 Dependabot 可以從私有登錄檔更新依賴項。",

                // 組織倉庫
                "No organization secrets have been authorized for this repository.": "該倉庫暫無授權任何組織機密。",
                // [/Organization secrets for ([^ ]+) can be managed within/, "$1  的組織機密可以管理，在"],
                "organization settings": "組織設定",

            // GitHub Pages 頁面 /<user-name>/<repo-name>/settings/pages====================================
                "is designed to host your personal, organization, or project pages from a GitHub repository.": "旨在從 GitHub 倉庫託管您的個人、組織或專案頁面。",
                // 釋出狀態
                "Your site is published at": "您的站點發布在",
                "Your site is ready to be published at": "您的網站已準備好釋出在",

                "Source": "來源",
                // 禁用時
                "GitHub Pages is currently disabled. Select a source below to enable GitHub Pages for this repository.": "GitHub Pages 目前已被禁用。在下面選擇一個源，為該倉庫啟用 GitHub Pages。",
                "GitHub Pages is currently disabled. You must first add content to your repository before you can publish a GitHub Pages site.": "GitHub Pages 目前已被禁用。您必須先將內容新增到您的倉庫，然後才能釋出 GitHub Pages 站點。",
                // 啟用時
                "Your GitHub Pages site is currently being built from the": "您的 GitHub Pages 站點，目前正建立於",
                "folder in the": "目錄在",
                "branch.": "分支。",
                "Branch:": "分支：",
                "Select branch": "選擇分支",
                    "None": "無",
                "Select folder": "選擇資料夾",
                    "/ (root)": "/ (根目錄)",

                "You can't disable GitHub Pages while having a": "您無法禁用 GitHub Pages，當倉庫存在",
                "branch in this repository. Read more on how to": "分支。閱讀更多關如何",
                "unpublish your GitHub Pages site": "取消釋出 GitHub Pages 站點",

                "Theme Chooser": "設定主題",
                "Select a theme to publish your site with a Jekyll theme using the": "選擇一個主題，用 jekyll 主題釋出您的站點，使用",
                "Select a theme to publish your site with a Jekyll theme.": "選擇一個主題，用 Jekyll 主題釋出您的站點。",
                "Choose a theme": "選擇一個主題",
                // /<user-name>/<repo-name>/settings/pages/themes?
                    "Hide thumbnails": "隱藏縮圖",
                    "Show thumbnails": "顯示縮圖",
                    "Select theme": "選擇主題",

                "Custom domain": "自定義域",
                "Custom domains allow you to serve your site from a domain other than": "自定義域允許您從其他域為您的站點提供服務，而不是",
                "Remove": "移除",
                    "Check again": "再檢查一次",
                    // [/([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?) DNS check is in progress./, "$1 的 DNS 檢查正在進行。"],
                    "Please wait for the DNS check to complete.": "請等待 DNS 檢查結束。",
                    // [/([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?) is improperly configured/, "$1 配置不正確"],
                    // [/Your site's DNS settings are using a custom subdomain, ([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?), that's not set up with a correct CNAME record. We recommend you set this CNAME record to point at [YOUR USERNAME].github.io. For more information, see/, "您網站的 DNS 設定使用的是自定義子域 $1，該子域未設定正確的 CNAME 記錄。我們建議您將此 CNAME 記錄設定為指向 [YOUR USERNAME].github.io。有關詳細資訊，請參閱"],
                    // 頂部提醒
                    "No changes to custom domain.": "沒有對自定義域進行修改。",
                    "Custom domain removed. Please remember to remove any GitHub Pages DNS records for this domain if you do not plan to continue using it with GitHub Pages.": "自定義域已刪除。如果您不打算繼續使用 GitHub Pages，請記得刪除此域的任何 GitHub Pages 的 DNS 記錄。",

                "Enforce HTTPS": "強制 HTTPS",
                "HTTPS provides a layer of encryption that prevents others from snooping on or tampering with traffic to your site.": "HTTPS 提供了一層加密，防止他人窺探或篡改您站點的流量。",
                "When HTTPS is enforced, your site will only be served over HTTPS.": "當開啟強制 HTTPS 時，您的站點將只通過 HTTPS 提供服務。",
                "— Required for your site because you are using the default domain (": "— 必須先設定自定義域，目前您正在使用預設域 (",

                // 私有庫 啟用 Github Pages 提醒
                "Upgrade or make this repository public to enable Pages": "升級或公開該倉庫，以啟用 GitHub Pages",
                "GitHub Pages is designed to host your personal, organization, or project pages from a GitHub repository.": "GitHub Pages 旨在從 GitHub 倉庫中託管您的個人、組織或專案頁面。",

                //
                "Publish privately to people with read access to this repository": "私下發布給對此倉庫具有讀取許可權的人",
                "Try risk-free for 30 days": "無風險試用 30 天",
                "using a GitHub Enterprise organization, or": "試用 GitHub 企業組織，或",
                "learn more about changing the visibility of your GitHub Pages site": "瞭解更多關於改變您的 GitHub Pages 站點的可見性的資訊",

            // 審查設定 (倉庫)互動限制 /<user-name>/<repo-name>/settings/interaction_limits
            // 同全域性
                "Temporary interaction limits": "臨時互動限制",
                "Temporarily restrict which external users can interact with your repository (comment, open issues, or create pull requests) for a configurable period of time.": "在配置的時間段內，可臨時限制哪些外部使用者與您的倉庫互動（評論、開啟議題或建立拉取請求）。",
                "This may be used to force a \"cool-down\" period during heated discussions or prevent unwanted interactions.": "可用於在激烈討論期間，強制進入 “冷靜” 期或防止不必要的互動。",

                "You can restrict repository interactions across your account in your": "您可以限制倉庫互動，在您的帳戶設定中的",
                "account settings": "互動限制",

                "Limit to existing users": "僅限現有使用者",
                    "Users that have recently created their account will be unable to interact with the repository.": "最近建立帳戶的使用者將無法與該倉庫互動。",
                "Limit to prior contributors": "僅限於先前的貢獻者",
                    "Users that have not previously": "以前從未",
                    "committed": "提交",
                    // [/to the ([^ ]+) branch of this repository will be unable to interact with the repository./, "到該倉庫的 $1 分支的使用者將無法與該倉庫互動。"],
                "Limit to repository collaborators": "僅限倉庫協作者",
                    "Users that are not": "不是",
                    // "collaborators": "",
                    // "of one of your repositories will not be able to interact with that repository.": "",
                    "will not be able to interact with the repository.": "將無法與該倉庫互動。",

                "New users": "新使用者",
                "Users": "使用者",
                "Contributors": "貢獻者",
                "Collaborators": "協作者",

                "Enable": "啟用",
                "Disable": "禁用",
                // 互動限制時間 下拉選單
                "Enable interaction limits for:": "啟用互動限制：",
                "24 hours": "24 小時",
                "3 days": "3 天",
                "1 week": "1 周",
                "1 month": "1 個月",
                "6 months": "6 個月",

                // 頂部提醒
                "Repository interaction limit settings saved.": "倉庫互動限制設定已儲存。",

            // Code review limits 程式碼審查限制 /<user-name>/<repo-name>/settings/code_review_limits
                "Restrict users who are permitted to approve or request changes on pull requests in this repository.": "限制允許批准或請求更改該倉庫中拉取請求的使用者。",
                "Limit to users explicitly granted": "限於明確授予",
                "read": "讀取",
                "or higher access": "或 更高許可權的使用者",
                    "When enabled, only users explicitly granted access to this repository will be able to submit pull request reviews that \"approve\" or \"request changes\". All users able to submit comment pull request reviews will continue to be able to do so.": "啟用後，只有被明確授予該倉庫訪問權的使用者才能提交 “批准” 或 “請求更改” 的拉取請求審查。所有能夠提交評論拉取請求審查的使用者將繼續能夠這樣做。",
        },
        "regexp": [ // 正則翻譯
            [/is available\./, "可用。"],
            [/Choose another branch to use as the default branch of ([^ ]+) instead of/,"選擇另一分支作為 $1 的預設分支而不是"], // 分支切換 對話方塊
            [/is already the branch name./, "已經是分支的名稱了。"], // 重新命名分支 對話方塊
            [/Your branch name will be/, "您的分支的名稱將重新命名為"], // 重新命名分支 對話方塊
            [/Default branch changed to ([^ ]+)/, "預設分支已經更改為 $1"], // 頂部提醒 當預設分支更改成功
            [/Your repository \"([^ ]+)\" was successfully archived./, "您的倉庫 “$1” 已成功歸檔。"], //頂部提醒 倉庫歸檔
            [/Your repository \"([^ ]+)\" was successfully unarchived./, "您的倉庫 “$1” 已成功解除歸檔。"], //頂部提醒 倉庫解除歸檔
            [/Last used within the last (\d+) weeks?/, "最後一次使用是最近 $1 周之內"], //金鑰使用時間
            [/Invite collaborator/, "邀請協作者"], // 訪問管理 -> 邀請協作者
            [/Invite outside collaborator/, "邀請外部協作者"], // 訪問管理 -> 邀請成員 組織倉庫
            [/Enabled with about ([^ ]+) remaining./, ""],
            [/to the ([^ ]+) branch of this repository will be unable to interact with the repository./, "到該倉庫 $1 分支的使用者將無法與您的倉庫互動。"], // 倉庫互動限制
            // Github Pages 自定義域檢測
            [/([^ ]+) DNS check is in progress./, "$1 的 DNS 檢查正在進行中。"],
            [/([^ ]+) is improperly configured/, "$1 配置不正確"],
            [/Your site's DNS settings are using a custom subdomain, ([^ ]+), that's not set up with a correct CNAME record. We recommend you set this CNAME record to point at \[YOUR USERNAME\].github.io. For more information, see/, "您網站的 DNS 設定使用的是自定義子域 $1，該子域未設定正確的 CNAME 記錄。我們建議您將此 CNAME 記錄設定為指向 [YOUR USERNAME].github.io。有關詳細資訊，請參閱"],
            [/\(([^ ]+)\). We recommend you change this to a CNAME record pointing to/, "($1)。我們建議您將 CNAME 記錄設定為指向"],
            [/Allow ([^ ]+) actions and reusable workflows/, "允許 $1 的操作和可複用的工作流程"],
            [/Any action or reusable workflow defined in a repository within ([^ ]+) can be used./, "可以使用在 $1 的倉庫中定義的任何操作或可複用的工作流程。"], // 操作頁面
            [/Allow ([^ ]+), and select non-([^ ]+), actions and reusable workflows/, "允許 $1，並選擇非 $2、操作和可複用的工作流程"],
            [/Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within ([^ ]+), can be used./, "可以使用符合指定條件的操作或可複用的工作流程，以及在 $1 的倉庫中定義的操作或工作流程。"], // 操作頁面
            [/Completed in (.+) seconds./, "在 $1 秒內完成。"], // 管理 Web 鉤子-->最近交付
            [/Organization secrets for ([^ ]+) can be managed within/, "$1  的組織機密可以管理，在"], // 組織倉庫 --> Dependabot 機密
            [/(\d+) members?/, "$1 個成員"],
        ],
    },

    "homepage": { // 未登入的首頁
        "static": { // 靜態翻譯
            // 頂部欄
            "Why GitHub?": "為何選擇 GitHub？",
            "Team": "團隊",
            "Enterprise": "企業",
            // "Pricing": "價格",
            "Search GitHub": "GitHub 一下，您就知道",
            "Sign in": "登入",
            "Sign up": "註冊",

            // "Built for developers": "專為開發者打造",
            "Where the world builds software": "世界構建軟體的地方",
            "Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.": "數以百萬計的開發者和公司在 GitHub — 世界上最大、最先進的開發平臺上構建、釋出和維護他們的軟體。",
            "Email address": "電子郵箱地址",
            "Sign up for GitHub": "註冊 GitHub",
            // "Refresh": "重新整理",
            "million": "百萬",
            "Developers": "開發者",
            "Organizations": "組織",
            "Fortune 100": "財富 100 強",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "session-authentication": { // 登入頁 包含(/login, /session, /sessions/two-factor, sessions/recovery等)
        "static": { // 靜態翻譯
            // 登入頁 https://github.com/login
                "Sign in to GitHub": "登入 GitHub",
                "Username or email address": "使用者名稱或電子郵箱",
                "Password": "密碼",
                "Forgot password?": "忘記密碼？",
                "Incorrect username or password.": "使用者名稱或密碼不正確。",
                "Recovery code authentication failed.": "恢復碼身份驗證失敗。",
                "Sign in": "登入",
                "Signing in…": "登入中…",
                "New to GitHub?": "初次接觸 GitHub？",
                "Create an account": "那就註冊個帳戶吧",

            // 雙重身份驗證登入 https://github.com/sessions/two-factor
                // "Learn more": "瞭解更多",
                // "Learn more.": "瞭解更多。",
                "Confirm password to continue": "確認密碼以繼續",
                "Confirm password": "確認密碼",
                "Tip:": "提示：",

                "Two-factor authentication": "雙重身份驗證",
                "Authentication code": "驗證碼",
                //"Signing in…": "登入中…",
                "What’s this?": "這是什麼？",
                "6-digit code": "6位驗證碼",
                "Verify": "驗證",
                    "Verifying": "驗證中",
                    "Verifying…": "驗證中…",
                "Open the two-factor authentication app on your device to view your authentication code and verify your identity.": "開啟您的裝置上的兩步 “身份驗證器” 應用，以檢視您的身份驗證碼，並驗證您的身份。",
                "Open the two-factor authenticator (TOTP) app on your mobile device to view your authentication code.": "開啟您的移動裝置上的兩步 “身份驗證器” 應用（TOTOP），以檢視您的身份驗證碼。",
                "Having problems?": "有問題嗎？",
                    "Use a recovery code": "使用恢復碼",
                "Enter a two-factor recovery code": "輸入恢復碼",
                "Can’t access your two-factor device or valid recovery codes?": "無法訪問您的雙重身份驗證裝置或有效的恢復碼？",

                "Recovering your account": "恢復您的帳戶",
                "If you can’t access a verified device or recovery codes you can request a reset of your authentication settings. For security reasons": "如果您無法訪問已驗證的裝置或恢復碼，您可以請求重置您的驗證設定。出於安全考慮",
                "this can take 3-5 business days": "這可能需要 3-5 個工作日",
                "Step 1": "第一步",
                "Verify an email associated with this account.": "驗證與該帳戶相關的電子郵箱。",
                "Step 2": "第二步",
                "Verify a device, SSH key or personal access token.": "驗證一個裝置、SSH 金鑰或個人訪問令牌。",
                "Step 3": "第三步",
                "GitHub support will review your request": "GitHub Support 將審查您的請求",
                "within 3-5 business days": "在 3-5 個工作日內",
                "I understand, get started": "我知道了，開始吧",
                "Two-factor authentication failed.": "雙重身份驗證失敗。",

            // 雙重身份驗證恢復 https://github.com/sessions/two-factor/recovery
                "Two-factor recovery": "雙重身份驗證恢復",
                "Recovery code": "恢復碼",
                "You can enter one of your recovery codes in case you lost access to your mobile device.": "如果您無法訪問移動裝置，則可以輸入恢復碼。",
                "Still having problems?": "還是有問題？",

                "If you are unable to access your mobile device, enter one of your recovery codes to verify your identity.": "如果您無法訪問您的移動裝置，請輸入您的一個恢復碼以驗證您的身份。",
                "Locked out?": "被鎖在外面了嗎？",
                "Try recovering your account": "請嘗試恢復您的帳戶",

            // 帳戶恢復 https://github.com/sessions/recovery
                "Account recovery": "帳戶恢復",
                "First we need to verify an email address": "首先，我們需要驗證一個電子郵箱地址",
                "by sending a one-time password to all addresses associated with this account.": "用於透過向該帳戶關聯的所有地址傳送一次性密碼。",
                "Send one-time password": "傳送一次性密碼",
                "Skip this with recovery codes": "使用恢復碼跳過此步驟",
                "If you can locate your two-factor recovery codes you can skip this recovery process.": "如果您能找到您的雙重身份驗證恢復碼，您可以跳過這個恢復過程。",
                "The file containing your recovery codes may exist on your computer - check for a file named": "包含恢復碼的檔案可能存在於您的計算機上——請檢查一個名為",
                "Enter recovery code": "輸入恢復碼",

                "Recovery email sent": "已傳送恢復電子郵件",
                "One-time password": "一次性密碼",
                "Verify email address": "驗證電子郵箱地址",
                "We sent an email to all addresses associated with this account containing a one-time password.": "我們向與該帳戶相關的所有郵箱地址傳送了一封電子郵件，其中包含一個一次性的密碼。",
                "Resend email": "重新發送郵件",
                "Sign in to": "登入",
                "To continue to": "繼續登入",

                // 定時確認確認您的帳戶恢復設定
                "Confirm your account recovery settings": "確認您的帳戶恢復設定",
                "Are your account recovery settings up to date? If not, you risk getting locked out of your account.": "您的帳戶恢復設定是否最新？如果沒有，您就有被鎖定帳戶的風險。",
                "Two-factor methods": "雙重身份驗證方式",
                    "Authenticator app": "“身份驗證器” 應用",
                    "Security keys": "安全金鑰",
                        "Security keys are hardware devices that can be used as your second factor of authentication.": "安全金鑰是一種硬體裝置，可以作為您的第二個驗證步驟。",
                        "No security keys": "未配置安全金鑰",
                    "GitHub Mobile": "GitHub 移動應用",
                        "GitHub Mobile can be used for two-factor authentication by installing the GitHub Mobile app and signing in to your account.": "透過安裝 GitHub 移動應用並登入帳戶，可以使用 GitHub 移動應用來進行雙重身份驗證。",
                        "No devices": "沒有裝置",
                    "SMS number": "手機號碼",
                "Recovery options": "恢復選項",
                    "Recovery codes": "恢復碼",
                        "Recovery codes can be used to access your account in the event you lose access to your device and cannot receive two-factor authentication codes.": "恢復碼可用於在您無法訪問裝置且無法接收雙重身份驗證碼的情況下訪問您的帳戶。",
                        "Viewed": "檢視於",
                    "Fallback SMS number": "備用手機號碼",
                        "Providing a fallback SMS number will allow GitHub to send your two-factor authentication codes to an alternate device if you lose your primary device.": "如果您丟失主要裝置，提供備用手機號碼將允許 GitHub 將您的雙重身份驗證碼傳送到備用裝置。",
                    "No fallback SMS number": "未設定備用手機號碼",
                "Configured": "已配置",
                "Not configured": "未配置",
                // "No recovery tokens": "未設定恢復令牌",
                "Update": "更新",
                "Confirm": "確認",
                "Remind me later": "稍後提醒我",

            // 授權訪問 (已經合併到settings)
            "Confirm access": "授權訪問",
            //"Password": "密碼",
            //"Forgot password?": "忘記密碼？",
            "You are entering": "您正在進入",
            "sudo mode": "Sudo 模式",
            ". We won’t ask for your password again for a few hours.": " 。我們將在未來幾個小時內不再要求您輸入密碼。",

            // 重置密碼 https://github.com/password_reset
                "Reset your password": "重置您的密碼",
                "Enter your user account's verified email address and we will send you a password reset link.": "輸入您的使用者帳戶經過驗證的電子郵箱，我們將向您傳送一份帶密碼重置連結的郵件。",
                "Enter your email address": "輸入您的郵箱地址",
                "Verify your account": "驗證您的帳戶",
                "Send password reset email": "傳送密碼重置郵件",
                "Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.": "檢查您的電子郵件以獲取重置密碼的連結。如果它在幾分鐘內沒有出現，請檢查您的垃圾郵件資料夾。",
                "Return to Sign in": "返回登入",

        },
        "regexp": [ // 正則翻譯
        ],
    },

    "signup": { // 註冊頁
        "static": { // 靜態翻譯
            "Already have an account?": "已經有帳戶嗎？",
            "Sign in →": "登入 →",
            "Welcome to GitHub!": "歡迎來到 GitHub!",
            "Let’s begin the adventure": "讓我們開始探險吧",
            "Enter your email": "輸入您的電子郵箱地址",
                "Email is invalid or already taken": "電子郵箱地址無效或已被佔用",
            "Continue": "繼續",
            "Create a password": "建立密碼",
                "Password is too short": "密碼太短",
                "Password needs a number and lowercase letter": "密碼需要有數字和小寫字母",
                "Password is strong": "密碼很強壯",
                "Make sure it's": "請確保",
                    "at least 15 characters": "至少需要15個字元",
                    "OR": " 或者",
                    "at least 8 characters": "至少需要8個字元",
                    "including a number": "包括數字",
                    "and a lowercase letter": "和小寫字母",
                "Password may be compromised": "密碼可能被洩露",
                "Password is in a list of passwords commonly used on other websites": "密碼在其他網站常用的密碼列表中",
            "Enter a username": "輸入您的使用者名稱",
                "Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.": "使用者名稱只能包含字母數字字元或單個連字元，並且不能以連字元開頭或結尾。",
            "Would you like to receive product updates and announcements via email?": "您是否願意透過電子郵件接收產品更新和公告？",
            "Type \"y\" for yes or \"n\" for no": "輸入 \"y\" 表示願意，輸入 \"n\" 表示不願意。",
            "Verify your account": "驗證您的帳戶",
            "Create account": "建立帳戶",
            "By creating an account, you agree to the": "建立帳戶即表示您同意",
            "Terms of Service": "服務條款",
            ". For more information about GitHub's privacy practices, see the": "。關於 GitHub 隱私條款的更多資訊，請參見",
            "GitHub Privacy Statement": "GitHub 隱私宣告",
            ". We'll occasionally send you account-related emails.": "。我們偶爾會向您傳送與帳戶相關的電子郵件。",
        },
        "regexp": [ // 正則翻譯
            [/Username ([^ ]+) is not available./, "使用者名稱 $1 不可用。"],
            [/([^ ]+) is available./, "使用者名稱 $1 可用。"],
        ],
    },

    "notifications": { // 通知頁面
        "static": { // 靜態翻譯
            "Notifications": "通知",
            "All": "所有",
            "Unread": "未讀",

            "Inbox": "收件箱",
            "Saved": "已儲存",
            "Save": "儲存",
            "Done": "已完成",
            "Filters": "篩選",
            "Dismiss": "忽略",
            "get started": "開始",
            "Subscribe": "訂閱",
            "Unsubscribe": "退訂",

            "Filter notifications": "篩選通知",
                "Sorry, we don't support the": "抱歉，我們不支援",
                "filter yet.": "篩選器。",
                "Learn more about filters.": "瞭解更多關於篩選器的資訊。",

                "- submit": "- 提交",

                "Available filters": "可用篩選器",
                "filter by repository": "按倉庫篩選",
                "filter by status or discussion type": "按狀態或評論型別篩選",
                "filter by notification reason": "按通知原因篩選",
                "filter by notification author": "按通知作者篩選",
                "filter by organization": "按組織篩選",
            "Group by:": "分組：",
            "Date": "日期",
            "Repository": "倉庫",
            // [/(\d+) new notifications?/, "$1 條新通知"], // 通知管理頁

            // 篩選結果
            "No results": "無結果",
            "No notifications matched your query.": "沒有與您的查詢相匹配的通知。",

            "Select all": "全選",
            "selected": "條被選中",
            "Mark as read": "標記為已讀",
            "Mark as unread": "標記為未讀",
            "Mark as done": "標記為已完成",
            "Move to inbox": "移動到收件箱",

             "Clear selection":"清除選中",

            //"Mark all as read": "全部標為已讀",
            //"Are you sure?": "您確定嗎？",
            //"Are you sure you want to mark all unread notifications as read?": "您確定要將所有的未讀通知標記為已讀？",
            //"Mark all notifications as read": "全部標為已讀",

            "Clear out the clutter.": "清除混亂。",
            "Get the most out of your new inbox by quickly and easily marking all of your previously read notifications as done.": "快速輕鬆地將所有已閱讀的通知標記為已完成，以充分利用新的收件箱。",
            "Overwhelmed by notifications? We've found some repositories that may be causing notifications you don't need.": "通知不知所措？我們發現了一些倉庫，這些倉庫可能會導致您不需要的通知。",
            "Update watching settings": "更新關注設定",

            "Manage notifications": "管理通知",
            "Notification settings": "通知設定",
            "Watched repositories": "關注的倉庫",
            "Subscriptions": "訂閱",
            "Watching": "關注",

            "subscribed": "訂閱",
            "mention": "提及",
            "commented": "評論",
            "author": "作者",
            "manual": "手動",
            "state change": "狀態更改",

            "View all gist notifications": "檢視全部 Gist 通知", // 倉庫分組模式

            "Prev": "上一頁",
            "Previous": "上一頁",
            "Next": "下一頁",

            "change notification settings": "更改通知設定",
            "you can change how you receive notifications from your account settings.": "您可以從帳戶設定更改接收通知的方式。",
            "unwatch suggestions": "取消關注建議",
            "these repositories may be causing unnecessary notifications.": "這些倉庫可能導致不必要的通知。",
            "unwatch all": "取消所有關注",
            "customize": "自定義",

            "🎯 Assigned": "🎯 已分配",
            "💬 Participating": "💬 參與",
            "✋ Mentioned": "✋ 提及",
            "🙌 Team mentioned": "🙌 提到的團隊",
            "👀 Review requested": "👀 審查請求",
            "Name": "名稱",
            "Filter inbox by…": "篩選收件箱…",
            "Create new filter": "建立新規則",
            "Create": "建立",
            "Query": "規則",

            "All caught up!": "處理完了！",
            "Take a break, write some code, do what you do best.": "休息一下，寫一些程式碼，做您最擅長的事。",
            "Save something important": "儲存重要的東西",
            "Notifications you save will appear here to read later.": "您儲存的通知會出現在這裡，以便以後閱讀。",
            "Mark notifications as done so you can move on with your work.": "將通知標記為已完成，以便您可以繼續工作。",
            "New activity appears in your inbox.": "新活動出現在您的收件箱中。",
        },
        "regexp": [ // 正則翻譯
            [/(\d+) selected/, "$1 條被選中"],
            [/Select all (\d+) notifications?/, "選中全部 $1 條通知"],
            [/View all (\d+) notifications?/, "檢視全部 $1 條通知"], // 倉庫分組模式
            [/(\d+) new notifications?/, "$1 條新通知"],
            [/of (\d+)/, " 共 $1 條"],
        ],
    },

    "watching": { // 關注的倉庫頁面
        "static": { // 靜態翻譯
            "Notifications": "通知",
            "Watching": "關注",
            "Subscriptions": "訂閱",
            "Custom": "自定義",
            // "Ignoring": "忽略",

            "Unwatch suggestions": "取消關注建議",
            "These repositories may be causing unnecessary notifications.": "這些倉庫可能導致不必要的通知。",

            //
            "Are you sure?": "您確定嗎?",
            // [/By unwatching these (\d+) repositor(y|ies), you will only receive notifications when participating or @mentioned./, "取消對這 $1 個倉庫的關注，您將只在參與或 @您 時收到通知。"], //取消所以關注

            "Ignoring": "忽略",
            "Stop ignoring": "取消忽略",
            "Watch": "關注",
            "Unwatch": "取消關注",

            //"Watched repositories": "關注的倉庫",

            // "Stop ignoring": "取消忽略",
            //"Sorted by most recently watched.": "按最近關注排序",
            "Unwatch all": "取消所有關注",
                "Unwatch repositories by owner": "按所有者取消關注倉庫",
                "Find a repository owner": "查詢倉庫所有者",
                "All repositories": "所有倉庫",
                 // [/([^ ]+)'s repositories/, "$1 的倉庫"],
            "Stop watching all repositories": "取消關注所有的倉庫",

            // 關注 & 訂閱通知設定 下拉選單
            // "Notifications": "通知型別",
            "Participating and @mentions": "參與和 @您",
            "Only receive notifications from this repository when participating or @mentioned.": "僅在參與或 @您 時接收來自此倉庫的通知。",
            "All Activity": "所有活動",
            "Notified of all notifications on this repository.": "接收來自此倉庫所有通知。",
            "Ignore": "忽略",
            "Never be notified.": "永不接收通知。",
            // "Custom": "自定義",
            "Select events you want to be notified of in addition to participating and @mentions.": "選擇除參與和 @您 之外還要接收通知的事件。",
            "Discussions are not enabled for this repo": "此倉庫未啟用討論功能",
            "Releases": "發行版",
            "Discussions": "討論",
            "Security alerts": "安全警報",
            //"Cancel": "取消",
            "Apply": "應用",

            "Notification settings": "通知設定",
            "You can change how you receive notifications from your account settings.": "您可以從帳戶設定更改接收通知的方式。",
            "Change notification settings": "更改通知設定",
        },
        "regexp": [ // 正則翻譯
            [/By unwatching these (\d+) repositor(y|ies), you will only receive notifications when participating or @mentioned./, "取消對這 $1 個倉庫的關注，您將只在參與或 @您 時收到通知。"],
            [/Unwatch (\d+) repositor(y|ies)/, "取消對 $1 個倉庫關注"],
            [/You will stop receiving notifications for the (\d+) repositor(y|ies) you are watching./, "您將停止接收您正在關注的 $1 個倉庫的通知。"],
            [/([^ ]+)'s repositories/, "$1 的倉庫"],
        ],
    },

    "notifications/subscriptions": { //訂閱的倉庫頁面
        "static": { // 靜態翻譯
            "Notifications": "通知",
            "Watching": "關注",
            "Subscriptions": "訂閱",

            "Reason": "原因",
                "Filter by reason": "按原因篩選",
                "Any reason": "任何原因",
                "Show all subscriptions": "顯示所有訂閱",
                "Assign": "分配",
                "You were assigned to the Issue/PR.": "您被分配到議題/拉取請求。",
                "Author": "作者",
                "You created the thread.": "您創造了這個話題。",
                "Comment": "評論",
                "You commented on the thread.": "您評論了這個話題。",
                "Manual": "手動",
                "You subscribed to the thread (via an Issue or Pull Request).": "您訂閱了該主題（透過議題或拉取請求）。",
                "Mention": "提及",
                "You were specifically @mentioned in the content.": "在內容中特別 @您。",
                "Review Requested": "請求審查",
                "You were requested for review.": "您被要求進行審查。",
                "State Change": "狀態變化",
                "You changed the thread state (for example, closing an Issue or merging a Pull Request).": "您更改了話題狀態（例如，關閉議題或合併拉取請求）。",
                "Team Mention": "提及團隊",
                "You were on a team that was mentioned.": "您在團隊中被提及。",
            "Repository": "倉庫",
                "Filter by repository": "按倉庫篩選",
                "Filter repository": "篩選倉庫",
                "All repositories": "所有倉庫",
                "Loading repositories…": "載入倉庫中…",
            "Sort:": "排序：",
                "Sort by": "排序方式",
                "Most recently subscribed": "最近訂閱最多的",
                "Least recently subscribed": "最近訂閱最少的",

            "Reason:": "原因：",
            "Repository:": "倉庫：",
            "Clear current filters": "清除當前篩選器",
            "No results matched your search.": "沒有符合您的搜尋結果。",

            "selected": "個被選中",
            "Unsubscribe": "取消訂閱",

            "opened": "開啟",
            "• subscribed": "• 訂閱於",
            "• updated": "• 更新於",
        },
    },

    "stars": { // 星標 https://github.com/stars/<使用者名稱>
        "static": { // 靜態翻譯
            "Your Stars": "我的星標",
            "Browse your starred repositories and topics": "瀏覽我的星標倉庫和主題",
            "Your Starred Repositories": "我的星標倉庫",
            "Browse your starred repositories": "瀏覽我的星標倉庫",
            "Your Starred Topics": "我的星標主題",
            "Browse your starred topics": "瀏覽我的星標主題",

            "Browse starred repositories and topics": "瀏覽星標倉庫和主題",
            "Starred Repositories": "星標倉庫", // 他人
            "Browse starred repositories": "瀏覽星標倉庫", // 他人
            "Starred Topics": "星標主題", // 他人
            "Browse starred topics": "瀏覽星標主題", // 他人

            "Search stars…": "搜尋星標主題...",
            "Sort:": "排序：",
                // 篩選下拉
                "Sort options": "排序選項",
                "Recently starred": "最近標星",
                "Recently active": "最近活躍",
                "Most stars": "最多標星",

            "Sponsor": "捐助",
            "Unstar": "已加星標於",
            "See all starred repositories": "檢視所有星標倉庫",
            "See all starred topics": "檢視所有星標主題",

            "You don’t have any starred topics, yet.": "您尚無任何的星標主題。",
            "As you": "如果您",
            "explore GitHub": "探索 GitHub",
            ", star topics to save them for later and they’ll show up here.": " 時，將主題標星儲存起來，它們會在這裡顯示出來。",


            // 右側欄
            "All stars": "所有星標",
            "All repositories": "所有倉庫",
            "Your repositories": "我的倉庫",
            "Others’ repositories": "其他倉庫",
            "Topics": "主題",

            "Filter by languages": "按語言篩選",
            "Jump to a friend": "去好基友那",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "trending": { // 趨勢頁面
        "static": { // 靜態翻譯
            "Trending in open source": "開源趨勢",
            "See what the GitHub community is most excited about today.": "看看 GitHub 社群今天最受關注的專案。",
            "See what the GitHub community is most excited about this week.": "看看 GitHub 社群本週最受關注的專案。",
            "See what the GitHub community is most excited about this month.": "看看 GitHub 社群本月最受關注的專案。",

            "Trending developers": "開發者趨勢",
            "These are the organizations and developers building the hot tools today.": "這是今天建立熱門專案的組織和開發人員。",
            "These are the organizations and developers building the hot tools this week.": "這是本週建立熱門專案的組織和開發人員。",
            "These are the organizations and developers building the hot tools this month.": "這是本月建立熱門專案的組織和開發人員。",

            "Repositories": "倉庫",
            "Developers": "開發者",

            "Trending:": "趨勢：",
            "Adjust time span": "調整的時間跨度",
            "today": "今天",
            "this week": "本週",
            "this month": "本月",

            "All languages": "所有語言",
            "Unknown languages": "未知語言",

            "Other:": "其他：",
            "Languages": "語言",
            "Other Languages": "其他語言",
            "Filter Languages": "篩選語言",
        },
        "regexp": [ // 正則翻譯
            [/([\d,]+) stars today([^B]+)[\w ]+/, "今天 $1 贊$2建立者"],
            [/([\d,]+) stars this week([^B]+)[\w ]+/, "本週 $1 贊$2建立者"],
            [/([\d,]+) stars this month([^B]+)[\w ]+/, "本月 $1 贊$2建立者"],
        ],
    },

    "showcases": { // 展示頁面
        "static": { // 靜態翻譯
            "Open source showcases": "開源展示",
            "Browse popular repositories based on the topic that interests you most.": "瀏覽熱門倉庫基於您最感興趣的主題。",
            "Search showcases": "搜尋展示",
        },
    },

    "issues": { // 議題頁面
        "static": { // 靜態翻譯
            "Public": "公共",
            "Private": "私有",
            "Public archive": "公共存檔",
            "Private archive": "私有存檔",

            "Created": "已建立",
            "Assigned": "已分配",
            "Mentioned": "提到的",
            "Review requests": "審查請求", // pulls

            "Search all issues": "搜尋所有議題",

            "Visibility": "可見性",
            "Repository visibility": "倉庫可見性",
            "Private repositories only": "只有私有倉庫",
            "Public repositories only": "只有公共庫",

            "Organization": "組織",
            "Filter by organization or owner": "按組織或所有者篩選",
            "Filter organizations": "篩選組織",

            "Sort": "排序",
            "Sort by": "排序方式",
            "Newest": "最新的",
            "Oldest": "最早的",
            "Most commented": "最多評論",
            "Least commented": "最少評論",
            "Recently updated": "最近更新",
            "Least recently updated": "最早更新",
            "Most reactions": "最多回應",

            // 狀態詞
            "was merged": "已合併",
            "was closed": "已關閉",
            "Approved": "已批准",
            "Review required": "需要審查", // 拉取請求 頁面狀態詞
                "Review required before merging": "合併前需要審查",
            "Changes requested": "已請求更改",
            "outdated": "陳舊的",
            "Draft": "草案",

            // "No results matched your search.": "沒有符合您的搜尋結果。",
            // 篩選結果
            "No results matched your search.": "沒有與您的搜尋匹配的結果。",
            "You could search": "您可以搜尋",
            "all of GitHub": "所有 Github",
            "or try an": "或者嘗試",
            "advanced search": "高階搜尋",

            // "Use the links above to find what you’re looking for, or try": "使用上面的連結找到您要找的內容，或嘗試",
            // "a new search query": "新的搜尋查詢",
            // ". The Filters menu is also super helpful for quickly finding issues most relevant to you.": "。篩選選單也是快速找到議題最相關的您超級有幫助的。",
            // "Updated in the last three days": "更新了最後三天：",
            "ProTip!": "專業提示！",
                "Mix and match filters to narrow down what you’re looking for.": "透過混合和匹配篩選器以縮小您要查詢的範圍。",
        },
        "regexp": [ // 正則翻譯
            [/(\d+) Open/, "$1 開啟"],
            [/(\d+) Closed/, "$1 已關閉"],
            [/(\d+) tasks? done/, "$1 個任務完成"],
            [/(\d+) of (\d+) tasks?/, "$1 / $2 個任務"],
            [/(\d+) tasks?/, "$1 個任務"],
            [/(\d+) review approvals?/, "$1 次審查批准"],// 拉取請求頁 "已批准' 浮動提示
            [/(\d+) review requesting changes?/, "$1 條請求更改評論"],
            [/([\d,]+) linked issues?/, "$1 個關聯議題"],
            [/([\d,]+) linked pull requests?/, "$1 個關聯拉取請求"],
            [/(\d+) \/ (\d+) checks? OK/, "$1 / $2 檢查 OK"], // 對勾 的提醒 /pulls
            [/Assigned to ([^ ]+)/, "分配給 $1"],
            [/Updated/, "更新於"],
            [/#(\d+) opened/, "#$1 開啟於"],
            [/#(\d+) by/, "#$1 開啟者"],
        ],
    },

    "search": { // 搜尋頁面
        "static": { // 靜態翻譯
            // 搜尋 https://github.com/search >>>>>>>>>>>>>>>>>>>>>>>>
                "Search more than": "這裡有超過",
                "repositories": "的倉庫供您搜尋",
                "users": "使用者在使用",
                "issues": "議題被提出",
                "Search GitHub": "GitHub 一下，您就知道",


                // ProTip
                "For an": "要進行",
                "advanced search": "高階搜尋",
                ", use some of our": "，使用我們的這些",
                "prefixes.": "字首。",
                // "You could try an": "您可以嘗試",

                // 搜尋技巧 對話方塊 (忽略 不翻譯)
                "Search cheat sheet": "搜尋小技巧",
                "GitHub’s search supports a variety of different operations. Here’s a quick cheat sheet for some of the common searches.": "GitHub 的搜尋支援各種不同的操作。下面是一些常見搜尋的快速小抄。",
                "For more information, visit our": "有關更多資訊，請訪問我們的",
                "search help section": "搜尋幫助章節",
                "Basic search": "基本搜尋",
                "This search": "關鍵規則",
                "Finds repositories with…": "查詢倉庫...",
                "Repository search": "倉庫搜尋",
                "Code search": "程式碼搜尋",
                "Issue search": "議題搜尋",
                "User search": "使用者搜尋",

            // 搜尋結果頁面 https://github.com/search?q=  >>>>>>>>>>>>>>>>>>>>>>>>
                // 左側選單
                "Repositories": "倉庫",
                "Code": "程式碼",
                "Commits": "提交",
                "Discussions": "討論",
                "Topics": "主題",
                "Users": "使用者",

                "States": "狀態",
                "Closed": "已關閉",
                "Open": "開啟",

                "Languages": "語言",

                "Advanced search": "高階搜尋",
                "Cheat sheet": "搜尋技巧",

                "Sort:": "排序：",
                    // 篩選下拉
                    "Sort options": "排序選項",
                    "Best match": "最佳匹配",
                    "Most stars": "最多星標",
                    "Fewest stars": "最少星標",
                    "Most forks": "最多復刻",
                    "Fewest forks": "最少復刻",
                    "Recently updated": "最近更新",
                    "Least recently updated": "最早更新",
                    // 程式碼
                    "Recently indexed": "最近索引",
                    "Least recently indexed": "最早索引",
                    // 提交
                    "Recently committed": "最近提交",
                    "Least recently committed": "最早提交",
                    "Recently authored": "最近撰寫",
                    "Least recently authored": "最早撰寫",
                    // 議題
                    "Most commented": "最多評論",
                    "Least commented": "最少評論",
                    "Newest": "最新",
                    "Oldest": "最早",
                    // 軟體包
                    "Most downloads": "最多下載",
                    "Fewest downloads": "最少下載",
                    // 使用者
                    "Most followers": "最多關注者",
                    "Fewest followers": "最少關注者",
                    "Most recently joined": "最近加入",
                    "Fewest recently joined": "最早加入",
                    "Least recently joined": "最早加入",
                    "Most repositories": "最多倉庫",
                    "Fewest repositories": "最少倉庫",

                // 部分狀態詞
                "Updated": "更新於", // &type=repositories
                "Last indexed": "最近索引於", // &type=code
                "committ": "提交",
                "committed": "提交於", // &type=commits
                "opened": "開啟於", // &type=issues
                "Last updated": "最近更新於", // &type=wikis
                "posted": "釋出於", // &type=discussions

                "You could try an": "您可以嘗試",
                "You could": "您可以",
                "search all of GitHub": "搜尋整個 GitHub",
                "or try an": "或嘗試",

                // &type=repositories
                    "See topic": "檢視主題",

                    "Public": "公共",
                    "Private": "私有",
                    "Public archive": "公共存檔",
                    "Private archive": "私有存檔",

                    "Sponsor": "贊助",
                    // [/Sponsor ([^ ]+)?/, "贊助 $1"], // 贊助按鈕 對話方塊 標題
                    // 贊助對話方塊
                    "External links": "外部連結",
                    "Learn more about funding links in repositories": "瞭解更多關於倉庫中的贊助連結的資訊",
                    "Report abuse": "舉報濫用",

                // &type=code
                    "Showing the top match"         : "顯示前 1 個匹配",
                    "Showing the top two matches"   : "顯示前 2 個匹配",
                    "Showing the top three matches" : "顯示前 3 個匹配",
                    "Showing the top four matches"  : "顯示前 4 個匹配",
                    "Showing the top five matches"  : "顯示前 5 個匹配",
                    "Showing the top six matches"   : "顯示前 6 個匹配",
                    "Showing the top seven matches" : "顯示前 7 個匹配",

                // &type=topics
                    "Related:": "相關的：",

                // &type=registrypackages
                    "latest": "最新",

            //  倉庫 中 搜尋結果頁面 /<user-name>/<repo-name>/search?q=  >>>>>>>>>>>>>>>>>>>>>>>>
                "or view": "或檢視",
                "all results on GitHub": "GitHub 上的所有結果",

            // 高階搜尋 https://github.com/search/advanced >>>>>>>>>>>>>>>>>>>>>>>>
                // 高階搜尋
                // "Advanced search": "高階搜尋",
                "Search": "搜尋",
                "Advanced options": "高階選項",
                "From these owners": "指定作者",
                "In these repositories": "指定倉庫",
                "Created on the dates": "建立日期",
                "Written in this language": "使用語言",
                "Any Language": "任何語言",
                    "Popular": "流行的",
                    "Everything else": "其他語言",

                "Repositories options": "倉庫選項",
                "With this many stars": "指定星標數",
                "With this many forks": "指定復刻數",
                "Of this size": "倉庫大小",
                "Pushed to": "推送於",
                "With this license": "用何種許可證",
                    "Any license": "任意許可證",
                    "Licenses": "許可證",
                    "License families": "許可證系列",
                "Return repositories": "搜尋結果",
                "not": "不",
                "and": "要",
                "only": "僅",
                "including forks.": "包括被複刻的倉庫。",

                "Code options": "程式碼選項",
                "With this extension": "檔案字尾",
                "Of this file size": "檔案大小",
                "In this path": "檔案路徑",
                "With this file name": "檔名稱",
                "Return code": "搜尋結果",
                // "Return code from forked repositories": "搜尋結果包括被複刻的倉庫。",

                "Issues options": "議題選項",
                "In the state": "議題狀態",
                    "open/closed": "開啟/關閉",
                    "open": "開啟",
                    "closed": "已關閉",
                "With this many comments": "評論數量",
                "With the labels": "議題標籤",
                "Opened by the author": "提議人",
                "Mentioning the users": "提及誰",
                "Assigned to the users": "分配給誰",
                "Updated before the date": "更新於",

                "Users options": "使用者選項",
                "With this full name": "使用者全稱",
                "From this location": "來自哪裡",
                "With this many followers": "有多少關注者",
                "With this many public repositories": "有多少公共倉庫",
                "Working in this language": "擅長什麼語言",
                "Wiki options": "Wiki 選項",

        },
        "regexp": [ // 正則翻譯
            // 搜尋結果頁
            [/(Showing |)([\d,]+) ((repository|code|commit|available commit|package|marketplace|topic|wiki) results?|issues?|discussions?|users?) in/, "$2 個相關結果在"],
            [/(Showing |)([\d,]+) ((repository|code|commit|available commit|package|marketplace|topic|wiki) results?|issues?$|discussions?|users?)/, "$2 個相關結果"],
            [/We couldn(’|')t find (any|anything) (repositor(?:y|ies)|codes?|commits?|issues?|discussions?|packages?|in the GitHub Marketplace|topics|wiki pages|users) matching '(.+)' in/, "我們沒有找到任何與 '$4' 相關的結果在"],
            [/We couldn(’|')t find (any|anything) (repositor(?:y|ies)|codes?|commits?|issues?|discussions?|packages?|in the GitHub Marketplace|topics|wiki pages|users) matching '(.+)'/, "我們沒有找到任何與 '$4' 相關的結果"],
            [/(\d+) issues? needs? help/, "$1 個議題需要幫助"],
            [/Sponsor ([^ ]+)?/, "贊助 $1"], // 贊助按鈕 對話方塊 標題
            [/(\d+) comments?/, "$1 條評論"], // &type=discussions
            [/(\d+k?) downloads?/, "$1 次下載"], // &type=registrypackages
            //[/(\d+)k downloads?/, "$1 千次下載"], // &type=registrypackages
            [/(\d+k?) repositor(y|ies)/, "$1 個倉庫"], // &type=topics
            // [/(\d+)k repositor(y|ies)/, "$1 千個倉庫"], // &type=topics
            [/and (\d+) more/, "和其他 $1 個"], // &type=topics
        ],
    },

    "gist": { // 程式碼片段頁面
        "static": { // 靜態翻譯
            // 快捷鍵
            "Site wide shortcuts": "全域性快捷鍵",
            "Gists": "程式碼片段",
            "Go to Code": "跳轉到程式碼",
            "Go to Revisions": "跳轉到修訂",

            "Instantly share code, notes, and snippets.": "即時分享您的程式碼，筆記，片段，以及靈感。",
            "Search…": "搜尋程式碼片段…",
                "No results.": "沒有結果。",
                "Yours": "您的",
            "All gists": "所有片段",
            "Back to GitHub": "返回到 GitHub",

            "Forked": "復刻",
            "Starred": "星標",

            // 左側使用者資訊欄
            "Change your avatar": "修改頭像",
            "followers": "關注者",
            "following": "關注",
            "Joined": "加入於",
            "View GitHub Profile": "檢視 GitHub 個人資料",

            //"New gist": "新建片段",
            // 右上角個人圖示下拉選單
            "Your gists": "我的程式碼片段",
            "Starred gists": "我的標星程式碼片段",
            "Your GitHub profile": "我的 GitHub 個人資料",

            "View profile and more": "檢視更多資訊",
            "See all of your gists": "檢視您的所有片段",

            // 返回通知頁狀態條
            "Back to notifications": "回到通知",
            "Done": "已完成",
            "Unsubscribe": "退訂",
            "Mark as unread": "標記為未讀",
            "Save": "儲存",

            // 使用者 浮動資訊卡
            "Member of": "隸屬組織",
            // [/, and (\d+) more/, "，以及其他 $1 個組織"],

            // 新建片段頁面
            "View your gists": "檢視您的片段",
            "Gist description…": "片段描述…",
            "Filename including extension…": "檔名 (包括副檔名)…",
            "Create secret gist": "建立私密片段",
            "Secret gists are hidden by search engines but visible to anyone you give the URL to.": "私密片段對搜尋引擎不可見，對直接訪問您分享的連結可見。",
            "Create public gist": "建立公開片段",
            "Public gists are visible to everyone.": "公開片段對所有人可見。",

            // 程式碼編輯框
            "Indent mode": "縮排模式",
            "Spaces": "空格",
            "Tabs": "Tab",
            "Indent size": "縮排大小",
            "Line wrap mode": "換行模式",
            "No wrap": "不換行",
            "Soft wrap": "軟換行",
            "Add file": "新增檔案",
            "Remove file": "移除檔案",

            // All gists 標籤卡
            // 篩選 & 排序工具欄
            "Sort:": "排序:",
            "Sort options": "排序選項",
            "Recently created": "最近建立",
            "Least recently created": "最早建立",
            "Recently updated": "最近更新",
            "Least recently updated": "最早更新",

            "Type:": "型別:",
            "Filter options": "篩選選項",
            "All": "所有",
            "Public": "公共",
            "Secret": "私密",

            "Created": "創建於",
            "Last active": "最後活動於",
            "Forked from": "復刻自",
            "— forked from": "— 復刻自",
            "View": "檢視",

            "Newer": "新的",
            "Older": "舊的",

            // View 程式碼 頁面
            // 頭部通用資訊
            "Edit": "編輯",
            "Delete": "刪除",
            "Are you positive you want to delete this Gist?": "您確定要刪除此 Gist 嗎？",
            "Subscribe": "訂閱",
            // "Unsubscribe": "退訂",
            "Star": "星標",
            "Unstar": "取消星標",
            "User actions": "使用者操作",
            "Report abuse": "舉報濫用",

            "Code": "程式碼",
            "Revisions": "修訂",
            "Stars": "星標",
            "Forks": "復刻",

            // 分享工具條
            "What would you like to do?": "您想做什麼？",
            "Embed": "嵌入",
            "Embed this gist in your website.": "嵌入到您的網頁中。",
            "Share": "分享",
            "Copy sharable link for this gist.": "複製片段共享連結。",
            "Clone via HTTPS": "透過 HTTPS 方式克隆",
            "Clone with Git or checkout with SVN using the repository’s web address.": "透過倉庫 web 地址進行 Git 克隆或 SVN 檢出。",
            "Clone via SSH": "透過 SSH 方式克隆",
            "Clone with an SSH key and passphrase from your GitHub settings.": "透過 GitHub 設定中的 SSH 金鑰和密碼進行克隆。",
            "Learn more about clone URLs": "瞭解更多關於克隆地址的資訊",

            "Copy to clipboard": "複製到剪下板",
            "Copied!": "複製成功!",
            "Download ZIP": "下載 Zip 壓縮包",
            "Permalink": "永久連結",

            // 頂部提醒
            "Gist deleted successfully.": "程式碼片段已成功刪除。",

            // 程式碼標籤卡
            "Raw": "原始碼",
            "Load earlier comments...": "載入早期的評論...",

            // 修訂標籤卡
            "Unified": "同屏",
            "Split": "分屏",
            "created": "建立",
            "revised": "修訂",
            "renamed": "重新命名",
            "this gist": "該片段於",
            "with": "包含",
            "and": "和",
            "No changes.": "無變化",

            "Show comments": "顯示評論",
            "View file": "檢視檔案",

            "Display the source diff": "顯示源差異",
            "Display the rich diff": "顯示富差異",
            "Empty file.": "空檔案。",
            "File renamed without changes.": "檔案僅重新命名，內容沒有更改。",
            // [/([\d,]+) additions, ([\d,]+) deletions not shown because the diff is too large. Please use a local Git client to view these changes./, "$1 處新增，$2 處刪除未顯示，因為差異太大。請使用本地 Git 客戶端檢視這些更改。"],

            // 星標標籤卡
            "Stargazers": "追星者",

            // 復刻標籤卡
            "Modified": "修改",
            "View fork": "瀏覽復刻",

            // 編輯程式碼頁面
            "Editing": "編輯",
            "Edit file": "編輯檔案",
            "Preview changes": "預覽更改",
            "Loading preview…": "載入預覽…",
            "Make secret": "轉為私密",
            "Make public": "轉為公開",
            "Cancel": "取消",
            "Update public gist": "更新公開片段",
            "Update secret gist": "更新私密片段",

            // 已加星標頁面
            "You don’t have any starred gists yet.": "您還沒有標星任何片段。",

            // 評論框
            "Owner": "所有者",
            "Author": "作者",
            "Copy link": "複製連結",
            "Quote reply": "引用回覆",
            "Report content": "舉報內容",
            "Report": "舉報",
            // 評論刪除提醒
                "Are you sure you want to delete this?": "您定要刪除這個嗎？",

            "You are the owner of the gist.": "您是程式碼片段的所有者。",
            "You are the author of this gist.": "您是程式碼片段的作者。",

            "commented": "評論於",
            "Update comment": "更新評論",
            "Hide": "隱藏",

            "edited": "編輯",
            "(most recent)": "(最近的)",
            "(deleted)": "(已刪除)",
            "deleted this content": "刪除了該內容",
            "Options": "選項",
            "More options": "更多選項",
            "The most recent revision cannot be deleted. Need to delete sensitive information? Go to the specific edit where the information was added.": "最近的修訂版不能被刪除。需要刪除敏感資訊？請到資訊的具體編輯處修改。",
            "Delete revision from history": "從歷史記錄中刪除修訂",
            "This edit’s content will no longer be visible": "此修改的內容將不再可見",

            // 探索頁面
            "Discover gists": "探索程式碼片段",

        },
        "regexp": [ // 正則翻譯
            [/View ([^ ]+) on GitHub/, "檢視 $1 的 GitHub"],
            [/(\d+) files?/, "$1 檔案"],
            [/(\d+) forks?/, "$1 復刻"],
            [/(\d+) comments?/, "$1 評論"],
            [/(\d+) stars?/, "$1 星標"],
            [/Save (.+?) to your computer and use it in GitHub Desktop./, "使用 GitHub Desktop，儲存 $1 到您的電腦。"],
            //程式碼修訂
            [/(\d+) changed file/, "$1 個更改的檔案"],
            [/(\d+) additions?$/, "$1 處增加"],
            [/(\d+) deletions?$/, "$1 處刪除"],
            [/(\d+) changes?: (\d+) additions? & (\d+) deletions?/, " $1 處更改：$2 處增加 & $3 處刪除"],
            [/([\d,]+) additions, ([\d,]+) deletions not shown because the diff is too large. Please use a local Git client to view these changes./, "$1 處增加，$2 處刪除未顯示，因為差異太大。請使用本地 Git 客戶端檢視這些更改。"],
            [/Edited (\d+) times?/,"編輯 $1 次"], //評論框編輯次數
            [/edited by ([^ ]+)/,"被 $1 編輯"], //評論框 被他人編輯
            [/Joined/,"加入於"], //星標標籤卡
            [/, and (\d+) more/, "，以及其他 $1 個組織"], // 使用者 浮動資訊卡
            [/doesn’t have any public gists yet./, "尚無任何公開的程式碼片段。"],
        ],
    },

    "login/oauth": { // 應用授權
        "static": { // 靜態翻譯
            // 第三頁 安裝中

            // 第四頁 安裝後 授權
            // /login/oauth/authorize?client_id=Iv1.1a4d20f84a40d790&state=login
                "Resources on your account": "您帳戶中的資源",
                "Act on your behalf": "代表您行事",
                "Email addresses": "電子郵箱地址",
                "(read)": "(只讀)",
                "View your email addresses": "檢視您的電子郵箱地址",
                "Authorizing will redirect to": "授權將重定向到",
                "Not": "不由",
                "owned or operated by GitHub": "GitHub 擁有或運營",
                "Created": "創建於",
                "GitHub users": "GitHub 使用者",

            // /login/oauth/authorize?client_id=78a2ba87f071c28e65bb&redirect_uri=https%3A%2F%2Fcircleci.com%2Fauth%2Fgithub%3Freturn-to%3D%252Fdashboard%253Futm_medium%253Dpartner%2526utm_campaign%253Dghmarketplace%2526utm_source%253Dgithub&scope=repo%2Cuser%3Aemail&state=uZ9BTIkhQ3_98icRI09o1L1HJmfvIO8gK3FDGwytNAzbBRzXwTge440cKS7NaGtvS0tqCR_HzGMH2z3p
                "wants to access your": "想訪問您的",
                "account": "帳戶",
                "Public and": "公共庫和",
                "private": "私有庫",
                "This application will be able to": "該應用程式將能夠",
                "read and write all public and private repository data": "讀寫所有公共和私有倉庫資料",
                ". This includes the following:": "。這包括以下內容：",
                "Wikis": "Wiki",
                "Webhooks and services": "Web 鉤子和服務",
                "Deploy keys": "部署金鑰",
                "Collaboration invites": "合作的邀請",

                "Personal user data": "個人使用者資料",
                "Email addresses (read-only)": "電子郵箱地址(只讀)",
                "This application will be able to read your private email addresses.": "此應用程式將能夠讀取您的私人電子郵箱地址。",

            // 第五頁 即將跳轉到 重定向頁面
                "You are being redirected to the authorized application.": "您將被重定向到授權的應用程式。",
                "If your browser does not redirect you back, please": "如果您的瀏覽器沒有將您重定向回來，請",
                "click here": "點選這裡",
                "to continue.": "繼續。",
                "would like permission to:": "希望獲得以下許可：",
                "Know which resources you can access": "瞭解您可以訪問哪些資源",

            // // /apps/codacy-production/installations/new/permissions?target_id=7850715
            //     "All repositories": "所有倉庫",
            //     "This applies to all current": "這適用於所有當前",
            //     "and": "和",
            //     "future repositories.": "未來的倉庫。",
            //     "Only select repositories": "僅選定的倉庫",
            //     "Select repositories": "選擇倉庫",
            //     "Search for a repository": "搜尋倉庫",
            //     "with these permissions:": "授權以下許可權：",
            //     "User permissions": "使用者許可權",
            //     "Install & Authorize": "安裝 & 授權",
            //     "Next: you'll be redirected to": "下一步：您將被重定向到",

            // // >>>>>具體的許可權不打算漢化<<<<<<<
            // // >>>>>具體的許可權不打算漢化<<<<<<<
        },
        "regexp": [ // 正則翻譯
            // /login/oauth/authorize?client_id=Iv1.1a4d20f84a40d790&state=login
            [/Verify your GitHub identity/, "驗證您的 GitHub 身份"],
            [/has not been installed on any accounts you have access to./, "尚未安裝在您有權訪問的任何帳戶上。"],
            [/Learn more about/, "瞭解更多關於"],
            [/More than ([^ ]+)/, "超過 $1"],
            // /apps/codacy-production/installations/new/permissions?target_id=7850715
            [/Install & Authorize on your personal account/, "安裝和授權到您的個人帳戶"],
            [/Install & Authorize/, "安裝和授權"],
            [/Authorize ([^ ]+)/, "授權 $1"], // /login/oauth/authorize?client_id=Iv1.1a4d20f84a40d790&state=login 調整位置避免覆蓋
            [/Installing and authorizing ([^ ]+) immediately grants these permissions on your account:/, "安裝和授權 $1則會立即授予您帳戶的以下許可權："],
            [/Selected (\d+) repositor(y|ies)./, "選擇了 $1 個倉庫。"],
        ],
    },

    "explore": { // 探索頁面
        "static": { // 靜態翻譯
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "account/organizations/new": { // 建立組織
        "static": { // 靜態翻譯
            // 建立免費的組織 https://github.com/account/organizations/new?coupon=&plan=team_free
            // 第 1 頁
            "Tell us about your organization": "告訴我們您的組織",
            "Set up your organization": "設定您的組織",
            "Organization account name": "組織帳戶名稱",
            // [/The name \'(\d+)\' is already taken./, "名稱 '$1' 已被採用。"],
            // [/The name \'(\d+)\' may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen./, "名稱 '$1' 只能包含字母數字字元或單個連字元，並且不能以連字元開頭或結尾。"],
            // [/Organization name \'([^ ]+)\' is unavailable./, "組織名稱 '$1' 不可用。"], //
            "This will be the name of your account on GitHub.": "這將是您在 GitHub 上的帳戶名稱。",
            "Your URL will be: https://github.com/": "您的網址將是：https://github.com/",
            "Contact email": "聯絡電子郵箱",
                "Email is invalid": "電子郵箱無效",
            "This organization belongs to:": "該組織屬於：",
            "My personal account": "我的個人帳戶",
                // [/I.e.,/, "即："],
            "A business or institution": "企業或機構",
                "For example: GitHub, Inc., Example Institute, American Red Cross": "比如說：GitHub, Inc., Example Institute, American Red Cross",
                "Name of business or institution this organization belongs to": "該組織所屬的企業或機構的名稱",
                "This business or institution — not": "該企業或機構 — 不是",
                "(your personal account) — will control this organization account.": "（您的個人帳戶）— 將控制此組織帳戶。",
            "By creating an account, you agree to the": "建立帳戶即表示您同意",
            "Terms of Service": "服務條款",
            ". For more information about GitHub's privacy practices, see the": "。關於 GitHub 隱私條款的更多資訊，請參見",
            "GitHub Privacy Statement": "GitHub 隱私宣告",
            ". We'll occasionally send you account-related emails.": "。我們偶爾會向您傳送與帳戶相關的電子郵件。",

            // https://github.com/organizations/<org-name>/invite
            // 第 2 頁 邀請成員
            "Start collaborating": "開始合作",
            // [/Welcome to/, "歡迎來到"],
            "Add organization members": "新增組織成員",
            "Organization members will be able to view repositories, organize into teams, review code, and tag other members using @mentions.": "組織成員將能夠使用 @提及來檢視倉庫、組織成團隊、審查程式碼以及標記其他成員。",
            "Learn more about permissions for organizations →": "瞭解更多關於組織許可權的資訊 →",
            "Search by username, full name or email address": "搜尋使用者名稱、全名、或電子郵箱",
            "Complete setup": "完成設定",
            "Skip this step": "跳過",

            // https://github.com/orgs/<org-name>/invitations/bulk_create_for_new_org
            // https://github.com/orgs/<org-name>/welcome_survey/new
        },
        "regexp": [ // 正則翻譯
            [/The name \'([^ ]+)\' is already taken./, "名稱 '$1' 已被採用。"],
            [/The name \'([^ ]+)\' may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen./, "名稱 '$1' 只能包含字母數字字元或單個連字元，並且不能以連字元開頭或結尾。"],
            [/Organization name \'([^ ]+)\' is unavailable./, "組織名稱 '$1' 不可用。"],
            [/I.e.,/, "即："],
        ],
    },

    "marketplace": { // 應用商店
        "static": { // 靜態翻譯
            // 應用介紹頁面 /marketplace/codacy 第一頁
                "Apps": "應用",
                // 左側資訊欄
                "GitHub has verified that the application meets the": "GitHub 已驗證了該應用符合",
                "requirements for listing": "上架要求",
                "GitHub has verified that the publisher controls the domain and meets other": "GitHub 已經驗證了釋出者對該域名的控制權和滿足其他",
                "requirements": "要求",
                "Categories": "類別",
                "Supported languages": "支援的語言",
                "and": "和",
                "Customers": "客戶",
                "Verified domains": "經驗證的域名",
                "Developer links": "開發者連結",
                "Support": "支援",
                "Documentation": "文件",
                // 右側正文
                "Application": "應用",
                "Set up a plan": "制定一個計劃",
                "Read more…": "瞭解更多…",
                // 下半部分
                "Pricing and setup": "定價與設定",
                "Free for open source projects": "免費的開源專案",
                "Unlimited private repositories": "無限制私有專案",
                "per user": "每人",
                "User(s) in this plan": "個使用者在計劃中",
                "Install it for free": "免費安裝",
                "Buy with GitHub": "透過 GitHub 購買",
                "Next: Confirm your installation location and payment information.": "下一步：確認您的安裝位置和支付資訊。",
                "terms of service": "服務條款",
                "privacy policy": "隱私政策",
                ", and": "，和",
                "support documentation": "支援文件",
                "support contact": "支援聯絡",

            // /marketplace/travis-ci/order/MDIyOk1hcmtldHBsYWNlTGlzdGluZ1BsYW43MA==?account=maboloshi
                "Edit your plan": "編輯您的計劃",
                "Open Source": "開源",
                "(current plan)": "(當前計劃)",
                "plans": "計劃",
                // "(current plan)": "(當前計劃)",
                "Account:": "帳戶：",
                "/ month": "/ 月",
                "To complete this installation, you must": "要完成此安裝，您必須",
                "grant this app access": "授予此應用程式的許可權",
                "to your GitHub account.": "訪問您的 GitHub 帳戶。",
                "Cancel this plan": "取消計劃",
                "Order summary": "訂單摘要",
                "Current plan": "當前計劃",
                "Billing information": "賬單資訊",
                "Personal account": "個人帳戶",
                "Terms of Service": "服務條款",
                "and the": "和",
                "Privacy Policy": "隱私政策",
                ". You previously agreed to the": "。您已同意過",
                "Marketplace Terms of Service.": "商城服務條款。",
                "Issue plan changes": "議題計劃更改",

            // 應用的審查訂單 第二頁  /marketplace/gitlocalize/order/MDIyOk1hcmtldHBsYWNlTGlzdGluZ1BsYW4zOTg=?account=maboloshi
                "Review your order": "審查您的訂單",
                "Free": "免費",
                "For individuals, teams, and communities, public and private projects": "對於個人、團隊和社群，公共和私人專案",
                "Total amount": "總金額",
                "Due today": "截止到今天",
                "Complete order and begin installation": "完成訂購併開始安裝",
                // "Prorated for": "",

            // /apps/codacy-production
                "GitHub App": "GitHub 應用",
                "Read more about this app on the Marketplace": "瞭解更多關於商城中此應用程式的資訊",

                "Install": "安裝",
                "Next: Confirm your installation location.": "下一步：確認您的安裝位置。",
                "Configure": "設定",
                "Manage your installation settings.": "管理安裝設定。",

                "Developer": "開發者",
                "Website": "網站",
                "is provided by a third-party and is governed by separate terms of service, privacy policy, and support documentation.": "是由第三方提供的，並受單獨的服務條款、隱私政策和支援文件的約束。",
                "Report abuse": "舉報濫用",

            // /marketplace/actions/merge-upstream
                "Latest version": "最新發行版",
                "Use latest version": "使用最新發行版",
                "Choose a version": "選擇發行版",

                "Contributors": "貢獻者",
                "Links": "連結",
                "Open issues": "開啟議題",
                "is not certified by GitHub. It is provided by a third-party and is governed by separate terms of service, privacy policy, and support documentation.": "未經 GitHub 認證。它由第三方提供，並受單獨的服務條款、隱私政策和支援文件的約束。",

            // /apps/codacy-production/installations/new/permissions?target_id=7850715
                "All repositories": "所有倉庫",
                "This applies to all current": "這適用於所有當前",
                "and": "和",
                "future repositories.": "未來的倉庫。",
                "Only select repositories": "僅選定的倉庫",
                "Select repositories": "選擇倉庫",
                "Search for a repository": "搜尋倉庫",
                "with these permissions:": "授權以下許可權：",
                "User permissions": "使用者許可權",
                "Install & Authorize": "安裝 & 授權",
                "Next: you'll be redirected to": "下一步：您將被重定向到",

            // >>>>>具體的許可權不打算漢化<<<<<<<
            // >>>>>具體的許可權不打算漢化<<<<<<<
        },
        "regexp": [ // 正則翻譯
            // /marketplace/codacy
            [/(\d+) other languages? supported/, "$1 種其他語言支援"],
            [/([^ ]+) is provided by a third-party and is governed by separate/, "$1 是由第三方提供的，並受單獨的"],
            // /marketplace/travis-ci/order/MDIyOk1hcmtldHBsYWNlTGlzdGluZ1BsYW43MA==?account=maboloshi
            [/By clicking "Issue plan changes", you are agreeing to ([^ ]+)’s/, "點選 “議題計劃更改”，您同意 $1 的"],
            [/By clicking "Complete order and begin installation", you are agreeing to ([^ ]+)’s/, "點選 “完成訂購併開始安裝”，表示您同意 $1 的"],
            [/Next: Authorize ([^ ]+) to access your account./, "下一步：授權 $1 訪問您的帳戶。"],
        ],
    },

    "orgs": { // 組織頁面
        "static": { // 靜態翻譯
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "orgs/domain/new": { // 組織 - 新增域名
        "static": { // 靜態翻譯
            "Verified & approved domains": "經驗證和批准的域名",
            "Add a domain": "新增域名",
            "What domain would you like to add?": "您想新增什麼域名？",
            "Add domain": "新增域名",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "orgs/settings": { // 組織 - 設定頁面
        "static": { // 靜態翻譯
            // 授權訪問 (已經合併到組織設定)
                "Confirm access": "授權訪問",
                "Password": "密碼",
                "Forgot password?": "忘記密碼？",
                "Confirm password": "確認密碼",
                "You are entering": "您正在進入",
                "sudo mode": "Sudo 模式",
                ". We won’t ask for your password again for a few hours.": " 。我們將在未來幾個小時內不再要求您輸入密碼。",

            // 公用部分
                "Organization account": "組織帳戶",
                "Switch to another account": "切換到另一個帳戶", // 存在組織時
                "Go to your organization profile": "去我的組織主頁",
                // 左側選單
                "General": "常規",
                "Access": "訪問",
                "Billing and plans": "賬單和計劃",
                "Member privileges": "成員許可權",
                "Team discussions": "團隊討論",
                "Moderation": "節制",
                    "Blocked users": "黑名單",
                    "Interaction limits": "互動限制",
                    "Code review limits": "程式碼審查限制",
                    "Moderators": "版主",

                "Code, planning, and automation": "程式碼、規劃和自動化",
                "Repository": "倉庫",
                    "Repository defaults": "倉庫預設值",
                    "Repository topics": "倉庫主題",
                "Actions": "操作",
                    "Runners": "執行器",
                    "Runner groups": "執行器組",
                "Webhooks": "Web 鉤子",
                "Packages": "軟體包",
                "Projects": "專案",

                "Security": "安全",
                "Authentication security": "身份驗證安全",
                "Code security and analysis": "程式碼安全性與分析",
                "Verified and approved domains": "經驗證和批准的域名",
                "Secrets": "機密",

                "Integrations": "整合",
                "Third-party access": "第三方訪問",
                "GitHub Apps": "GitHub 應用",
                "Scheduled reminders": "定時提醒",

                "Archive": "存檔",
                "Logs": "日誌",
                    "Sponsorship log": "贊助日誌",
                    "Audit log": "審計日誌",
                "Deleted repositories": "刪除的倉庫",

                "Developer settings": "開發者設定",
                    "OAuth Apps": "OAuth 應用程式",
                    "Publisher Verification": "釋出者驗證",
                "Account settings": "帳戶設定",

            // 組織資料 /organizations/<org-login>/settings/profile
                "Organization profile": "基本資料",
                    "Profile picture": "我的頭像",
                        "Upload new picture": "上傳新頭像",
                        "Note: To apply for a publisher verification your organization's profile picture should not be irrelevant, abusive or vulgar. It should not be a default image provided by GitHub.": "注意：需要申請釋出者驗證，您的組織的個人資料圖片不應該是不相關的、辱罵性的或粗俗的。它不應該是由 GitHub 提供的預設圖片。",
                    "Organization display name": "組織顯示名稱",
                    "Email (will be public)": "公開電子郵箱",
                    "Description": "描述",
                    "URL": "網站",
                    "Twitter username": "Twitter 使用者名稱",
                    "Location": "位置",
                        "Select a location": "選擇位置",
                        "Find a location...": "搜尋位置...",
                        "Clear Location": "清除位置",
                    "Billing email": "賬單電子郵箱",
                    "(Private)": "（私人）",
                        "Add more billing email recipients in the":"新增更多的賬單郵件收件人在",
                        "billing page": "賬單頁面",
                    "Gravatar email": "Gravatar 電子郵箱",
                    "Sponsors update email": "贊助者更新電子郵箱",
                        "The developers and organizations that your organization sponsors can send you updates to this email.": "您的組織贊助的開發人員和組織可以向您傳送此電子郵箱的更新。",
                    "Update profile": "更新資料",
                    "Profile updated successfully": "資料更新成功。",

                "GitHub Developer Program": "GitHub 開發者計劃",
                    "Building an application, service, or tool that integrates with GitHub?": "構建應用程式、服務或工具，整合到 GitHub 嗎？",
                    "Join the GitHub Developer Program": "加入 GitHub 開發者計劃",
                    ", or read more about it at our": "，或瞭解更多資訊在我們的",
                    "Developer site": "開發者站點",
                    "Check out the Developer site": "檢視開發者網站，",
                    "for guides, our API reference, and other resources for building applications that integrate with GitHub. Make sure your contact information is up-to-date below. Thanks for being a member!": "瞭解指南、我們的 API 參考和其他用於構建與 GitHub 整合的應用程式的資源。請確保您的聯絡資訊是最新的。感謝您成為我們的會員！",

                "Terms of Service": "服務條款",
                    "Standard": "標準",
                        "Best for individuals wanting the freedom to move data and remain independent of a corporation.": "最適合希望自由移動資料並保持獨立於公司的個人。",
                        "Read the Standard Terms of Service": "閱讀 “標準服務條款”",
                    "Corporate": "企業",
                        "Best for businesses that need to protect their intellectual property and secure visibility into their data.": "最適合需要保護智慧財產權並確保資料可見性的企業。",
                        "Read the Corporate Terms of Service": "閱讀 “企業服務條款”",
                        "Sign corporate terms": "簽署企業條款",

                "Danger zone": "危險區",
                    "Rename organization": "重新命名組織",
                        "Renaming your organization can have": "重新命名您的組織可能會有",
                        "unintended side effects": "意想不到的副作用",
                    "Really rename your organization?": "確定要重新命名您的組織？",
                    "Unexpected bad things will happen if you don’t read this!": "請仔細閱讀以下提示資訊！！！",
                    "We": "我們",
                    "will not": "不會",
                    "will": "會",
                    "create redirects for your repositories (web and git access).": "為您的倉庫設定重定向（ web 和 git 訪問）。",
                    "You will need to update your local repositories to point to the new location.": "您將需要更新您的本地倉庫，以指向新的位置。",
                    "Renaming may take a few minutes to complete.": "重新命名可能需要幾分鐘的時間來完成。",
                    "I understand, let’s rename my organization": "我明白了，依然重新命名我的組織",

                    "Rename your organization": "重新命名組織",
                    "Change organization’s name":"更改組織名",
                    // 頂部提醒
                        "Organization name may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen": "組織名稱只能包含字母數字字元或單連字元，不能以連字元開始或結束。",
                        "Organization name is not available": "組織名稱不可用",

                    "Delete this organization": "刪除組織",
                        "Once deleted, it will be gone forever. Please be certain.": "您一旦刪除，將再也無法恢復。請確認！",

                       "Are you sure you want to delete this?": "您確定要刪除嗎？",
                       "Deleting the": "刪除",
                       "organization will delete all of its repositories. The": "組織，將會刪除其所有倉庫。",
                       "username will be unavailable for 90 days.": "使用者名稱將在 90 天內不可用。",
                       "Before proceeding, please be sure to review the": "在繼續之前，請務必檢視",
                       "regarding account deletion.": "關於帳戶刪除。",
                       "Enter this organization’s name to confirm": "請輸入組織的名稱，進行確認",
                       "Cancel plan and delete the organization": "取消計劃並刪除此組織",

            // 賬單和計劃 /organizations/<org-login>/settings/billing
                // "Personal billing": "個人賬單",
                "Current monthly bill": "當前月度賬單",
                "Switch to yearly billing and save": "切換到按年計費並儲存",
                "Next payment due": "下一次到期的支付",
                "View payment history": "檢視支付記錄",
                "Payment information": "支付資訊",
                "Update payment method": "更新支付方式",
                "Manage spending limit": "管理支出限額",
                "Redeem coupon": "兌換優惠券",
                "Current plan": "當前計劃",
                "Compare all plans": "比較所有計劃",
                //"GitHub Free": "GitHub 免費",
                "The basics for organizations and developers": "組織和開發者的基本計劃",
                "Unlimited public/private repos": "無限的公共/私有倉庫",
                "Unlimited collaborators": "無限協作者",
                "2,000 Actions minutes/month": "2,000 次操作 分鐘/月",
                "500MB of Packages storage": "500MB 的包儲存空間",
                "Community support": "社群支援",
                "Usage this month": "本月使用情況",
                "Get usage report": "獲取使用報告",

                "GitHub Sponsors": "GitHub 贊助",
                "Connect with the community that builds the tools you use": "與構建您使用的工具的社群聯絡",
                "Start sponsoring": "開始贊助",
                "You’re currently not sponsoring anyone.": "您目前沒有贊助任何人。",
                "Learn more about GitHub Sponsors": "瞭解更多關於 GitHub 贊助",
                // "Change plan": "更改計劃",
                // "Cancel plan": "取消計劃",
                // "Do you have any questions? Contact": "對話方塊您有任何問題嗎？請聯絡",

                "Billing management": "賬單管理",
                "Receipts are sent to billing managers and email recipients.": "收據會被髮送給賬單管理員和郵件接收者。",
                "Billing managers": "賬單管理員",
                    "You have not invited any billing managers": "您尚未邀請任何賬單管理員",
                    "Invite": "邀請",
                "Email recipients": "郵件接收者",
                "Add": "新增",
                "Primary": "主帳戶",

                "Edit billing email address": "編輯賬單電子郵箱",
                "Billing primary email": "賬單主帳戶郵箱",
                "Update": "更新",

                "Add billing recipient": "新增賬單接收者",
                "Add billing recipient email": "新增賬單接收者郵箱",

            // 支付資訊 /organizations/<org-login>/settings/billing/payment_information
                "Billing & plans": "賬單和計劃",
                "/ Payment information": "/ 支付資訊",

                // "Please update your billing information in order to add a payment method.": "請更新您的賬單資訊，以便新增支付方式。",

                // "Billing Information": "賬單資訊",
                // "First name": "名字",
                // "Last name": "姓氏",
                // "Address": "地址",
                // "City": "城市",
                // "Postal/Zip code": "郵政編碼",
                // "Country/Region": "國家/地區",
                //     "Choose your country": "選擇您所在的國家/地區",
                // "State/Province": "州/省",

                "Payment method": "支付方式",
                "You have not added a payment method.": "您尚未新增支付方式。",
                // "Add Information": "新增資訊",

                "Last payment": "最後一次支付",
                "You have not made any payments.": "您尚未支付任何款項。",

                "Coupon": "優惠劵",
                "You don’t have an active coupon.": "您沒有有效的優惠券。",
                "Redeem a coupon": "兌換優惠券",

                "Extra Information": "額外資訊",
                    "Add specific contact or tax information to your receipts, like your full business name, VAT/GST identification number, or address of record here. We’ll make sure it shows up on every receipt.": "在您的收據上新增具體的聯絡方式或稅務資訊，例如您的企業全稱、VAT/GST 識別號碼或記錄地址。我們將確保它顯示在每張收據上。",
                "No additional information added to your receipts.": "您的收據上沒有新增任何額外的資訊。",
                "Add information": "新增資訊",

                // 對話方塊
                "Extra billing information": "額外的賬單資訊",
                "This information will appear on all your receipts.": "此資訊將出現在您的所有收據上。",
                "For your security, do not include any confidential or financial information (like credit card numbers).": "為了您的安全，請勿包含任何機密或財務資訊（如信用卡號）。",
                "Full business name or address of record": "企業全稱或記錄地址",
                "Save contact information": "儲存聯絡資訊",

            // 支付方式 /organizations/<org-login>/settings/billing/payment
                "/ Payment method": "/ 支付方式",
                "Loading payment information…": "正在載入支付資訊…",
                "Pay with": "支付方式：",
                    "Credit card": "信用卡",
                        "Card Number": "卡號",
                        "Expiration Date": "終止日期",
                            "- Select One -": "- 選擇一個 -",
                        "Address 1": "地址 1",
                        "Address 2": "地址 2",
                        "Country": "國家/地區",
                        "City": "城市",
                        "State": "州/省",
                        "Postal Code": "郵政編碼",
                        "Submit": "提交",
                    "PayPal account": "PayPal 帳戶",
                        "Sign in to": "登入到",
                        "Connecting to PayPal…": "正在連線到 PayPal…",
                "Back to billing settings": "返回賬單設定",
                "There are no upcoming charges to your account.": "您的帳戶沒有即將發生的費用。",

            // 支出限額 /organizations/<org-login>/settings/billing/spending_limit
                "/ Monthly spending limit": "/ 每月支付限額",
                "Set up a monthly spending limit. You can adjust it at any time. Read more information about": "設定每月支出限額。您可以隨時調整它。閱讀更多關於",
                "Actions spending limits": "操作支付限額",
                "Packages spending limits": "軟體包支付限額",

                "Payment method is missing": "缺失支付方式",
                "You can’t increase the spending limits until you set up a valid payment method.": "在您設定有效的支付方式之前，您無法提高支出限額。",
                "Add payment method": "新增支付方式",

                "Limit spending": "限制支出",
                    "Set up a spending limit on a monthly basis": "設定每月支出限額",
                    "Update limit": "更新限額",
                    // [/Leaving it at (\$\d+\.\d{2}) will avoid any extra expenses/, "將其限制在 $1 美元將避免任何額外的費用。"],
                "Unlimited spending": "不限制支出",
                    "Pay as much as needed to keep Actions & Packages running": "按需支付，以保持操作和軟體包的執行",

                "Email alerts": "電子郵件提醒",
                "Receive email notifications when usage reaches 75%, 90% and 100% thresholds.": "當使用率達到 75%、90% 和 100% 的閾值時，會收到電子郵件通知。",
                "Included resources alerts": "包含資源提醒",
                "Spending limit alerts": "支出限額提醒",

            // 賬單歷史 /organizations/<org-login>/billing/history
                "/ Payment history": "/ 支付歷史",
                "Amounts shown in USD": "以美元顯示的金額",

            // 成員許可權 /organizations/<org-login>/settings/member_privileges
                "Member repository permissions": "成員倉庫許可權",
                "Base permissions": "基本許可權",
                "Base permissions to the organization’s repositories apply to all members and excludes outside collaborators. Since organization members can have permissions from multiple sources, members and collaborators who have been granted a higher level of access than the base permissions will retain their higher permission privileges.": "組織倉庫的基本許可權適用於所有成員，不包括外部協作者。由於組織成員可以擁有多個來源的許可權，已經被授予比基本許可權更高的訪問級別的成員和協作者將保留他們更高的許可權。",

                "Organization member permissions": "組織成員的許可權",
                    "No permission": "無許可權",
                        "Members will only be able to clone and pull public repositories. To give a member additional access, you’ll need to add them to teams or make them collaborators on individual repositories.": "成員只能克隆和拉取公共倉庫。要為成員提供額外的訪問許可權，您需要將他們新增到團隊中，或者讓他們成為單個倉庫的協作者。",
                        // 對話方塊
                            "Change base permission to \"No permission\"": "將基本許可權更改為 “無許可權”",
                            "You are about to change the base repository permission for this organization.": "您即將更改此組織倉庫的基本許可權。",
                            // [/This may change the permission that the organization’s (\d+) members? has on its (\d+) repositories?./, "這可能會更改組織的 $1 個成員對其 $2 個倉庫的許可權。"],
                    "Read": "只讀",
                        "Members will be able to clone and pull all repositories.": "成員將能夠克隆和拉取所有倉庫。",
                        // 對話方塊
                            "Change base permission to \"Read\"": "將基本許可權更改為 “只讀”",
                    "Write": "可寫",
                        "Members will be able to clone, pull, and push all repositories.": "成員將能夠克隆、拉取和推送所有倉庫。",
                        // 對話方塊
                            "Change base permission to \"Write\"": "將基本許可權更改為 “可寫”",
                    "Admin": "管理員",
                        "Members will be able to clone, pull, push, and add new collaborators to all repositories.": "成員將能夠克隆、拉取、推送和向所有倉庫新增新的協作者。",
                        // 對話方塊
                            "Change base permission to \"Admin\"": "將基本許可權更改為 “管理員”",
                    // 頂部提醒
                        "Base repository permission removed.": "基本倉庫許可權已被刪除。",
                        "Base repository permission updated to \"Read\".": "基本倉庫許可權已更新為 “只讀” 。",
                        "Base repository permission updated to \"Write\".": "基本倉庫許可權已更新為 “可寫” 。",
                        "Base repository permission updated to \"Admin\".": "基本倉庫許可權已更新為 “管理員” 。",

                    "Repository creation": "倉庫建立",
                        "Members will be able to create only selected repository types. Outside collaborators can never create repositories.": "成員將只能建立選定型別的倉庫。外部協作者永遠不能建立倉庫。",
                        "Public": "公共",
                            "Members will be able to create public repositories, visible to anyone.": "成員將能夠建立任何人都可見的公共倉庫。",
                            "Why is this option disabled?": "為什麼該選項被禁用？",
                        "Private": "私有",
                            "Members will be able to create private repositories, visible to organization members with permission.": "成員將能夠建立私有倉庫，對有許可權的組織成員可見。",
                    // 頂部提醒
                        "Projects settings updated for this organization.": "該組織的專案設定已經更新。",

                        "Repository forking": "倉庫復刻",
                            "Allow forking of private repositories": "允許復刻私有倉庫",
                            "If enabled, forking is allowed on private and public repositories. If disabled, forking is only allowed on public repositories. This setting is also configurable per-repository.": "如果啟用，則私有和公共倉庫都允許復刻。如果禁用，則只允許復刻公共倉庫。此設定也可以在每個倉庫中進行配置。",
                    // 頂部提醒
                        "Repository forking setting updated!": "倉庫復刻設定已經更新!",

                    "Pages creation": "頁面建立",
                        "Members will be able to publish sites with only the selected access controls.": "成員將能夠釋出僅只有選定的訪問控制的站點。",
                        // "Public": "公共",
                            "Members will be able to create public sites, visible to anyone.": "成員將能夠建立任何人都可見的公共站點。",
                        // "Private": "私有",
                            "Members will be able to create private sites, visible to anyone with permission.": "成員將能夠建立私有站點，對任何有許可權的人可見。",
                    "Admin repository permissions": "管理員倉庫許可權",
                        "Repository visibility change": "倉庫可見性更改",
                            "Allow members to change repository visibilities for this organization": "允許成員更改此組織的倉庫可見性",
                            "If enabled, members with admin permissions for the repository will be able to change its visibility. If disabled, only organization owners can change repository visibilities.": "如果啟用，對倉庫有管理許可權的成員將能夠更改其可見性。如果禁用，只有組織所有者可以更改倉庫的可見性。",
                        // 頂部提醒
                            "Members can now change repository visibility.": "成員現在可以更改倉庫可見性。",
                            "Members can no longer change repository visibility.": "成員不能再更改倉庫可見性。",

                        "Repository deletion and transfer": "倉庫的刪除和轉讓",
                            "Allow members to delete or transfer repositories for this organization": "允許成員刪除或轉讓此組織的倉庫",
                            "If enabled, members with admin permissions for the repository will be able to delete or transfer": "如果啟用，對倉庫有管理許可權的成員將能夠刪除或轉讓",
                            "public": "公共",
                            "private": "私有",
                            "repositories. If disabled, only organization owners can delete or transfer repositories.": "倉庫。如果禁用，只有組織所有者可以刪除或轉讓倉庫。",
                        // 頂部提醒
                            "Members can now delete or transfer repositories.": "成員現在可以刪除或轉讓倉庫。",
                            "Members can no longer delete or transfer repositories.": "成員不能再刪除或轉讓倉庫。",

                        "Issue deletion": "議題刪除",
                            "Allow repository administrators to delete issues for this organization": "允許倉庫管理員刪除此組織的議題",
                            "If enabled, members with admin permissions for the repository will be able to delete issues. If disabled, only organization owners can delete issues.": "如果啟用，對倉庫有管理許可權的成員將能夠刪除議題。如果禁用，只有組織所有者可以刪除議題。",
                        // 頂部提醒
                            "Members can now delete issues.": "成員現在可以刪除議題。",
                            "Members can no longer delete issues.": "成員不能再刪除議題。",

                    "Repository discussions": "倉庫討論",
                        "Allow users with read access to create discussions": "允許具有讀取許可權的使用者建立討論",
                        // [/If enabled, all users with read access can create and comment on discussions in ([^ ]+)’s repositories./, "如果啟用，所有具有讀取許可權的使用者都可以在 $1 的倉庫中建立和評論討論。"],
                        "If disabled, discussion creation is limited to users with at least triage permission. Users with read access can still comment on discussions.": "如果禁用，討論的建立僅限於至少具有分級許可權的使用者。具有讀取許可權的使用者仍然可以對討論發表評論。",
                    // 頂部提醒
                        "Users with read access to repositories can create new discussions.": "對倉庫具有讀取許可權的使用者可以建立新的討論。",
                        "Only users with at least triage access to repositories can create new discussions.": "只有至少對倉庫有分級許可權的使用者才能建立新的討論。",

                    "Member team permissions": "成員團隊許可權",
                        "Team creation rules": "團隊建立規則",
                            "Allow members to create teams": "允許成員建立團隊",
                            "If enabled, any member of the organization will be able to create new teams. If disabled, only organization owners can create new teams.": "如果啟用，組織的任何成員將能夠建立新的團隊。如果禁用，只有組織所有者可以建立新的團隊。",
                        // 頂部提醒
                            "Members can now create teams.": "成員現在可以建立團隊。",
                            "Members can no longer create teams.": "成員不能再建立團隊。",

            // 團隊討論 /organizations/<org-login>/settings/teams
                "Team discussions provide a place for a team to have conversations that span across projects or repositories and that don’t belong in an issue or a pull request.": "團隊討論為團隊提供了一個進行跨專案或倉庫，且不屬於議題或拉取請求的對話的場所。",
                "Enable team discussions for this organization": "為此組織啟用團隊討論",
                    "This allows members to start discussions in any team in the": "這允許成員在任何團隊中開始討論，在",
                "organization.": "組織中。",

                "Looking for": "尋找",
                "Organization Discussions": "組織討論",
                "? Go to": "？轉到",
                "Organization Discussions settings.": "組織討論設定。",

                // 頂部提醒
                    "Team discussions enabled for this organization.": "該組織啟用了團隊討論。",
                    "Team discussions disabled for this organization.": "該組織禁用了團隊討論。",

            // Blocked users 黑名單 /organizations/<org-login>/settings/user_blocks
                "Block a user": "拉黑使用者",
                "Blocking a user prevents the following on all your repositories:": "拉黑使用者可以防止所有倉庫中的以下操作：",
                "opening or commenting on issues or pull requests": "開啟或評論議題或拉取請求",
                "starring, forking, or watching": "加星標、復刻、關注",
                "adding or editing wiki pages": "新增或編輯 Wiki 頁面",

                "Search by username, full name or email address": "搜尋使用者名稱、全名、或電子郵箱",
                    "Learn more about blocking a user": "瞭解更多關於拉黑使用者的資訊",
                "Block options": "拉黑選項",
                    "For 1 day": "1 天",
                    "For 3 days": "3 天",
                    "For 7 days": "7 天",
                    "For 30 days": "30 天",
                    "Until I unblock them": "直到取消拉黑",
                "Block user": "拉黑使用者",
                "You have not blocked any users.": "您還沒有拉黑任何使用者。",
                "Unblock": "取消拉黑",

            // Interaction limits 互動限制 /organizations/<org-login>/settings/interaction_limits
                "Temporary interaction limits": "臨時互動限制",
                "Temporarily restrict which external users can interact with your repositories (comment, open issues, or create pull requests) for a configurable period of time. Users who are members of this organization will not be affected by these limits.": "在配置的時間段內，可臨時限制哪些外部使用者與您的倉庫互動（評論、開啟議題或建立拉取請求）。作為該組織成員的使用者將不受這些限制的影響。",
                "This may be used to force a \"cool-down\" period during heated discussions or prevent unwanted interactions.": "可用於在激烈討論期間，強制進入 “冷靜” 期或防止不必要的互動。",
                "Interaction limits may already exist in your organization's": "互動限制可能已經存在於您的組織",
                "public repositories": "公開倉庫",
                ". Any changes here will override those limits.": " 的設定中。此處的全域性設定將覆蓋那些倉庫的區域性設定。",
                "Limit to existing users": "僅限現有使用者",
                    "Users that have recently created their account will be unable to interact with this organization's repositories.": "最近建立帳戶的使用者將無法與您組織的倉庫互動。",
                "Limit to prior contributors": "僅限於先前的貢獻者",
                    "Users that have not previously committed to the default branch of a repository in this organization will be unable to interact with that repository.": "以前從未提交到您組織某個倉庫預設分支的使用者將無法與該倉庫互動。",
                "Limit to repository collaborators": "僅限倉庫協作者",
                    "Users that are not collaborators of a repository in this organization will not be able to interact with that repository.": "不是您組織某個倉庫的協作者將無法與該倉庫互動。",
                "New users": "新使用者",
                "Users": "使用者",
                "Contributors": "貢獻者",
                "Collaborators": "協作者",
                "Organization members": "組織成員",
                // 互動限制時間 下拉選單
                "Enable interaction limits for:": "啟用互動限制：",
                "24 hours": "24 小時",
                "3 days": "3 天",
                "1 week": "1 周",
                "1 month": "1 個月",
                "6 months": "6 個月",
                // 頂部提醒
                "User interaction limit settings saved.": "使用者互動限制設定已儲存。",

            // 程式碼審查限制 /organizations/<org-login>/settings/code_review_limits
                "Restrict users who are permitted to approve or request changes on pull requests in public repositories within this organization.": "限制該組織內允許批准或請求更改公共倉庫中拉取請求的使用者。",
                "Code review limits may already be specified by individual repositories. Any changes here will override those limits until unset.": "程式碼審查限制可能已經由各個倉庫指定。此處的任何更改都將覆蓋這些限制，直至取消設定。",
                "Code review limits are currently managed individually for all repositories. Enable limits to permit only users who have explicitly been granted access to each repository to submit reviews that \"approve\" or \"request changes\". Remove limits to allow all users to submit pull request reviews. All users able to submit comment pull request reviews will continue to be able to do so.": "目前，所有倉庫程式碼審查限制都是單獨管理的。啟用限制，只允許明確授予每個倉庫訪問權的使用者提交 “批准” 或 “請求更改” 的審查。刪除限制，允許所有使用者提交拉取請求審查。所有能夠提交評論拉取請求審查的使用者將繼續能夠這樣做。",
                "Limit reviews on all repositories": "限制對所有倉庫的審查",
                "Remove review limits from all repositories": "取消對所有倉庫的審查限制",

            // Moderators 版主 /organizations/<org-login>/settings/moderators
                "You can add organization members or teams as moderators for your organization. Moderators can block and unblock users from the organization, minimize comments, and manage interaction limits for all public organization repositories.": "您可以將組織成員或團隊新增為組織的主版主。版主可以阻止和解除對該組織使用者的阻止、最小化評論、並管理所有公共組織倉庫的互動限制。",

                "You may add up to": "您最多可以新增",
                "members or teams as moderators.": "成員或團隊作為版主。",
                "Add a member or team": "新增成員或團隊",
                "You don't have any moderators for this organization.": "該組織尚無任何版主",

                // [/Successfully added (@[^\n]+) as a moderator/, "已成功將 $1 新增為版主"], 
                // [/Successfully removed (@[^\n]+) as a moderator/, "已成功將 $1 的版主身份移除"], 
                "Remove moderator": "移除版主",

            // 倉庫預設分支 /organizations/<org-login>/settings/repository-defaults
                "Repository default branch": "倉庫預設分支",
                    "Choose the default branch for new repositories in this organization. You might want to change the default name due to different workflows, or because your integrations still require “master” as the default branch name. You can always change the default branch name on individual repositories.": "為該組織中的新倉庫選擇預設的分支。由於工作流程的不同，或者由於您的整合仍然需要 “master” 作為預設分支名，您可能想改變預設名稱。您可以隨時改變單個倉庫的預設分支名稱。",
                    "Learn more about default branches.": "瞭解更多關於預設分支的資訊。",
                // "Update": "更新",
                "Updating…": "更新中…",
                // 頂部提醒
                    // [/New repositories created in ([^ ]+) will use main as their default branch./, "在 $1 中建立的新倉庫將使用 main 作為其預設分支。"],

                "Repository labels": "倉庫標籤",
                    "Set the labels that will be included when a new repository is created in this organization.": "設定在此組織中建立新的倉庫時將包含的標籤。",
                    "Learn more about managing default labels for your organization.": "瞭解更多關於為您的組織管理預設標籤的資訊。",
                "New label": "新建標籤",
                    "Label preview": "標籤預覽",
                    "Label name": "標籤名",
                    "Description (optional)": "描述（可選）",
                    "Color": "顏色",
                        "Get a new color": "獲得新顏色",
                        "Choose from default colors:": "從預設顏色中選擇：",
                    "Create label": "建立標籤",
                    "Saving...": "儲存中...",
                    "Save changes": "儲存更改",
                // 刪除提醒
                "Are you sure? Deleting a label will remove as a default, and no future repositories will receive this label when created.": "您確定嗎？刪除標籤將作為預設值刪除，以後的倉庫在建立時不會收到此標籤。",

                "label": "個標籤",
                "labels": "個標籤",
                "bug": "BUG",
                    "Something isn't working": "有些東西不工作",
                "dependencies": "依賴性",
                    "Pull requests that update a dependency file": "更新一個依賴檔案的拉取請求",
                "documentation": "文件",
                    "Improvements or additions to documentation": "文件的改進或補充",
                "duplicate": "重複",
                    "This issue or pull request already exists": "這個議題或拉取請求已經存在",
                "enhancement": "增強",
                    "New feature or request": "新功能或請求",
                "good first issue": "好的首發議題",
                    "Good for newcomers": "適合新人",
                "help wanted": "需要幫助",
                    "Extra attention is needed": "需要特別關注",
                "invalid": "無效",
                    "This doesn't seem right": "這似乎不對",
                "question": "問題",
                    "Further information is requested": "要求提供更多資訊",
                "wontfix": "不會修復",
                    "This will not be worked on": "這將不會被處理",

            // 倉庫主題 /orgs/<org-login>/topics
                "No repositories": "尚無倉庫",

            // '/organizations/<org-login>/billing_managers/new'
                "Billing": "賬單",
                "/ Add a billing manager": "/ 新增賬單管理員",
                "A": " ",
                "billing manager": "賬單管理員",
                "is a user who manages the billing settings of your organization.": "是管理您組織的賬單設定的使用者。",
                "have the ability to:": "具備以下能力：",
                    "Change the billing plan": "更改賬單計劃",
                    "Add, update, or remove payment methods": "新增、更新或刪除支付方式",
                    // "": "檢視支付記錄",
                    "Download, and receive receipts": "下載並接收收據",
                    "View a list of billing managers": "檢視帳單管理員列表",
                    "Invite additional billing managers": "邀請其他賬單管理員",
                    "Remove other existing billing managers": "移除其他現有的賬單管理員",
                    "Start, modify, or cancel sponsorships": "開始、修改或取消贊助",
                "be able to:": "能夠：",
                    "Create or access repositories in your organization": "在您的組織中建立或訪問倉庫",
                    "See private members of your organization": "檢視您組織的私人成員",
                    "Be seen in the list of organization members": "在組織成員列表中可見",
                    "Use the organization’s payment method": "使用組織的支付方式",
                    "Purchase, edit, or cancel Marketplace subscriptions": "購買、編輯或取消市場訂閱",
                "Search people": "搜尋成員",
                "Send invitation": "傳送邀請",

            // 操作頁面 /organizations/<org-login>/settings/actions
                "General actions permissions": "常規操作許可權",

                "Policies": "政策",
                    "Choose which repositories are permitted to use GitHub Actions.": "選擇允許哪些倉庫使用 GitHub Actions。",
                    "All repositories": "所有倉庫",
                        "Actions can be run by any repository in the organization": "操作可以由組織中的任何倉庫執行",
                    "Selected repositories": "選定的倉庫",
                        "Actions can only be run by specifically selected repositories": "操作只能由特定選擇的倉庫執行",
                        // [/(\d+) selected repositor(y|ies)/, "$1 個選定的倉庫"],
                        // 對話方塊
                            "Select the organization repositories that may use Actions.": "選擇可以使用操作的組織倉庫。",
                            "Filter repositories": "篩選倉庫",
                            "No repositories found.": "未找到倉庫。",
                            "Select repositories": "選定倉庫",
                    "Disabled": "禁用",
                        "GitHub Actions is disabled for all repositories in the organization": "對組織中的所有倉庫禁用 GitHub Actions",

                    "Allow all actions and reusable workflows": "允許所有操作和可複用的工作流程",
                        "Any action or reusable workflow can be used, regardless of who authored it or where it is defined.": "可以使用任何操作或可複用的工作流程，而不管它是誰創作的或在哪裡定義的。",
                    // "Allow local actions only": "僅允許本地操作",
                    //     // [/Only actions defined in a repository within ([^ ]+) can be used./, "只能使用在 $1 中的倉庫中定義的操作。"], // 操作頁面
                    // "Allow select actions": "允許選擇操作",
                    //     // [/Only actions that match specified criteria, plus actions defined in a repository within ([^ ]+), can be used./, "只能使用符合指定條件的操作，以及在 $1 中的倉庫中定義的操作。"], // 操作頁面
                    // [/Allow ([^ ]+) actions and reusable workflows/, "允許 $1 的操作和可複用的工作流程"],
                    //     [/Any action or reusable workflow defined in a repository within the ([^ ]+) organization can be used./, "可以使用在 $1 組織內的倉庫中定義的任何操作或可複用的工作流程。"], // 操作頁面
                    // [/Allow ([^ ]+), and select non-([^ ]+), actions and reusable workflows/, "允許 $1，並選擇非 $2、操作和可複用的工作流程"],
                    //     [/Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within the ([^ ]+) organization, can be used./, "可以使用符合指定條件的操作或可複用的工作流程，以及在 $1 組織內的倉庫中定義的操作或可複用的工作流程。"], // 操作頁面
                        "Learn more about allowing specific actions and reusable workflows to run.": "瞭解更多關於允許執行特定操作和可複用的工作流程的資訊。",
                        "Allow actions created by GitHub": "允許由 GitHub 建立的操作",
                        "Allow actions by Marketplace": "允許來自市場的操作，",
                        "verified creators": "由經驗證的建立者建立",
                        "Allow specified actions and reusable workflows": "允許指定的操作和可複用的工作流程",
                        "Applies to": "適用於",
                        "repositories only": "倉庫，僅僅",
                            // "Workflows using these actions in private repositories will fail.": "在私有倉庫中使用這些操作的工作流程將失敗。",
                            // "Using a list of specific actions is only supported for public repositories on your current GitHub plan. To have this list apply to private repositories,": "只有當前 GitHub 計劃中的公共倉庫才支援使用特定操作列表。要將此列表應用於私有倉庫，",
                            // "upgrade your plan": "升級您的計劃",
                    "Enter a comma-separated list of actions and reusable workflows": "輸入以逗號分隔的操作和可複用的工作流程列表",
                    "Wildcards, tags, and SHAs are allowed.": "允許使用萬用字元、標籤和 SHA。",
                    "Action examples:": "操作示例：",
                    "Reusable workflow examples:": "可複用的工作流程示例：",
                    "Entire organisation or repository examples:": "整個組織或倉庫的示例：",

                "Artifact and log retention": "工件和日誌保留",
                    "This is the default duration that repositories will retain all artifacts and logs.": "這是倉庫保留所有工件和日誌的預設期限。",
                    "days": "天",

                "Fork pull request workflows from outside collaborators": "從外部協作者，復刻拉取請求工作流程",
                    "Choose which subset of outside collaborators will require approval to run workflows on their pull requests.": "選擇哪些外部協作者的子集需要批准才能對他們的拉取請求執行工作流程。",
                    "Require approval for first-time contributors who are new to GitHub": "要求對首次加入 GitHub 的貢獻者進行審批",
                        "Only first-time contributors who recently created a GitHub account will require approval to run workflows.": "只有最近建立 GitHub 帳戶的首次貢獻者才需要獲得批准才能執行工作流程。",
                    "Require approval for first-time contributors": "要求對首次貢獻者進行審批",
                        "Only first-time contributors will require approval to run workflows.": "只有首次貢獻者才需要獲得批准才能執行工作流程。",
                    "Require approval for all outside collaborators": "要求對所有外部協作者進行審批",
                        "All outside collaborators will always require approval to run workflows on their pull requests.": "所有外部協作者將始終需要批准才能在他們的拉取請求上執行工作流程。",

                "Fork pull request workflows in private repositories": "私有倉庫的復刻拉取請求工作流程",
                    "These settings apply to private repositories. Repository administrators will only be able to change the settings that are enabled here.": "這些設定適用於私有倉庫。倉庫管理員只能改變這裡啟用的設定。",
                    "Run workflows from fork pull requests": "從復刻拉取請求執行工作流程",
                        "This tells Actions to run workflows from pull requests originating from repository forks. Note that doing so will give maintainers of those forks the ability to use tokens with read permissions on the source repository.": "這告訴 Actions 執行工作流程，來自倉庫復刻的拉取請求。請注意，這樣做將使這些復刻的維護者有能力在原始碼庫上使用具有讀取許可權的令牌。",
                        "Send write tokens to workflows from fork pull requests.": "從復刻拉取請求，傳送可寫令牌到工作流程",
                            "This tells Actions to send tokens with": "這告訴 Actions 傳送令牌",
                            "write": "寫入",
                            "permissions to workflows from pull requests originating from repository forks. Note that doing so will give maintainers of those forks": "許可權到工作流程，來自倉庫復刻的拉取請求。請注意，這樣做將授予這些復刻的維護者",
                            "permissions against the source repository.": "許可權，針對源倉庫。",
                        "Send secrets to workflows from fork pull requests.": "從復刻拉取請求，傳送機密到工作流程",
                            "This tells Actions to send repository secrets to workflows from pull requests originating from repository forks.": "這告訴 Actions 傳送倉庫機密到工作流程，來自倉庫復刻的拉取請求。",

                "Workflow permissions": "工作流程許可權",
                    "Choose the default permissions granted to the GITHUB_TOKEN when running workflows in this organization. You can specify more granular permissions in the workflow using YAML.": "在組織中執行工作流程時，選擇授予 GITHUB_TOKEN 的預設許可權。您可以使用 YAML 在工作流程中指定更細化的許可權。",
                    "Repository administrators will only be able to change the default permissions to a more restrictive setting.": "倉庫管理員只能將預設許可權改為更嚴格的設定。",
                        "Read and write permissions": "讀取和寫入許可權",
                            "Workflows have read and write permissions in the repository for all scopes.": "工作流程在倉庫中對所有作用域具有讀和寫的許可權。",
                        "Read repository contents permission": "只讀許可權",
                            "Workflows have read permissions in the repository for the contents scope only.": "工作流程在倉庫中對所有作用域具有隻讀的許可權。",
                        "Allow GitHub Actions to create and approve pull requests": "允許 GitHub Actions 建立和批准拉取請求",
                            "This controls whether GitHub Actions can create pull requests or submit approving pull request reviews.": "這控制 GitHub Actions 是否可以建立拉取請求或提交批准的拉取請求審查。",

            // 執行器頁面 /organizations/<org-login>/settings/actions/runners
                "Host your own runners and customize the environment used to run jobs in your GitHub Actions workflows. Runners added to this organization can be used to process jobs in multiple repositories in your organization.": "託管您自己的執行器，並定製用於在您的 GitHub Actions 工作流程中執行作業的環境。新增到該組織的執行器可以用來處理您的組織中的多個倉庫的工作。",
                "Learn more about self-hosted runners": "瞭解更多關於自託管執行器的資訊",

                "Search runners": "搜尋執行器",
                "New runner": "建立執行器",

                "There are no runners configured": "暫無設定執行器",
                "Learn more about using runners": "瞭解更多關於使用執行器的資訊",
                "to run actions on your own servers.": "在您自己的伺服器上執行操作的資訊。",

                "GitHub-hosted runners": "由 GitHub 託管的執行器",
                "Ready-to-use runners managed by GitHub": "由 GitHub 管理的即用型執行器",
                // [/(\d+) active jobs?/ ,"$1 個活躍的工作"]

            // 由 GitHub 託管的執行器 /organizations/<org-login>/settings/actions/hosted-runners
                "/ GitHub-hosted runners": "/ 由 GitHub 託管的執行器",
                "All jobs usage": "所有工作的使用情況",
                "To increase your concurrency limit, upgrade your": "要增加您的併發限制，請升級您的",
                "GitHub plan.": "GitHub 計劃。",

                "Active jobs": "活躍的工作",
                "There are currently no running jobs": "目前沒有正在執行的工作",
                "Add `": "新增 `",
                "` to your workflow's YAML to send jobs to GitHub-hosted runners.": "`到您的工作流程的YAML中，以傳送作業到 GitHub 託管的執行器。",

            // 建立執行器頁面 /organizations/<org-login>/settings/actions/runners/new
                "/ Create self-hosted runner": "/ 建立自託管執行器",
                "Adding a self-hosted runner requires that you download, configure, and execute the GitHub Actions Runner. By downloading and configuring the GitHub Actions Runner, you agree to the": "新增一個自託管執行器需要您下載、配置並執行 GitHub Actions 執行器。下載並配置 GitHub Actions 執行器 後，您同意",
                    "GitHub Terms of Service": "GitHub 服務條款",
                    "GitHub Corporate Terms of Service": "GitHub 企業服務條款",
                    ", as applicable.": "，如適用。",
                "Runner image": "執行器映象",
                "Architecture": "架構",
                "Download": "下載",
                "We recommend configuring the runner under \"\\actions-runner\". This will help avoid issues related to service identity folder permissions and long path restrictions on Windows.": "我們建議在 “\\actions-runner” 下配置執行器。這將有助於避免與 Windows 上的服務標識資料夾許可權和長路徑限制相關的議題。",
                "Using your self-hosted runner": "使用您的自託管執行器",
                "For additional details about configuring, running, or shutting down the runner, please check out our": "關於配置、執行或關閉執行器的其他細節，請檢視我們的",
                "product docs": "產品文件",

            // 執行器組 /organizations/<org-login>/settings/actions/runner-groups
                "Control access to your runners by specifying the repositories that are able to use your shared organization runners. Upgrade to an Enterprise plan to create groups.": "透過指定能夠使用您的共享組織執行器的倉庫來控制對執行器的訪問。升級到企業計劃以建立組。",
                "New runner group": "建立執行器組",

                "Group": "組",
                "Default": "預設",
                    "This group cannot be deleted and new runners will be automatically assigned to this group if no other group is specified.": "該組不能被刪除，如果沒有指定其他組，新的執行器將被自動分配到該組。",
                    "All repositories, excluding public repositories": "所有倉庫，不包括公共倉庫",

            // Web 鉤子 /organizations/<org-login>/settings/hooks 同倉庫 Web 鉤子 頁面 /<user-name>/<repo-name>/settings/hooks====================================
                "Add webhook": "新增 Web 鉤子",
                "Webhooks allow external services to be notified when certain events happen. When the specified events happen, we’ll send a POST request to each of the URLs you provide. Learn more in our": "Web 鉤子允許在發生某些事件時通知外部服務。當指定的事件發生時，我們將向您提供的每個 URL 傳送 POST 請求。瞭解更多資訊，在我們的",
                "Webhooks Guide": "Web 鉤子指南",

                // 刪除對話方塊
                    "Delete webhook?": "刪除 Web 鉤子？",
                    "This action cannot be undone. Future events will no longer be delivered to this webhook": "此操作無法撤消。未來的事件將不再傳遞到此 Web 鉤子",
                    "Yes, delete webhook": "是的，刪除 Web 鉤子",

           // 新增鉤子 頁面 /organizations/<org-login>/settings/hooks/new 同倉庫新增鉤子 頁面 /<user-name>/<repo-name>/settings/hooks/new ====================================
                "Webhooks /": "Web 鉤子 /",
                "We’ll send a": "我們將",
                "request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON,": "請求到以下 URL，其中包含任何訂閱事件的詳細資訊。您還可以指定要接收的資料格式（JSON、",
                "etc": "等",
                "). More information can be found in": "）。更多資訊可以在",
                "our developer documentation": "開發人員文件",

                "Payload URL": "有效負載 URL",
                "Content type": "內容型別",
                "Secret": "金鑰",
                    "Leave blank to remove secret": "留空以刪除金鑰",

                "SSL verification": "SSL 驗證",
                "By default, we verify SSL certificates when delivering payloads.": "預設情況下，我們在交付有效負載時驗證 SSL 證書。",
                "Enable SSL verification": "啟用 SSL 驗證",
                "Disable": "禁用",
                "(not recommended)": "（不推薦）",
                    "Are you sure?": "您確定嗎？",
                    "Warning": "警告",
                    ": Disabling SSL verification has serious implications.": "：禁用 SSL 驗證具有嚴重的影響。",
                    "SSL verification helps ensure that hook payloads are delivered to your URL endpoint securely, keeping your data away from prying eyes. Disabling this option is": "SSL 驗證有助於確保鉤子有效負載安全地傳送到您的 URL 端點，使您的資料遠離窺探。禁用此選項是",
                    "not recommended": "不推薦的",
                    "Disable, I understand my webhooks may not be secure": "禁用，我明白我的 web 鉤子可能不安全",

                "Which events would you like to trigger this webhook?": "您希望哪些事件觸發此 Web 鉤子？",
                    "Just the": "僅",
                    "push": "推送",
                    "event.": "事件。",
                    "Send me": "傳送給我",
                    "everything": "所有",
                    "Let me select individual events.": "讓我選擇單個事件。",
                        "Branch or tag creation": "分支或標籤建立",
                            "Branch or tag created.": "分支或標籤的建立。",
                        "Branch or tag deletion": "分支或標籤刪除",
                            "Branch or tag deleted.": "分支或標籤的刪除。",
                        "Branch protection rules": "分支保護規則",
                            "Branch protection rule created, deleted or edited.": "分支保護規則的建立、刪除或編輯。",
                        "Check runs": "檢查執行",
                            "Check run is created, requested, rerequested, or completed.": "檢查執行的建立、請求、重新請求或完成。",
                        "Check suites": "檢查套件",
                            "Check suite is requested, rerequested, or completed.": "檢查套件的請求、重新請求或已完成。",
                        "Code scanning alerts": "程式碼掃描警報",
                            "Code Scanning alert created, fixed in branch, or closed": "程式碼掃描警報的建立、在分支中的修復或關閉",
                        "Collaborator add, remove, or changed": "協作者的新增、刪除或更改",
                            "Collaborator added to, removed from, or has changed permissions for a repository.": "協作者新增到倉庫、從倉庫中刪除或更改了倉庫的許可權。",
                        "Commit comments": "提交評論",
                            "Commit or diff commented on.": "提交或差異評論。",
                        "Deploy keys": "部署金鑰",
                            "A deploy key is created or deleted from a repository.": "在倉庫中部署金鑰的建立或刪除。",
                        "Deployment statuses": "部署狀態",
                            "Deployment status updated from the API.": "從 API 更新的部署狀態。",
                        "Deployments": "部署",
                            "Repository was deployed or a deployment was deleted.": "倉庫的部署或刪除部署。",
                        "Discussion comments": "討論評論",
                            "Discussion comment created, edited, or deleted.": "討論評論的建立、編輯或刪除。",
                        // "Discussion": "討論",
                            "Discussion created, edited, pinned, unpinned, locked, unlocked, transferred, answered, unanswered, labeled, unlabeled, had its category changed, or was deleted.": "討論的建立、編輯、固定、取消固定、鎖定、解鎖、轉移、回答、未回答、標記、未標記、更改其類別或刪除。",
                        "Forks": "復刻",
                            "Repository forked.": "倉庫復刻。",
                        "Issue comments": "發表評論",
                            "Issue comment created, edited, or deleted.": "議題評論的建立、編輯或刪除。",
                        // "Issue": "議題",
                            "Issue opened, edited, deleted, transferred, pinned, unpinned, closed, reopened, assigned, unassigned, labeled, unlabeled, milestoned, demilestoned, locked, or unlocked.": "議題的開啟、編輯、刪除、轉移、釘住、取消釘住、關閉、重新開啟、分配、未分配、標記、未標記、密閉、去密閉、鎖定或解鎖。",
                        "Labels": "標籤",
                            "Label created, edited or deleted.": "標籤的建立、編輯或刪除。",
                        "Memberships": "團隊成員", // 組織設定
                            "Team membership added or removed.": "新增或刪除團隊成員。",
                        "Meta": "元資料",
                            "This particular hook is deleted.": "這個特定的鉤子被刪除。",
                        "Milestones": "里程碑",
                        "Milestone created, closed, opened, edited, or deleted.": "里程碑的建立、關閉、開啟、編輯或刪除。",
                        "Org blocks": "組織黑名單", // 組織設定
                            "A user has been blocked or unblocked.": "使用者拉黑或解除拉黑。",
                        "Organizations": "組織", // 組織設定
                            "Organization deleted, renamed, member invited, member added, or member removed.": "組織被刪除、重新命名、邀請成員、新增成員或刪除成員。",
                        // "Packages": "軟體包",
                            "GitHub Packages published or updated in a repository.": "在倉庫中 GitHub 軟體包的釋出或更新 。",
                        "Page builds": "頁面構建",
                            "Pages site built.": "頁面站點建成。",
                        "Project cards": "專案卡",
                            "Project card created, updated, or deleted.": "專案卡的建立、更新或刪除。",
                        "Project columns": "專案欄目",
                            "Project column created, updated, moved or deleted.": "專案列目的建立、更新、移動或刪除。",
                        // "": "專案",
                            "Project created, updated, or deleted.": "專案的建立、更新或刪除。",
                        "Pull request review comments": "拉取請求的審查評論",
                            "Pull request diff comment created, edited, or deleted.": "拉取請求差異評論的建立、編輯或刪除。",
                        "Pull request review threads": "拉取請求的審查執行緒",
                            "A pull request review thread was resolved or unresolved.": "拉取請求審查執行緒的解決或未解決。",
                        "Pull request reviews": "拉取請求審查",
                            "Pull request review submitted, edited, or dismissed.": "拉取請求審查的提交、編輯或忽略。",
                        // "": "拉取請求",
                            "Pull request opened, closed, reopened, edited, assigned, unassigned, review requested, review request removed, labeled, unlabeled, synchronized, ready for review, converted to draft, locked, unlocked, auto merge enabled, auto merge disabled, milestoned, or demilestoned.": "拉取請求的開啟、關閉、重新開啟、編輯、分配、未分配、審查請求、審查請求的刪除、標記、未標記、同步、準備審查、轉換為草稿、鎖定、解鎖、啟用自動合併、禁用自動合併、里程碑或取消里程碑。",
                        "Pushes": "推送",
                            "Git push to a repository.": "Git 推送到倉庫。",
                        "Registry packages": "註冊軟體包",
                            "Registry package published or updated in a repository.": "註冊軟體包的釋出或更新。",
                        "Releases": "發行版",
                            "Release created, edited, published, unpublished, or deleted.": "發行版的建立、編輯、釋出、取消釋出或刪除。",
                        // "": "倉庫",
                            "Repository created, deleted, archived, unarchived, publicized, privatized, edited, renamed, or transferred.": "倉庫的建立、刪除、存檔、取消存檔、公開、私有化、編輯、重新命名或轉讓。",
                        "Repository imports": "倉庫匯入",
                            "Repository import succeeded, failed, or cancelled.": "倉庫匯入的成功、失敗或取消。",
                        "Repository vulnerability alerts": "倉庫漏洞警報",
                            "Dependabot alert (aka dependency vulnerability alert) created, resolved, or dismissed on a repository.": "Dependabot 警報（又名依賴漏洞警報）在倉庫上的建立、解決或解除。",
                        "Secret scanning alerts": "金鑰掃描警報",
                            "Secrets scanning alert created, resolved, or reopened": "金鑰掃描警報的建立、解決或重新開啟",
                        // "": "星標",
                            "A star is created or deleted from a repository.": "從倉庫中建立或刪除星標。",
                        "Statuses": "狀態",
                            "Commit status updated from the API.": "從 API 更新的提交狀態。",
                        "Team adds": "團隊新增",
                            "Team added or modified on a repository.": "在倉庫上新增或修改的團隊。",
                        "Teams": "團隊",  // 組織設定
                            "Team is created, deleted, edited, or added to/removed from a repository.": "團隊被建立、刪除、編輯或新增到倉庫/從倉庫中刪除。",
                        "Visibility changes": "可見性變化",
                            "Repository changes from private to public.": "倉庫從私有更改為公共。",
                        "Watches": "關注",
                            "User stars a repository.": "使用者給一個倉庫加星標。",
                        "Wiki": "",
                            "Wiki page updated.": "Wiki 頁面的更新。",
                        "Workflow jobs": "工作流程的工作",
                            "Workflow job queued, requested or completed on a repository.": "在倉庫上工作流程的排隊、請求或完成。",
                        "Workflow runs": "工作流程的執行",
                            "Workflow run requested or completed on a repository.": "在倉庫上的工作流程的請求或完成。",
                    "Active": "啟用",
                    "We will deliver event details when this hook is triggered.": "當鉤子被觸發時，我們將提供事件詳細資訊。",

                // 頂部提醒
                "Okay, that hook was successfully created. We sent a ping payload to test it out! Read more about it at https://docs.github.com/webhooks/#ping-event.": "好的，這個鉤子已經成功建立。我們傳送了一個 ping 負載來測試它! 閱讀更多關於它的資訊，請訪問 https://docs.github.com/webhooks/#ping-event。",

            // 管理 鉤子 /<user-name>/<repo-name>/settings/hooks/<id>
                "Manage webhook": "管理 Web 鉤子",
                "If you've lost or forgotten this secret, you can change it, but be aware that any integrations using this secret will need to be updated. —": "如果您丟失或忘記了此金鑰，則可以更改它，但請注意，使用此金鑰的任何整合都需要更新。 —",
                "Change Secret": "更改金鑰",
                "Update webhook": "更新 Web 鉤子",
                // 頂部提醒
                    "Okay, the hook was successfully updated.": "好的，Web 鉤子已經成功更新。",
                "Delete webhook": "刪除 Web 鉤子",

            //  /<user-name>/<repo-name>/settings/hooks/<id>/deliveries
                "Recent Deliveries": "最近交付",
                    "redelivery": "再交付",
                "Request": "請求",
                "Response": "應答",
                "Redeliver": "重新交付",
                    "Redeliver payload?": "重新交付有效負載？",
                    "The payload will be delivered to": "該有效負載將被髮送到",
                    "using the current webhook configuration.": "使用當前的 Web 鉤子 配置。",
                    "Yes, redeliver this payload": "是的，重新發送此有效負載",

                // [/Completed in (\d+) seconds./, "在 (\d+) 秒內完成。"],

            // 討論 /organizations/<org-login>/settings/discussions
                "Discussions for your organization": "您組織的討論",
                "Setting up Discussions for your organization will allow you to broadcast updates, answer questions, and hold conversations for the entire organization.": "為您的組織設定 “討論”，將您能夠為整個組織廣播更新、回答問題和舉行對話。",
                "Enable discussions for this organization": "啟用組織的討論功能",

            // Packages 軟體包 /organizations/<org-login>/settings/packages
                "Packages permissions": "軟體包許可權",
                "Container Creation": "容器建立",
                "Members will be able to publish only the selected visibility types for packages and containers. Outside collaborators can never publish packages or containers.": "成員只能釋出選定可見性型別的軟體包和容器。外部協作者永遠不能釋出軟體包或容器。",
                // "": "公共",
                    "Members will be able to create public packages, visible to anyone.": "成員將能夠建立公共包，對任何人都可見。",
                // "": "私有",
                    "Members will be able to create private packages, visible to organization members with permission.": "成員將能夠建立私有包，對具有許可權的組織成員可見。",
                "Internal": "內部",
                    "Members will be able to create internal packages, visible to all organization/enterprise members.": "成員將能夠建立內部包，對所有組織/企業成員可見。",

                "Deleted Packages": "刪除軟體包",
                "These are packages that have been previously deleted belonging to this organization. You can restore a package deleted within the last 30 days.": "這些是先前已刪除的屬於您組織的軟體包。您可以恢復在過去 30 天內刪除的包。",
                "Search deleted packages": "搜尋已刪除的軟體包",

            // 組織 GitHub Pages /organizations/<org-login>/settings/pages 同個人設定 GitHub Pages https://github.com/settings/pages
                "Verified domains": "經驗證的域名",
                "Add a domain": "新增域名",
                "There are no verified domains for this organization.": "此組織暫無經驗證的域名", // 組織設定
                "Verify domains to restrict who can publish GitHub Pages on them.": "驗證域名以限制誰可以在上面釋出 GitHub Pages。",

            // 組織 GitHub Pages - 新增域名 /organizations/<org-login>/settings/pages_verified_domains/new 同個人設定 GitHub Pages - 新增域名 https://github.com/settings/pages_verified_domains/new
                "Add a verified domain": "經驗證的域名",
                "What domain would you like to add?": "您想新增什麼域名？",
                "Add domain": "新增域名",

            // 專案 /organizations/<org-login>/settings/projects
                "Project boards on GitHub help you organize and prioritize your work. You can create project boards for specific feature work, comprehensive roadmaps, or even release checklists.": "GitHub 上的專案板可以幫助您組織工作並確定其優先次序。您可以為特定的功能工作、全面的路線圖、甚至是釋出清單建立專案板。",
                "Enable projects for the organization": "啟用專案，為組織",
                    "This allows members to create projects for the": "允許成員建立專案，為",
                    "organization. You can add issues from any": "組織。您可新增議題，為",
                    "-owned repository. This does not affect projects in": "組織擁有的倉庫。這並不影響",
                    "-owned repositories in any way.": "組織擁有的倉庫，以任何方式。",
                "Enable projects for all repositories": "啟用專案，為所有倉庫",
                    "This allows members to create projects in all repositories in the": "這允許成員在所有倉庫中建立專案，在",
                    "organization. This affects every project at the repository level in the": "組織中。這會影響倉庫級別的每個專案，在",
                    "organization. You can still disable projects for a specific repository in repository settings.": "組織中。您仍然可以在倉庫設定中禁用特定倉庫的專案。",
                "Organization project permissions": "組織專案許可權",
                "Permissions can be managed in the project’s settings on a per-project basis.": "可以在每個專案的專案設定中管理許可權。",
                "View all projects": "檢視所有專案",

            // 身份驗證安全  /organizations/<org-login>/settings/security
                "Two-factor authentication": "雙重身份驗證",
                "Requiring an additional authentication method adds another level of security for your organization.": "要求額外的身份驗證方法為您的組織增加了另一個級別的安全性。",
                // [/Require two-factor authentication for everyone in the ([^]+) organization./, "要求對 $1 組織中的每個成員進行雙重身份驗證。"],
                "Members, billing managers, and outside collaborators who do not have two-factor authentication enabled for their personal account will be removed from the organization and will receive an email notifying them about the change.": "未為其個人帳戶啟用雙重身份驗證的成員、賬單管理員和外部協作者將從組織中刪除，並會收到一封電子郵件，通知他們有關更改。",

                // 頂部提醒
                    "Enabling two-factor authentication requirement.": "啟用雙重身份驗證。",
                    "Disabled two-factor authentication requirement.": "禁用雙重身份驗證。",

                "SSH Certificate Authorities": "SSH 證書頒發機構",
                "Provide SSH certificates that members can use to access your resources with Git": "提供 SSH 證書，成員可以用 Git 來訪問您的資源",
                "Try risk-free for 30 days": "無風險試用 30 天",
                "learn more": "瞭解更多",
                ", or": "，或",
                "dismiss this message.": "忽略此訊息。",

                "IP allow list": "IP 白名單",
                "An IP allow list lets your organization limit access based on the IP address a person is accessing from.": "IP  白名單可讓您的組織根據成員訪問的 IP 地址來限制訪問。",
                "Restrict access to your organization's assets by configuring a list of IP addresses that are allowed to connect": "透過配置 IP 白名單來限制對組織資產的訪問",

            // 程式碼安全性與分析 /organizations/<org-login>/settings/security_analysis
                "Configure security and analysis features": "配置安全和分析功能",
                "Security and analysis features help keep your repositories secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your organization's repositories.": "安全和分析功能有助於確保您的倉庫安全和更新。透過啟用這些功能，您授予我們對您組織的倉庫執行只讀分析的許可權。",

                "Disable all": "禁用全部",
                "Enable all": "啟用全部",

                "Dependency graph": "依賴關係圖",
                    "Understand your dependencies.": "瞭解您的依賴項。",
                    "Automatically enable for new private repositories": "為新私有倉庫自動啟用",

                    // 對話方塊
                    "Disable dependency graph": "禁用依賴關係圖",
                    // [/You're about to disable dependency graph on all private repositories in ([^ ]+). This will also disable Dependabot alerts and Dependabot security updates on those repositories./, "您即將禁用 $1 組織中所有私有倉庫上的依賴關係圖。這也將禁用這些倉庫的 Dependabot 警報和 Dependabot 安全更新。"],
                    "Enable by default for new private repositories": "預設為新私有倉庫啟用",

                    "Enable dependency graph": "啟用依賴關係圖",
                    // [/You're about to enable dependency graph on all private repositories in ([^ ]+)./, "您即將啟用 $1 組織中的所有私有倉庫上的依賴關係圖。"],

                "Dependabot alerts": "Dependabot 警報",
                    "Be alerted when a new vulnerability is found in one of your dependencies.": "在您的依賴項中發現新漏洞時收到警報。",
                    "Automatically enable for new repositories": "為新倉庫自動啟用",

                    // 對話方塊
                        "Disable Dependabot alerts": "禁用 Dependabot 警報",
                        // [/You're about to disable Dependabot alerts on all repositories in ([^ ]+). This will also disable Dependabot security updates on those repositories./, "您即將禁用 $1 組織中所有倉庫上的 Dependabot 警報。這也將禁用這些倉庫的 Dependabot 安全更新。"],
                        "Enable by default for new repositories": "預設為新倉庫啟用",

                        "Enable Dependabot alerts": "啟用 Dependabot 警報",
                        // [/You're about to enable Dependabot alerts on all repositories in ([^ ]+). Alerts require the dependency graph, so we'll also turn that on for all repositories./, "您即將啟用 $1 組織中所有倉庫上的 Dependabot 警報。Dependabot 警報需要依賴關係圖，因此我們還將為所有倉庫開啟它。"],

                "Dependabot security updates": "Dependabot 安全更新",
                    "Easily upgrade to non-vulnerable dependencies.": "輕鬆升級到無漏洞的依賴項。",

                    // 對話方塊
                    "Disable Dependabot security updates": "禁用 Dependabot 安全更新",
                    // [/You're about to disable Dependabot security updates on all repositories in ([^ ]+)./, "您即將禁用 $1 組織中的所有倉庫上的 Dependabot 安全更新。"],

                    "Enable Dependabot security updates": "啟用 Dependabot 安全更新",
                    // [/You're about to enable Dependabot security updates on all repositories in ([^ ]+). Dependabot security updates require the dependency graph and Dependabot alerts, so we'll also turn that on for all repositories./, "您即將啟用 $1 組織中的所有倉庫上的 Dependabot 安全更新。Dependabot 安全更新需要依賴關係圖和 Dependabot 警報，因此我們還將為所有倉庫開啟它。"],

                "Security managers": "安全管理員",
                "Grant a team permission to manage security alerts and settings across your organization. This team will also be granted read access to all repositories.": "授予團隊管理整個組織的安全警報和設定的許可權。該團隊還將被授予對所有倉庫的讀取許可權。",
                "Learn more about these security privileges": "瞭解更多關於這些安全特權的資訊",
                "Search for teams": "搜尋團隊",

            // 經驗證和批准的域名 /organizations/<org-login>/settings/domains
                "Verified & approved domains": "經驗證和批准的域名",
                "You can verify the domains controlled by your organization to confirm your organization's identity on GitHub. A": "您可以驗證組織控制的域，以確認組織在 GitHub 上的身份。一個",
                "badge will be added to your organization's profile page if all of the domains displayed on your profile (e.g. public email or website URL) are verified. You may also approve a domain by first adding it to the list of eligible domains. Approved domains may be used for email notification routing to users with verified emails that do not belong to a domain that you can verify.": "的徽章，您的組織的資料頁面上顯示，則表明您的資料中顯示的所有域名（例如公共電子郵箱地址或網站 URL）都經過驗證。您也可以透過，首先將一個域名新增到合格的域名列表中來批准該域名。已批准的域名可用於透過電子郵件通知具有經過驗證的郵箱地址的使用者，這些電子郵箱地址不屬於您可以驗證的域名。",

            // 操作機密 /organizations/<org-login>/settings/secrets/actions
                "Actions secrets": "操作機密",
                "New organization secret": "新建組織機密",
                "Secrets are environment variables that are": "機密是環境變數",
                "encrypted": "被加密",
                ". Anyone with": "。任何對此倉庫具有",
                "collaborator": "協作者",
                // "access to this repository can use these secrets for Actions.": "訪問許可權的人都可以將這些機密用於操作。",
                "access to the repositories with access to each secret can use it for Actions.": "訪問許可權的人都可以訪問倉庫的每個機密用於操作。",
                "Secrets are not passed to workflows that are triggered by a pull request from a fork.": "機密不會傳遞給來自復刻的拉取請求觸發的工作流程。",

                "Organization secrets cannot be used by private repositories with your plan.": "私有倉庫不能在您的計劃中使用組織機密。",
                "Please consider": "請考慮",
                "upgrading your plan": "升級您的計劃",
                "if you require this functionality.": "如果您需要此功能。",

                "There are no secrets for this organization.": "該組織尚無機密。",
                "Secrets created at the organization level can be shared with specified repositories.": "在組織層面建立的機密可以與指定的倉庫共享。",

                "Available to": "適用於",
                "Updated": "更新於",
                "Remove": "移除",

                // 頂部提醒
                    "Failed to add secret. Secret names can only contain alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed. Must start with a letter ([a-z], [A-Z]) or underscores (_).": "新增機密失敗。機密名稱只能包含字母數字字元（[a-z]、[A-Z]、[0-9]）或下劃線 (_)。不允許有空格。必須以字母 ([a-z], [A-Z]) 或下劃線 (_) 開頭。",
                    "Secret added.": "添加了機密。",
                    "Secret deleted.": "刪除了機密。",

                // 刪除機密對話方塊
                "Remove secret": "刪除機密",
                    "Are you sure you want to delete": "您確定要刪除",
                    "Yes, remove this secret from the organization": "是的，從組織中刪除該機密",

            // 更新操作機密 /organizations/<org-login>/settings/secrets/actions/<name>
                "/ Update secret": "/ 更新機密",
                "Secret values are encrypted and cannot be displayed, but you can": "機密值已加密，無法顯示，但您可以",
                "enter a new value.": "輸入一個新值。",
                "Update secret": "更新機密",
                    "Updating…": "更新中…",

            // 新建組織機密 /organizations/<org-login>/settings/secrets/actions/new
                "/ New secret": "/ 新建機密",
                "Add secret": "新增機密",
                    "Adding…": "新增中…",

                "Name": "名稱",
                "Value": "值",

                "Repository access": "倉庫許可權",
                "Public repositories": "公共倉庫",
                "This secret may be used by public repositories in the organization. Paid GitHub plans include private repositories.": "此機密可能會被組織中的公共倉庫使用。付費的 GitHub 計劃包括私有倉庫。",
                "Private repositories": "私有倉庫",
                // "": "選定的倉庫",
                "This secret may only be used by specifically selected repositories.": "此秘密只能由特別選定的倉庫使用。",
                    // 機密倉庫訪問 對話方塊
                    "Secret repository access": "機密倉庫訪問",
                    "Select the organization repositories that may use this secret.": "選擇可以使用該機密的組織倉庫。",
                    "Update selection": "更新選擇",

            // Dependabot 機密 /organizations/<org-login>/settings/secrets/dependabot
                "Dependabot secrets": "Dependabot 機密",
                "Secrets are credentials that are": "機密是憑證",
                // "access to this repository can use these secrets for Dependabot.": "訪問許可權的人可以將這些機密用於 Dependabot。",
                "access to the repositories with access to each secret can use it for Dependabot.": "訪問許可權的人都可以訪問倉庫的每個機密用於 Dependabot。",
                "Secrets are not passed to forks.": "機密不會傳遞給復刻。",

            // Dependabot 機密 /organizations/<org-login>/settings/secrets/dependabot/new
                "This secret may be used by any repository in the organization.": "組織中的任何倉庫都可以使用此機鑰。",
                "This secret may be used by any private repository in the organization.": "組織中的任何私有倉庫都可以使用此機鑰。",

            // 第三方訪問 /organizations/<org-login>/settings/oauth_application_policy
                "Third-party application access policy": "第三方應用訪問策略",
                "Policy:": "策略：",
                    "Access restricted": "訪問受限",
                        "Only approved applications can access data in this organization. Applications owned by": "只有獲得批准的應用程式才能訪問該組織中的資料。應用程式由",
                        "always have access.": "擁有的始終可以訪問。",
                        "Remove restrictions": "解除限制",
                        // 解除限制對話方塊
                        "You’re about to remove all third-party application restrictions. Please read this carefully.": "您即將刪除所有第三方應用限制。請仔細閱讀。",
                        "Removing third-party application restrictions will immediately give member authorized applications access to private data in the": "取消第三方應用限制，將立即允許成員授權的應用程式訪問私人資料，在",
                        "Please be sure you want to do this.": "請確定您想這麼做。",
                        "Yes, remove application restrictions": "是的，取消應用限制",
                    "No restrictions": "未受限",
                        "All applications authorized by organization members have access to": "所有由組織成員授權的應用程式都可以訪問",
                        "’s data.": "的資料。",
                        "Setup application access restrictions": "設定應用程式訪問限制",

                "No pending requests": "沒有待處理的請求",
                "As members request access for specific applications, those requests will be listed here for your approval. You can start by browsing": "當成員請求訪問特定應用程式時，這些請求將在此處列出以供您批准。您可以瀏覽",
                "your own authorized applications": "您授權的應用程式",

                "When authorized, applications can act on behalf of organization members. Your access policy determines which applications can access data in your organization.": "獲得授權後，應用程式可以代表組織成員進行操作。您的訪問策略決定了哪些應用程式可以訪問您組織中的資料。",
                "Read more about third-party access and organizations.": "閱讀更多關於第三方訪問和組織的資訊。",

            // 設定應用程式訪問限制 /settings/oauth_application_policy/confirm
                "Third-party application restrictions": "第三方應用限制",
                "create an extra layer of security that allows owners to better control how applications access data in their organization.": "建立一個額外的安全層，使所有者能夠更好地控制應用如何訪問其組織中的資料。",
                "Organization owners maintain a whitelist of trusted applications.": "組織所有者維護受信任應用白名單。",

            // GitHub 應用 /organizations/<org-login>/settings/installations
                "Installed GitHub Apps": "安裝的 GitHub 應用",
                "GitHub Apps augment and extend your workflows on GitHub with commercial, open source, and homegrown tools.": "GitHub 應用透過商業、開源和自主開發的工具來增強和擴充套件您在 GitHub 上的工作流程。",

                "Pending GitHub Apps installation requests": "待處理的 GitHub 應用程式安裝請求",
                "Members in your organization can request that GitHub Apps be installed. Pending requests are listed below.": "您組織中的成員可以申請安裝 GitHub 應用程式。待處理的請求列在下面。",

            // 定時提醒 /organizations/<org-login>/settings/reminders
                "No scheduled reminders created.": "未建立預定提醒。",
                "To keep projects moving, you can now remind your teams about pull requests they need to review.": "為了保持專案進展，您現在可以提醒您的團隊關於他們需要審查的拉取請求。",

                "Connect a Slack workspace to get started": "連線 Slack 工作區以開始使用",
                // 對話方塊
                "Add Slack workspace": "新增 Slack 工作區",
                "We have rolled out a new version of the GitHub app in Slack. If you are currently on the old app, please consider switching over to the new app! More info about migration can be found": "我們已經在 Slack 中推出了新版本的 GitHub 應用。如果您目前使用的是舊版應用，請考慮切換到新版應用！更多關於遷移的資訊可以點選",
                "here.": "這裡。",
                "1. Clicking on 'Add' will configure your Slack workspace with the new GitHub app.": "1. 點選 “新增” 將用新的 GitHub 應用程式配置您的 Slack 工作區。",
                "2. If you already have the old app in Slack, it will uninstall the legacy app and install the new one.": "2. 如果您在 Slack 中已有舊應用程式，它將解除安裝舊應用程式並安裝新應用程式。",
                "Add workspace": "新增工作區",

            // Sponsorship log 贊助日誌 /organizations/<org-login>/settings/sponsors-log
                "Sponsors log": "贊助日誌",
                "New sponsorships, changes, and cancellations": "新的贊助、更改和取消",
                "Period:": "週期：",
                    "Filter activity": "篩選活動",
                    "All-time": "所有時間",
                    "Past Day": "過去一天",
                    "Past Week": "過去一週",
                    "Past Month": "過去一月",
                    "Past Year": "過去一年",
                "No sponsorship activity in this time period": "這段時間沒有贊助活動",
                // "This is where you can review activity from your sponsorships.": "您可以在此處檢視您的贊助活動。",
                // [/This is where you can review activity from ([^ ]+)'s sponsorships./ "在這裡您可以檢視 $1 贊助的活動。"],

            // Audit log 審計日誌 /organizations/<org-login>/settings/audit-log
                "Loading audit log entries…": "正在載入日誌條目…",
                "Filters": "篩選",
                    "Yesterday’s activity": "昨日的活動",
                    "Organization membership": "組織成員",
                    "Team management": "團隊管理",
                    "Repository management": "倉庫管理",
                    "Billing updates": "帳單更新",
                    "Hook activity": "掛鉤活動",
                "Search audit logs": "搜尋審計日誌",
                "Export Git Events": "匯出 Git 事件",
                    "Export Git events": "匯出 Git 事件",
                    "Export file will be limited to 100 Mb.": "匯出檔案將限制為 100 Mb。",
                    "Select events from:": "選擇事件，從：",
                    "To:": "到：",
                    "Download Results": "下載結果",
                "Export": "匯出",
                    "Exporting": "匯出中",
                "Recent events": "最近的事件",

                "Clear current search query": "清除當前搜尋查詢",
                // [/Found (\d+) events?/, "找到 $1 個事件"],
                "We couldn’t find any events matching your search.": "我們未找到與您的搜尋相匹配的活動。",

                "Newer": "新的",
                "Older": "舊的",

            // 刪除的倉庫 /organizations/<org-login>/settings/deleted_repositories
                "Deleted Repositories": "刪除的倉庫",
                // [/No recoverable repositories were found for ([^ ]+)./, "沒有發現 $1 中可恢復倉庫"],
                "It may take up to an hour for repositories to be displayed here. You can only restore repositories that have no forks or have not been forked.": "倉庫可能需要一個小時的時間才能顯示在這裡。您只能恢復沒有復刻或沒有被複刻的倉庫。",

            // OAuth 應用程式 /organizations/<org-login>/settings/applications
                "No Organization Owned Applications": "沒有組織擁有的應用程式",
                "Do you want to develop an application that uses the": "您想開發一個應用程式，使用",
                "? Register an application to generate OAuth tokens.": "？註冊應用程式以生成 OAuth 令牌。",
                "Register an application": "註冊應用程式",

            // GitHub 應用程式 /organizations/<org-login>/settings/apps
                "New GitHub App": "新 GitHub 應用程式",
                "Want to build something that integrates with and extends GitHub?": "想要構建與 GitHub 整合和擴充套件的東西嗎？",
                "Register a new GitHub App": "註冊新的 GitHub 應用程式",
                "to get started developing on the GitHub API. You can also read more about building GitHub Apps in our": "，開始在 GitHub API 上進行開發。您還可以在我們的文件中閱讀有關構建 GitHub 應用程式的更多資訊",
                "developer documentation": "開發者文件",

                "Management": "管理人員",
                "Choose members that are allowed to manage all GitHub Apps belonging to this organization.": "選擇允許管理屬於該組織的所有 GitHub 應用程式的成員。",
                "Organization owner": "組織所有者",
                "Search by username or full name": "按使用者名稱或全名搜尋",
                "Grant": "授予",

            // 釋出者驗證 /organizations/<org-login>/settings/publisher
                "There must be 1 or more GitHub/OAuth App registered by the organization to request publisher verification": "組織必須有 1 個或多個 GitHub/OAuth 應用程式才能請求釋出者驗證",
                "You can request publisher verification for your organization. A": "您可以為您的組織請求釋出者驗證。一個",
                "badge will be added to your apps published in the marketplace, recognizing that apps and other published materials were created by you.": "徽章將新增到您在市場上釋出的應用程式中，以識別應用程式和其他已釋出材料是由您建立的。",
                "Learn more about publisher verification.": "瞭解更多關於釋出者驗證的資訊。",

        },
        "regexp": [ // 正則翻譯
            // 軟體庫
            [/No recoverable packages were found for ([^ ]+)./, "沒有找到 $1 的可恢復包。"],
            [/(\d+) labels?/, "$1 個標籤"],
            [/New repositories created in ([^ ]+) will use ([^ ]+) as their default branch./, "在 $1 中建立的新倉庫將使用 $2 作為其預設分支。"],
            [/Your default branch name will be ([^ ]+)/, "您的預設分支名稱將是 $1"],
            [/If enabled, all users with read access can create and comment on discussions in ([^ ]+)’s repositories./, "如果啟用，所有具有讀取許可權的使用者都可以在 $1 的倉庫中建立和評論討論。"],
            [/([^ ]+) repositories you contribute to/, "您貢獻的 $1 倉庫"],
            [/There are no repositories in ([^ ]+) that you’ve contributed to and that you can set topics on./, "$1  中沒有您貢獻過的並且可以設定主題的倉庫。"],
            // [/Only actions defined in a repository within ([^ ]+) can be used./, "只能使用在 $1 中的倉庫中定義的操作。"], // 操作頁面
            // [/Only actions that match specified criteria, plus actions defined in a repository within ([^ ]+), can be used./, "只能使用符合指定條件的操作，以及在 $1 中的倉庫中定義的操作。"], // 操作頁面
            [/Allow ([^ ]+) actions and reusable workflows/, "允許 $1 的操作和可複用的工作流程"],
            [/Any action or reusable workflow defined in a repository within the ([^ ]+) organization can be used./, "可以使用在 $1 組織內的倉庫中定義的任何操作或可複用的工作流程。"], // 操作頁面
            [/Allow ([^ ]+), and select non-([^ ]+), actions and reusable workflows/, "允許 $1，並選擇非 $2、操作和可複用的工作流程"],
            [/Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within the ([^ ]+) organization, can be used./, "可以使用符合指定條件的操作或可複用的工作流程，以及在 $1 組織內的倉庫中定義的操作或可複用的工作流程。"], // 操作頁面
            [/selected repositor(y|ies)/, "個選定的倉庫"],
            [/This is where you can review activity from ([^ ]+)'s sponsorships./,  "在這裡您可以檢視 $1 贊助的活動。"],
            [/No recoverable repositories were found for ([^ ]+)./, "沒有發現 $1 中可恢復倉庫"],
            [/Require two-factor authentication for everyone in the ([^]+) organization./, "要求對 $1 組織中的每個成員進行雙重身份驗證。"],
            [/Leaving it at (\$\d+\.\d{2}) will avoid any extra expenses/, "將其限制在 $1 美元將避免任何額外的費用。"],
            [/You're about to disable dependency graph on all private repositories in ([^ ]+). This will also disable Dependabot alerts and Dependabot security updates on those repositories./, "您即將禁用 $1 組織中所有私有倉庫上的依賴關係圖。這也將禁用這些倉庫的 Dependabot 警報和 Dependabot 安全更新。"],
            [/You're about to enable dependency graph on all private repositories in ([^ ]+)./, "您即將啟用 $1 組織中的所有私有倉庫上的依賴關係圖。"],
            [/You're about to disable Dependabot alerts on all repositories in ([^ ]+). This will also disable Dependabot security updates on those repositories./, "您即將禁用 $1 組織中所有倉庫上的 Dependabot 警報。這也將禁用這些倉庫的 Dependabot 安全更新。"],
            [/You're about to enable Dependabot alerts on all repositories in ([^ ]+). Alerts require the dependency graph, so we'll also turn that on for all repositories./, "您即將啟用 $1 組織中所有倉庫上的 Dependabot 警報。Dependabot 警報需要依賴關係圖，因此我們還將為所有倉庫開啟它。"],
            [/You're about to disable Dependabot security updates on all repositories in ([^ ]+)./, "您即將禁用 $1 組織中的所有倉庫上的 Dependabot 安全更新。"],
            [/You're about to enable Dependabot security updates on all repositories in ([^ ]+). Dependabot security updates require the dependency graph and Dependabot alerts, so we'll also turn that on for all repositories./, "您即將啟用 $1 組織中的所有倉庫上的 Dependabot 安全更新。Dependabot 安全更新需要依賴關係圖和 Dependabot 警報，因此我們還將為所有倉庫開啟它。"],
            [/This may change the permission that the organization’s (\d+) members? has on its (\d+) repositories?./, "這可能會更改組織的 $1 個成員對其 $2 個倉庫的許可權。"], // 組織 基本許可權更改
            [/Found (\d+) events?/, "找到 $1 個事件"], // 組織 審計日誌
            [/Successfully added (@[^\n]+) as a moderator/, "已成功將 $1 新增為版主"], // 版主 頂部提醒
            [/Successfully removed (@[^\n]+) as a moderator/, "已成功將 $1 的版主身份移除"], // 版主 頂部提醒
         ],
    },

    "projects": { // 專案頁面(含倉庫專案)
        "static": { // 靜態翻譯
            // >>>>>>>>>>>>>>>>>>倉庫 公共部分<<<<<<<<<<<<<<<<<<<<<<<<<<<
                // 頭部條
                "Public": "公共",
                "Private": "私有",
                "Public archive": "公共存檔",
                "Private archive": "私有存檔",

                "forked from": "復刻自",

                "Ignoring": "忽略",
                "Stop ignoring": "取消忽略",
                "Watch": "關注",
                "Unwatch": "取消關注",

                "Star": "星標",
                "Unstar": "已加星標",
                "Fork": "復刻",
                "Unfork": "取消復刻",

                // 贊助對話方塊
                "External links": "外部連結",
                "Learn more about funding links in repositories": "瞭解更多關於倉庫中的贊助連結的資訊",
                "Report abuse": "舉報濫用",

                // 關注 & 訂閱通知設定 下拉選單
                "Notifications": "通知型別",
                "Participating and @mentions": "參與和 @您",
                "Only receive notifications from this repository when participating or @mentioned.": "僅在參與或 @您時接收來自此倉庫的通知。",
                "All Activity": "所有活動",
                "Notified of all notifications on this repository.": "接收來自此倉庫所有通知。",
                "Ignore": "忽略",
                "Never be notified.": "永不接收通知。",
                "Custom": "自定義",
                "Select events you want to be notified of in addition to participating and @mentions.": "選擇除參與和 @您之外還要接收通知的事件。",
                "Discussions are not enabled for this repo": "此倉庫未啟用討論功能",
                // "Releases": "發行版",
                // "Discussions": "討論",
                "Security alerts": "安全警報",
                //"Cancel": "取消",
                "Apply": "應用",

               //
                "Add to list": "新增到清單",
                "Lists": "清單",
                "You don't have any lists yet.": "您尚無任何清單。",
                "Create list": "建立清單",
                    "Create a list to organize your starred repositories.": "建立一個清單來組織您的星標倉庫。",
                    "⭐️ Name this list": "⭐️ 清單名稱",
                    "Write a description": "簡單描述",
                    "Lists are currently in beta.": "清單目前處於測試階段。",
                    "Share feedback and report bugs.": "分享反饋意見和報告錯誤。",
                    "Creating...": "建立中...",

                // 標籤欄
                "Code": "程式碼",
                "Pull requests": "拉取請求",
                "Discussions": "討論",
                "Actions": "操作",
                "Projects": "專案",
                "Security": "安全",
                "Insights": "洞察",
                "Settings": "設定",

                // 鍵盤快捷鍵
                    "Open in github.dev editor"  : "在 github.dev 編輯器中開啟",
                    "Open github.dev editor in a new tab"  : "在新標籤頁中開啟 github.dev 編輯器",
                    "Open cs.github.com in a new tab": "在新標籤頁中開啟 cs.github.com",
                    "Focus secondary search bar" : "聚焦二級搜尋欄",
                    "Go to Code"                 : "跳轉到程式碼",
                    "Go to Issues"               : "跳轉到議題",
                    "Go to Pull Requests"        : "跳轉到拉取請求",
                    "Go to Actions"              : "跳轉到操作",
                    "Go to Projects"             : "跳轉到專案",
                    "Go to Wiki"                 : "跳轉到 Wiki",
                    "Go to Discussions"          : "跳轉到討論",

            // 公共詞 簡版 議題&拉取請求資訊
                "opened by": "開啟者",
                "Opened in": "開啟在",
                "commented": "評論於",
                "Show less": "顯示更少",
                "Show more": "顯示更多",
                "Assignees": "受理人",
                    "No one assigned": "無人受理",
                "Labels": "標籤",
                "Milestone": "里程碑",
                    "No milestone": "尚無里程碑",
                "Linked pull requests": "關聯的拉取請求",
                    "Successfully merging a pull request may close this issue.": "成功合併一個拉取請求可能會關閉此議題。",
                "None yet": "暫無",
                "Go to issue for full details": "跳轉到議題以獲取完整詳細資訊",

                "Loading details…": "載入細節…",

            // 新建專案 https://github.com/new/project
              //同 倉庫 新建專案頁面  /<user-name>/<repo-name>/projects/new
                "Create a new project": "建立新專案",
                "Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.": "在這裡協調、跟蹤和更新您的工作，使專案保持透明，並按計劃進行。",
                "Project board name": "專案板名稱",
                "Description": "描述",
                "(optional)": "(可選)",
                "Project template": "專案模板",
                "Save yourself time with a pre-configured project board template.": "使用預先配置的專案板模板可為您節省時間。",
                "Template:": "模板：",
                    "Templates": "模板",
                    "None": "無",
                        "Start from scratch with a completely blank project board. You can add columns and configure automation settings yourself.": "從一個完全空白的專案板開始。您可以自己新增欄目並配置自動化設定。",
                    "Basic kanban": "基礎看板",
                        "Basic kanban-style board with columns for To do, In progress and Done.": "基礎風格看板，帶有待辦、進行中和已完成等欄目。",
                    "Automated kanban": "自動化看板",
                        "Kanban-style board with built-in triggers to automatically move issues and pull requests across To do, In progress and Done columns.": "帶有內建觸發器的風格看板，可以自動將議題和拉取請求移到待辦、進行中和已完成欄目中。",
                    "Automated kanban with reviews": "帶審查的自動看板",
                        "Everything included in the Automated kanban template with additional triggers for pull request reviews.": "除了包含自動化看板模板中的所有內容，還有拉取請求審查的額外觸發器。",
                    "Bug triage": "BUG 分類",
                        "Triage and prioritize bugs with columns for To do, High priority, Low priority, and Closed.": "使用待辦事項、高優先順序、低優先順序和已關閉的欄目對錯誤進行分類和優先順序排序。",
                "Visibility": "可見性",
                    "Public": "公共",
                        "Anyone on the internet can see this project. You choose who can make changes.": "網際網路上的任何人都可以看到這個專案。您選擇誰可以進行更改。",
                    "Private": "私有",
                        "You choose who can see and make changes to this project.": "您可以選擇誰可以檢視此專案並對其進行更改。",
                "Linked repositories": "關聯的倉庫",
                    "Search": "搜尋",
                    "to link repositories to this project for more accurate suggestions and better search results.": "將倉庫關聯到此專案，以獲得更準確的建議和更好的搜尋結果。",
                    "Search by repository name": "搜尋倉庫名",
                    "You've reached the limit of 25 linked repositories.": "您已經達到了 25 個關聯倉庫的上限。",
                    "Linked repositories:": "關聯的倉庫",
                    "None yet!": "啥也木有！",
                "Create project": "建立專案",

            // 倉庫 專案頁面  /<user-name>/<repo-name>/projects >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                "This repository doesn't have any projects yet": "該倉庫目前沒有任何專案",
                "Create a project": "建立一個專案",

                "Organize your issues with project boards": "使用專案板組織您的議題",
                "Did you know you can manage projects in the same place you keep your code? Set up a project board on GitHub to streamline and automate your workflow.": "您知道您可以在儲存程式碼的同一個地方管理專案嗎？在 GitHub 上設定專案板以簡化和自動化您的工作流程。",

                "Sort tasks": "排序任務",
                "Add issues and pull requests to your board and prioritize them alongside note cards containing ideas or task lists.": "將議題和拉取請求新增到您的看板中，並將它們與包含想法或任務清單的筆記卡一起進行優先排序。",
                "Plan your project": "規劃專案",
                "Sort tasks into columns by status. You can label columns with status indicators like \"To Do\", \"In Progress\", and \"Done\".": "將任務按狀態分類成列。您可以用 “待辦”、“進行中” 和 “已完成” 等狀態指標給各欄貼上標籤。",
                "Automate your workflow": "自動化工作流程",
                "Set up triggering events to save time on project management—we’ll move tasks into the right columns for you.": "設定觸發事件，以節省專案管理的時間——我們將為您把任務移到正確的欄目中。",
                "Track progress": "追蹤進度",
                "Keep track of everything happening in your project and see exactly what’s changed since the last time you looked.": "追蹤專案中發生的一切，並準確檢視自上次檢視以來發生的變化。",
                "Share status": "共享狀態",
                "Each card has a unique URL, making it easy to share and discuss individual tasks with your team.": "每張卡片都有一個唯一的 URL，可以輕鬆地與您的團隊共享和討論個人任務。",
                "Wrap up": "結束工作",
                "After you wrap up your work, close your project board to remove it from your active projects list. On to the next project!": "結束工作後，關閉專案板，並從活動專案列表中刪除。進入下一個專案！",

                "Try the": "嘗試",
                "new projects today.": "新版專案。",
                "Repository access coming soon ✨": "倉庫訪問即將推出✨",

                "Sort": "排序",
                "Sort by": "排序方式",
                    // 排序下拉選單
                    "Newest": "最新",
                    "Oldest": "最早",
                    "Recently updated": "近期更新內容",
                    "Least recently updated": "最近最少更新",
                    "Name": "名稱",
                // 清除篩選
                "Clear current search query, filters, and sorts": "清除當前的搜尋查詢、篩選器和排序方式",

                "No description": "無描述",
                "Close": "關閉",
                "Closed": "已關閉",
                "Reopen": "重新開啟",

                // 頂部提醒
                "Project closed.": "專案已關閉。",
                "Project reopened.": "專案已重新開啟。",

            // https://github.com/users/<user-name>/projects/<id>
                // 鍵盤快捷鍵
                    "Project card shortcuts": "專案卡快捷鍵",
                        "Open the issue or pull request associated with the focused card in the sidebar": "聚焦卡片的側邊欄中開啟相關聯的議題或拉取請求",
                    "Moving a card": "移動卡片",
                        "Start moving the focused card": "開始移動聚焦卡片",
                        "Cancel the move in progress": "取消正在進行的移動",
                        "Complete the move in progress": "完成正在進行的移動",
                        "Move card down": "向下移動卡片",
                        "Move card to the bottom of the column": "移動到專案欄底部",
                        "Move card up": "向上移動卡片",
                        "Move card to the top of the column": "移動到專案欄頂部",
                        "Move card to the bottom of the column on the left": "移動到左側專案欄底部",
                        "Move card to the top of the column on the left": "移動到左側專案欄頂部",
                        "Move card to the bottom of the leftmost column": "移動到最左側專案欄底部",
                        "Move card to the top of the leftmost column": "移動到最左側專案欄頂部",
                        "Move card to the bottom of the column on the right": "移動到右側專案欄底部",
                        "Move card to the top of the column on the right": "移動到右側專案欄頂部",
                        "Move card to the bottom of the rightmost column": "移動到最右側專案欄底部",
                        "Move card to the top of the rightmost column": "移動到最右側專案欄頂部",
                    "Moving a column": "移動欄目",
                        "Start moving the focused column": "開始移動聚焦欄目",
                        "Move column to the left": "將欄目移到左側",
                        "Move column to the leftmost position": "將欄目移到最左側",
                        "Move column to the right": "將欄目移到右側",
                        "Move column to the rightmost position": "將欄目移到最右側",
                // 頂部提醒
                "Project created from Basic kanban template.": "已從基礎看板模板建立專案。",

                "Updated": "更新於",
                "Filter cards": "篩選卡片",
                    "Narrow your search": "縮小搜尋範圍",
                // 工具欄
                "Add cards": "新增卡片",
                    "You can use the filters available in": "您可使用的篩選器在",
                    "issue search": "議題搜尋",
                    "Loading search results…": "載入搜尋結果…",
                    "Search results": "搜尋結果",
                    "More": "更多",
                    "Loading more...": "載入更多...",
                "Fullscreen": "全屏",
                "Exit fullscreen": "退出全屏",
                "Menu": "選單",
                    "This project doesn’t have a description.": "該專案沒有描述。",
                    "Add description": "新增描述",
                    "Close project": "關閉專案",
                        "Are you sure you want to close": "您確定要關閉",
                    "Activity": "活動",
                    // ... 展開
                    "Copy": "複製",
                    "Loading activity": "載入活動",
                    "View archive": "檢視活動",
                    "Showing all activity": "顯示所有活動",
                // 活動 狀態詞
                    "added": "添加了",
                    "created the project": "建立了專案",
                    "updated the project": "更新了專案",
                    "created the column": "建立了欄目",
                    "To do.": "待辦。",
                    "Done.": "已完成。",
                    "In progress.": "進行中。",
                    "archived": "存檔了",
                    "restored": "恢復了",
                    "moved": "移動了",
                    "from": "來自",
                    "From": "來自",

                // 編輯對話方塊
                    "Edit project": "編輯專案",
                    "Name": "名稱",
                    "Description": "描述",
                    "Track project progress": "跟蹤專案進度",
                        "A progress bar will be displayed to help you visualize the overall progress of your project based on your automated To Do, In Progress, and Done columns.": "將顯示一個進度條，以幫助您根據您的自動化的待辦、進行中和已完成欄目，直觀地瞭解專案的總體進展。",
                    "Save project": "儲存專案",
                    // [/Delete/, "刪除"],
                    "Once you delete a project, there is no going back. Please be certain.": "刪除專案後，將無法撤回。請確認。",
                    "Delete project": "刪除專案",

                // 複製專案
                    "Copy project board": "複製專案板",
                    "Your copy of this project includes column names and positions. Cards will not be copied.": "此專案的副本包括欄目名稱和位置。卡片不會被複制。",
                    "Owner": "所有者",
                        "Choose an owner": "選擇所有者",
                        "Search organizations and repositories": "搜尋組織和倉庫",
                        "Suggested": "建議",
                        "Everything else": "其他一切",
                    "Project board name": "專案板名稱",
                    "Copy project": "複製專案",

                // 存檔的卡片
                    "Archived cards": "存檔的卡片",
                    "Loading archived cards…": "載入存檔的卡片…",
                    "Show all archived cards": "顯示所有存檔卡片",
                    "Filter by note or issue title": "按註釋或提議標題篩選",
                    "Column:": "欄目：",
                        "All": "所有",
                    "Restore": "恢復",
                    "No archived cards": "無存檔卡片",
                    "You haven't archived any cards yet.": "您尚未歸檔任何卡片。",

                "This project doesn’t have any columns or cards.": "該專案沒有任何欄目或卡片。",

                "Add a column": "新增欄目",
                "Add column": "新增欄目",
                    "Column name": "欄目名稱",
                    "Enter a column name (To Do, In Progress, Done)": "輸入欄目名稱（待辦、進行中、已完成）",
                    "Automation": "自動化",
                    "Choose a preset to enable progress tracking, automation, and better context sharing across your project.": "選擇一個預設，以便在您的專案中實現進度跟蹤、自動化和更好的內容共享。",
                    "Loading…": "載入中…",
                    "Preset:": "預設：",
                        "Select type": "選擇型別",
                        "None": "無",
                            "This column will not be automated": "本欄目將不會自動化",
                        "To do": "待辦",
                            "Planned but not started": "已計劃但未開始",
                            "Move issues here when…": "當…時，將議題移至此處",
                                "Newly added": "新新增的",
                                    "Issues will automatically move here when added to this project.": "新增到此專案時，議題將自動移至此處。",
                                "Reopened": "重新開啟",
                                    "If a closed issue in this project reopens, it will automatically move here.": "如果此專案中已關閉的議題重新開啟，它將自動移至此處。",
                            "Move pull requests here when…": "當…時，將拉取請求移到此處",
                                "Pull requests will automatically move here when added to this project.": "新增到此專案時，拉取請求將自動移至此處。",
                                "If a closed pull request in this project reopens, it will automatically move here.": "如果此專案中已關閉的拉取請求重新開啟，它將自動移至此處。",
                        "In progress": "進行中",
                            "Actively being worked on": "正在積極開展工作",
                            "Approved by reviewer": "由審查人批准",
                            "Pull requests in this project will automatically move here when they meet the minimum number of required approving reviews. Recommended when another column has the": "當該專案中的拉取請求達到所需的最低批准審查數量時，將自動移至此處。當另一欄啟用了 “",
                            "automation enabled.": "” 的自動化功能時推薦使用。",
                            "Pending approval by reviewer": "由審查人待批准",
                            "Pull requests in this project will automatically move here when a reviewer requests changes, or it no longer meets the minimum number of required approving reviews. Recommended when another column has the": "當審查人請求更改或不再滿足所需的最小批准審查數時，此專案中的拉取請求將自動移至此處。當另一欄目啟用了 “",
                        "Done": "已完成",
                            "Items are complete": "專案已完成",
                            "Closed": "已關閉",
                                "If an open issue in this project is closed, it will automatically move here.": "如果該專案中的一個開啟的議題被關閉，它將自動轉移到這裡。",
                            "Merged": "已合併",
                                "If an open pull request in this project is merged, it will automatically move here.": "如果該專案中的一個開啟的拉取請求被合併，它將自動轉移到這裡。",
                            "Closed with unmerged commits": "已關閉的未合併的提交",
                                "If an open pull request in this project is closed with unmerged commits, it will automatically move here.": "如果該專案中的一個開啟的拉取請求因未合併提交而關閉，它將自動移到這裡。",
                    "Create column": "建立欄目",

                "Edit column": "編輯欄目",
                "Manage automation": "管理自動化",
                "Archive all cards": "存檔所有卡片",
                    "Archiving cards...": "存檔卡片...",
                "Copy column link": "複製欄目連結",
                "Delete column": "刪除欄目",

                // "Manage automation for To do": "管理待辦的自動化",
                // "Manage automation for In progress": "管理進行中的自動化",
                // "Manage automation for Done": "管理已完成的自動化",
                "Update automation": "更新自動化設定",

                "Add a note to this column": "向此欄目添加註釋",
                "Enter a note": "輸入註釋",
                "Add": "新增",

                // "Edit To do": "編輯 “待辦”",
                // "Edit In progress": "編輯 “進行中”",
                // "Edit Done": "編輯 “已完成”",
                "Update column": "更新欄目",

                "Cards": "卡片",
                "Automation": "自動化",

                // "Archive all cards in To do": "存檔所有 “待辦” 卡片",
                // "Archive all cards in In progress": "存檔所有 “進行中” 卡片",
                // "Archive all cards in Done": "存檔所有 “已完成” 卡片",
                "Are you sure you want to archive all cards in the": "您確定要將存檔所有卡片",
                "column? You will not be able to undo this action.": "欄目？您將無法撤消此操作。",

                // "Delete To do": "刪除 “待辦” ",
                // "Delete In progress": "刪除 “進行中” ",
                // "Delete Done": "刪除 “已完成” ",
                "This action will remove any cards and automation preset associated with the column.": "此操作將刪除與該列關聯的所有卡片和自動化預設。",

                "Copy card link": "複製卡片連結",
                "Convert to issue": "轉換為議題",
                    "Convert note to issue":"轉換註釋為議題",
                    "Repository":"倉庫",
                        "Choose a repository for this issue":"為這個議題選擇一個倉庫",
                        "Find a repository":"查詢倉庫",
                        "Title":"標題",
                        "Body":"內容",
                "Edit note": "編輯註釋",
                    "Note": "註釋",
                    "Save note": "儲存註釋",
                "Archive": "存檔",
                "Delete note": "刪除註釋",
                    "This will remove this note from the project": "這將從專案中刪除該註釋",

            // 自動化看板模板專案 https://github.com/users/<user-name>/projects/<id>?add_cards_query=is%3Aopen
                // 頂部提醒
                "Project created from Automated kanban template.": "已從自動化看板模板建立專案。",

                "Automated as": "自動化為",
                "Manage": "管理",

                // 管理自動化 補充
                "The": " ",
                "column is already using this rule.": "欄目已在使用此規則。",

                // 複製專案板 補充
                "Your copy of this project includes column names, positions, and automation settings. Cards will not be copied.": "此專案的副本包括欄目名稱、位置和自動化設定。卡片不會被複制。",
                "Automation settings": "自動化設定",
                "Copy automation settings.": "複製自動化設定。",
                "Includes automation settings for": "包括自動化設定，關於",
                "To do, In progress, and Done": "待辦、進行中和已完成",


                "Pull Request closed without merge": "拉取請求關閉而不合並",
                "Pull Request merged": "合併拉取請求",
                "Issue closed": "議題已關閉",
                "Pull Request reopened": "拉取請求已重新開啟",
                "Issue reopened": "議題已重新開啟",
                "Pull Request pending card added": "添加了拉取請求待辦卡",
                "Issue pending card added": "添加了議題待辦卡",

                "automation": "自動化",
                "to the": "到",
                "column.": "欄目。",

            // 自動看板與審查模板專案 https://github.com/users/<user-name>/projects/<id>?add_cards_query=is%3Aopen
                // 頂部提醒
                "Project created from Automated kanban with reviews template.": "已從自動看板與審查模板建立專案。",

            // 錯誤分類模板專案 https://github.com/users/<user-name>/projects/<id>?add_cards_query=is%3Aopen
                // 頂部提醒
                "Project created from Bug triage template.": "已從錯誤分類模板建立專案。",

                "Needs triage": "需要分流",
                "High priority": "高優先順序",
                "Low priority": "低優先順序",

            // https://github.com/users/<user-name>/projects/<id>/settings
                "Collaboration settings": "協作設定",
                    "Options": "選項",
                        "Visibility": "可見性",
                        "Visibility settings only impact the project itself. Project content that belongs to a repository the user does not have access to will be redacted.": "可見性設定隻影響專案本身。屬於使用者無權訪問的倉庫的專案內容將被編輯。",
                        "Public": "公開",
                            "Anyone on the internet can see this project. You choose who can make changes.": "網際網路上的任何人都可以看到這個專案。您選擇誰可以進行更改。",
                        "Private": "私密",
                            "You choose who can see and make changes to this project.": "您可以選擇誰檢視此專案並對其進行更改。",
                // 協作者
                    "This project doesn’t have any collaborators yet. Use the form below to add a collaborator.": "該專案還沒有任何協作者。使用下面的表格新增協作者。",
                    "Search by username, full name or email address": "搜尋使用者名稱、全名、或電子郵箱",

                    "You’ll only be able to find a GitHub user by their email address if they’ve chosen to list it publicly. Otherwise, use their username instead.": "只有當 GitHub 使用者選擇公開電子郵箱地址時，您才能透過他們的電子郵箱地址找到他們。否則，請使用他們的使用者名稱代替。",
                    "Add collaborator": "Add collaborator",
                    // [/isn’t a GitHub member/, "不是 GitHub 成員"],
                "Linked repositories": "關聯的倉庫",
                    "Link a repository": "關聯倉庫",
                    "Get more accurate suggestions and better search results by linking up to 25 repositories to this project.": "透過將多達 25 個倉庫關聯到這個專案，獲得更準確的建議和更好的搜尋結果。",
                    // [/(\d+) linked repositories/, "$1 個關聯倉庫"],
                    "This project doesn’t have any linked repositories yet.": "該專案暫無任何關聯的倉庫。",

            // https://github.com/users/<user-name>/projects/<id>/edit
                "(optional)": "(可選)",
                "Once you delete this project, there is no going back. Please be certain.": "一旦您刪除了這個專案，就再也無法恢復。請確認。",
        },
        "regexp": [ // 正則翻譯
            [/Delete/, "刪除"],
            [/Edit/, "編輯"],
            [/Manage automation for/, "管理自動化"],
            [/Archive all cards in/, "存檔所有"],
            [/(\d+) linked repositories/, "$1 個關聯倉庫"],
            [/([\d,]+) Open/, "$1 開啟"], // 專案標籤卡
            [/([\d,]+) Closed/, "$1 已關閉"],
            [/(\d+) tasks? done/, "$1 個任務完成"],
        ],
    },

};


// 公共複用翻譯部分
I18N.zh.pulls = I18N.zh.issues;

// 重定向
I18N.zh.settings = I18N.zh["page-account"];
I18N.zh["settings/apps/authorizations"] = I18N.zh.settings;
I18N.zh["account/billing/history"] = I18N.zh.settings;

I18N.zh["settings/tokens"] = I18N.zh["settings/apps"];
I18N.zh["settings/developers"] = I18N.zh["settings/apps"];
I18N.zh["settings/applications/new"] = I18N.zh["settings/apps"];
I18N.zh["orgs/settings/applications/new"] = I18N.zh["settings/apps"];
I18N.zh["orgs/settings/apps/new"] = I18N.zh["settings/apps"];

I18N.zh.login = I18N.zh["session-authentication"];
I18N.zh.session = I18N.zh["session-authentication"];
I18N.zh.sessions = I18N.zh["session-authentication"];
I18N.zh.password_reset = I18N.zh["session-authentication"];

I18N.zh.new = I18N.zh["page-new-repo"];
I18N.zh["new/import"] = I18N.zh["page-new-repo"];
I18N.zh["orgs/repositories/new"] = I18N.zh["page-new-repo"];
I18N.zh["orgs/dashboard"] = I18N.zh["page-dashboard"];

I18N.zh["installations/new"] = I18N.zh["login/oauth"];

I18N.zh.apps = I18N.zh.marketplace;
I18N.zh.orgs = I18N.zh["page-profile"];
I18N.zh["orgs/billing_managers/new"] = I18N.zh["orgs/settings"];
I18N.zh["orgs/billing/history"] = I18N.zh["orgs/settings"];
I18N.zh["orgs/topics"] = I18N.zh["orgs/settings"];

I18N.zh["new/project"] = I18N.zh.projects;
I18N.zh["repository/projects/new"] = I18N.zh.projects;
I18N.zh["repository/search"] = I18N.zh.search;