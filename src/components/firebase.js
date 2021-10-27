// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCGg3Aud5z8JMzYvMSaniktSd3DysN3RZc",
  authDomain: "portfolio-contact-abhiraj.firebaseapp.com",
  projectId: "portfolio-contact-abhiraj",
  storageBucket: "portfolio-contact-abhiraj.appspot.com",
  messagingSenderId: "665490274649",
  appId: "1:665490274649:web:3efd6dc901f22d03f0f448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function setData(obj) {
 await addDoc(collection(db, "contacts_store"), obj);
}

export { setData };