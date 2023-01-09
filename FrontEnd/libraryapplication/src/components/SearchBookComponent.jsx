import React, { Component } from "react";
import LibraryServices from "../services/LibraryServices";
import { useNavigate as Link } from "react-router-dom";
class SearchBookComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book_Id: -1,
    };
  }

  getBookFromLibrary = (event) => {
    event.preventDefault();
    let bookID = document.getElementById("bookID_Box").value
    console.log(bookID);
    if (bookID <= 0) {
      alert("The book id should be greater than 0");
    } else {
      LibraryServices.getBookByID(bookID).then((res) => {
        if (res.data.book_Id > 0) {
          window.location.href = "/book/alert";
        }else{
          alert("Book not found with id : "+bookID)
        }
      });
    }
  };
  changeBookIDHandler = (event) => {
    this.setState({ book_Id: event.target.value });
  };
  render() {
    return (
      <div>
        <div className="formCenter">
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">
                Enter the Book ID :
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Book ID"
                id="bookID_Box"
                onChange={this.changeBookIDHandler}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this.getBookFromLibrary}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBookComponent;
