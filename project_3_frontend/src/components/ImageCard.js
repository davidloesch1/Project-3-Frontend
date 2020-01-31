import React from "react";
import "../App.css";

function ImageCard(props){
    return (
      <div className="card">
        <span className="fas fa-times delete" onClick={props.delete} picid={props.image._id}></span>
        <img src={" https://photoappproject3.herokuapp.com/" + props.image.path} className="card-img-top" alt={props.image.title} />
        <div className="card-body">
          <h5 className="card-title">{props.image.title}</h5>
          <p className="card-text">{props.image.description}</p>
          <div className="button-container">
            <div>
              <span className="far fa-comment" onClick={props.comment} picid={props.image._id} comments={props.image.comments ? props.image.comments.length : 0}></span>
              <p>{props.image.comments ? props.image.comments.length : 0}</p>
            </div>
            <div>
              <span className="far fa-arrow-alt-circle-up" onClick={props.upvote} picid={props.image._id} votes={props.image.votes}></span>
              <p>{props.image.votes}</p>
            </div>
          </div>
        </div>
      </div>
    );
}


export default ImageCard;
