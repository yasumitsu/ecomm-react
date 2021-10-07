import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAKQLKDA03OPoUcIP6anZNgI38uuvGOwUE',
	authDomain: 'react-ecomm-dd370.firebaseapp.com',
	projectId: 'react-ecomm-dd370',
	storageBucket: 'react-ecomm-dd370.appspot.com',
	messagingSenderId: '495652770954',
	appId: '1:495652770954:web:8911468be116ae0f3a8973'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
