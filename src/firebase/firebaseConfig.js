import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyCtwTZYMBxkALVYzvBKyp1pYfpDM7GwnhM",
  authDomain: "gamingsitedb.firebaseapp.com",
  databaseURL: "https://gamingsitedb-default-rtdb.firebaseio.com",
  projectId: "gamingsitedb",
  storageBucket: "gamingsitedb.appspot.com",
  messagingSenderId: "885509515321",
  appId: "1:885509515321:web:236fb32942040bdb9305e8",
  measurementId: "G-YVNLK3HLWT"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}