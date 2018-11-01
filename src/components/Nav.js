import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <Link to="/">
      <figure className="image" />
    </Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
