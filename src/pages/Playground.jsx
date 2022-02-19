import { getFirestore, collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firebaseApp, useCreateNewTask, useCreateUser, useLogin } from '../services/firebase/firebase';
import { useAuth } from '../context/Auth';
import { Box, Button } from '@mui/material';
import { AddAPhoto } from '@mui/icons-material';

export function Playground() {
	const contextUser = useAuth();
	const createUser = useCreateUser();
	const userLogin = useLogin();
	const [ signInWithGoogle ] = useSignInWithGoogle(auth);
	const createNewTask = useCreateNewTask();
	const [ value ] = useCollectionData(collection(getFirestore(firebaseApp), `users/${contextUser.user.uid}/tasks`), {
		snapshotListenOptions: { includeMetadataChanges: true }
	});
	console.log(value);

	function handleSignup() {
		try {
			createUser('eduardorerick@gmail.com', '123123');
		} catch (err) {
			console.log(err);
		}
	}
	function handleLogin() {
		try {
			userLogin('eduardorerick@gmail.com', '123123');
		} catch (err) {
			console.log(err);
		}
	}
	function handleNewTask() {
		try {
			createNewTask('Nova tarefa');
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div>
			<h1>Playground</h1>
			<button onClick={handleSignup}>Cadastrar</button>
			<button onClick={() => signInWithGoogle()}>Cadastrar com google</button>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleNewTask}>Nova task</button>
			<Box>
				<Button variant="outlined" sx={{ mt: '10px', ml: '10px' }}>
					Teste <AddAPhoto />
				</Button>
			</Box>
		</div>
	);
}
