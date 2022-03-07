import avatar from '../imgs/avatar.png';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ComputerIcon from '@mui/icons-material/Computer';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import './style.scss';
export function Profile() {
	return (
		<div>
			<section className="portal-profile">
				<img src={avatar} alt="avatar" className="portal-avatar" />
				<div className="portal-profile-data">
					<h1>Nome do Usuário</h1>
					<div className="profile-git-analist">
						<ApartmentIcon /> São Paulo
						<ComputerIcon /> XX Projetos
						<StarIcon sx={{ color: '#bdbb4b' }} /> XXX Estrelas
					</div>
					<div className="portal-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis eu dolor quis pretium. Etiam.
					</div>
					<div>
						<SearchIcon sx={{ color: 'red' }} /> X Fazendo <DoneIcon color="red" /> XX Completas
					</div>
				</div>
			</section>
			<section className="portal-projects">
				<div />
			</section>
		</div>
	);
}
