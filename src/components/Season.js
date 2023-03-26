import React from "react";

export default function Season(props) {
  const { number, image, summary } = props.singleSeasonData;

  return (
    <div>
      <h3>Season {number}</h3>
      <p>Number of episodes: ??? </p>
      <img src={image ? image.medium : `https://placehold.co/200x300`} alt="" />
      {summary ? summary : ""}
    </div>
  );
}
