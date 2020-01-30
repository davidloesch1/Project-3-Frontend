import React from "react";
import "../App.css";

function Comment(props) {
  return <p className="comment-card" >{props.comment}</p>;
}

export default Comment;
