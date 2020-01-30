import React, { Component } from "react";
// import Images from "../images/umbrellas-art-flying-17679.jpg";
import "../App.css";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   id: 0,
    //   title: "",
    //   image: "",
    //   genre: [],
    //   votes: 0,
    //   comments: []
    // };
  }
  // componentDidMount() {
  //   console.log(this.props.image)
  //   this.setState({
  //     id: this.props.image._id,
  //     title: this.props.image.title,
  //     image: this.props.image.path,
  //     genre: this.props.image.genre,
  //     votes: this.props.image.votes,
  //     comments: this.props.image.comments
  //   });
  // }
  render() {
    let img = this.props.image.path
    let comments = this.props.image.comments
    console.log(comments)
    // let num = comments.length
    return (
      <div className="card">
        <img src={"http://localhost:8080/" + img} className="card-img-top" alt={this.props.image.title} />
        <div className="card-body">
          <h5 className="card-title">{this.props.image.title}</h5>
          <p className="card-text">This could be a description of the photo</p>
          <div className="button-container">
            <div>
              <span className="far fa-comment"></span>
              <p>{this.props.image.comments ? this.props.image.comments.length : 0}</p>
            </div>
            <div>
              <span className="far fa-arrow-alt-circle-up"></span>
              <p>{this.props.image.votes}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
