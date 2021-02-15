import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA2Y3kntvVyoNj2fFIfVOjAqFUEwOlpb0w",
    authDomain: "crud-react-b0617.firebaseapp.com",
    projectId: "crud-react-b0617",
    storageBucket: "crud-react-b0617.appspot.com",
    messagingSenderId: "588667058019",
    appId: "1:588667058019:web:ee57bc55814f1166f38556"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export { firebase }