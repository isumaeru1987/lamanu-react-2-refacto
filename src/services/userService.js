async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const users = await response.json();
        return users;
    } catch (error) {
        throw new Error(`Erreur de données: ${error.message}`);
    }
}

export { getUsers };
