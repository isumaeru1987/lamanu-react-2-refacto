import { Link } from "react-router-dom";

function UserItem({ user, selected, onSelect, onDelete }) {
  return (
    <li
      onClick={onSelect}
      style={{
        cursor: "pointer",
        fontWeight: selected ? "bold" : "normal",
        padding: "10px",
        marginBottom: "5px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Link
          to={`/users/${user.id}`}
          onClick={(e) => e.stopPropagation()}
          style={{ textDecoration: "none", color: "blue" }}
        >
          {user.name}
        </Link>
        {" - " + user.email.toLowerCase()}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        style={{
          padding: "5px 10px",
          cursor: "pointer",
          backgroundColor: "#ff4444",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        delete
      </button>
    </li>
  );
}

export default UserItem;
