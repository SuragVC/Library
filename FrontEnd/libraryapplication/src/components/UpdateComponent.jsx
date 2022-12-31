import React, { Component } from "react";

class UpdateComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="page-content page-container  rounded-5" id="page-content">
            <div class="padding">
              <div class="row container d-flex justify-content-center">
                <div class="col-md-6 col-lg-4">
                  <form class="card text-justify">
                    <div class="card-body text-center">
                      <p className="font-weight-bold">Update Book</p>
                      <div class="form-group">
                        <input
                          class="form-control border border-primary"
                          type="text"
                          placeholder="Book ID "
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control border border-primary"
                          type="text"
                          placeholder="Book Name"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          class="form-control border border-primary"
                          type="text"
                          placeholder="Author Name"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          class="form-control border border-primary"
                          type="text"
                          placeholder="Category "
                        />
                      </div>

                      <div class="form-group">
                        <input
                          class="form-control border border-primary"
                          type="text"
                          placeholder="Pages "
                        />
                      </div>

                      <div class="form-group">
                        <input
                          class="form-control border border-primary"
                          type="text"
                          placeholder="Price "
                        />
                      </div>

                      <div class="form-group">
                        <input
                          class="form-control border border-primary"
                          type="text"
                          placeholder="Publication "
                        />
                      </div>
                      <button class="btn btn-block btn-bold btn-primary">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateComponent;
