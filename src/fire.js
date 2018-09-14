import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDG8qVz6WucnhHpHNnUqWk7u9M71O3aCRo",
  authDomain: "hackaton-rts.firebaseapp.com",
  databaseURL: "https://hackaton-rts.firebaseio.com",
  projectId: "hackaton-rts",
  storageBucket: "hackaton-rts.appspot.com",
  messagingSenderId: "92754046485"
};
const fire = firebase.initializeApp(config);

export default fire;
