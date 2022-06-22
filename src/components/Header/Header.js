import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="left">
        <Link to={"/"}>mudit.io</Link>
      </div>
      <nav className="right">
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/hobbies"}>Hobbies</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
