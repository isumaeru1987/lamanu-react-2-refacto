import { useEffect, useContext } from "react";
import UserList from "../components/UserList.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { PacmanLoader } from 'react-spinners';
import "./UsersPage.css";

function UsersPage() {
    const { fetchAll, loading, query, setQuery } = useContext(UserContext);

    useEffect(() => {
        fetchAll()
    }, []);

    return (
        <div className="users-page">
            <h1>Liste d'utilisateurs :</h1>

            <input
                className="search-input"
                placeholder="Rechercher un utilisateur..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <ul> {loading ? (
                <div className="loading-container">
                    <PacmanLoader />
                </div>
                
            ) : (
                <div className="users-list-container">
                    <UserList />
                </div>
                
            )}

            </ul>
        </div>
    )
}

export default UsersPage