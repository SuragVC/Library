import { Button } from "@chakra-ui/react";
import React, { Component } from "react";
import LibraryServices from "../services/LibraryServices";
class SingleBookComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  componentDidMount() {
    let BookId = JSON.parse(localStorage.getItem("bookid"));
    let book = [];
    document.title = " Book ";
    LibraryServices.getBookByID(BookId).then((res) => {
      book = res.data;
      let id = document.getElementById("Bookid");
      id.value = "ID :" + BookId;
      let name = document.getElementById("name");
      name.innerText = "Book Name : " + book.name;
      let author = document.getElementById("author");
      author.value = "Author :" + book.author;
      let category = document.getElementById("category");
      category.value = "Category :" + book.category;
      let pages = document.getElementById("pages");
      pages.value = "Pages :" + book.pages;
      let price = document.getElementById("price");
      price.value = "Price :" + book.price;
      let publication = document.getElementById("publication");
      publication.value = "Publication : " + book.publication;
      this.setState({ url: book.url_link });
    });
  }

  render() {
    return (
      <div className="form_center">
        <div
          className="page-content page-container  rounded-5"
          id="page-content"
        >
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-md-6 col-lg-4">
                <form className="card text-justify needs-validation" noValidate>
                  <div className="card-body text_center">
                    <p className="font-weight-bold" id="name"></p>
                    <div className="form-group">
                      <input
                        id="Bookid"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Book ID "
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="author"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Author Name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="category"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Category "
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="pages"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Pages "
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="price"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Price "
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="publication"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Publication "
                        required
                      />
                    </div>
                    <div>
                      <div
                        onClick={() => window.open(this.state.url, "_blank")}
                      >
                        <Button
                          size="md"
                          height="48px"
                          width="255px"
                          border="2px"
                          borderColor="green"
                          backgroundColor="red"
                        >
                          Read
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBookComponent;
