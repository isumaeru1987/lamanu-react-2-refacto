import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="item">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="item">
          <NavLink to="/users">Users</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
