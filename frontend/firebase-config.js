// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjFuLHwLWabM9Omml-EtjdoPSzwpusHyA",
  authDomain: "jokesapp-dc035.firebaseapp.com",
  projectId: "jokesapp-dc035",
  storageBucket: "jokesapp-dc035.appspot.com",
  messagingSenderId: "231929785500",
  appId: "1:231929785500:web:887d440a17e9268fcc5159",
  measurementId: "G-THCVWV9TVH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
