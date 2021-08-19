import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyBRa9jyOBGgHGszvHKq7yar4OjH4C8Ct-A',
	authDomain: 'docs-clone-7fbe6.firebaseapp.com',
	projectId: 'docs-clone-7fbe6',
	storageBucket: 'docs-clone-7fbe6.appspot.com',
	messagingSenderId: '921928527623',
	appId: '1:921928527623:web:4a3be4168b71d71f161fa2'
};

const app = !firebaseConfig.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = '';

export { db };
