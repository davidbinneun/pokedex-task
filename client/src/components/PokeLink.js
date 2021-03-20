import React, { Component } from "react";
import axios from "axios";

export default class PokeLink extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;

        this.handleClick = this.handleClick.bind(this);
      }
    
    handleClick(){
        axios
        .get(`http://localhost:3001/api/pokemon/${this.name}`)
        .then((res) => {
            console.log("handleClick in PokeLink", res.data);
          this.props.displayPokemon(res.data);
        });
    }

    render(){
     return <a onClick={this.handleClick}>{this.name}</a>
    }
}