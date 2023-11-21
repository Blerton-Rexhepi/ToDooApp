import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2x54VzTk1Gev4Mt_xNFhS_aE2KZ3ccUA",
  authDomain: "test-74cc9.firebaseapp.com",
  projectId: "test-74cc9",
  storageBucket: "test-74cc9.appspot.com",
  messagingSenderId: "1093164298380",
  appId: "1:1093164298380:web:c9ac413d21ea64dff38ba9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
