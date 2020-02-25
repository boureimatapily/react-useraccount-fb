import firebase from 'firebase/app'
import 'firebase/firestore'

var Config = { 
    apiKey: "AIzaSyCE6PuMbPkOY4rystsGq5MWfc4VfHJQi6M",
    authDomain: "react-bank-app-4b373.firebaseapp.com",
    databaseURL: "https://react-bank-app-4b373.firebaseio.com",
    projectId: "react-bank-app-4b373",
    storageBucket: "react-bank-app-4b373.appspot.com",
    messagingSenderId: "864630194705",
    appId: "1:864630194705:web:3ec36349cf756a982fe7b0"
  };

  firebase.initializeApp(Config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase