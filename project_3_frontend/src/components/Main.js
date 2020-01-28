import React from 'react';
import '../App.css'

function Main(props){
    return(
        <div className="main-top">
          <div className="bg"></div>
          <div className="text-container">
            <h1 className="page-header">Kollage</h1>
            <h5 className="page-sub-header">Open Photo Sharing</h5>
            <p className="lead">Share your photos with the world</p>
            <button className="upload-btn"onClick={props.onClick}>Upload Image</button>
          </div>
        </div>
    )
}

export default Main