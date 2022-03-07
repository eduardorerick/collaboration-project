import { Outlet, useNavigate } from 'react-router-dom';
import { useSignOut } from '../../services/firebase/firebase';
import './style.scss';

export function Portal() {
	const signOut = useSignOut();
	const navigate = useNavigate();

	return (
		<div>
			<div className="portal-navbar">
				<h1>Collaboration Project</h1>
				<div className="portal-menu">
					<h2 onClick={() => navigate('/portal/tasklist')}>Tarefas</h2>
					<h2 onClick={() => navigate('/portal/profile')}>Profile</h2>
					<h2 onClick={() => signOut()}>LogOut</h2>
				</div>
			</div>
			<div className="portal-page">
				<Outlet />
			</div>
		</div>
	);
}
