import React from 'react'
import UserItem from './UserItem';

function UserList(props) {
  return (
    <div>
        <ul>
            {
                props.users
                .filter((u) => u.name.toLowerCase().includes(props.query.toLowerCase().trim()))
                .map((u, index) => (
                    <UserItem key={u.id} selected={props.selected} user={u} setUsers={props.setUsers} setSelected={props.setSelected} index={index} users={props.users} />
                ))
            }
        </ul>
    </div>
  )
}

export default UserList