import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBz3tESGh9XD8LX7yq8_anfvuirmmfoJxY",
    authDomain: "yesil-galeri.firebaseapp.com",
    projectId: "yesil-galeri",
    storageBucket: "yesil-galeri.appspot.com",
    messagingSenderId: "1034832690440",
    appId: "1:1034832690440:web:640291bb4068ff81de80bd"
  };

  firebase.initializeApp(firebaseConfig);

  const depo=firebase.storage();
  const veritabani=firebase.firestore();

  const tarih=firebase.firestore.FieldValue.serverTimestamp;

  export {depo,veritabani,tarih}