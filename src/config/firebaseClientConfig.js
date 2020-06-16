import firebase from "firebase";
import "firebase/storage";
import "firebase/auth"

var firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDrBfyuwdunZsMvmJORbaKkjgTXc4K_ju0",
  authDomain: "campus-recruitment-syste-90273.firebaseapp.com",
  databaseURL: "https://campus-recruitment-syste-90273.firebaseio.com",
  projectId: "campus-recruitment-syste-90273",
  storageBucket: "campus-recruitment-syste-90273.appspot.com",
  messagingSenderId: "633947511635",
  appId: "1:633947511635:web:e4ec271df8be6244e11fa6",
  measurementId: "G-1YKXE6950T",
});

// export default firebase.initializeApp(firebaseConfig);

const db = firebaseConfig.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage, auth as default };
