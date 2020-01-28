import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "../App.css";

const axios = require("axios");

class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      file: null,
      imgGenres: []
    };
  }
  //this submits the form to the database as a post request
  onFormSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("myImage", this.state.file)
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      axios.post(URL, formData, config)
        .then((res) => {
            res.json(res)
            console.log(res)
        })
  }
  //this adds the file to the state
  onChange = (e) => {
    this.setState({file: e.target.files[0]})
  }
  //this changes the state title as the user types it out
  handleChange = (e) => {
    this.setState({title: e.target.value})
  }

  addTags = (e) => {
    console.log(e.target)
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Share Photos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {/* title for modal */}
            <div className="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                className="form-control"
                value={this.state.title}
                id="title"
                onChange={this.handleChange}
                placeholder="Dancing Cat, Beautiful Mountain, Etc!"
              />
            </div>
            {/* Select a file */}
            <div className="form-group">
              <label for="fileUpload">Select file</label>
              <input
                type="file"
                className="form-control-file"
                id="fileUpload"
                onChange={this.onChange}
              />
            </div>
            {/* Select genre tags */}
            <div className="form-group"></div>
            <h6>Tag some Genres!</h6>
            <div className="row">
              <div className="col">
                <div className="custom-control custom-checkbox">
                  <label className="container" for="sports">
                    Sports
                    <input type="checkbox" id="sports" onClick={this.addTags}/>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" for="Nature">
                    Nature
                    <input type="checkbox" id="Nature" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <label className="container" for="Beach">
                    Beach
                    <input type="checkbox" id="Beach" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" for="Relationships">
                    Relationships
                    <input type="checkbox" id="Relationships" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" for="Love">
                    Love
                    <input type="checkbox" id="Love" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="custom-control custom-checkbox">
                  <label className="container" for="action">
                    Action
                    <input type="checkbox" id="action" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" for="Travel">
                    Travel
                    <input type="checkbox" id="Travel" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" for="Art">
                    Art
                    <input type="checkbox" id="Art" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" for="Photography">
                    Photography
                    <input type="checkbox" id="Photography" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" for="Funny">
                    Funny
                    <input type="checkbox" id="Funny" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.onHide}>Share</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UploadForm;
