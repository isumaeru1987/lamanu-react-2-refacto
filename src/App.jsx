/** Router */
import { Link } from 'react-router';

/** Style */
import './css/App.css';

export default function App() {
  return (
    <div className="container">
      <main>
        <section className="hero">
          <h2>Bienvenue sur UserHub</h2>
          <p>Gérez et consultez facilement tous vos utilisateurs en un seul endroit.</p>
          <div className="cta-buttons">
            <Link to={"/users"} className='btn btn-primary'>Voir les utilisateurs</Link>
          </div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <h3>150+</h3>
            <p>Utilisateurs actifs</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Support disponible</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Sécurisé</p>
          </div>
        </section>
      </main>
    </div>
  )
}
