import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuWSw5Mc9n44NOp_WdA3o01jU9vuRxsoU",
  authDomain: "mynotes-417be.firebaseapp.com",
  databaseURL: "https://mynotes-417be-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mynotes-417be",
  storageBucket: "mynotes-417be.appspot.com",
  messagingSenderId: "14258008063",
  appId: "1:14258008063:web:5a2a7d052695624a1d01ca",
  measurementId: "G-YK9PD1XREX"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getDatabase(app);