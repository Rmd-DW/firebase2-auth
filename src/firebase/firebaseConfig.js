// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB_hi3ZxFYeJNZa6KCVJRz-fPnKFMNaHI",
  authDomain: "fir-auth-31f31.firebaseapp.com",
  projectId: "fir-auth-31f31",
  storageBucket: "fir-auth-31f31.appspot.com",
  messagingSenderId: "465199347969",
  appId: "1:465199347969:web:90435fbf5795da9fd08300"
};

// Inicializar la aplicación Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
