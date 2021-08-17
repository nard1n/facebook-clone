import firebase from 'firebase/app';
import "firebase/storage";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgZjMmt6Wxs1_OdbEBzto3xDpnzcTiIpI",
  authDomain: "facebook-clone-nl.firebaseapp.com",
  projectId: "facebook-clone-nl",
  storageBucket: "facebook-clone-nl.appspot.com",
  messagingSenderId: "1073100223774",
  appId: "1:1073100223774:web:9291cac6cfe569a946c50f"
}; 

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage };