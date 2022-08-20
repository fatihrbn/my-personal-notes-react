import React from "react";

const ArchiveButton = ({ id, onArchive, archived }) => {
  return <button className="note__button--archive" onClick={() => onArchive(id)}>{!archived ? "Arsipkan" : "Pindahkan"}</button>;
}

export default ArchiveButton;