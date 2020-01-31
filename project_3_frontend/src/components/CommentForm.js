import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "../App.css";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photo: null,
      parent: {},
      subcomments: []
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    let comment = {
        title: this.state.title,
        photo: this.props.id,
        parent: this.state.parent,
        subComments: this.state.subcomments,
    }
    console.log(comment)
    axios
        .post(" https://photoappproject3.herokuapp.com/api/comments", comment)
        .then(comment => console.log(comment))
        .then(() => {
            this.setState({
                title: "",
                photo: null,
                parent: {},
                subComments: []
            })
        })
        this.props.onHide()
  }

  handleChange = (e) => {
    this.setState({title: e.target.value})
  }


  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={this.props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form method="post" encType="multipart/form-data">
            {/* Type area for comment */}
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={this.handleChange}
              ></textarea>
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

export default CommentForm;
