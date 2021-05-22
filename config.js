import firebase from 'firebase'
require('firebase/app')
import 'firebase/auth'
import 'firebase/database'
import 'firebase/app'


  // Your web app's Firebase configuration
  export const firebaseConfig = {
    apiKey: "AIzaSyCxw7CmbFSINzYDHLXpD2VtqIUxNr-DskQ",
    authDomain: "story-telling-app1.firebaseapp.com",
    projectId: "story-telling-app1",
   databaseURL: "https://story-telling-app1-default-rtdb.firebaseio.com/",
    storageBucket: "story-telling-app1.appspot.com",
    messagingSenderId: "938196274183",
    appId: "1:938196274183:web:5b38028302e7c1489a2ea2",

  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
