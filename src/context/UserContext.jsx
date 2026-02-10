/** React */
import { createContext, useState, useEffect } from 'react';

/** User Service */
import { getUsers, getUser } from '../services/userService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await getUsers();
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching all users: ', error);
      } finally {
        setLoading(false);
      };
    };
    fetchAll();
  }, []);

  const fetchOne = async (id) => {
    try {
      const response = await getUser(id);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching one user: ', error);
    } finally {
      setLoading(false);
    };
  };

  const onDelete = (id) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    }

  return (
    <UserContext.Provider value={{ users, user, loading, fetchOne, query, setQuery, onDelete, selected, setSelected }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserProvider;