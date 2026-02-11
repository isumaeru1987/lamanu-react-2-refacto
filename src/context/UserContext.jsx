import { createContext, useState } from "react";
import { getUsers, getUser } from '../services/userService.js'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchAll = async () => {
        getUsers(setUsers, setLoading);
    }

    const fetchOne = async (userId) => {
        getUser(setUser, setLoading, userId);
    }
    
    const deleteUser = (userId) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    }

    return (
        <UserContext.Provider value={{users, setUsers, user, setUser, query, setQuery, selected, setSelected, loading, setLoading, fetchAll, fetchOne, deleteUser}}>
            {children}
        </UserContext.Provider>
    )
}

