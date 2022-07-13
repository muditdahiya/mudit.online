import { Link } from "react-router-dom";
import logo from "./Web.png";
import menu from "./HamburgerMenu.png";
import cross from "./Cross.png";

function Header() {
  return (
    <div className="Header">
      <div className="left">
        <img className="logo" src={logo} alt="logo"></img>
        <Link className="Link" to={"/"}>
          mudit.io
        </Link>
      </div>
      <nav className="right">
        {/* <Link className="Link" to={"/about"}>
          About
        </Link>
        <Link className="Link" to={"/projects"}>
          Projects
        </Link>
        <Link className="Link" to={"/hobbies"}>
          Hobbies
        </Link>
        <Link className="Link" to={"/contact"}>
          Contact
        </Link> */}
        <img className="menu" src={menu} alt="menu"></img>
        <img className="cross" src={cross} alt="cross"></img>
      </nav>
    </div>
  );
}

export default Header;
