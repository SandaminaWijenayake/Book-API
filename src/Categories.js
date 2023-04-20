import React from "react";
import Books from "./Books";
import "./App.css";

const Categories = ({ book }) => {
  // console.log("hello - ", book);
  return (
    <div className="categories">
      {book?.map((details) => (
        <Books details={details} key={details.id} />
      ))}
    </div>
  );
};

export default Categories;
