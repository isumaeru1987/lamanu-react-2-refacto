// Affiche la liste des utilisateurs

import UserItem from "./UserItem";
import "../css/UserList.css";

const UserList = ({ users, setUsers, query, setQuery, selected, setSelected, onDelete }) => {
    const city = selected?.address?.city ?? "none"

    if (selected) {
        return (
            <div className="user-list-container selected-view">
                <button
                    onClick={() => setSelected(null)}
                    className="back-btn"
                >
                    ← Retour à la liste
                </button>
                <ul style={{ padding: 0, listStyle: 'none' }}>
                    <UserItem user={selected} onDelete={onDelete} />
                </ul>
            </div>
        );
    }

    return (
        <div className="user-list-container">
            <h1 className="user-list-title">Users</h1>

            <input
                placeholder="search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />

            <p>
                Selected:{" "}
                {city}

            </p>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {users
                    .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
                    .map((u, index) => (
                        <li
                            key={u.id}
                            onClick={() => setSelected(u)}
                            className="user-list-item"
                            style={{ fontWeight: selected && selected.id === u.id ? "bold" : "normal" }}
                        >
                            <span>{u.name} - <span style={{ color: '#888', fontWeight: 'normal' }}>{u.email}</span></span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setUsers(prev => prev.filter(user => user.id !== u.id));
                                }}
                                className="list-delete-btn"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default UserList;