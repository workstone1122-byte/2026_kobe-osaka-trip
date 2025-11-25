// =======================================================================
// 登入狀態守衛: auth-guard.js
// 目的: 檢查用戶登入狀態。未登入則導向 login.html。
// =======================================================================
import { auth } from './auth.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// 確保腳本只在非登入頁面運行
if (window.location.pathname.endsWith('/login.html') || window.location.pathname === '/') {
    // 登入頁面或根目錄將使用 login.html 處理登入邏輯
    // 這裡只檢查 index.html 的邏輯，如果不是 index.html，就跳過 guard 的保護邏輯
} else {
    // 保護頁面邏輯
    onAuthStateChanged(auth, (user) => {
        // 如果用戶不存在 (未登入)，且當前頁面不是 login.html，則跳轉到 login.html
        if (!user) {
            console.log("未登入。導向登入頁面...");
            // 使用 setTimeout 確保 DOM 渲染不會被阻塞
            setTimeout(() => {
                window.location.replace('/login.html'); 
            }, 10);
        } else {
            // 已登入，讓頁面繼續載入
            console.log(`用戶已登入 (UID: ${user.uid})，頁面載入中...`);
            // 觸發一個自定義事件，讓頁面知道 Auth 已經準備好了
            document.dispatchEvent(new CustomEvent('authReady', { detail: user }));
        }
    });
}