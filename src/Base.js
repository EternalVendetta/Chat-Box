// Rebase Help firebase to connect React and Firebase itself
import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

// Info to Connect DataBase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlqKiLjL6GehLBQnp2LjEkh5sL90xYshg",
    authDomain: "eternal-chat-box.firebaseapp.com",
    databaseURL: "https://eternal-chat-box.firebaseio.com"
})

// Link Rebase to Firebase
const base = Rebase.createClass(firebase.database);

export { firebaseApp }

export default base