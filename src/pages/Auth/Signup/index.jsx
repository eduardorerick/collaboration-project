import './style.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export function Signup() {
	return (
		<div className="signup-div">
			<section className="signup-titulo">Registrar Conta</section>
			<section className="signup-sublinhar"> </section>
			<br></br>
			<section className="signup-subtitulo">Registro de e-mail</section>
			<div className="signup-div-input">
				<input className= "signup-input" type="teste" placeholder="Insira o e-mail aqui." />
			</div>
			<br></br>
			<section className="signup-subtitulo">Insira uma senha</section>
			<div className="signup-div-input">
				<input className= "signup-input" type="teste" placeholder="Escolha uma senha." />
				<div className="signup-btn">
					<VisibilityOffIcon/>
				</div>
			</div>
			<br></br>
			<input type="checkbox" className="signup-boxSelect" />Eu concordo com os termos e condições
			<br></br><br></br>
			<button className="signup-button">Registrar conta</button>
			</div>
	);
}
