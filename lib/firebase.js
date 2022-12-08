import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDocs, collection, query, where  } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const firebaseConfig={
  apiKey: "AIzaSyAfkjuMhBt46PPW36XDmesayi-k5jQvVT4",
  authDomain: "my-first-project-d7b77.firebaseapp.com",
  databaseURL: "https://my-first-project-d7b77.firebaseio.com",
  projectId: "my-first-project-d7b77",
  storageBucket: "my-first-project-d7b77.appspot.com",
  messagingSenderId: "766071481517",
  appId: "1:766071481517:web:fe12e4076a9e6436091224",
  measurementId: "G-17004Y30QN"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCrqd-SqgXVmyjCW2ExVCzJ-YH-E274bv8",
//   authDomain: "fidelio-a5340.firebaseapp.com",
//   projectId: "fidelio-a5340",
//   storageBucket: "fidelio-a5340.appspot.com",
//   messagingSenderId: "166063536125",
//   appId: "1:166063536125:web:b439a508e7ef61481a0b94"
// };

/*------------------------ Initialize ------------------------*/

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

/*------------------------ Function ------------------------*/

export async function createUser({Username, Password, Name, Email, Phonenumber, Role} ) {
  try {
    const docName = await doc(db, "User", Username+Phonenumber);
    const docData = {
      Username: Username,
      Password: Password,
      Name: Name,
      Email: Email,
      Phonenumber: Phonenumber,
      Role: Role
    };
    await setDoc(docName, docData);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

export async function findUser({ Username }) {
  try {
    const userRef = await collection(db, "User");
    const q = await query(userRef, where("Username", "==", Username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    console.log("error--", e);
    return false;
  }
  
}

export async function getUserbySignin({ Username, Password }) {
  try {
    const userRef = await collection(db, "User");
    const q = await query(userRef, where("Username", "==", Username));
    const querySnapshot = await getDocs(q);
    const user_data = querySnapshot.docs[0].data();

    const doMatch = await bcrypt.compare(Password, user_data.Password)
    if (doMatch) {
      const token = jwt.sign({ userId: user_data._id }, "secretshhh", {
          expiresIn: '24h'
      })
      user_data.token = token
      return user_data;

  } else {
      return false;
  }

  } catch (e) {
    console.log("error--", e);
    return false;
  }
}

export async function getAllSong() {
  try {
    const docRef = await collection(db, "Song");
    const docSnap = await getDocs(docRef);
    const song_data = [];

    docSnap.forEach((doc) => {
      song_data.push({
        id: doc.id,
        ArtistName: doc.data().ArtistName,
        NameSong: doc.data().NameSong,
        Path: doc.data().Path,
        Time: doc.data().Time
      });
    });

    return song_data;
  } catch (e) {
    console.log("error--", e);
    return false;
  }
}

export async function findSong({ Name }) {
  try {
    const songRef = await collection(db, "Song");
    //const q = songRef.orderByChild("SongName").equalTo(Name+"\uf8ff");
    const q = await query(songRef, where("NameSong", "==", Name ));
    
    console.log(q);
    
    const querySnapshot = await getDocs(q);
    const song_data = [];

    if (querySnapshot.empty) {
      return false;
    }

    querySnapshot.forEach((doc) => {
      song_data.push({
        id: doc.id,
        ArtistName: doc.data().ArtistName,
        NameSong: doc.data().NameSong,
        Path: doc.data().Path,
        Time: doc.data().Time
      });
    });

    return song_data;


  } catch (e) {
    console.log("error--", e);
    return false;
  }
  
}

export async function findArtist({ Name }) {
  try {
    
    const songRef = await collection(db, "Song");
    const q = await query(songRef, where("ArtistName", "==", Name ));
    const querySnapshot = await getDocs(q);

    const song_data = [];

    if (querySnapshot.empty) {
      return false;
    }

    querySnapshot.forEach((doc) => {
      song_data.push({
        id: doc.id,
        ArtistName: doc.data().ArtistName,
        NameSong: doc.data().NameSong,
        Path: doc.data().Path,
        Time: doc.data().Time
      });
    });

    return song_data;

  } catch (e) {
    console.log("error--", e);
    return false;
  }
  
}