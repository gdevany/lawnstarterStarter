import React, { Component } from "react";
import "./main.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopic: "people"
    };
  }

  //Display the search container
  searchContainer = () => {
    return (
      <div className="searchContainer">
        <div>What are you searching for?</div>

        <div>
          <div className="form-check form-check-inline radioButtons">
            <input
              className="form-check-input"
              type="radio"
              name="peopleOrMovies"
              id="people"
              value="people"
              checked={this.state.selectedTopic === "people"}
              onChange={this.changeSubject}
            />
            <label className="form-check-label">People</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="peopleOrMovies"
              id="movies"
              value="movies"
              checked={this.state.selectedTopic === "movies"}
              onChange={this.changeSubject}
            />
            <label className="form-check-label">Movies</label>
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

  changeSubject = changeEvent => {
    this.setState({ selectedTopic: changeEvent.target.value });
  };

  render() {
    console.log(this.state.selectedTopic);
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
