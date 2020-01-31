import React, { Component } from "react";
import axios from "axios";
import ImageCard from "./ImageCard.js";
import CommentForm from "./CommentForm.js";
import "../App.css";

class ImageBoard extends Component {
  constructor(props) {
    super(props);
    let images = require("../images/images");
    this.state = {
      images: images,
      commentmodal: false,
      id: null
    };
  }

  componentWillReceiveProps({ render }) {
    console.log(render);
    if (render) {
        console.log("making request")
        this.componentDidMount()
        this.props.reset()
    }
  }

  componentDidMount() {
    axios.get("https://photoappproject3.herokuapp.com/api/images").then(res => {
      this.setState({
        images: res.data
      });
    });
  }

  deleteCard = e => {
    console.log(e.target.getAttribute("picid"));
    let id = e.target.getAttribute("picid");
    axios
      .delete("https://photoappproject3.herokuapp.com/api/images/" + id)
      .then(image => console.log(image))
      .then(() => this.componentDidMount());
  };

  upVoteCard = e => {
    console.log(e.target.getAttribute("picid"));
    let id = e.target.getAttribute("picid");
    let url = "https://photoappproject3.herokuapp.com/api/images/" + id;
    axios
      .put(url)
      .then(image => console.log(image))
      .then(() => {
        this.componentDidMount();
      });
  };

  openCommentModal = e => {
    console.log(e.target.getAttribute("picid"));
    this.setState({
      commentmodal: true,
      id: e.target.getAttribute("picid")
    });
  };

  closeCommentModal = () => {
    this.setState({
      commentmodal: false,
      id: null
    });
  };

  render() {
    let imgBoard = this.state.images.map((el, id) => {
      return (
        <ImageCard
          image={el}
          key={id}
          delete={this.deleteCard}
          upvote={this.upVoteCard}
          comment={this.openCommentModal}
          submit={this.closeCommentModal}
        />
      );
    });
    return (
      <div>
        <CommentForm
          show={this.state.commentmodal}
          onHide={this.closeCommentModal}
          {...this.state}
        />
        <h2>{imgBoard}</h2>
      </div>
    );
  }
}

export default ImageBoard;
