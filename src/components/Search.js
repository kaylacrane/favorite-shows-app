import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.searchHandlerChild = this.searchHandlerChild.bind(this);
    this.resetHandlerChild = this.resetHandlerChild.bind(this);
    this.enterHandler = this.enterHandler.bind(this);
  }
  searchHandlerChild(event) {
    this.props.searchHandler({
      key: "searchText",
      value: event.currentTarget.value,
    });
  }
  enterHandler(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }
  resetHandlerChild() {
    this.props.resetHandler();
  }

  render() {
    return (
      <div className="search">
        <span>Search for shows</span>
        <input
          type="text"
          onChange={this.searchHandlerChild}
          onKeyDown={this.enterHandler}
          value={this.props.searchText}
          placeholder="Vox Machina"
        />
        <button
          type="reset"
          className="reset-button"
          onClick={this.resetHandlerChild}
        >
          Clear Search Text
        </button>
      </div>
    );
  }
}
