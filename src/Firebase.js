// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYnh5nR5KBm0yN1fn4mabzh2CSiragfMM",
  authDomain: "abhiraj-portfolio-ca8ea.firebaseapp.com",
  projectId: "abhiraj-portfolio-ca8ea",
  storageBucket: "abhiraj-portfolio-ca8ea.appspot.com",
  messagingSenderId: "871244581091",
  appId: "1:871244581091:web:89946b2156c6f7c0ce1dd6",
  measurementId: "G-TJZV6NTCCP",
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };
