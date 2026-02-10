const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(
      `Impossible de récupérer les utilisateurs: ${error.message}`,
    );
  }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Impossible de récupérer l'utilisateur: ${error.message}`);
  }
};
