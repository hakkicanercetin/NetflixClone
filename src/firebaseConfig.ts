// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: String(process.env.GOOGLE_API_KEY),
  authDomain: "new-netflix-eb54b.firebaseapp.com",
  projectId: "new-netflix-eb54b",
  storageBucket: "new-netflix-eb54b.appspot.com",
  messagingSenderId: "517830246959",
  appId: "1:517830246959:web:7af85915a228bbacd3bcda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

