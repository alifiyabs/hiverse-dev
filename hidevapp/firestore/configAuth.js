import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzJm-X9G8BDCKrtr05PAe1QkIxWyRvyQ4",
    authDomain: "hiverse-develop.firebaseapp.com",
    projectId: "hiverse-develop",
    storageBucket: "hiverse-develop.appspot.com",
    messagingSenderId: "757869704222",
    appId: "1:757869704222:web:cd76d806f37e43b823aa0f",
    measurementId: "G-JFT1G9XF7S"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };