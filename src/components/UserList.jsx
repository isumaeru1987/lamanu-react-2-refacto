/** React */
import { useContext } from 'react';

/** Context */
import { UserContext } from '../context/UserContext';

/** Style */
import '../css/UserList.css';

/** Component */
import UserItem from './UserItem';

export const UserList = () => {
    const { users, query, selected, setSelected, onDelete } = useContext(UserContext);

    return (
        <div className="list-container">
            {
                users
                    .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
                    .map((user) => {
                        return (
                            <UserItem key={user.id} user={user} onDelete={onDelete} selected={selected} setSelected={setSelected}  />
                        )
                    })
            }
        </div>
    )
}

export default UserList;
