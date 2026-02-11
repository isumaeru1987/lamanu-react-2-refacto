import { Link } from 'react-router-dom';
import { FaUsers, FaSearch, FaUserCircle } from 'react-icons/fa';
import "./HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Accueil</h1>
        <p>Bienvenue sur notre site !</p>
        <p>Explorez notre plateforme de gestion des utilisateurs avec une interface moderne et intuitive.</p>

        <div className="home-cta">
          <Link to="/users" className="home-button primary">
            <FaUsers />
            Voir les utilisateurs
          </Link>
        </div>

        <div className="home-features">
          <div className="feature-card">
            <h3><FaUsers /> Gestion complète</h3>
            <p>Gérez tous vos utilisateurs en un seul endroit</p>
          </div>
          <div className="feature-card">
            <h3><FaSearch /> Recherche rapide</h3>
            <p>Trouvez instantanément l'utilisateur recherché</p>
          </div>
          <div className="feature-card">
            <h3><FaUserCircle /> Profils détaillés</h3>
            <p>Accédez aux informations complètes de chaque utilisateur</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage