import { GrLinkNext } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "./UserItem.css";

function UserItem({ user, selected, onSelect, onDelete }) {

    const handleDelete = () => {
        onDelete(user.id);
    }

    return (
        <div className="user-item-wrapper">
            <li
                onClick={() => onSelect(user)}
                className={`user-item ${selected && selected.id === user.id ? 'selected' : ''}`}
            >
                <div className="user-info">
                    <span className="user-name">{user.name}</span>
                    <span>-</span>
                    <span className="user-email">{user.email}</span>
                </div>
                <button
                    onClick={handleDelete}
                    className="delete-button"
                    title="Supprimer l'utilisateur"
                >
                    <MdDelete /></button>
            </li>
            <a className="details-link" title="Voir les détails" href={`/users/${user.id}`}><GrLinkNext /></a>
        </div>
    )
}

export default UserItem