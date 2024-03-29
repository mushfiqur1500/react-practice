import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (

  <img
    src="./images/book-1.jpg"
    alt="Why the Powerful Turn a Blind Eye While China Kills Americans"
  />
);
const Title = () => <h2>Blood Money</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles}>Peter Schweizer </h4>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
