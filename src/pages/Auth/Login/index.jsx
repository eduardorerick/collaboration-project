import "./style.scss";
import { useState } from "react";
import { CustomInput } from "../../../components/CustomInput";
import { useLogin } from "../../../services/firebase/firebase";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useLogin();

  function handleLogin() {
    try {
      userLogin(email, password, "/portal/profile");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <h1>Faça o login </h1>
        <CustomInput
          type="text"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder={"Insira o email aqui"}
          label="Endereço de email"
          htmlFor="USER_EMAIL"
        />
        <CustomInput
          type="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          placeholder={"Insira a senha aqui"}
          label="Senha"
          htmlFor="USER_PASSWORD"
        />
        <button onClick={handleLogin} className={"loginButton"}>
          Fazer Login
        </button>
      </div>
    </section>
  );
}
