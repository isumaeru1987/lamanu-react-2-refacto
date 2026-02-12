function SelectedInfo({ selected }) {
  const city = selected?.address?.city ?? "none";

  return (
    <p style={{ marginBottom: "20px" }}>
      <strong>Ville sélectionnée:</strong> {city}
    </p>
  );
}

export default SelectedInfo;
