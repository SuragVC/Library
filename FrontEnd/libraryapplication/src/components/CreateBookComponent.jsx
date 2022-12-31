import React, { Component } from "react";
import {useState} from 'react';
class CreateBookComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      author:'',
      book_Id:'',
      category:'',
      pages:'',
      price:'',
      publication:''
    }
    this.onSubmitEventHandler=this.onSubmitEventHandler.bind(this);
  }
onSubmitEventHandler=(event)=>{
  event.preventDefault();
  console.log('form submitted ✅');
  this.setState({name:event.name})
  this.setState({author:event.author})
  this.setState({publication:event.publication})
  this.setState({pages:event.pages})
  this.setState({price:event.price})
  this.setState({category:event.category})
  console.log(this.name);
}
  render() {
    return (
      <div>
        <div className="page-content page-container  rounded-5" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-md-6 col-lg-4">
                <form className="card text-justify" onSubmit={this.onSubmitEventHandler}>
                 
                  <div className="card-body text-center">
                  <p className="font-weight-bold">Add Book</p>
                    <div className="form-group">
                      <input
                      id="name"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Book Name"
                        value={this.name}
          onChange={event => this.setName(event.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <input
                      id="author"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Author Name"
                      />
                    </div>

                    <div className="form-group">
                      <input
                      id="category"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Category "
                      />
                    </div>

                    <div className="form-group">
                      <input
                      id="pages"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Pages "
                      />
                    </div>

                    
                    <div className="form-group">
                      <input
                      id="price"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Price "
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                      id="publication"
                        className="form-control border border-primary"
                        type="text"
                        placeholder="Publication "
                      />
                    </div>
                    <button className="btn btn-block btn-bold btn-primary" onClick={this.onSubmitEventHandler}>
                      SUBMIT
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

export default CreateBookComponent;
