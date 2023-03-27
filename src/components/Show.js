import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Show.scss";

export default function Show(props) {
  const { id, name, image, yearPremiered, rating, genres } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorites = (event) => {
    const showId = `${event.target.dataset.showId}`;

    event.preventDefault();
  };
  return (
    <div className="show-card">
      <Link
        to={"/shows/" + id}
        state={{ showName: name }}
        className="show-card__link"
      >
        <h2 className="show-card__title">{name}</h2>
        <img
          src={
            image ? image.medium : `https://placehold.co/200x300?text=${name}`
          }
          alt=""
          className="show-card__cover"
        />
        <div className="show-card__text">
          <span>Premiered: {yearPremiered}</span>
          <span>Rating: {rating ? rating : "Not available"}</span>
          <span>Genres: {genres.join(", ")}</span>
        </div>

        {isFavorite ? (
          <p className="show-card__favorites-msg">You like this show</p>
        ) : (
          <button
            className="show-card__favorites-btn"
            data-show-id={id}
            onClick={handleFavorites}
          >
            Add to favorites
          </button>
        )}
      </Link>
    </div>
  );
}
