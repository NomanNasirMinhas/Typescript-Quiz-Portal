importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey("BCJRtBpPHInEpUgLbSkPZO0cMcQPd8jrRc3_x6PbSmCSjRGZiE0jZuc7zddWbCn_Pdxey389xlZM36q5jFluy38");

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
