function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((r) => r.json())
        .catch((error) => {
            throw error;
        });
}

export default {
    getUsers,
};