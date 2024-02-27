import React from "react";
import ReactDOM from "react-dom/client";
const BookList = () => {
  return (
    <>
      <Book />
    </>
  );
};
const Book = () => {
  return (
    <>
      <Image />
      <Title />
      <Author />
    </>
  );
};
const Image = () => {
  return (
    <>
      <h2>Image PlaceHolder</h2>
    </>
  );
};
const Title = () => {
  return (
    <>
      <h2>Book Title</h2>
    </>
  );
};
const Author = () => {
  return (
    <>
      <h2>Author</h2>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
