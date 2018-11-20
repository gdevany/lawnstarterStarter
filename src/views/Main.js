import React, { Component } from "react";
import "./main.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopic: "people",
      searchPlaceholder: "e.g. Chewbacca, Yoda, Boba Fett",
      searchText: "",
      searchResults: []
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
              id="films"
              value="films"
              checked={this.state.selectedTopic === "films"}
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
            onClick={this.searchIt}
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

  searchIt = () => {
    let data = fetch(
      `https://swapi.co/api/${this.state.selectedTopic}/?search=${
        this.state.searchText
      }`
    )
      .then(res => res.json())
      // .then(data => console.log(data.results));
      .then(data => this.setState({ searchResults: data.results }));
  };

  resultsContainer = () => {
    return (
      <div className="container">
        <div className="resultsContainer">
          <div className="resultsHeading">Results</div>
          <div className="underliner" />
          {this.listResults()}
        </div>
      </div>
    );
  };

  listResults = () => {
    // let listAll;
    let viewEm;
    if (this.state.searchResults.length < 1) {
      return <div>no results</div>;
    } else {
      let listAll = this.state.searchResults.map(n => {
        if (this.state.selectedTopic === "people") {
          viewEm = (
            <div>
              <div className="row listResults" key={n.name}>
                <div className="my-auto">{n.name}</div>
                <div className="seeDetailsButton text-center ml-auto">
                  SEE DETAILS
                </div>
              </div>
              <div className="underliner" />
            </div>
          );
        }
        if (this.state.selectedTopic === "films") {
          viewEm = (
            <div>
              <div className="row listResults" key={n.title}>
                <div className="my-auto">{n.title}</div>
                <div className="seeDetailsButton text-center ml-auto">
                  SEE DETAILS
                </div>
              </div>
              <div className="underliner" />
            </div>
          );
        }
        return viewEm;
      });
      return listAll;
    }
  };

  render() {
    console.log(this.state.searchResults);
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
