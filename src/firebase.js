import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { handleUser } from "Helpers/utils";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyDFcp6phoK1_vQscIMrPAoqucIbynU-pxk",
  authDomain: "instagram-c1ff5.firebaseapp.com",
  projectId: "instagram-c1ff5",
  storageBucket: "instagram-c1ff5.appspot.com",
  messagingSenderId: "520315801379",
  appId: "1:520315801379:web:18ccbd9d034747bc87c696",
  measurementId: "G-0SXQ6RT7F4",
};
//Redux

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const dbUser = await getDoc(doc(db, "users", user.uid));
    console.log(dbUser);
    let data = {
      user: {
        uid: user.uid,
        fullName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        ...dbUser.data(),
      },
      accessToken: user.accessToken,
    };
    handleUser(data);
  } else {
    handleUser(null);
  }
});

export const register = async ({ email, fullName, username, password }) => {
  try {
    const user = await getDoc(doc(db, "usernames", username));
    if (user.exists()) {
      toast.error(`${username} username is being used by someone else.`);
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "usernames", username), {
        uid: response.user.uid,
      });

      await setDoc(doc(db, "users", response.user.uid), {
        username,
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/ogw/AOh-ky0Wy1zx3r5ehpvO9VN15oA0UOYU-J3e4SWCdjUsgQ=s32-c-mo",
        followers: [],
        following: [],
        notifications: [],
      });
      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });
    }
  } catch (err) {
    console.log(err.code);
  }
};

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export default app;
