import React from 'react'
import './UserItem.css'
import { useLocation, Link } from "react-router-dom";

function UserItem() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div id='infos'>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <Link to='/user/'>Page précédente</Link>
    </div>
  )
}

export default UserItem
