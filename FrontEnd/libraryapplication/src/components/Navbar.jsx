import React, { Component,useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import LibraryServices from "../services/LibraryServices";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar_color justify-content-between">
        <Link to="/books">
          <button className="logoButton">Library</button>
        </Link>
        
      </nav>
    </div>
  );
}
