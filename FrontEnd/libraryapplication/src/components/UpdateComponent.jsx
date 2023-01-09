import React, { Component } from "react";
import LibraryServices from "../services/LibraryServices";
class UpdateComponent extends Component {
  componentDidMount(){
    document.title = "Update Book Page"
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      book_Id: "",
      category: "",
      pages: "",
      price: "",
      publication: "",
    };
    // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    // this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
    // this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
    // this.changePagesHandler = this.changePagesHandler.bind(this);
    // this.changePriceHandler = this.changePriceHandler.bind(this);
    // this.changePublicationHandler = this.changePublicationHandler.bind(this);
    // this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    // this.changeBookIDHandler=this.changeBookIDHandler.bind(this);
    // this.changeUrl_LinkHandler=this.changeUrl_LinkHandler.bind(this);
  }
  changeBookIDHandler = (event) => {
    this.setState({ book_Id: event.target.value });
  };
  changeFirstNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeAuthorHandler = (event) => {
    this.setState({ author: event.target.value });
  };
  changeCategoryHandler = (event) => {
    this.setState({ category: event.target.value });
  };
  changePagesHandler = (event) => {
    this.setState({ pages: event.target.value });
  };
  changePriceHandler = (event) => {
    this.setState({ price: event.target.value });
  };
  changePublicationHandler = (event) => {
    this.setState({ publication: event.target.value });
  };
  changeUrl_LinkHandler=(event)=>{
    this.setState({url_link:event.target.value})
  }
  onSubmitEventHandler = (event) => {
    event.preventDefault();
    let book = {
      book_Id:this.state.book_Id,
      name: this.state.name,
      author: this.state.author,
      category: this.state.category,
      pages: this.state.pages,
      price: this.state.price,
      publication: this.state.publication,
      url_link:this.state.url_link
    };
    console.log(book);
    LibraryServices.updateBooks(book).then((res) => {
      this.props.history.push('/books');
    });
  };

  onCancelEventHandler = (event) => {
    this.props.history.push("/books");
  };
  render() {
    return (
      <div>
        <div
          className="page-content page-container  rounded-5"
          id="page-content"
        >
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-md-6 col-lg-4">
                <form className="card text-justify needs-validation" novalidate>
                  <div className="card-body text-center">
                    <p className="font-weight-bold">Update Book</p>
                    <div className="form-group">
                      <input
                        id="name"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Book ID"
                        value={this.state.book_Id}
                        onChange={this.changeBookIDHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="name"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Book Name"
                        value={this.state.name}
                        onChange={this.changeFirstNameHandler}
                        required
                      />
                    </div>
                  
                    <div className="form-group">
                      <input
                        id="author"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Author Name"
                        value={this.state.author}
                        onChange={this.changeAuthorHandler}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="category"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Category "
                        value={this.state.category}
                        onChange={this.changeCategoryHandler}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="pages"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Pages "
                        value={this.state.pages}
                        onChange={this.changePagesHandler}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="price"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Price "
                        value={this.state.price}
                        onChange={this.changePriceHandler}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="publication"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Publication "
                        value={this.state.publication}
                        onChange={this.changePublicationHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="publication"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="URL Link "
                        value={this.state.url_link}
                        onChange={this.changeUrl_LinkHandler}
                        required
                      />
                    </div>
                    <button
                      className="btn btn-block btn-bold btn-primary"
                      onClick={this.onSubmitEventHandler}
                    >
                      SUBMIT
                    </button>
                    <button
                      className="btn btn-block btn-bold btn-danger"
                      onClick={this.onCancelEventHandler}
                    >
                      CANCEL
                    </button>
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

export default UpdateComponent;
