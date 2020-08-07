import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const conf ={
    apiKey: "AIzaSyCbORXCeXMb8Jl0wy6Zw_Q0JUWVHGcCTpA",
    authDomain: "static-chiller-283814.firebaseapp.com",
    databaseURL: "https://static-chiller-283814.firebaseio.com",
    projectId: "static-chiller-283814",
    storageBucket: "static-chiller-283814.appspot.com",
    messagingSenderId: "900000497551",
    appId: "1:900000497551:web:3ee42c95c3e1c950a8d5fa",
    measurementId: "G-4K007XJ8JX"
};
firebase.initializeApp(conf);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();
    // console.log(snapShot);
    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdDate = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdDate,
                ...additionalData
            });
        } catch (error) {
            console.log(error);
        }
    }
    return userRef;
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;