import { useContext } from "react"
import { UserContext } from "../context/UserContext";
import UserItem from "./UserItem"
import "./UserList.css";

function UserList() {
    const { users, query, selected, setSelected, deleteUser } = useContext(UserContext);

    return (
        <div>
            {users
                .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
                .map((user) => (
                    <UserItem key={user.id} user={user} selected={selected} onSelect={setSelected} onDelete={deleteUser} />
                ))}
        </div>
    )
}

export default UserList