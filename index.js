// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyBS6rGEkw0HuEKc0IRY9UXo6WN3_apdksY",
    authDomain: "deb4te-fb505.firebaseapp.com",
    databaseURL: "https://deb4te-fb505.firebaseio.com",
    projectId: "deb4te-fb505",
    storageBucket: "deb4te-fb505.appspot.com",
    messagingSenderId: "610603654356",
    appId: "1:610603654356:web:aec3e02f53bd82c5"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  