import { useAuth } from '../../context/Auth';
import { useSignOut } from '../../services/firebase/firebase';
import './style.scss';
import avatar from './imgs/avatar.png';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ComputerIcon from '@mui/icons-material/Computer';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';

export function Portal() {
	const signOut = useSignOut();

	return (
		<div>
		<div className='portal-logo'>
			<h1>Collaboration Project</h1>
			<div className='portal-menu'>
			<h2>Tarefas</h2>
			<h2>Profile</h2>
			<h2 onClick={() => signOut()}>LogOut</h2>
			</div>
		</div>
		<div className='portal-page'>
			<section className='portal-profile'>
				<img src= {avatar} alt="avatar" className='portal-avatar'/>
				<div className='portal-profile-data'>
					<h1>Nome do Usuário</h1>
					<div className='profile-git-analist'>
						<ApartmentIcon/> São Paulo
						<ComputerIcon/> XX Projetos
						<StarIcon sx={{color:'#bdbb4b'}}/> XXX Estrelas
					</div>
					<div className='portal-description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis eu dolor quis pretium. Etiam.
					</div>
					<div>
						<SearchIcon sx={{color: 'red'}}/> X Fazendo <DoneIcon color='red'/> XX Completas
					</div>
				</div>
			</section>
			<section className='portal-projects'>
				<div></div>
			</section>
		</div>
		</div>
	);
}
