import React, { Component } from "react";
import "./main.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Display the search container
  searchContainer = () => {
    return (
      <div className="searchContainer">
        <div>What are you searching for?</div>

        <div>
          <div class="form-check form-check-inline radioButtons">
            <input
              class="form-check-input"
              type="radio"
              name="peopleOrMovies"
              id="people"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              People
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="peopleOrMovies"
              id="movies"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              Movies
            </label>
          </div>
        </div>
        <div />
        <div>
          <input
            className="searchTextBox"
            placeholder="e.g. Chewbacca, Yoda, Boba Fett"
          />
        </div>
        <div>
          <button className="searchButton searchButton-active">SEARCH</button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="header text-center">SWStarter</div>
        <div className="container">
          <div className="row justify-content-center">
            {this.searchContainer()}
          </div>
        </div>
      </div>
    );
  }
}
