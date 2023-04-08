import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyJF4EKk3MTg62qxj0nD_koRp-BbHkpLc",
  authDomain: "crushinmybackyard.firebaseapp.com",
  projectId: "crushinmybackyard",
  storageBucket: "crushinmybackyard.appspot.com",
  messagingSenderId: "277306212438",
  appId: "1:277306212438:web:787ab2352c9dada1327bf7",
  measurementId: "G-QKPFR82T4Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name!);
      localStorage.setItem("email", email!);
      localStorage.setItem("profilePic", profilePic!);
    })
    .catch((error) => {
      console.log(error);
    });
};
