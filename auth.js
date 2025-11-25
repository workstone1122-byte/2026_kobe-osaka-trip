// =======================================================================
// Firebase 核心服務模組: auth.js
// 目的: 初始化 Firebase，並導出 Auth, Firestore 實例
// =======================================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// 設定 Firestore 偵錯等級，幫助開發
// setLogLevel('debug'); 

// --- 您的 Firebase 配置 (硬編碼作為備用，可確保運作) ---
const firebaseConfig = {
    apiKey: "AIzaSyBsMiLUgtJtcv48iRp_9QFx5fShtRd6Lro",
    authDomain: "kobe-osaka-2026travel.firebaseapp.com",
    projectId: "kobe-osaka-2026travel",
    storageBucket: "kobe-osaka-2026travel.firebasestorage.app",
    messagingSenderId: "772246724994",
    appId: "1:772246724994:web:26c067ae1096d13ebdef9b"
};
// -----------------------------------------------------------

// 嘗試使用環境變數的配置，如果無效則使用手動配置
let config = firebaseConfig;
if (typeof __firebase_config !== 'undefined' && JSON.parse(__firebase_config).projectId) {
     config = JSON.parse(__firebase_config);
}

// 初始化 Firebase App
const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);

// 設定身份驗證持久性 (瀏覽器 Session 期間保持登入狀態)
setPersistence(auth, browserSessionPersistence);

// 導出 Auth 和 Firestore 實例
export { auth, db };