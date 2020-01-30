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
                this.setState({
                    images: res.data
                })
            })
    }
    deleteCard = (e) => {
        console.log(e.target.getAttribute("picid"))
        let id = e.target.getAttribute('picId')
        axios
            .delete('http://localhost:8080/api/images/' + id)
            .then(image => console.log(image))
    }

    upVoteCard = (e) => {
        console.log(e.target.getAttribute("picid"))
    }

    commentOnCard = (e) => {
        console.log(e.target.getAttribute("picid"))
    }

    render(){
        let imgBoard = this.state.images.map((el, id)=> {
            return <ImageCard image={el} key={id} delete={this.deleteCard} upvote={this.upVoteCard} comment={this.commentOnCard}/>
        });
        return(
            <h2>{imgBoard}</h2>

        )
    }
} 

export default ImageBoard