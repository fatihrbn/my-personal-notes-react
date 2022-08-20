import React from "react";
import { getInitialData } from "../utils/data";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, createdAt, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt,
            body,
            archived: false
          }
        ]
      }
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(notes => notes.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id){
    const notes = this.state.notes.map((note) => note.id === id ? {...note, archived : !note.archived} : note);
    this.setState({ notes });
  }


  render() {
    const activeNotes = this.state.notes.filter((note) => {
      return note.archived === false;
    });
    
    const archivedNotes = this.state.notes.filter((note) => {
      return note.archived === true;
    })


    return (
      <main>
        <div className="container">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan</h2>
          {
            <NoteList
              notes={activeNotes}
              onDelete={this.onDeleteHandler} 
              onArchive={this.onArchiveHandler} 
              searchTitle={this.props.searchTitle}
            />
          }
          <h2>Arsip</h2>
          {
            <NoteList
              notes={archivedNotes}
              onDelete={this.onDeleteHandler} 
              onArchive={this.onArchiveHandler} 
              searchTitle={this.props.searchTitle}
            />
          }
        </div>
      </main>
    );
  }
}

export default NoteMain;