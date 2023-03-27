import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Season.scss";

export default function Season(props) {
  const { number, image, summary, episodeOrder, premiereDate } =
    props.singleSeasonData;
  const { showName, showId } = props.showInfo;
  return (
    <div className="season-card">
      <Link
        to={`seasons/${number}`}
        state={{ showName: showName, showId: showId }}
        className="season-card__link"
      >
        <h3 className="season-card__title">Season {number}</h3>
        <div className="season-card__text">
          <span>Number of episodes: {episodeOrder} </span>
          <span>Premiered: {premiereDate}</span>
        </div>
        <img
          src={
            image
              ? image.medium
              : `https://placehold.co/100x200?text=${showName}`
          }
          alt=""
          className="season-card__cover"
        />
        {summary ? <div className="season-card__summary">{summary}</div> : ""}
      </Link>
    </div>
  );
}
