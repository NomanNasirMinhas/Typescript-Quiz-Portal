import firebase from 'firebase'

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


  firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function configureNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission);
        if (permission === "granted") {
            messaging.getToken().then((currentToken: any) => {
                if (currentToken) {
                    // console.log("Token");
                    // console.log(currentToken);
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.');
                    // Show permission UI.

                }
            }).catch((err:any) => {
                console.log('An error occurred while retrieving token. ', err);

            });
        }
    })
}