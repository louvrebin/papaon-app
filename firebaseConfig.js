import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection, addDoc, getDoc, doc } from "firebase/firestore";

// Firebase 프로젝트 설정
const firebaseConfig = {
  apiKey: "AIzaSyAhnynLLrKpKOJZV5KzhWCg2_6aX7-uBFU",
  authDomain: "papaon-4247c.firebaseapp.com",
  projectId: "papaon-4247c",
  storageBucket: "papaon-4247c.appspot.com", // 🔥 올바른 storageBucket 주소 수정
  messagingSenderId: "511643013011",
  appId: "1:511643013011:web:c2cf323d065a1a60fa2266",
  measurementId: "G-H7ZDTRPK4K"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// 웹 환경에서는 `initializeAuth`를 사용하지 않도록 처리
const auth = typeof window !== "undefined"
  ? getAuth(app) // 웹 환경에서는 `getAuth()` 사용
  : initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });

// Firestore 초기화
const db = getFirestore(app);

export { auth, db, collection, addDoc, getDoc, doc };
