import React, { useState } from "react";
import "../stylesheets/Search.scss";

export default function Search(props) {
  const {
    inputHandler,
    inputText,
    resetHandler,
    submitHandler,
    searchHistory,
    clickHistoryHandler,
  } = props;

  const [showHistory, setShowHistory] = useState(false);

  const onFocusHandler = () => {
    if (searchHistory && searchHistory.length > 0) {
      setShowHistory(true);
    }
  };

  return (
    <form
      className="search"
      autoComplete="off"
      onSubmit={(event) => {
        submitHandler(event);
        setShowHistory(false);
      }}
    >
      <input
        type="text"
        value={inputText}
        placeholder="Vox Machina"
        className="search__input"
        id="search__input"
        onChange={(event) => inputHandler(event)}
        onFocus={onFocusHandler}
        onClick={onFocusHandler}
      />
      <ul
        className={`search__search-history ${showHistory ? "" : "hidden"}`}
        id="search__search-history"
      >
        {searchHistory
          ? searchHistory.map((item, index) => {
              return (
                <li
                  key={index}
                  className="search__search-history__item"
                  onClick={(event) => {
                    clickHistoryHandler(event);
                    setShowHistory(false);
                  }}
                >
                  {item}
                </li>
              );
            })
          : ""}
      </ul>
      <button type="submit" className="search__submit-btn">
        Submit
      </button>
      <button
        type="reset"
        className="search__reset-input-btn"
        onClick={resetHandler}
      >
        Clear Search Text
      </button>
    </form>
  );
}
