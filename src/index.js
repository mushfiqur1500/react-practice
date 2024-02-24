import React from 'react';
import ReactDom from 'react-dom/client';

function Greeting() {
  return (
    <>
    <div classNname='someValue'>
      <h3>My First Project</h3>
      <h3>Hello people</h3>
      <ul>
        <li>
          <a href='#'>Hello World</a>
        </li>
      </ul>
    </div>
    <h2>Good Morning</h2>
    <input type='text' name='' id=''/>
  </>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Greeting />);
