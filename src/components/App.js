import React from "react";
import "../styles.css";
import genresData from "../data";
import GenreList from "../containers/GenreList.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesByGenre: genresData.genres
    };
  }

  render() {
    return (
      <div className="App">
        <h1>
          Movie Props Demo
          <span role="img" aria-label="popcorn emoji">
            🍿
          </span>
        </h1>
        <GenreList />
      </div>
    );
  }
}
