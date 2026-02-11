import { useEffect, useState } from "react";
import getUsers from "../services/UserService";
import UserList from '../components/UserList'
import UserItem from '../components/UserItem'

function UserPage() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadList = async () => {
      try {
        const users = await getUsers();
        setIsLoaded(true);
        setUsers(users);
      } catch (err) {
        setIsLoaded(true);
        setError(err.message);
      }
    };

  loadList();
  }, []);

  return (
    <>
      <UserList setUsers={setUsers} users={users} query={query} setQuery={setQuery} selected={selected} setSelected={setSelected} isLoaded={isLoaded} error={error} />
    </>
  )
}

export default UserPage
