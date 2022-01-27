import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
import { firestore } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyC9wqzAGUMhy_O2XL3pHpXjgKUuMPfTAVA",
    authDomain: "amz-clone-4eda4.firebaseapp.com",
    projectId: "amz-clone-4eda4",
    storageBucket: "amz-clone-4eda4.appspot.com",
    messagingSenderId: "160803880842",
    appId: "1:160803880842:web:db23caaf5eff7005b3d273",
    measurementId: "G-413S1GY27H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = firestore()