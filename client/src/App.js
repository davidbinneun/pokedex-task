import './App.css';
import Search from "./components/Search";
import Pokemon from "./components/Pokemon";
import TypeList from "./components/TypeList";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pokemonData: '', typeList: ''};
    this.displayPokemon = this.displayPokemon.bind(this);
    this.clickedType = this.clickedType.bind(this);
  }

  displayPokemon(pokemonData){
    this.setState({pokemonData: pokemonData});
  };

  clickedType(type){
    axios.get(`http://localhost:3001/api/type/${type}`).then((res) => {
      console.log("res.data in app", res.data);
      this.setState({typeList: res.data});
    });

  };

  clickedType(type){
    console.log("clickedType", type);

    axios.get(`http://localhost:3001/api/type/${type}`).then((res) => {
      console.log("res.data in app", res.data);
      this.setState({typeList: res.data});
    });

  };

  render(){
    return (
      <div>
        <Search displayPokemon={this.displayPokemon} />
        <Pokemon data={this.state.pokemonData} clickedType={this.clickedType} />
        <TypeList typeList={this.state.typeList} displayPokemon={this.displayPokemon} />
      </div>
    );
  }
}

export default App;
