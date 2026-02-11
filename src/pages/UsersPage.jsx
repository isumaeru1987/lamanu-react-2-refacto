// Logique : state, fetch, handlers

import { useState, useEffect } from "react";
import userService from "../services/userService";
import UserList from "../components/UserList";

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        userService.getUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
    };

    return (
        <>
            {isLoading && <p>Chargement...</p>}
            {error && <p style={{ color: 'red' }}>Erreur: {error}</p>}
            {!isLoading && !error && (
                <UserList 
                    users={users} 
                    setUsers={setUsers}
                    query={query} 
                    setQuery={setQuery} 
                    selected={selected} 
                    setSelected={setSelected} 
                    onDelete={handleDelete}
                />
            )}
        </>
    );
}

export default UsersPage;
