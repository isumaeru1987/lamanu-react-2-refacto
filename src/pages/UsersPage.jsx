import { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import UserList from '../components/UserList';

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id))
    }


    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;

    return (
        <div className="users-page">
            <h1>Utilisateurs</h1>
            <UserList users={users} onDelete={handleDeleteUser} />
        </div>
    );
}