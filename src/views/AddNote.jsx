import React, { useState } from "react"; // Make sure to import React
import "../styles/Frame1.scss";

function AddNote() {
  const [notes, setNotes] = useState({
    title: "",
    description: "",
    category: "",
  });

  function newNote(e) {
    e.preventDefault();
    fetch("notes.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notes),
    })
      .then((response) => {
        if (response.ok) {
          console.log(2);
          alert("Note added successfully");
          // Clear the form after successfully adding the note
          setNotes({
            title: "",
            description: "",
            // category: "",
          });
        } else {
          throw new Error("Failed to add note");
        }
      })
      .catch((error) => {
        alert(`An unexpected error occurred: ${error.message}`);
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotes((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
    console.log(notes);
  };

  return (
    <div className="right-part">
      <form onSubmit={newNote}>
        <h1>Shto nje note te lutem</h1>
        <div className="input-field">
          <fieldset>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
              value={notes.title} // Use "value" to bind the input field with state
              placeholder="Add a title"
            />
          </fieldset>
          <fieldset>
            <textarea
              onChange={handleChange}
              name="description"
              id="description"
              value={notes.description} // Use "value" to bind the textarea with state
              cols="30"
              rows="10"
              placeholder="Add a note"
            ></textarea>
          </fieldset>
          <button type="submit">Add Note</button> {/* Corrected button text */}
        </div>
      </form>
    </div>
  );
}

export default AddNote;
