import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, addDoc, collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import { useAuth } from '../../context/Auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
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

export function useCreateNewTask() {
	const { user } = useAuth();

	return async (title) => {
		await addDoc(collection(db, `users/${user.uid}/tasks`), {
			title: title,
			isCompleted: false
		});
	};
}

export function useTasks() {
	const { user } = useAuth();
	const docs = [];

	const q = query(collection(db, `users/${user.uid}/tasks`));
	const querySnapshot = onSnapshot(q, (snapshot) => {
		snapshot.forEach((doc) => {
			docs.push(doc.data());
		});
	});

	return docs;
}
