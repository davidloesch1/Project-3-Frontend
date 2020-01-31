import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "../App.css";

class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      file: null,
      genres: [],
      description: ""
    };
  }

  //this submits the form to the database as a post request
  onFormSubmit = e => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("title", this.state.title);
    for (let i = 0; i < this.state.genres.length; i++) {
      formData.append("genre[]", this.state.genres[i]);
    }
    formData.append("path", this.state.file);

    axios
      .post(" https://photoappproject3.herokuapp.com/api/images", formData, {
        onUploadProgress: progressEvent => {
          console.log(
            "upload progress: " +
              ((progressEvent.loaded / progressEvent.total) * 100 + "%")
          );
        }
      })
      .then(res => {
        // res.json(res)
        console.log(res);
      })
      .then(() => {
        this.setState({
          title: "",
          file: null,
          genres: []
        });
      });
    this.props.onHide();
  };

  //this adds the file to the state
  onChange = e => {
    console.log(e.target.files[0]);
    this.setState({ file: e.target.files[0] });
  };
  //this changes the state title as the user types it out
  handleChange = e => {
    this.setState({ title: e.target.value });
  };
  //this add genres tags to the genre state
  addTags = e => {
    let array = this.state.genres.slice(0);
    let tag = e.target.id;
    !array.includes(tag)
      ? array.push(tag)
      : (array = array.filter(e => e !== tag));
    this.setState({
      genres: array
    });
  };
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
          <form method="post" encType="multipart/form-data">
            {/* title for modal */}
            <div className="form-group">
              <label htmlFor="title">Title</label>
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
              <label htmlFor="fileUpload">Select file</label>
              <input
                type="file"
                name="photo"
                className="form-control-file"
                id="fileUpload"
                onChange={this.onChange}
              />
            </div>
            {/* write a description of the photo */}
            <div className="form-group">
              <label className="container" htmlFor="description">
                Description
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  onChange={this.handleChange}
                ></textarea>
              </label>
            </div>
            {/* Select genre tags */}
            <div className="form-group"></div>
            <h6>Tag some Genres!</h6>
            <div className="row">
              <div className="col">
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="sports">
                    Sports
                    <input type="checkbox" id="sports" onClick={this.addTags} />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="nature">
                    Nature
                    <input type="checkbox" id="nature" onClick={this.addTags} />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="beach">
                    Beach
                    <input type="checkbox" id="beach" onClick={this.addTags} />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="relationships">
                    Relationships
                    <input
                      type="checkbox"
                      id="relationships"
                      onClick={this.addTags}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="love">
                    Love
                    <input type="checkbox" id="love" onClick={this.addTags} />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="action">
                    Action
                    <input type="checkbox" id="action" onClick={this.addTags} />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="travel">
                    Travel
                    <input type="checkbox" id="travel" onClick={this.addTags} />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="art">
                    Art
                    <input type="checkbox" id="art" onClick={this.addTags} />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="photography">
                    Photography
                    <input
                      type="checkbox"
                      id="photography"
                      onClick={this.addTags}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <label className="container" htmlFor="funny">
                    Funny
                    <input type="checkbox" id="funny" onClick={this.addTags} />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.onFormSubmit}>Share</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UploadForm;
