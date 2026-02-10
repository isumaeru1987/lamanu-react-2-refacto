async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
}

export default getUsers;
