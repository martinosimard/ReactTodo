import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDX4Qq_-fsgOcoPB2d5Enh-6iwD895mGQU",
      authDomain: "ms-todo-app-913d6.firebaseapp.com",
      databaseURL: "https://ms-todo-app-913d6.firebaseio.com",
      storageBucket: "ms-todo-app-913d6.appspot.com",
      messagingSenderId: "986026542574"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
