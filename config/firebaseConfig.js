import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhnynLLrKpKOJZV5KzhWCg2_6aX7-uBFU",
  authDomain: "papaon-4247c.firebaseapp.com",
  projectId: "papaon-4247c",
  storageBucket: "papaon-4247c.firebasestorage.app",
  messagingSenderId: "511643013011",
  appId: "1:511643013011:web:c2cf323d065a1a60fa2266",
  measurementId: "G-H7ZDTRPK4K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
