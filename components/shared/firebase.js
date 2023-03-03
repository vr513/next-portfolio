// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_HOOKED_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_HOOKED_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_HOOKED_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_HOOKED_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_HOOKED_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_HOOKED_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;