import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../services/userService';
import UserItem from '../components/UserItem';

export default function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const users = await getUsers();
                const foundUser = users.find(u => u.id === parseInt(id));
                setUser(foundUser);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    const handleDelete = (id) => { navigate(-1); };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;
    if (!user) return <div>Utilisateur non trouvé</div>;

    return (
        <div>
            <button onClick={() => navigate(-1)}>Retour</button>
            <UserItem
                key={user.id}
                user={user}
                onDelete={handleDelete}
            />
        </div>
    );
}