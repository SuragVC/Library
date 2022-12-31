import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  Homepage() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div >
        <nav className="navbar navbar-dark default-color justify-content-between">
          <Link target={"/"}>
          <p className="navbar-brand">
            Library
          </p>
          </Link>
          <form className="form-inline my-1">
            <div className="md-form form-sm my-0">
              <input
                className="form-control form-control-sm mr-sm-2 mb-0"
                type="text"
                placeholder="Search Book"
                aria-label="Search"
              />
            </div>
            <button type="button" className="btn btn-dark">Search</button>
          </form>
        </nav>
      </div>
    );
  }
}

export default Navbar;
