import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive, searchTitle }) => {

  const showNote = (searchTitle) => 
    notes.filter((note) => note.title.toLowerCase().includes(searchTitle.toLowerCase()))
  
  return (
    <React.Fragment>
      {
        showNote(searchTitle).length !== 0 ?
          <div className="note__list">
            {
              showNote(searchTitle).map((note) => (
                <NoteItem
                  key={note.id}
                  id={note.id}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  archived={note.archived}
                  {...note}
                />
              ))
            }
          </div>
          : <div className="note__list--empty">Tidak ada catatan</div>
      }
    </React.Fragment>
    
  );
}

export default NoteList;