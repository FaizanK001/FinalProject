import firebase from 'firebase/app'
import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyA-PikQOF_3QfCGRQf0ECR-1edlAFrtoTE",
    authDomain: "finalproject-94c61.firebaseapp.com",
    projectId: "finalproject-94c61",
    storageBucket: "finalproject-94c61.appspot.com",
    messagingSenderId: "646976599007",
    appId: "1:646976599007:web:eb528200fe86d64bbf0a6a"
  };



const fire = firebase.initializeApp(firebaseConfig);

export const auth = fire.auth()
export default fire;