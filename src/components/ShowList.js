import React, { useEffect, useState } from "react";
import Show from "./Show";
import "../stylesheets/ShowList.scss";

export default function ShowList(props) {
  const { showList, savedFavs, favoritesHandler } = props;

  let shows = showList.map((element) => {
    if (element.show) {
      return element.show;
    } else {
      return element;
    }
  });

  return (
    <div className="show-list">
      <button
        className="show-list__next-page-btn"
        onClick={(event) => {
          console.log(event);
        }}
      >
        Show next page
      </button>
      <ul className="show-list__list">
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
        <button
          className="show-list__load-more-btn"
          onClick={(event) => {
            console.log(event);
          }}
        >
          Show more
        </button>
      </ul>
    </div>
  );
}
