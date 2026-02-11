import React from 'react'
import './UserList.css';
import Search from './Search';
import { Link } from "react-router-dom";

function UserList({ setUsers, users, query, setQuery, selected, setSelected, isLoaded, error }) {
  return (
    <div className="container">
      <h1>Users</h1>
      <div><Link to='/'>Page Home avec un super design</Link></div>
      <Search query={query} setQuery={setQuery}></Search>
      <p>{!isLoaded && "Chargement..."}</p>
      <p>{error && `Erreur: ${error}`}</p>

      <div className="card-grid">
        {users
          .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
          .map((u, index) => (
            <div
              className='card'
              key={u.id} 
              onClick={() => setSelected(u)}
              style={{
                cursor: "pointer",
                fontWeight: selected && selected.id === u.id ? "bold" : "normal",
              }}
            >
              {u.name} - {u.email}
              <Link to={`/user/${u.id}`} className="details-btn" state={{ user: u }}>Voir plus</Link>
              <button
                className="delete-btn"
                onClick={() => { setUsers(prev => prev.filter(user => user.id !== u.id)); }}
                style={{ marginLeft: 8 }}
              >
                delete
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default UserList
