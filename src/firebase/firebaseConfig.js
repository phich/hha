import * as firebase from 'firebase';
// Initialize Firebase
var prodConfig = {
    apiKey: "AIzaSyDecjuhQa5nE1YI7n7T7mrNFMCYz8KUc40",
    authDomain: "fir-rn-e2aa5.firebaseapp.com",
    databaseURL: "https://fir-rn-e2aa5.firebaseio.com",
    projectId: "fir-rn-e2aa5",
    storageBucket: "fir-rn-e2aa5.appspot.com",
    messagingSenderId: "922777195587"
};
const devConfig = {
    apiKey: YOUR_API_KEY,
    authDomain: YOUR_AUTH_DOMAIN,
    databaseURL: YOUR_DATABASE_URL,
    projectId: YOUR_PROJECT_ID,
    storageBucket: '',
    messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  };
console.log("firebase Config.js");
if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
