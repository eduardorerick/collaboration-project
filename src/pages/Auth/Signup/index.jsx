import './style.css';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import { useCreateUser } from '../../../services/firebase/firebase';

export function Signup() {
	const [ email, setEmail ] = useState('');
	const [ pass, setPass ] = useState('');
	const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
	const cadastro = useCreateUser();

	function cadastrar() {
		try {
			cadastro(email, pass);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="signup-div">
			<section className="signup-titulo">Registrar Conta</section>
			<section className="signup-sublinhar"> </section>
			<br />
			<section className="signup-subtitulo">Registro de e-mail</section>
			<div className="signup-div-input">
				<input
					value={email}
					onChange={(evt) => setEmail(evt.target.value)}
					className="signup-input"
					type="email"
					placeholder="Insira o e-mail aqui."
				/>
			</div>
			<br />
			<section className="signup-subtitulo">Insira uma senha</section>
			<div className="signup-div-input">
				<input
					value={pass}
					onChange={(evt) => setPass(evt.target.value)}
					className="signup-input"
					type={isPasswordVisible ? 'text' : 'password'}
					placeholder="Escolha uma senha."
				/>
				<button id="signup-olhar" className="signup-btn-password" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
					{isPasswordVisible && <VisibilityOff />}
					{!isPasswordVisible && <Visibility />}
				</button>
			</div>
			<br />
			<input type="checkbox" className="signup-boxSelect" />Eu concordo com os termos e condições
			<br />
			<br />
			<button onClick={cadastrar} className="signup-button">
				Registrar conta
			</button>
			<button className="signup-button">
				Registrar com Google<GoogleIcon />
			</button>
		</div>
	);
}
