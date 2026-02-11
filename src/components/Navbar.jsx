import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import UsersPage from '../pages/UsersPage';
import NotFound from '../pages/NotFound';
import '../css/Navbar.css';

function Navbar() {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                <NavLink to="/users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Users</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navbar;