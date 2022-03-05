import "./style.css";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useCreateUser } from "../../../services/firebase/firebase";
import { CustomInput } from "../../../components/CustomInput";

export function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
      <br />
      <section className="signup-subtitulo">Endereço de e-mail</section>
      <br />
      <div className="signup-div-input">
        <input
          value={email}
          id="USER_EMAIL"
          onChange={(evt) => setEmail(evt.target.value)}
          className="signup-input"
          type="email"
          placeholder="Insira o e-mail aqui."
        />
      </div>
      <CustomInput
        value={pass}
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Escolha uma senha."
        onChange={(evt) => setPass(evt.target.value)}
        label="Senha"
        icon={isPasswordVisible ? <VisibilityOff /> : <Visibility />}
        onClickButton={() => setIsPasswordVisible(!isPasswordVisible)}
      />
      <button onClick={cadastrar} className="signup-button">
        Registrar conta
      </button>
      {/*<button className="signup-button">
				Registrar com Google<GoogleIcon />
			</button>*/}
    </div>
  );
}
