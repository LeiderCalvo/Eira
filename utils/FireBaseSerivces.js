import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import FireAuth from "./FireAuth";
import FireStore from "./FireStore";
import FireStorage from "./FireStorage";

import firebaseCredentials from "./firebaseCredentials";
const firebaseConfig = firebaseCredentials;
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const auth = firebase.auth();
const dataBase = firebase.firestore();
const storage = firebase.storage();

function init() {
    FireAuth.setRef(auth);
    FireStore.setRef(dataBase, firebase);
    FireStorage.setRef(storage);
}

export default {init};