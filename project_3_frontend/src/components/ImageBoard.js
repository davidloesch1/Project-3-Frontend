import React, { Component } from "react";
import ImageCard from "./ImageCard.js"
import '../App.css'

class ImageBoard extends Component {
    constructor(props) {
        super(props)
        let images = require('../images/images')
        this.state = {
            images: images
        }
    }

    render(){
        let imgBoard = this.state.images.map((el, id)=> {
            return <ImageCard image={el} key={id}/>
        });
        return(
            <h2>{imgBoard}</h2>

        )
    }
} 

export default ImageBoard