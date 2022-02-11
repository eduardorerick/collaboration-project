import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBBYDIIlGeo4ejITgwvwurPxNDyOiUeNsw',
	authDomain: 'collaboration-project-14810.firebaseapp.com',
	projectId: 'collaboration-project-14810',
	storageBucket: 'collaboration-project-14810.appspot.com',
	messagingSenderId: '602908396224',
	appId: '1:602908396224:web:0cc68151d534442573bb25'
};

export const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export function createUser(email, password) {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			localStorage.setItem('user', JSON.stringify(user));
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
}
