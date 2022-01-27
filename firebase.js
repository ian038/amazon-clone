const firebaseConfig = {
    apiKey: "AIzaSyC9wqzAGUMhy_O2XL3pHpXjgKUuMPfTAVA",
    authDomain: "amz-clone-4eda4.firebaseapp.com",
    projectId: "amz-clone-4eda4",
    storageBucket: "amz-clone-4eda4.appspot.com",
    messagingSenderId: "160803880842",
    appId: "1:160803880842:web:db23caaf5eff7005b3d273",
    measurementId: "G-413S1GY27H"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();