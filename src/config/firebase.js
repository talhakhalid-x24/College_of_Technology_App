import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDGFghfOAgqYEB3U48ouPNVOAgt1OAQQJM",
    authDomain: "college-of-techonology.firebaseapp.com",
    projectId: "college-of-techonology",
    storageBucket: "college-of-techonology.appspot.com",
    messagingSenderId: "1022277822851",
    appId: "1:1022277822851:web:914103272c15d99378aeb6",
    measurementId: "G-X0X27Q6RCP"
  };

  if(!firebase.apps.length){
    var Firebase = firebase.initializeApp(firebaseConfig);
  }
  export default Firebase;