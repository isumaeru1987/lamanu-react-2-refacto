import UserItem from "./UserItem";

function UserList({ users, selected, onSelect, onDelete }) {
  if (users.length === 0) {
    return <p>Aucun utilisateur trouvé</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          selected={selected?.id === user.id}
          onSelect={() => onSelect(user)}
          onDelete={() => onDelete(user.id)}
        />
      ))}
    </ul>
  );
}

export default UserList;
