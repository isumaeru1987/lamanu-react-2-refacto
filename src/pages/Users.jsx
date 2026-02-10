import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import SelectedInfo from "../components/SelectedInfo";
import UserList from "../components/UserList";
import { getUsers } from "../services/userServices";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
    if (selected?.id === userId) {
      setSelected(null);
    }
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase()),
  );

  if (loading)
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1>Users</h1>
        <div className="loader">
          <p>Chargement en cours...</p>
        </div>
      </div>
    );
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: 20 }}>
      <h1>Users</h1>

      <SearchBar query={query} setQuery={setQuery} />

      <SelectedInfo selected={selected} />

      <UserList
        users={filteredUsers}
        selected={selected}
        onSelect={setSelected}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Users;
