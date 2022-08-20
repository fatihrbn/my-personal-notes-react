import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils/data";

const NoteItem = ({ title, createdAt, body, id, onDelete, onArchive, archived }) => {
  return (
    <div className="note__item">
      <div className="note__item--content">
        <h3 className="note__item--title">{title}</h3>
        <p className="note__item--date">{showFormattedDate(createdAt)}</p>
        <p className="note__item--body">{body}</p>
      </div>
      <div className="note__item--action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  )
}

export default NoteItem;