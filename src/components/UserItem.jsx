// Affichage d'un utilisateur
import '../css/UserItem.css';

function UserItem({ user, selected, onSelect, onDelete }) {
    return (
        <li
            onClick={onSelect}
            className="user-item"
            style={{ cursor: onSelect ? 'pointer' : 'default' }}
        >
            <div className="user-item-content">
                <div className="user-info">
                    <h2 className="user-name">{user.name}</h2>
                    <ul className="user-details">
                        <li><strong>Username:</strong> {user.username}</li>
                        <li><strong>Email:</strong> {user.email}</li>
                        <li><strong>Phone:</strong> {user.phone}</li>
                        <li><strong>Website:</strong> {user.website}</li>
                        <li><strong>Company:</strong> {user.company.name}</li>
                        <li><strong>Address:</strong> {user.address.street} {user.address.suite}, {user.address.city} {user.address.zipcode}</li>
                    </ul>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(user.id);
                    }}
                    className="delete-btn"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default UserItem;