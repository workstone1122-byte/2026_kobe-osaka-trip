// =======================================================================
// 登入狀態守衛: auth-guard.js
// 目的: 檢查用戶登入狀態。未登入則導向 login.html。
// =======================================================================
import { auth } from './auth.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// 確保腳本只在非登入頁面運行
// 註: 由於我們在 login.html 中有自己的 auth.currentUser 檢查，這裡可以排除 login.html
if (window.location.pathname.endsWith('/login.html') || window.location.pathname === '/') {
    // 登入頁面或根目錄不需要守衛，跳過邏輯
} else {
    // 保護頁面邏輯
    onAuthStateChanged(auth, (user) => {
        // 如果用戶不存在 (未登入)，則跳轉到 login.html
        if (!user) {
            console.log("未登入。導向登入頁面...");
            // 使用 setTimeout 確保 DOM 渲染不會被阻塞
            // 使用相對路徑 ./ 解決 GitHub Pages 子目錄路徑錯誤問題
            setTimeout(() => {
                window.location.replace('./login.html'); 
            }, 10);
        } else {
            // 已登入，讓頁面繼續載入
            console.log(`用戶已登入 (UID: ${user.uid})，頁面載入中...`);
            // 觸發一個自定義事件，讓頁面知道 Auth 已經準備好了
            document.dispatchEvent(new CustomEvent('authReady', { detail: user }));
        }
    });
}