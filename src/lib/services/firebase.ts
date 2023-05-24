// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAg4KNTVVnjTyl_FSEHxXJBYIBl2QgS8gE",
    authDomain: "jimcankeep.firebaseapp.com",
    projectId: "jimcankeep",
    storageBucket: "jimcankeep.appspot.com",
    messagingSenderId: "647142619624",
    appId: "1:647142619624:web:f4c67b47c3f83a90d94c5d",
    measurementId: "G-41JML51WHM"
};

export const app = initializeApp(firebaseConfig);