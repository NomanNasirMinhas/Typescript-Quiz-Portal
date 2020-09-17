importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyARbTN6isDAEf2TMccAsw0NpwIz0ROI1ww",
  authDomain: "quizportalpwa.firebaseapp.com",
  databaseURL: "https://quizportalpwa.firebaseio.com",
  projectId: "quizportalpwa",
  storageBucket: "quizportalpwa.appspot.com",
  messagingSenderId: "581436333766",
  appId: "1:581436333766:web:e1691d8f099a2681e281c7",
  measurementId: "G-RFBYVMP497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.messaging();

