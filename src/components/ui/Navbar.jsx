import { NavLink } from "react-router";
import '../../css/Navbar.css'

export function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/users" end>
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;