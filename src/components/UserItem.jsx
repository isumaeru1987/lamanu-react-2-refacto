import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserItem = ({ user, selected, onSelect, onDelete }) => {
    const navigate = useNavigate()

    return (
        <li
            className={`user-item card ${selected ? 'selected' : ''}`}
            onClick={onSelect}
        >
            <div onClick={() => navigate(`/users/${user.id}`)}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.address.street}, {user.address.city}</p>
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation()
                    onDelete()
                }}
            >
                Delete
            </button>
        </li>
    )
}

export default UserItem
