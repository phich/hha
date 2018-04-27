import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDecjuhQa5nE1YI7n7T7mrNFMCYz8KUc40",
    authDomain: "fir-rn-e2aa5.firebaseapp.com",
    databaseURL: "https://fir-rn-e2aa5.firebaseio.com",
    projectId: "fir-rn-e2aa5",
    storageBucket: "fir-rn-e2aa5.appspot.com",
    messagingSenderId: "922777195587"
};
console.log("firebase Config.js");
const firebaseApp =  firebase.initializeApp(config);
export default firebaseApp
