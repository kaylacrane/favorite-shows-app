import React from "react";
import "../stylesheets/Search.scss";

export default function Search(props) {
  const { searchHandler, resetHandler, searchText } = props;

  const enterHandler = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <div className="search">
      <span className="search__text">Search for shows</span>
      <input
        type="text"
        onChange={(event) => searchHandler(event)}
        onKeyDown={enterHandler}
        value={searchText}
        placeholder="Vox Machina"
        className="search__input"
      />
      <button
        type="reset"
        className="search__reset-input-btn"
        onClick={resetHandler}
      >
        Clear Search Text
      </button>
    </div>
  );
}
