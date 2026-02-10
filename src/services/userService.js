export function getUsers(setUsers, setLoading) {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((r) => r.json())
        .then((data) => setUsers(data));
    }
    catch (error) {
      console.log('API Error : ', error)
    }
    finally {
      setLoading(false);
    }
}

export function getUser(setUser, setLoading, id) {
    try {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((r) => r.json())
        .then((data) => setUser(data));
    }
    catch (error) {
      console.log('API Error : ', error)
    }
    finally {
      setLoading(false);
    }
}