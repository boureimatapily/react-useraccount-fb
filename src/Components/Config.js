import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const Config = {
  apiKey: "AIzaSyDss5CB4GzWYs3Q2IZFbwLY-nVOhni54HA",
  authDomain: "susumarket-422e3.firebaseapp.com",
  databaseURL: "https://susumarket-422e3.firebaseio.com",
  projectId: "susumarket-422e3",
  storageBucket: "susumarket-422e3.appspot.com",
  messagingSenderId: "903857271492",
  appId: "1:903857271492:web:a311c75f69f2c8a46a4f91"
};
  firebase.initializeApp(Config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase