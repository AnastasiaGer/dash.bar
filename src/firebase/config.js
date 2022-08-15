import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCS8sXzMTiRSO3JvdYLkZ1n77JHrstOZ38",
  authDomain: "dash-bar-bd950.firebaseapp.com",
  projectId: "dash-bar-bd950",
  storageBucket: "dash-bar-bd950.appspot.com",
  messagingSenderId: "318544697185",
  appId: "1:318544697185:web:571be9a39ccb9ff112d720"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}