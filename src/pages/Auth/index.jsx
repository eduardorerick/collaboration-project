import { Link, Outlet } from 'react-router-dom';
import SideImage from '../../assets/SideImage.svg';
import './style.css';

export function Auth() {
	return (
		<section className='auth-section'>
			<div className="auth-left-div">
				<img src={SideImage} alt="Side Logo" style={{ width: '100%' }} />
			</div>
			<div className="auth-right-div">
				<nav className="nav-button">
					<Link to="/"> {`<-`} Voltar</Link>
				</nav>

				<div className="auth-outlet-div">
					<Outlet />
				</div>
			</div>
		</section>
	);
}
