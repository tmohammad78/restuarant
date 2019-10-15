import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCbGlVe1OY04UTj26pbySriurSXorsOWOs",
  authDomain: "restuarant-2ba4d.firebaseapp.com",
  databaseURL: "https://restuarant-2ba4d.firebaseio.com",
  projectId: "restuarant-2ba4d",
  storageBucket: "restuarant-2ba4d.appspot.com",
  messagingSenderId: "703155162034",
  appId: "1:703155162034:web:04068db1e1ac6d4e7472ab",
  measurementId: "G-EP3MC4K8XT"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
