import React from "react";
import { Link } from "react-router-dom";

export default function Season(props) {
  const { number, image, summary } = props.singleSeasonData;
  const { showName, showId } = props.showInfo;
  return (
    <Link
      to={`seasons/${number}`}
      state={{ showName: showName, showId: showId }}
    >
      <h3>Season {number}</h3>
      <p>Number of episodes: ??? </p>
      <img
        src={
          image ? image.medium : `https://placehold.co/100x200?text=${showName}`
        }
        alt=""
      />
      {summary ? summary : ""}
    </Link>
  );
}
