import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { useSignOut } from '../../services/firebase/firebase';
import './style.css';

export function Portal() {
	const { user } = useAuth();
	const signOut = useSignOut();

	return (
		<section className="portal-section">
			<div className="left-div">
				<h1>Bem vindo, {user.email}!</h1>
				<button onClick={signOut}>Sigout</button>
			</div>

			<div className="right-div">
				<Outlet />
			</div>
		</section>
	);
}
