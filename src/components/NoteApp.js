import React from "react";
import NoteHeader from "./NoteHeader";
import NoteMain from "./NoteMain";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: ''
    }

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    event.preventDefault();
    this.setState(() => {
      return {
        searchTitle : event.target.value
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <NoteHeader searchTitle={this.state.searchTitle} onSearch={this.onSearchEventHandler} />
        <NoteMain searchTitle={this.state.searchTitle} />
      </React.Fragment>
    )
  }
}

export default NoteApp;