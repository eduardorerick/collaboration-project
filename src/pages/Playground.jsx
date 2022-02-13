import { useCreateUser, useLogin } from '../services/firebase/firebase';

export function Playground() {
	const createUser = useCreateUser();
	const userLogin = useLogin();
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
	return (
		<div>
			<h1>Playground</h1>
			<button onClick={handleSignup}>Cadastrar</button>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
}
