import firebase from 'firebase/app'
import 'firebase/firestore'

const Config = {
  apiKey: "AIzaSyAiVnTdrtWLDJEi6iR2fpsX45JuzsttZgE",
  authDomain: "user-data-1a723.firebaseapp.com",
  databaseURL: "https://user-data-1a723.firebaseio.com",
  projectId: "user-data-1a723",
  storageBucket: "user-data-1a723.appspot.com",
  messagingSenderId: "115313649025",
  appId: "1:115313649025:web:256275d532a62cd125f480"
};
  firebase.initializeApp(Config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase