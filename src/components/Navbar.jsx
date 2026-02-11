import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="nav-div">
            <nav className="navbar">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/users" end>
                    Users
                </NavLink>
            </nav>
        </div>
  )
}

export default Navbar