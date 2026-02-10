import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>Bienvenue</h1>
      <p>Application de gestion des utilisateurs</p>
      <Link to="/users">
        <button
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Voir les utilisateurs
        </button>
      </Link>
    </div>
  );
}

export default Home;
