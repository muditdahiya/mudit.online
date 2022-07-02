import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="left">
        <Link className="Link" to={"/"}>
          mudit.io
        </Link>
      </div>
      <nav className="right">
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
      </nav>
    </div>
  );
}

export default Header;
