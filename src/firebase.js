import * as firebase from "firebase";

import { FirebaseConfig } from "./firebaseConfig";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const storage = firebase.storage().ref();

export const products = databaseRef;
