import { UserProvider, useUsers } from "../context/UserContext";
import UserList from "../components/UserList";

function UsersPageContent() {
  const { loading, error, query, setQuery, selectedUser } = useUsers();

  const city = selectedUser?.address?.city ?? "none";

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Users</h1>

      <input
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>
        Selected: {city}
      </p>

      <UserList />
    </div>
  );
}

export default function UsersPage() {
  return (
    <UserProvider>
      <UsersPageContent />
    </UserProvider>
  );
}