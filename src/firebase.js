import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNxmTuZMEeq32StElhN4ERKAPi2uBkPo8",
  authDomain: "waterapp-4002f.firebaseapp.com",
  projectId: "waterapp-4002f",
  storageBucket: "waterapp-4002f.appspot.com",
  messagingSenderId: "924772667695",
  appId: "1:924772667695:web:a196cdf7a449069963d1da",
  measurementId: "G-HDK4HLGSGP"
};

if (firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig);
} else {
firebase.app();
}
import 'firebase/auth';
import 'firebase/firestore';
export default firebase;
