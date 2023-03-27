import React from "react";
import "../stylesheets/Episode.scss";

export default function Episode(props) {
  const { name, number, image, summary, airstamp } = props.singleEpisodeData;
  const { showName } = props.showInfo;
  return (
    <div className="episode-card">
      <h3 className="episode-card__title">
        Episode {number}: {name}
      </h3>
      <img
        src={
          image ? image.medium : `https://placehold.co/200x300?text=${showName}`
        }
        alt=""
        className="episode-card__cover"
      />
      <div className="episode-card__text">
        <p>Aired on: {airstamp}</p>
        {summary ? summary : ""}
      </div>
    </div>
  );
}
