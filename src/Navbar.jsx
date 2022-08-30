import React from "react";
import { Link } from "react-router-dom";
import './App.css';

function Navbar() {
  return (
    <nav>
      <ul className="navButtonList">
        <li className="navButtons">
          <Link to="/">Home</Link>
        </li>
        <li className="navButtons">
          <Link to="/Riddle2">Riddle 2</Link>
        </li>
        <li className="navButtons">
          <Link to="/Riddle3">Riddle 3</Link>
        </li>
        <li className="navButtons">
          <Link to="/Riddle4">Riddle 4</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;