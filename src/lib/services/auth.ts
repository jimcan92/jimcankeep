import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "./firebase";
import { user } from "$lib/stores";
import { firstTimeSaveUser, getUser, saveUser } from "./firestore/users";

const auth = getAuth(app)

export async function signIn() {
    let googleProvider = new GoogleAuthProvider();
    googleProvider.addScope('profile');
    googleProvider.addScope('email');

    await signInWithPopup(auth, googleProvider);
}

export async function syncUser() {
    if (!auth.currentUser) {
        user.set(null)
        return
    }

    let s = await getUser(auth.currentUser.uid)

    if (s.hasError) {
        await firstTimeSaveUser(auth.currentUser)
        s = await getUser(auth.currentUser.uid)
    }

    user.set(s.value ?? null)
}

export async function signout() {
    await signOut(auth);
    user.set(null)
}