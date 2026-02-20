export const getUsers = async () => {
    try {
        const records = await fetch('https://jsonplaceholder.typicode.com/users');
        return records;
    } catch (error) {
        console.error("API error fetching all users: ", error);
        throw error;
    }
};;
export const getUser = async (id) => {
    try {
        const record = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return record;
    } catch (error) {
        console.error("API error fetching one user: ", error);
        throw error;
    }
};