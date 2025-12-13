import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUW_tPmgsMbpa8f35A-NwTm2D5fjZvY2Q",
  authDomain: "hoadong-baotam-wedding.firebaseapp.com",
  projectId: "hoadong-baotam-wedding",
  storageBucket: "hoadong-baotam-wedding.firebasestorage.app",
  messagingSenderId: "946168305182",
  appId: "1:946168305182:web:9080b7c00e4f902d0ac00f"
};

const app = initializeApp(firebaseConfig);
window.db = getFirestore(app);

import { collection, addDoc } from
"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function submitWish() {
  await addDoc(collection(db, "wishes"), {
    name: name.value,
    attend: attend.value,
    message: message.value,
    time: new Date()
  });
  alert("Cảm ơn bạn 💖");
}

