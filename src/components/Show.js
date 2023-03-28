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
    if (savedFavs && savedFavs.includes(id.toString())) {
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

        <button
          className={`show-card__favorites-btn ${isFavorite ? "favorite" : ""}`}
          data-show-id={id}
          onClick={favoritesHandler}
        >
          {isFavorite ? "❌ Remove from favorites" : "✔️ Add to favorites"}
        </button>
      </Link>
    </div>
  );
}
