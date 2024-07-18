import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  onAuthStateChanged
} from 'firebase/auth';
import firebaseApp from './firebase/firebaseConfig';

const auth = getAuth(firebaseApp);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  auth
};
