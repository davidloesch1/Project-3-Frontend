import React, { Component } from "react";
import Comment from "./Comment";
import "../App.css";

class ImageCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.image.path)
    return (
      <div className="card">
        <span
          className="fas fa-times delete"
          onClick={this.props.delete}
          picid={this.props.image._id}
        ></span>
        <img
          src={"https://photoappproject3.herokuapp.com/" + this.props.image.path}
          className="card-img-top"
          alt={this.props.image.title}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.image.title}</h5>
          <p className="card-text">{this.props.image.description}</p>
          <div className="button-container">
            <div>
              <span
                className="far fa-comment"
                onClick={this.props.comment}
                picid={this.props.image._id}
                comments={
                  this.props.image.comments
                    ? this.props.image.comments.length
                    : 0
                }
              ></span>
              <p>
                {this.props.image.comments
                  ? this.props.image.comments.length
                  : 0}
              </p>
            </div>
            <div>
              <span
                className="far fa-arrow-alt-circle-up"
                onClick={this.props.upvote}
                picid={this.props.image._id}
                votes={this.props.image.votes}
              ></span>
              <p>{this.props.image.votes}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
