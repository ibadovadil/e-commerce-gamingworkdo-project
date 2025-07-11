import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyBCXpnNMcrAJjPY8wqz1GhbWPQr3E5BDvI",
  authDomain: "gamingsitedb-ce8c2.firebaseapp.com",
  databaseURL: "https://gamingsitedb-ce8c2-default-rtdb.firebaseio.com",
  projectId: "gamingsitedb-ce8c2",
  storageBucket: "gamingsitedb-ce8c2.firebasestorage.app",
  messagingSenderId: "97229756566",
  appId: "1:97229756566:web:cb4e496443a472a7a68ab7",
  measurementId: "G-V42KM5S8XX"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}