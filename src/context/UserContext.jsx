import { createContext, useContext, useState, useEffect, useMemo } from "react";
import getUsers from "../services/userService";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible de charger les utilisateurs.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    if (selectedUser?.id === id) {
      setSelectedUser(null);
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [users, query]);

  const value = {
    users: filteredUsers,
    loading,
    error,
    query,
    setQuery,
    selectedUser,
    setSelectedUser,
    handleDelete,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUsers() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
}
