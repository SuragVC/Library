import React, { Component } from "react";
import LibraryServices from "../services/LibraryServices";
import { Link } from "react-router-dom";

class ListOfBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.addBook = this.addBook.bind(this);
  }
  componentDidMount() {
    LibraryServices.getAllbooks().then((res) => {
      this.setState({ books: res.data });
      console.log(res.data);
    });
  }

  addBook() {
    this.props.history.push("/add/books");
  }
  updateBook() {
    this.props.history.push("/book/update");
  }
  render() {
    return (
      <div>
        <h1 className="text-center">List Of Books Available on Library</h1>
        <div className="row">
        
            <div className="nav-item2">
              <Link to="/add/books" className="nav-link">
                <p className="font-weight-bold">Add Book</p>
              </Link>
            </div>
            <div className="nav-item2">
              <Link to="/book/update" className="nav-link">
                <p className="font-weight-bold">Update Book</p>
              </Link>
            </div>
          
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
                </tr>
              ))}
            </tbody>
          </table>
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
