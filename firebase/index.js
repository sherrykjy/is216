// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCJI0kvCILi38Xa1KTdbLADFoOPTdYf_w",
  authDomain: "quiz-app-37a21.firebaseapp.com",
  projectId: "quiz-app-37a21",
  storageBucket: "quiz-app-37a21.appspot.com",
  messagingSenderId: "15779943372",
  appId: "1:15779943372:web:b1c987a6d0381325adc369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

// Allow any other file to access db, to allow 
export {
    db
}