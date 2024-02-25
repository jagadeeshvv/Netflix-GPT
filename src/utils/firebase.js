// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmnWEmxoYyjRgScI-qD3ZZwUsDyDv94CE",
  authDomain: "netflix-gpt-23eba.firebaseapp.com",
  projectId: "netflix-gpt-23eba",
  storageBucket: "netflix-gpt-23eba.appspot.com",
  messagingSenderId: "448345684871",
  appId: "1:448345684871:web:384749d53def6ee516b122",
  measurementId: "G-QZYVWQ9XHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
