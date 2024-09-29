// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFunctions } from 'firebase/functions';
import 'firebase/functions';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTW8FtSIww11-QdK4hCryiniv_7uB0TxQ",
  authDomain: "fir-proyect-7e9ea.firebaseapp.com",
  projectId: "fir-proyect-7e9ea",
  storageBucket: "fir-proyect-7e9ea.appspot.com",
  messagingSenderId: "279390346510",
  appId: "1:279390346510:web:36a5e2794d0cbafadb4b5f"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const functions = getFunctions(firebaseApp)

export const storage = getStorage(firebaseApp)
export default firebaseApp;