function ErrorMessage({ message }) {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>Users</h1>
      <div
        style={{
          color: "red",
          padding: "20px",
          border: "1px solid red",
          borderRadius: "4px",
        }}
      >
        <p>
          <strong>Erreur:</strong> {message}
        </p>
      </div>
    </div>
  );
}

export default ErrorMessage;
