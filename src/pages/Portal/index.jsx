import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import './style.css';

export function Portal() {
	const { user } = useAuth();

	return (
		<section className="portal-section">
			<div className="left-div">Bem vindo, {user.email}!</div>

			<div className="right-div">
				<Outlet />
			</div>
		</section>
	);
}
