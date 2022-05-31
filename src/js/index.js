import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBuWSw5Mc9n44NOp_WdA3o01jU9vuRxsoU",
  authDomain: "mynotes-417be.firebaseapp.com",
  projectId: "mynotes-417be",
  storageBucket: "mynotes-417be.appspot.com",
  messagingSenderId: "14258008063",
  appId: "1:14258008063:web:5a2a7d052695624a1d01ca",
  measurementId: "G-YK9PD1XREX"
});

const app = initializeApp(firebaseConfig);

const auth = getAuth(firebaseConfig);
const db = getDatabase(firebaseConfig);