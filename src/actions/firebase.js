import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBJuM7-AY5raZJVaamFkO3xtK-22omXAtU",
    authDomain: "trellogladys.firebaseapp.com",
    databaseURL: "https://trellogladys.firebaseio.com",
    projectId: "trellogladys",
    storageBucket: "trellogladys.appspot.com",
    messagingSenderId: "1073362762169"
  
   };
   firebase.initializeApp(config);
  
   export const database = firebase.database();
   export const auth = firebase.auth();
   export const storage = firebase.storage();
   export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  