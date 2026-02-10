import { useUsers } from "../context/UserContext";
import UserItem from "./UserItem";

export default function UserList() {
  const { users } = useUsers();
  return (
    <ul>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
        />
      ))}
    </ul>
  );
}
