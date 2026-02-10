/** React */
import { useContext } from 'react';

/** Context */
import { UserContext } from '../../context/UserContext';

/** Style */
import '../../css/SearchBar.css';

export const SearchBar = () => {
    const { query, setQuery } = useContext(UserContext)

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <form>
                    <input type="search" name="search" id="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Rechercher un utilisateur...' />
                </form>
            </div>
        </div>
    )
}

export default SearchBar
