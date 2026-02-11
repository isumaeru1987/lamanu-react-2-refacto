/** React */
import { useContext, useEffect } from 'react';

/** Router */
import { NavLink, useParams } from 'react-router';

/** Context */
import { UserContext } from '../context/UserContext';

export const UserDetails = () => {
    const { user, loading, fetchOne } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetchOne(id);
    }, [id])

    return (
        <div className="user-container">
            {
                loading ?
                    <p className="loading">Chargement de l'utilisateur...</p>
                    :
                    <div className="user-card">
                        <div className="user-card-header">
                            <div className="user-profile-img">
                                <img src="https://st3.depositphotos.com/4329009/17959/v/450/depositphotos_179594348-stock-illustration-creative-vector-illustration-of-default.jpg" alt="Profile" />
                            </div>
                            <div className="username-badge">{user?.name}</div>
                        </div>

                        <div className="user-card-body">
                            <h2 className="name">{user?.company?.name}</h2>
                            <p className="company">{user?.company?.catchPhrase}</p>

                            <div className="stats">
                                <div className="stat-item">
                                    <p>{`${user?.address?.suite}, ${user?.address?.street}`}</p>
                                    <h3>{`${user?.address?.city}, ${user?.address?.zipcode}`}</h3>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href={`mailto:${user?.email}`} className="social-btn">Email</a>
                                <a href={`tel:${user?.phone}`} className="social-btn">Téléphone</a>
                                <a href={user?.website} className="social-btn">Web</a>
                            </div>

                            <NavLink to={"/users"} className="follow-btn">
                                Revenir aux utilisateurs
                            </NavLink>
                        </div>
                    </div>
            }
        </div>
    )
}

export default UserDetails;
