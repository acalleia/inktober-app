import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyD-ovcpL_ZCXw5SyGlPtMsEWJPQBT_qF1Q",
    authDomain: "inktoberapp.firebaseapp.com",
    databaseURL: "https://inktoberapp.firebaseio.com",
    projectId: "inktoberapp",
    storageBucket: "inktoberapp.appspot.com",
    messagingSenderId: "767090790993"
  };
  var firebase = firebase.initializeApp(config);

  export default firebase;