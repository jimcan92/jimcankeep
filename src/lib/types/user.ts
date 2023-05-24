import type { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export interface User {
    uid: string,
    displayName?: string | null,
    email?: string | null,
    photoURL?: string | null,
    admin?: boolean | null,
}

export const userConverter = {
    toFirestore(user: User): DocumentData {
        return {
            displayName: user.displayName ?? null,
            email: user.email ?? null,
            photoURL: user.photoURL ?? null,
            admin: user.admin ?? null,
        }
    },
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): User {
        const data = snapshot.data(options)!;

        return {
            uid: snapshot.id,
            admin: data.admin,
            displayName: data.displayName,
            email: data.email,
            photoURL: data.photoURL,
        }
    }
}