import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyCXDv98DUbIKpalFrJ6eVqKBsUOWurCS0I",
  authDomain: "first-project-6a94a.firebaseapp.com",
  databaseURL: "https://first-project-6a94a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "first-project-6a94a",
  storageBucket: "first-project-6a94a.firebasestorage.app",
  messagingSenderId: "744869820321",
  appId: "1:744869820321:web:7a7ee0551094a5dff6fde0"
};    



const fireDB = firebase.initializeApp(firebaseConfig);
export default fireDB.database().ref();