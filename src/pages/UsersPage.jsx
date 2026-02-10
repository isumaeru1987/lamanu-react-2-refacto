/** React */
import { useContext } from "react";

/** Context */
import { UserContext } from "../context/UserContext";

/** Style */
import '../css/UsersPage.css';

/** Components */
import SearchBar from "../components/ui/SearchBar";
import UserList from "../components/UserList";

export const UsersPage = () => {
    const { loading, users, query, onDelete } = useContext(UserContext);

    return (
        <div className="users-page">
            <h1>Liste des utilisateurs</h1>
            {
                loading ? 
                    <p>Chargement des utilisateurs...</p>
                :
                <div>
                    <SearchBar />
                    <UserList />
                </div>
            }
        </div>
    )
}

export default UsersPage;
