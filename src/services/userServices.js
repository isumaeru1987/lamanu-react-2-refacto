    const url = "https://jsonplaceholder.typicode.com/users";

    const getUsers = () => {
        return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erreur " + response.status)
            }
            return response.json();
        })
    }

    export default getUsers;