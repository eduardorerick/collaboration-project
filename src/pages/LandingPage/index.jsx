import { Template } from '../../components/Template';
import './style.css';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/landingPageImg.svg';
import { useAuth } from '../../context/Auth';

export function LandingPage() {
	return (
		<section className="landing-section">
			<Template>
				<nav className="landing-navbar">
					<img src={''} alt="Website Logo" />
					<div className="landing-nav-buttons-div">
						<Link to={'/'}>Home</Link>
						<Link to={'/auth/signup'}>Cadastro</Link>
						<Link to={'/auth/login'}>Login</Link>
					</div>
				</nav>
				<div className="landing-page-div">
					<div className="landing-text-div">
						<h1>Organize suas tarefas em apenas um lugar</h1>
						<p>
							Collaboration project provides progressive, and affordable plans, accessible on mobile and online for everyone
						</p>
					</div>
					<div className="landing-image-div">
						<img src={HeroImage} alt="Landing Page Logo" style={{ width: '100%' }} />
					</div>
				</div>
			</Template>
		</section>
	);
}
