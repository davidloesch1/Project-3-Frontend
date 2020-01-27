import React, { Component } from "react";
import ImageBoard from './components/ImageBoard.js'
import Main from './components/Main'
// import ImageCard from './components/ImageCard'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: []
    };
  }
  render() {
    return (
      <div className="container app-body">
        <Main />
        <ul className="scroll-menu">
          <li>
            <button type="button" className="btn btn-dark">
              Sports
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Action
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Nature
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Beach
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Love
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Relationships
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Travel
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Art
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Photography
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Funny
            </button>
          </li>
        </ul>
        <ImageBoard />
      </div>
    );
  }
}

export default App;
