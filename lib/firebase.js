import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc  } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrqd-SqgXVmyjCW2ExVCzJ-YH-E274bv8",
  authDomain: "fidelio-a5340.firebaseapp.com",
  projectId: "fidelio-a5340",
  storageBucket: "fidelio-a5340.appspot.com",
  messagingSenderId: "166063536125",
  appId: "1:166063536125:web:b439a508e7ef61481a0b94"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);