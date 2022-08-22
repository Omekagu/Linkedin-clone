import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqYurAUiAfLGhP1FtpUX23klEn4RIkCsY',
  authDomain: 'linkedin-clone-ab349.firebaseapp.com',
  projectId: 'linkedin-clone-ab349',
  storageBucket: 'linkedin-clone-ab349.appspot.com',
  messagingSenderId: '1047616371572',
  appId: '1:1047616371572:web:7cfb02fd5de00885414a21',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
