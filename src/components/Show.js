import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Show.scss";

export default function Show(props) {
  const {
    id,
    name,
    image,
    yearPremiered,
    rating,
    genres,
    savedFavs,
    favoritesHandler,
  } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (savedFavs && savedFavs.find((show) => show.id === id.toString())) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [savedFavs]);

  return (
    <div className="show-card">
      <Link
        to={"/shows/" + id}
        state={{ showName: name }}
        className="show-card__link"
      >
        <div className="show-card__image-block">
          <img
            src={
              image ? image.medium : `https://placehold.co/200x300?text=${name}`
            }
            alt=""
            className="show-card__image-block__cover"
          />
          <button
            className={`show-card__image-block__favorites-btn ${
              isFavorite ? "favorite" : ""
            }`}
            data-show-id={id}
            data-show-name={name}
            onClick={favoritesHandler}
          >
            {isFavorite ? "❌" : "Add Fav"}
          </button>
        </div>
        <div className="show-card__text-block">
          <h2 className="show-card__text-block__title">{name}</h2>
          <span>Premiered: {yearPremiered}</span>
          <span>Rating: {rating ? rating : "Not available"}</span>
          <span>Genres: {genres.join(", ")}</span>
        </div>
      </Link>
    </div>
  );
}
