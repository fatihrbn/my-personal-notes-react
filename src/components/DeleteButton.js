import React from "react";

const DeleteButton = ({ id, onDelete }) => {
  return <button className="note__button--delete" onClick={() => onDelete(id)}>Hapus</button>;
}

export default DeleteButton;