import React, { Component } from "react";
import fetchShows from "../services/FetchShows";
import Search from "./Search";
import ShowList from "./ShowList";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.state = {
      searchText: "",
      shows: [],
    };
  }

  searchHandler(data) {
    this.setState({ [data.key]: data.value });
  }

  resetHandler() {
    this.setState({ searchText: "" });
  }

  componentDidMount() {
    fetchShows(this.state.searchText).then((data) => {
      this.setState({ shows: data });
    });
  }

  componentDidUpdate() {
    fetchShows(this.state.searchText).then((data) => {
      this.setState({ shows: data });
    });
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <Search
          searchText={this.state.searchText}
          searchHandler={this.searchHandler}
          resetHandler={this.resetHandler}
        />
        <ShowList showList={this.state.shows} />
      </div>
    );
  }
}
