import { Link, Outlet } from 'react-router-dom';
import SideImage from '../../assets/SideImage.svg';
import './style.css';

export function Login() {
	return (
		<section>
			<div className="left-div">
				<img src={SideImage} alt="Side Image" style={{ width: '100%' }} />
			</div>
			<div className="right-div">
				<nav className="nav-button">
					<Link to="/"> {`<-`} Voltar</Link>
				</nav>

				<div className='outlet-div'>
					<h1>Faça o login</h1>
				</div>
				<Outlet />
			</div>
		</section>
	);
}
