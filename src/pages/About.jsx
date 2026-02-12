import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { getUserById } from "../services/userServices";

function About() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUserById(id);
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading)
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1>Users</h1>
        <div className="loader">
          <p>Chargement en cours...</p>
        </div>
      </div>
    );
  if (error) return <ErrorMessage message={error} />;
  if (!user) return <ErrorMessage message="Utilisateur non trouvé" />;

  return (
    <div style={{ padding: 20 }}>
      <Link to="/users">← Retour</Link>
      <h1>{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Téléphone:</strong> {user.phone}
      </p>
      <p>
        <strong>Site web:</strong> {user.website}
      </p>
      <h2>Adresse</h2>
      <p>
        {user.address.street}, {user.address.suite}
        <br />
        {user.address.city}, {user.address.zipcode}
      </p>
      <h2>Entreprise</h2>
      <p>
        <strong>{user.company.name}</strong>
      </p>
      <p>{user.company.catchPhrase}</p>
    </div>
  );
}

export default About;
