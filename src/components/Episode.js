import React from "react";
import "../stylesheets/Episode.scss";

export default function Episode(props) {
  const { name, number, image, summary, airstamp } = props.singleEpisodeData;
  const { showName } = props.showInfo;

  const airedOn = () => {
    const date = new Date(airstamp);
    const datevalues = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
    ];

    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    return `${datevalues[0]}/${datevalues[1]}/${datevalues[2]} ${addZero(
      datevalues[3]
    )}:${addZero(datevalues[4])}`;
  };
  return (
    <div className="episode-card">
      <h3 className="episode-card__title">
        Episode {number}:<br />
        {name}
      </h3>
      <p className="episode-card__date">Aired on: {airedOn()}</p>
      <p>{airstamp}</p>
      <img
        src={
          image ? image.medium : `https://placehold.co/200x300?text=${showName}`
        }
        alt=""
        className="episode-card__cover"
      />
      {summary ? (
        <div
          className="episode-card__summary"
          dangerouslySetInnerHTML={{
            __html: summary,
          }}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}
