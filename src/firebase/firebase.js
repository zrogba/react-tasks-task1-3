
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCuzVi7q1BSFt1pIEVGj5zb8SUcTYgytjQ",
  authDomain: "users-table-41b22.firebaseapp.com",
  databaseURL: "https://users-table-41b22-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "users-table-41b22",
  storageBucket: "users-table-41b22.appspot.com",
  messagingSenderId: "52575662802",
  appId: "1:52575662802:web:90a14abdd97f17165bf30b"
};
const firebase = initializeApp(firebaseConfig);
const db = getFirestore();
export { db, firebase };