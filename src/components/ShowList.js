import React from "react";
import Show from "./Show";

export default function ShowList(props) {
  const { showList } = props;

  let shows = showList.map((element) => {
    if (element.show) {
      return element.show;
    } else {
      return element;
    }
  });

  return (
    <ul>
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
          />
        );
      })}
      <button
        onClick={(event) => {
          console.log(event);
        }}
      >
        Show more
      </button>
    </ul>
  );
}
