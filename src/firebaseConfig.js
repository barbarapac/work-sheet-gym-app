import firebase from 'firebase/app';
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyAi9PCUwoyb1wngWx6VAKBajVIJSotNZ18",
  authDomain: "worksheetgymapp-301a1.firebaseapp.com",
  databaseURL: "https://worksheetgymapp-301a1-default-rtdb.firebaseio.com",
  projectId: "worksheetgymapp-301a1",
  storageBucket: "worksheetgymapp-301a1.appspot.com",
  messagingSenderId: "938591323836",
  appId: "1:938591323836:web:c103ed0386ef091e75b2b9",
  measurementId: "G-E95H4DRD97"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;