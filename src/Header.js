import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./Categories";
// import image from "./images/3.jpg";
import ErrorModal from "./ErrorModal";

const Header = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAOBoJS5AzY3-SZYwoqiqonCwu5xbFAjEY" +
          "&maxResults=40"
      )
      .then((res) => {
        setBookData(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);
  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyAOBoJS5AzY3-SZYwoqiqonCwu5xbFAjEY" +
            "&maxResults=40"
        )
        // .then((res) => console.log(res.data.items))
        // .catch((err) => console.log(err));
        .then((res) => {
          if (!res.data.items) {
            setError(true);
          } else {
            setBookData(res.data.items || []);
          }
        })
        .catch((err) => {
          console.log(err);
          // setError({ title: "erro message", message: "No result" });
        });

      // console.log("search");
    }
  };
  const backDrop = () => {
    setError(false);
  };
  return (
    <>
      {error && (
        <ErrorModal
          backDrop={backDrop}
          title="Error Message"
          message="YOUR BOOK IS NOT FOUND!"
        />
      )}

      <div className="image">
        <div className="relative">
          {/* <img src={image} alt="" /> */}
          <div className="absalute">
            <h1>A room without books is like a body with a soul</h1>;
            <div className="search">
              <input
                type="text"
                placeholder="Enter Your Book Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchBook}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bookData">
        <Categories book={bookData} />
      </div>
    </>
  );
};

export default Header;
