import { useState } from "react";
import NoteContent from "./NoteContent";

function CategoriesNotes() {
  const [notesActive, setNotesActive] = useState(false);

  return (
    <div className="note-contanier">
      <div className="notes-title">
        <button className="create-note">Create Note</button>
        <input type="search" name="" id="" placeholder="search note" />
      </div>
      <button className="notes-body" onClick={() => setNotesActive(true)}>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          ipsum harum nemo numquam iure dolores perferendis. Tempora amet
          molestiae, saepe maiores ullam eligendi magni iste aut est dolorem
          delectus incidunt?
        </p>
      </button>
      <div className="right-part">{notesActive ? <NoteContent /> : null}</div>
    </div>
  );
}

export default CategoriesNotes;
