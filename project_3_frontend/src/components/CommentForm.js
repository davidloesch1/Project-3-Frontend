import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Comment from './Comment'
import axios from "axios";
import "../App.css";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsId: [],
      commentsString: [],
      title: "",
      photo: null,
      parent: {},
      subcomments: []
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      axios
        .get("https://photoappproject3.herokuapp.com/api/images/" + this.props.id)
        .then(image => {
            this.setState({
                commentsId: image.data.comments
            })
        })
        .then(() => {
            let commentsId = this.state.commentsId.slice(0)
            let comments = this.state.commentsString.slice(0)
            commentsId.map(el => {
                console.log(el)
                axios.get("https://photoappproject3.herokuapp.com/api/comment/" + el)
                .then(comment => {
                    comments.push(comment.data.title)
                    this.setState({
                        commentsString: comments
                    })
                })
            })
        })
        .then(() => {
            this.render()
        })
    }
  }
  onFormSubmit = e => {
    e.preventDefault();
    let comment = {
      title: this.state.title,
      photo: this.props.id,
      parent: this.state.parent,
      subComments: this.state.subcomments
    };
    console.log(comment);
    axios
      .post("https://photoappproject3.herokuapp.com/api/comment", comment)
      .then(comment => console.log(comment))
      .then(() => {
        this.setState({
          title: "",
          photo: null,
          parent: {},
          subComments: [],
          commentsId: [],
          commentsString: []
        });
      });
    this.props.onHide();

  };

  clearOutAndHide = () => {
    this.setState({
        title: "",
        photo: null,
        parent: {},
        subComments: [],
        commentsId: [],
        commentsString: []
      });
      this.props.onHide();
  }


  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
      let commentBoard = this.state.commentsString.map((el,id) => {
          return(
              <Comment key={id} comment={el} />
          )
      })
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={this.clearOutAndHide}>
          <Modal.Title id="contained-modal-title-vcenter">Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <div className="comment-container">
          <h4>Comments</h4>
          {commentBoard}
          </div>




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
