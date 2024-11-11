import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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
const firestore = getFirestore(app);
const formulario = document.getElementById("formulario");
const inputX = document.getElementById("X");

formulario.addEventListener("submit", async function (event) {
  event.preventDefault();

  const X = inputX.value;

  try {
    await addDoc(collection(firestore, "Z"), {
      Y: X
    });
  } catch (error) {
    console.error("Error al agregar datos", error);
  }
});

async function mostrarDatos() {
    listDiv.innerHTML = ''; // Limpiar el contenido actual del div

    try {
        const querySnapshot = await getDocs(collection(firestore, "Z"));
        querySnapshot.forEach((doc) => {
            const dato = doc.data().Y;
            listDiv.innerHTML += `
                <div>${dato}</div>
            `;
        });
    } catch (error) {
        console.error("Error al obtener datos", error);
    }
}

// Llamar a mostrarDatos al cargar la página para mostrar los datos existentes
document.addEventListener('DOMContentLoaded', mostrarDatos);

// Explicacion (X, Y, Z) 
