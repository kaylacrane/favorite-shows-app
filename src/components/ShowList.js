import React from "react";
import Show from "./Show";
import "../stylesheets/ShowList.scss";

export default function ShowList(props) {
  const {
    showList,
    savedFavs,
    favoritesHandler,
    resultsPageHandler,
    currentResultsPage,
    showFavsList,
    currentSearch,
  } = props;

  let shows = showList.map((element) => {
    if (element.show) {
      return element.show;
    } else {
      return element;
    }
  });

  return (
    <div className="show-list">
      <div className="show-list__page-btns">
        <button
          data-action="previous"
          className={`show-list__page-btns__previous ${
            currentResultsPage > 0 ? "" : "hidden"
          }`}
          onClick={(event) => resultsPageHandler(event)}
        >
          Prev page
        </button>
        <button
          data-action="next"
          className={`show-list__page-btns__next ${
            currentSearch == "" ? "" : "hidden"
          }`}
          onClick={(event) => resultsPageHandler(event)}
        >
          Next page
        </button>
      </div>

      <ul className={`show-list__shows ${showFavsList ? "noscroll" : ""}`}>
        {shows.map((element) => {
          return (
            <Show
              key={element.id}
              id={element.id}
              name={element.name}
              image={element.image}
              yearPremiered={element.premiered}
              rating={element.rating.average}
              genres={element.genres}
              savedFavs={savedFavs}
              favoritesHandler={favoritesHandler}
            />
          );
        })}
      </ul>
    </div>
  );
}
