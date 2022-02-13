import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useSnackbar } from 'notistack';

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
const db = getFirestore(firebaseApp);

export function useCreateUser() {
	const { enqueueSnackbar } = useSnackbar();

	return (email, password) =>
		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const user = userCredential.user;
				await setDoc(doc(db, 'users', user.uid), {
					email: user.email,
					id: user.uid
				});
				enqueueSnackbar('Usuário criado com sucesso!', { variant: 'success' });
			})
			.catch((error) => {
				enqueueSnackbar(error.message, { variant: 'error' });
				// ..
			});
}

export function useLogin() {
	const { enqueueSnackbar } = useSnackbar();

	return (email, password) =>
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				localStorage.setItem('user', JSON.stringify(user));
				// ...
			})
			.catch((error) => {
				enqueueSnackbar(error.message, { variant: 'error' });
			});
}
