import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>DISEÑO</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="homelink">Home</NavLink>
          </li>
          <li>
            <NavLink to="/foto" className="fotolink">Fotografía</NavLink>
          </li>
          <li>
            <NavLink to="/diseño" className="diseñolink">Diseño</NavLink>
          </li>
          <li>
            <NavLink to="/color" className="colorlink">Color</NavLink>
          </li>
          <li>
            <NavLink to="/web" className="weblink">Web</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;