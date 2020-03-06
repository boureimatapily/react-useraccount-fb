import firebase from 'firebase/app'
import 'firebase/firestore'


  firebase.initializeApp(Config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase