import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [isLoading, error]);

  return (
    <>
      {isLoading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>Erreur: {error}</p>}
      {!isLoading && !error && (
        <div style={{ padding: 20 }}>
          <h1>Users</h1>

          <input
            placeholder="search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <p>
            Selected:{" "}
            {selected && selected.address && selected.address.city
              ? selected.address.city
              : "none"}
          </p>

          <ul>
            {users
              .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
              .map((u, index) => (
                <li
                  key={index} // ❌ anti-pattern
                  onClick={() => setSelected(u)}
                  style={{
                    cursor: "pointer",
                    fontWeight: selected && selected.id === u.id ? "bold" : "normal",
                  }}
                >
                  {u.name} - {u.email}
                  <button
                    onClick={() => {
                      // ❌ anti-pattern : mutation directe du state (suppression)
                      users.splice(index, 1);
                      setUsers(users);
                    }}
                    style={{ marginLeft: 8 }}
                  >
                    delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}
