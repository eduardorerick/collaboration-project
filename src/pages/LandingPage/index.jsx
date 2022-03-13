import { Template } from "../../components/Template";
import "./style.scss";
import { Link } from "react-router-dom";
import LogoCp from "../../assets/logocp.svg";
import Landingimage from "../../assets/landingimage.png";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
export function LandingPage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <section className="landing-section">
      <Template>
        <nav className="landing-navbar">
          <img src={LogoCp} alt="Logo" />
          <div className="landing-nav-buttons-div">
            <Link to={"/"}>Home</Link>
            <Link to={"/auth/login"}>Login</Link>
            <Link to={"/auth/signup"}>Cadastro</Link>
          </div>
          <div className={`landing-nav-burger ${toggleMenu && "showing"}`}>
            <div
              className="landing-menu-icon"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <Menu />
            </div>
            <div className={"landing-menu-links"}>
              <Link to={"/"}>Home</Link>
              <Link to={"/auth/login"}>Login</Link>
              <Link to={"/auth/signup"}>Cadastro</Link>
            </div>
          </div>
        </nav>
        <div className="landing-page-div">
          <div className="landing-text-div">
            <h1>Organize suas tarefas em apenas um lugar</h1>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
          </div>
        </div>
        <div className="landing-image">
          <img src={Landingimage} alt="Landing Page" />
        </div>
      </Template>
    </section>
  );
}
