import firebase from 'firebase'

// Get from firebase console/settings page.
export const firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId",
    measurementId: "measurementId"
  };

firebase.initializeApp(firebaseConfig)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const frbase = firebase
