import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyD60EKOLSgXraTs3Q9970PZxmCLD8IReHE",
  authDomain: "registrodealumnos-411c5.firebaseapp.com",
  databaseURL: "https://registrodealumnos-411c5-default-rtdb.firebaseio.com",
  projectId: "registrodealumnos-411c5",
  storageBucket: "registrodealumnos-411c5.firebasestorage.app",
  messagingSenderId: "40674985096",
  appId: "1:40674985096:web:736af3f5ce063e29c18b3d",
  measurementId: "G-SH5YRTBK2E"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, storage, analytics, auth };

console.log("Conexión a Firebase establecida correctamente.");