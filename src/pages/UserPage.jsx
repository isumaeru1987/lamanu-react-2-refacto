import { useParams, Link } from "react-router";
import { useContext, useEffect } from "react";
import { PacmanLoader } from 'react-spinners';
import { IoArrowBack } from "react-icons/io5";
import { UserContext } from "../context/UserContext.jsx";
import "./UserPage.css"

function UserPage() {
    let params = useParams();
    const { fetchOne, user, loading } = useContext(UserContext);

    useEffect(() => {
        fetchOne(params.id)
    }, [])

    return (
        <div className="user-page">
            {
                loading ? (
                    <div className="user-page-loading">
                        <PacmanLoader />
                    </div>
                ) : (
                    <>
                        <Link to="/users" className="back-button">
                            <IoArrowBack />
                            Retour à la liste
                        </Link>
                        <div className="user-details-card">
                            <h1>Infos sur {user.name}</h1>

                            <div className="user-info-list">
                                <div className="user-info-item">
                                    <span className="user-info-label">Pseudo :</span>
                                    <span className="user-info-value">{user.username}</span>
                                </div>

                                <div className="user-info-item">
                                    <span className="user-info-label">Email :</span>
                                    <span className="user-info-value">
                                        <a href={`mailto:${user.email}`}>{user.email}</a>
                                    </span>
                                </div>

                                <div className="user-info-item">
                                    <span className="user-info-label">Téléphone :</span>
                                    <span className="user-info-value">
                                        <a href={`tel:${user.phone}`}>{user.phone}</a>
                                    </span>
                                </div>

                                <div className="user-info-item">
                                    <span className="user-info-label">Site Web :</span>
                                    <span className="user-info-value">
                                        <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                                            {user.website}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default UserPage