import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// from firebase after creating app
const config={
    apiKey: "AIzaSyAInDWSkjkIBDikGujrlTDiU_lRXp09Iws",
    authDomain: "react-db-d0ae3.firebaseapp.com",
    databaseURL: "https://react-db-d0ae3.firebaseio.com",
    projectId: "react-db-d0ae3",
    storageBucket: "react-db-d0ae3.appspot.com",
    messagingSenderId: "1080096527683",
    appId: "1:1080096527683:web:c8492ad2d2c72856df4bf6",
    measurementId: "G-LF6VP1ME6G"
}
// initialization
firebase.initializeApp(config);

// export auth in app for further auth use
export  const auth=firebase.auth();


// export firestore in app for further db use
export  const firestore=firebase.firestore();



// this give access to GithubAuthProvider via auth library
const provider= new firebase.auth.GithubAuthProvider();

// prompt google pop for auth for sign in
provider.setCustomParameters({prompt:'select_account'});


export const signInWithGoogle= () =>auth.signInWithPopup(provider);



export default firebase;
