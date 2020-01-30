import React, { Component } from "react";
import axios from 'axios'
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
    componentDidMount(){
        axios
            .get('http://localhost:8080/api/images')
            .then(res => {
                console.log(res.data)
                this.setState({
                    images: res.data
                })
            })
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