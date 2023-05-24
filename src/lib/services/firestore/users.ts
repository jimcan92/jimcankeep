import { userConverter, type User } from "$lib/types/user";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { FirestoreResult } from "./firestoreResult";
import type { User as FirebaseUser } from "firebase/auth";
import { app } from "../firebase";

const db = getFirestore(app)

export async function saveUser(user: User): Promise<FirestoreResult<User>> {
    try {
        const docRef = doc(db, 'users', user.uid).withConverter(userConverter)
        await setDoc(docRef, user)
        return new FirestoreResult({})
    } catch (e: any) {
        return new FirestoreResult({ error: e.toString() })
    }
}

export async function getUser(uid: string): Promise<FirestoreResult<User>> {
    const docRef = doc(db, 'users', uid).withConverter(userConverter)
    const res = await getDoc<User>(docRef)
    return new FirestoreResult({
        value: res.data(),
        error: res.exists() ? undefined : `No user with id "${uid}" in the database.`
    });
}

export async function firstTimeSaveUser(user: FirebaseUser) {
    const u: User = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
    }

    await saveUser(u);
}