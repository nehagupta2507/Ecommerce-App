import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFy3MQ9uRQgSnZCvgrMufJ_iKKZTSMt4k",
    authDomain: "kianaclothing.firebaseapp.com",
    databaseURL: "https://kianaclothing.firebaseio.com",
    projectId: "kianaclothing",
    storageBucket: "kianaclothing.appspot.com",
    messagingSenderId: "116553543579",
    appId: "1:116553543579:web:95b321242da25c6b39bb3e"
    // measurementId: "G-DX5DL44REZ"
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();
export const auth =firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
