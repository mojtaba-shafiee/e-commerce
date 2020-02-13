import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config= {
    apiKey: "AIzaSyB6nxjGe902UeAReReZsxnLcFy7zTjrmsc",
    authDomain: "crwn-db-5979d.firebaseapp.com",
    databaseURL: "https://crwn-db-5979d.firebaseio.com",
    projectId: "crwn-db-5979d",
    storageBucket: "crwn-db-5979d.appspot.com",
    messagingSenderId: "923943165603",
    appId: "1:923943165603:web:f893116fc7e2577daa2916",
    measurementId: "G-RN38JBE8ZC"
}

firebase.initializeApp(config)

export const auth= firebase.auth()
export const firestore= firebase.firestore()

const provider= new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle= () => auth.signInWithPopup(provider)

export default firebase