import React, { Component } from "react";
import Images from "../images/umbrellas-art-flying-17679.jpg";
import "../App.css";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      genre: [""],
      votes: 0,
      comments: []
    };
  }
  componentDidMount() {
    this.setState({
      title: this.props.image.title,
      image: this.props.image.imgPath
    });
  }
  render() {
    return (
      <div className="card">
        <img src={Images} className="card-img-top" alt={this.state.title} />
        <div className="card-body">
          <h5 className="card-title">{this.state.title}</h5>
          <p className="card-text">This could be a description of the photo</p>
          <div className="button-container">
            <div>
              <span className="far fa-comment"></span>
              <p>{this.state.comments.length}</p>
            </div>
            <div>
              <span className="far fa-arrow-alt-circle-up"></span>
              <p>{this.state.votes}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
