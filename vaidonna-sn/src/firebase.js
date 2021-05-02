import firebase from 'firebase/app';
// import firebase from 'firebase';
import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCQIwLRDTsLZ_k0vSRY5b_E8XUw3hE5znY",
    authDomain: "vaidonna.firebaseapp.com",
    projectId: "vaidonna",
    storageBucket: "vaidonna.appspot.com",
    messagingSenderId: "576508521025",
    appId: "1:576508521025:web:68898a8289c0b1081f74c0"
  };

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();