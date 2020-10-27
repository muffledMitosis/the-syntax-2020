import * as firebase from "firebase/app";

import "firebase/analytics";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB690ouN9RHT6ooTH3buD9qY6st_lHwZj8",
    authDomain: "syntax-2020.firebaseapp.com",
    databaseURL: "https://syntax-2020.firebaseio.com",
    projectId: "syntax-2020",
    storageBucket: "syntax-2020.appspot.com",
    messagingSenderId: "957051029928",
    appId: "1:957051029928:web:665525f81a01f7119a359d",
    measurementId: "G-QYFJLHP36B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics();
const storage = firebase.storage();
const db = firebase.firestore();

export { analytics, storage, db, firebase };