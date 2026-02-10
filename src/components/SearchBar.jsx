function SearchBar({ query, setQuery }) {
  return (
    <input
      placeholder="Rechercher un utilisateur..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        padding: "10px",
        width: "100%",
        maxWidth: "400px",
        marginBottom: "20px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    />
  );
}

export default SearchBar;
