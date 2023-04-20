import React from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
// import image from "./images/book1.jpg";
import "./App.css";

const Book = ({ details }) => {
  console.log(details);
  let thumbnale =
    details.volumeInfo.imageLinks &&
    details.volumeInfo.imageLinks.smallThumbnail;
  if (thumbnale !== undefined) {
    return (
      <Card className="bookCard">
        <div className="top">
          <img src={thumbnale} alt="" />
        </div>
        <div className="bottom">
          <div className="title">
            <h4>{details.volumeInfo.title}</h4>
          </div>

          <div className="price">
            <p>LKR: 200.00</p>

            <Button>Add to cart</Button>
          </div>
        </div>
      </Card>
    );
  }
};

export default Book;
