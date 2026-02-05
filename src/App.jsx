import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  // ❌ Anti-pattern : useEffect sans dépendances (boucle)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  });

  // ❌ Anti-pattern : logique lourde dans le JSX + index comme key
  return (
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
  );
}
