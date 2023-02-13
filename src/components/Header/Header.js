import { Link } from "react-router-dom";
import logo from "./Web.png";
import menu from "./HamburgerMenu.png";
import cross from "./Cross.png";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const menu = document.getElementsByClassName("menu")[0];
    const cross = document.getElementsByClassName("cross")[0];
    const dropdown = document.getElementsByClassName("dropdown")[0];

    //click on menu
    menu.addEventListener("click", () => {
      menu.style.display = "none";
      cross.style.display = "block";
      dropdown.style.display = "flex";
    });

    //click on cross
    cross.addEventListener("click", () => {
      cross.style.display = "none";
      menu.style.display = "block";
      dropdown.style.display = "none";
    });

    //click on dropdown
    dropdown.addEventListener("click", () => {
      cross.style.display = "none";
      menu.style.display = "block";
      dropdown.style.display = "none";
    });
  });

  return (
    <div className="Header">
      <div className="stage">
        <div className="left">
          <Link className="Link" to={"/"}>
            <img className="logo" src={logo} alt="Home"></img>
          </Link>
        </div>
        <nav className="right">
          <div className="Links">
            <Link className="Link" to={"/about"}>
              About
            </Link>
            <Link className="Link" to={"/projects"}>
              Projects
            </Link>
            <Link className="Link" to={"/hobbies"}>
              Hobbies
            </Link>
            <Link className="Link" to={"/resume"}>
              Resume
            </Link>
            <Link className="Link" to={"/contact"}>
              Contact
            </Link>
          </div>
          <img className="menu" src={menu} alt="menu"></img>
          <img className="cross" src={cross} alt="cross"></img>
          <div className="dropdown">
            <Link className="Link" to={"/about"}>
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
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
