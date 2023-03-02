import { initializeApp } from "firebase/app";
import { collection, getFirestore, orderBy, query } from "firebase/firestore";

let config = {
  apiKey: "AIzaSyAAHOZhobZyxwJ6-rD5pfy20tdfaCgvRy4",
  authDomain: "asha-mahi-resin-works.firebaseapp.com",
  projectId: "asha-mahi-resin-works",
  storageBucket: "asha-mahi-resin-works.appspot.com",
  messagingSenderId: "358824442178",
  appId: "1:358824442178:web:29b26439c41ef7884030db",
  measurementId: "G-55Z7DRCZW3"
};
const firestore =  getFirestore(initializeApp(config));
export default firestore;



export const adminQuery = query(collection(firestore, "pages"), orderBy("modified_date"));