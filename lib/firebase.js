import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc  } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrqd-SqgXVmyjCW2ExVCzJ-YH-E274bv8",
  authDomain: "fidelio-a5340.firebaseapp.com",
  projectId: "fidelio-a5340",
  storageBucket: "fidelio-a5340.appspot.com",
  messagingSenderId: "166063536125",
  appId: "1:166063536125:web:b439a508e7ef61481a0b94"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

//test firestore
/*export default function GetData() {
    getDoc(doc(db, "Song", "Wur3ekzug4AqCrdI4PYz")).then(docSnap => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      })
}*/

export default { app, db, storage };