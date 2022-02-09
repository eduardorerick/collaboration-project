import { Template } from '../../components/Template';
import './style.css';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/landingPageImg.svg';

export function LandingPage() {
	return (
		<section className="section">
			<Template>
				<nav className="navbar">
					<img src={''} alt="Website Logo" />
					<div className="nav-buttons-div">
						<Link to={'/'}>Home</Link>
						<Link to={'/auth/signup'}>Cadastro</Link>
						<Link to={'/auth/login'}>Login</Link>
					</div>
				</nav>
				<div className="landing-page-div">
					<div className='text-div'>
						<h1>Organize suas tarefas em apenas um lugar</h1>
						<p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
					</div>
					<div className='image-div'>
						<img src={HeroImage} alt="Hero Image" style={{ width: '100%' }} />
					</div>
				</div>
			</Template>
		</section>
	);
}
