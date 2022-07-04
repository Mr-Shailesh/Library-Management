import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_DOMAIN}`,
  projectId: "lb-management",
  storageBucket: "lb-management.appspot.com",
  messagingSenderId: "884931769723",
  appId: "1:884931769723:web:112670335b8f0ca8e939de",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
