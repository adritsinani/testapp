import { createContext, useState } from "react";
import Category from "../notes.json";

export const CategoryContext = createContext({
  category: [],
});

export const CategoryProvider = ({ children }) => {
  const [Category, setCategory] = useState(category);
  const value = { Category };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
