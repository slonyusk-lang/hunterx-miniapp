import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9Ubz8YaUz15q5zD20fCYuX-cqZjmtIgM",
  authDomain: "hunterxmining-98139.firebaseapp.com",
  projectId: "hunterxmining-98139",
  storageBucket: "hunterxmining-98139.firebasestorage.app",
  messagingSenderId: "114899801174",
  appId: "1:114899801174:web:cff3da2ba5f02d31bad7f7",
  measurementId: "G-CKZYHD6T6Q"
};

const app = initializeApp(firebaseConfig);

window.firebaseApp = app;
