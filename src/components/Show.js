import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Show(props) {
  const { id, name, image, yearPremiered, rating, genres } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorites = (event) => {
    const showId = `${event.target.dataset.showId}`;

    event.preventDefault();
  };
  return (
    <Link to={"/shows/" + id} state={{ showName: name }}>
      <h2>{name}</h2>
      <img
        src={image ? image.medium : `https://placehold.co/200x300?text=${name}`}
        alt=""
        height="50px"
      />
      <p>Premiered: {yearPremiered}</p>
      <p>Rating: {rating ? rating : "Not available"}</p>
      <p>Genres: {genres.join(", ")}</p>
      {isFavorite ? (
        <p>You like this show</p>
      ) : (
        <p data-show-id={id} onClick={handleFavorites}>
          Add to favorites
        </p>
      )}
    </Link>
  );
}
