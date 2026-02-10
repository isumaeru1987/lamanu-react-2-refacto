import React from "react";

function UserItem(props) {
  return (
    <li onClick={ () => {props.setSelected(props.user)}} style={{cursor: "pointer", fontWeight : props.selected && props.selected.id === props.user.id ? "bold" : "normal",}}>
      {props.user.name} - {props.user.email}
      <button onClick={(e) => {
        e.stopPropagation();
        props.setUsers(props.users.filter((u, i) => (i != props.index)))
        }}>
            delete
        </button>
    </li>
  );
}

export default UserItem;
