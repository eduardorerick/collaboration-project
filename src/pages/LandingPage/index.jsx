import { Template } from '../../components/Template';
import './style.scss';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/landingPageImg.svg';
import LogoCp from '../../assets/logocp.svg';
import Landingimage from '../../assets/landingimage.png';
export function LandingPage() {
	return (
		<section className="landing-section">
			<Template>
				<nav className="landing-navbar">
					<img src={LogoCp} alt="Logo"/>
					<div className="landing-nav-buttons-div">
						<Link to={'/'}>Home</Link>
						<Link to={'/auth/login'}>Login</Link>
						<Link to={'/auth/signup'}>Cadastro</Link>
					</div>
				</nav>
				<div className="landing-page-div">
					<div className="landing-text-div">
						<h1>Organize suas tarefas em apenas um lugar</h1>
						<p>
							Trafalgar provides progressive, and affordable 
							healthcare, accessible on mobile and online 
							for everyone
						</p>
					</div>
				</div>
			<div className='landing-image'>
				<img src ={Landingimage} alt='landing-image'/>
			</div>
					
			</Template>
		</section>
	);
}
