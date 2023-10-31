import "../styles/Frame1.scss";
import AddNote from "./AddNote";
import { useState, useContext } from "react";
import CategoriesNotes from "./CategoriesNotes";
import { CategoryContext } from "../components/category.context";

function Frame1() {
  const [showCategories, setShowCategories] = useState(false);
  const [noteContent, setNoteContent] = useState(false);
  const { category } = useContext(CategoryContext);

  return (
    <div className="container">
      <div className="title">
        <h1>Your Notes</h1>
      </div>
      <div className="body">
        <div className="categories-container">
          <button
            className="create-categories"
            onClick={() => {
              setShowCategories(true);
              setNoteContent(false);
            }}
          >
            <p>Create Categories +</p>
          </button>
          <button className="product-container">
            {category.map((category) => (
              <button key={category.id} category={category} />
            ))}
          </button>
        </div>
        <div className="right-part">
          {showCategories ? (
            <AddNote />
          ) : noteContent ? (
            <CategoriesNotes />
          ) : (
            <h1>kjo eshte kategoria</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Frame1;
