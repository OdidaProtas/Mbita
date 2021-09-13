import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


if (!firebase?.apps.length) {
  firebase?.initializeApp(firebaseConfig);
}
var auth = firebase.auth();


export { firebase,auth };