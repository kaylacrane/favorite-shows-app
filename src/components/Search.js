import React from "react";

export default function Search(props) {
  const { searchHandler, resetHandler, searchText } = props;

  const enterHandler = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <div className="search">
      <span>Search for shows</span>
      <input
        type="text"
        onChange={(event) => searchHandler(event)}
        onKeyDown={enterHandler}
        value={searchText}
        placeholder="Vox Machina"
      />
      <button type="reset" className="reset-button" onClick={resetHandler}>
        Clear Search Text
      </button>
    </div>
  );
}
