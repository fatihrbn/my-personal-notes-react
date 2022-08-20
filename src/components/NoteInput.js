import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      createdAt: +new Date(),
      body: '',
      charLimit: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    // if(this.state.charLimit > 0)  {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value.slice(0, this.state.charLimit),
        }
      });
    // }
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }


  render() {
    return (
      <div className="note__input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note__input--limit">Sisa Karakter: {this.state.charLimit - this.state.title.length}</p>
          <input 
            className="note__input--title" 
            type="text" 
            placeholder="Masukkan judul catatan ..." 
            value={this.state.title} 
            onChange={this.onTitleChangeEventHandler} 
            required
          />
          <textarea 
            className="note__input--body" 
            type="text" 
            placeholder="Masukkan isi catatan ..." 
            value={this.state.body} 
            onChange={this.onBodyChangeEventHandler}
            required 
          />
          <button type="submit" className="btn__submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteInput;