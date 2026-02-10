import { useUsers } from "../context/UserContext";

export default function UserItem({ user }) {
  const { selectedUser, setSelectedUser, handleDelete } = useUsers();

  const isSelected = selectedUser?.id === user.id;

  return (
    <li
      onClick={() => setSelectedUser(user)}
      className={isSelected ? "selected" : ""}
      style={{ cursor: "pointer" }}
    >
      {user.name} - {user.email}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(user.id);
        }}
      >
        delete
      </button>
    </li>
  );
}
