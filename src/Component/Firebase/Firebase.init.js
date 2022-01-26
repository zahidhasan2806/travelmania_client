import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

//initialize firebase
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
};

export default initializeFirebase;