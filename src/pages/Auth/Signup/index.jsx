import './style.css';

export function Signup() {
	return (
		<div className="signup-div">
			<section className="signup-titulo">Registrar Conta</section>
			<br>
			</br>
			<section className="signup-subtitulo">Registro de e-mail</section>
			<div className="signup-div-input">
				<input className= "signup-input" type="teste" placeholder="Insira o e-mail aqui." />
			</div>
			<section className="signup-subtitulo">Senha</section>
			<div className="signup-div-input">
				<input className= "signup-input" type="teste" placeholder="Escolha uma senha." />
				<div className="signup-btn">
					show
				</div>
			</div>
			<br></br>
			<input type="checkbox" className="signup-boxSelect" />Eu concordo com os termos e condições
			<br></br>
			<button className="signup-button">Registrar conta</button>
			</div>
	);
}
