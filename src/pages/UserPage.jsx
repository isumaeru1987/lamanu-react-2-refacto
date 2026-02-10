import React from 'react'
import { useState, useEffect } from 'react'
import getUsers from '../services/userServices';
import UserList from '../components/UserList';

function UserPage() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState();
  const [selected, setSelected] = useState(null);
  const city = selected?.address?.city ?? "none" 

  useEffect(() => {
      getUsers()
      .then((data) => setUsers(data))
      .catch((e) => {
        setError(e);
      })
  }, []);

    if (error) {
    return <h1>{error.message}</h1>;
  } 
  if (users.length == 0) {
    return <h1>Chargement...</h1>;
  }

  return (
    <div>
        <h1>
            Users
        </h1>
        <input
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p>
          Selected : {city}
        </p>
        <UserList users={users} setUsers={setUsers} query={query} selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default UserPage