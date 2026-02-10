import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenue</h1>
      <Link to="/users">Voir les utilisateurs</Link>
    </div>
  );
}
