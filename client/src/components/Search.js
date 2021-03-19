import React, { Component } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", data: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    axios
      .get(`http://localhost:3001/api/pokemon/${this.state.value}`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
        console.log(res);
      });
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Pokemon pokemon={this.state.data} />
      </div>
    );
  }
}