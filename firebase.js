import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

window.db = db;
window.doc = doc;
window.getDoc = getDoc;
window.setDoc = setDoc;
window.updateDoc = updateDoc;

console.log("Firebase Connected!");
export {
  db,
  doc,
  getDoc,
  setDoc,
  updateDoc
};
