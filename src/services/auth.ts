import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app)

export async function signin() {
    let googleProvider = new GoogleAuthProvider();
    googleProvider.addScope('profile');
    googleProvider.addScope('email');

    await signInWithPopup(auth, googleProvider);
}