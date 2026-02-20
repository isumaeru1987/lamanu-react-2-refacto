/** React */
import { useContext } from "react";

/** Context */
import { UserContext } from "../context/UserContext";

/** Style */
import '../css/UsersPage.css';

/** Components */
import SearchBar from "../components/ui/SearchBar";
import UserList from "../components/UserList";
import UserItemSkeleton from "../skeleton/UserItemSkeleton";

export const UsersPage = () => {
    const { loading } = useContext(UserContext);

    return (
        <div className="users-page">
            <h1>Liste des utilisateurs</h1>
            <SearchBar />
            {
                loading ?
                    <div className="loading">
                        <p>Chargement des utilisateurs...</p>
                        <UserItemSkeleton />
                    </div>
                    :
                    <div>
                        <UserList />
                    </div>
            }
        </div>
    )
}

export default UsersPage;
