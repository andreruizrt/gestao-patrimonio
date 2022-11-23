// Import the functions you need from the SDKs you need

import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCvA3oWavptLp6zBlxQzXLUJw3Ux_wq-kk",

  authDomain: "gestao-patrimonio-eba8a.firebaseapp.com",

  projectId: "gestao-patrimonio-eba8a",

  storageBucket: "gestao-patrimonio-eba8a.appspot.com",

  messagingSenderId: "963751134231",

  appId: "1:963751134231:web:0db4081222fc2555828852",

  measurementId: "G-V3G0JC27RE"

};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default { firebaseApp };