import firebase   from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBCA-JlRqQh3bmKnY9kGZd3T9IbNUjhRfM",
    authDomain: "crwn-db-de1a5.firebaseapp.com",
    databaseURL: "https://crwn-db-de1a5.firebaseio.com",
    projectId: "crwn-db-de1a5",
    storageBucket: "crwn-db-de1a5.appspot.com",
    messagingSenderId: "671538329207",
    appId: "1:671538329207:web:2ff7696914cf7416a13872",
    measurementId: "G-E723JXDC2Z"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

