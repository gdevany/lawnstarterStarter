import React, { Component } from "react";
import "./main.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopic: "people",
      searchPlaceholder: "e.g. Chewbacca, Yoda, Boba Fett",
      searchText: ""
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
            placeholder={this.state.searchPlaceholder}
            onChange={this.setSearch}
          />
        </div>
        <div>
          <button
            className={
              "searchButton " +
              (this.state.searchText.length > 0
                ? "searchButton-active"
                : "searchButton-disabled")
            }
          >
            SEARCH
          </button>
        </div>
      </div>
    );
  };

  changeSubject = changeEvent => {
    let ph = "";
    changeEvent.target.value === "people"
      ? (ph = "e.g. Chewbacca, Yoda, Boba Fett")
      : (ph = "e.g. Star Wars, Jedi");
    this.setState({
      selectedTopic: changeEvent.target.value,
      searchPlaceholder: ph
    });
  };

  setSearch = e => {
    e.preventDefault();
    this.setState({ searchText: e.target.value });
  };

  resultsContainer = () => {
    return (
      <div className="container resultsContainer">
        <div className="resultsHeading">Results</div>
        <div className="underliner" />
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center d-flex flex-nowrap">
            {this.searchContainer()}
            {this.resultsContainer()}
          </div>
        </div>
      </div>
    );
  }
}
