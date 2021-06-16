import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBUSeVztecyKWuNl71ry3BEs7fHUbbk2Uo",
    authDomain: "facebookpoi.firebaseapp.com",
    projectId: "facebookpoi",
    storageBucket: "facebookpoi.appspot.com",
    messagingSenderId: "163833942561",
    appId: "1:163833942561:web:ca0d20ddff1d4b5ff34960"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = app.storage();

  export { db, storage };