import React from "react";

export default function Episode(props) {
  const { number, image, summary, airstamp } = props.singleEpisodeData;
  const { showName, showId } = props.showInfo;
  return (
    <div>
      <h3>Episode {number}</h3>
      <img
        src={
          image ? image.medium : `https://placehold.co/200x300?text=${showName}`
        }
        alt=""
      />
      <p>Aired on: {airstamp}</p>
      {summary ? summary : ""}
    </div>
  );
}
