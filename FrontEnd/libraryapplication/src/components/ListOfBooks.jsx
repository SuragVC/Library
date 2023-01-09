import React, { Component } from "react";
import LibraryServices from "../services/LibraryServices";
import ReadButtonComponent from "./UtilParts/ReadButtonComponent";
import FrontPageButton from "./UtilParts/FrontPageButton";
import "./Styles/NextAndPrevious.css";

class ListOfBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    // this.addBook = this.addBook.bind(this);
    // this.updateBook = this.updateBook.bind(this);
  }
  SearchBook() {
    let value = document.getElementById("searchBox").value;
    let parsed = parseInt(value);
    let type = typeof parsed;
    if (type === "number") {
      LibraryServices.getBookByID(value).then((res) => {
        if (typeof res.data.book_Id === "number") {
          localStorage.setItem("bookid", JSON.stringify(value));
          window.location.href = "/book/singleBook";
        } else {
          alert("Wrong Book ID");
        }
      });
    } else {
      alert("Book ID should be an number");
    }
  }
  componentDidMount() {
    let pageNo = 0;
    localStorage.setItem("pageNo", pageNo);
    LibraryServices.getAllBooks(pageNo).then((res) => {
      this.setState({ books: res.data.content });
    });
  }
  addBook = () => {
    localStorage.setItem("val", 1);
    let val = JSON.parse(localStorage.getItem("valid"));
    if (val === 1) {
      window.location.href = "/add/books";
    } else {
      window.location.href = "/books/login";
    }
  };
  updateBook = () => {
    localStorage.setItem("val", 2);
    let val = JSON.parse(localStorage.getItem("valid"));
    if (val === 1) {
      window.location.href = "/book/update";
    } else {
      window.location.href = "/books/login";
    }
  };
  nextButton=()=> {
    let pageNo = JSON.parse(localStorage.getItem("pageNo"));
    pageNo++;
    LibraryServices.getAllBooks(pageNo).then((res) => {
      this.setState({ books: res.data.content });
      localStorage.setItem("pageNo", pageNo);
    });
    
  }
  previousButton=()=> {
    let pageNo = JSON.parse(localStorage.getItem("pageNo"));
    pageNo--;
    if (pageNo > -1) {
      LibraryServices.getAllBooks(pageNo).then((res) => {
        this.setState({ books: res.data.content });
        localStorage.setItem("pageNo", pageNo);
      });
      
    }
  }
  render() {
    return (
      <div id="main">
        <div className="div_of_heading">
          <h1 className="text-center">List Of Books Available on Library</h1>
          <form className="form-inline my-1">
            <div className="md-form form-sm my-0">
              <input
                className="form-control form-control-sm mr-sm-2 mb-0"
                type="text"
                placeholder="Search Book by ID"
                aria-label="Search"
                id="searchBox"
              />
            </div>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.SearchBook}
            >
              Search
            </button>
          </form>
        </div>
        <div className="row">
          <div className="nav-item2" onClick={this.addBook}>
            <FrontPageButton content="Add Book" />
          </div>
          <div className="nav-item2" onClick={this.updateBook}>
            <FrontPageButton content="Update Book" />
          </div>
          <div id="table_box">
            <table className="table table-striped table-dark table-hover table-bordered">
              <thead className="text-center">
                <tr>
                  <th>Book ID</th>
                  <th>Book Name</th>
                  <th>Book Author</th>
                  <th>Category</th>
                  <th>Pages</th>
                  <th>Price</th>
                  <th>Publication</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map((book) => (
                  <tr key={book.book_Id}>
                    <td>{book.book_Id}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.pages}</td>
                    <td>{book.price}</td>
                    <td>{book.publication}</td>
                    <td>
                      <div onClick={() => window.open(book.url_link, "_blank")}>
                        <ReadButtonComponent />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div id="divForButtons">
          <div id="frontButtonBox">
            <button id="nextAndPrevious" onClick={this.previousButton}>
              Previous
            </button>
            <button id="nextAndPrevious" onClick={this.nextButton}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListOfBooks;

// "author": "string",
// "book_Id": 0,
// "category": "string",
// "name": "string",
// "pages": 0,
// "price": 0,
// "publication": "string"
