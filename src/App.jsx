import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import { Link } from 'react-router-dom';
import './App.css'
import UserDetails from './pages/UserDetails';

export default function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/users">Utilisateurs</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/users/:id' element={<UserDetails />} />
            </Routes>
        </Router>
    );
}
