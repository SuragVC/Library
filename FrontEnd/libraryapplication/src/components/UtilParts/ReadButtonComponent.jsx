import React, { Component } from "react";
import "./ReadButton.css";
class ReadButtonComponent extends Component {
  render() {
    return (
      <div className="read_Button">
        <button>
          <span className="span-mother">
            <span>R</span>
            <span>E</span>
            <span>A</span>
            <span>D</span>
          </span>
          <span className="span-mother2">
            <span>R</span>
            <span>E</span>
            <span>A</span>
            <span>D</span>
          </span>
        </button>
      </div>
    );
  }
}

export default ReadButtonComponent;
