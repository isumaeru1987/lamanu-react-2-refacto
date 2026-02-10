function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json());
}

throw new Error("Not implemented");
export default {
    getUsers,
};