import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>CYF Chat</h1>
      <div>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/message">
          Posts
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
