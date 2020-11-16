
import firebase from 'firebase'

const firebaseConfig = {

    apiKey: "AIzaSyCSyAQ-0UY8eNsBoktnS-SJklY9vFwvcgQ",
    authDomain: "amzclonebyyasir.firebaseapp.com",
    databaseURL: "https://amzclonebyyasir.firebaseio.com",
    projectId: "amzclonebyyasir",
    storageBucket: "amzclonebyyasir.appspot.com",
    messagingSenderId: "46658325767",
    appId: "1:46658325767:web:9faaac9356c410d594c9a2",
    measurementId: "G-WW7QVPKYPW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}