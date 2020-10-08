// Rebase Help firebase to connect React and Firebase itself
import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

// Info to Connect DataBase
const app = firebase.initializeApp({
    apiKey: "AIzaSyBlqKiLjL6GehLBQnp2LjEkh5sL90xYshg",
    authDomain: "eternal-chat-box.firebaseapp.com",
    databaseURL: "https://eternal-chat-box.firebaseio.com",
    projectId: "eternal-chat-box",
});

const dataBase = firebase.database(app);
const base = Rebase.createClass(dataBase);

export { dataBase }

export default base