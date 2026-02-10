import UserItem from './UserItem';
import { useState } from 'react';

export default function UserList({ users, onDelete }) {
    
    const [selected, setSelected] = useState(null);

    return (
        <div className="user-list">
            <h2>Users</h2>
            <p>
                Selected:{" "}
                {selected && selected.address && selected.address.city
                    ? selected.address.city
                    : "none"}
            </p>
            <ul>
                {users.map((user) => (
                    <UserItem
                        key={user.id}
                        user={user}
                        selected={selected?.id === user.id}
                        onSelect={() => setSelected(user)}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </div>
    );
}