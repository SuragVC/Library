import React from "react";
import "./FrontPageButton.css";

export default function FrontPageButton(props) {
  return (
    <div className="uiverse">
      <span className="tooltip">Need Authorization</span>
      {props.content}
    </div>
  );
}
