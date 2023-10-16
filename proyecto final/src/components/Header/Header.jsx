import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>React Router</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="">Home</NavLink>
          </li>
          <li>
            <NavLink to="/foto" className="Fotografialink">Fotografía</NavLink>
          </li>
          <li>
            <NavLink to="/diseño" className="diseñolink">Diseño</NavLink>
          </li>
          <li>
            <NavLink to="/color" className="colorlink">Color</NavLink>
          </li>
          <li>
            <NavLink to="/web" className="weblink">Wen</NavLink>
          </li>
          <li>
            <NavLink to="/notfound" className="notfoundlink">NotFound</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;