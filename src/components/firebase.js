import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoQr7ZZZTnRGf1fMFvB-e47Mv0Az8y9Ck",
  authDomain: "crafty-bean-v2.firebaseapp.com",
  databaseURL: "https://crafty-bean-v2.firebaseio.com",
  projectId: "crafty-bean-v2",
  storageBucket: "crafty-bean-v2.appspot.com",
  messagingSenderId: "187242490394",
  appId: "1:187242490394:web:0fd1f8f9ea52615e8b3fa3",
  measurementId: "G-H0NJW9ENHT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
