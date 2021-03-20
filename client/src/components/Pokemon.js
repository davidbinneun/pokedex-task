import React, { Component } from 'react';
import PokeImage from "./PokeImage";
import Interact from "./Interact";

export default class Pokemon extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      if (this.props.pokemon.length === 0) {
        return null;
      }
      return (
        <div
          style={{
            border: "1px solid black",
            width: "100px",
            margin: "5px",
            padding: "5px",
          }}
        >
          <PokeImage data={this.props.pokemon} />
          <p>
            <b>{this.props.pokemon.name}</b>
          </p>
          <p>
            <b>type:</b> {this.props.pokemon.types}
          </p>
          <p>
            <b>weight:</b> {this.props.pokemon.weight}
          </p>
          <p>
            <b>height:</b> {this.props.pokemon.height}
          </p>
          <p>
            <Interact pokemon={this.props.pokemon.name} />
          </p>
        </div>
      );
    }
  }