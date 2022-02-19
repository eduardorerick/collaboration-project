import './style.css';

export function Signup() {
	return (
		<div className="signup-div">
			<section className="signup-titulo">Registrar Conta</section>
			<section className="signup-subtitulo">Registro de e-mail</section>
			<input placeholder="Insida seu e-mail" className="signup-inputBox" />
			<section className="signup-subtitulo">Senha</section>
			<input placeholder="Escolha uma senha" className="signup-inputBox" />
			<br></br>
			<input type="checkbox" className="signup-boxSelect" />Eu concordo com os termos e condições
			<br></br>
			<button className="signup-button">Registrar conta</button>
		</div>
	);
}
