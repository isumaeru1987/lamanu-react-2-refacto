/** Router */
import '../css/UserItem.css';

/** Style */
import { Link } from 'react-router';

/** Icon */
import { VscTrash } from "react-icons/vsc";

export const UserItem = ({ user, loading, selected, setSelected, onDelete }) => {
    const handleDelete = () => {
        onDelete(user.id);
    };

    return (
        <div className="user-container">
            {
                loading ?
                    <p>Chargement de l'utilisateur...</p>
                    :
                    <div className="user-card">
                        <div className="user-card-header">
                            <div className="user-profile-img">
                                <img src="https://st3.depositphotos.com/4329009/17959/v/450/depositphotos_179594348-stock-illustration-creative-vector-illustration-of-default.jpg" alt="Profile" />
                            </div>
                            <div className="username-badge">{user.username}</div>
                        </div>

                        <div className="user-card-body">
                            <h2 className="name">{user.name}</h2>
                            <p className="company">{user.company.name}</p>

                            <div className="stats">
                                <div className="stat-item">
                                    <p>{`${user.address.suite}, ${user.address.street}`}</p>
                                    <h3>{`${user.address.city}, ${user.address.zipcode}`}</h3>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href={`mailto:${user.email}`} className="social-btn">Email</a>
                                <a href={`tel:${user.phone}`} className="social-btn">Téléphone</a>
                                <a href={user.website} className="social-btn">Site Web</a>
                            </div>

                            <div className="user-btn">
                                <Link to={`/users/${user.id}`} className="follow-btn" onClick={() => setSelected(user)}>
                                    Voir les détails
                                </Link>
                                <button className='follow-btn' onClick={handleDelete}>
                                    <VscTrash />
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default UserItem;
