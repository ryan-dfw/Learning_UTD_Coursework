import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/books">Books</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/account">Account</Link>
    </div>
  );
};

export default Navbar;
