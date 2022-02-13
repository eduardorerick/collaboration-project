import './style.css';

export function Signup() {
	return <div className="signup-div">
		<section className="signup-titulo">Registrar Conta</section>
		<section className="signup-subtitulo">Registro de e-mail</section>
		<section className="signup-inputBox">Insira o e-mail aqui</section>
		<section className="signup-subtitulo">Senha</section>
		<section className="signup-imputBox">Insira a senha aqui</section>
		<section className="signup-boxSelect">Eu concordo com os termos e condições</section>
		<section className="signup-button">Registrar conta</section>
	</div>;
}
