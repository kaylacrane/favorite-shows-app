import React, { Component } from "react";
import { Link } from "react-router-dom";

class Show extends Component {
  render() {
    const { id, name, image, yearPremiered, rating, genres } = this.props;
    return (
      <Link to={"/shows/" + id}>
        <h2>{name}</h2>
        <img
          src={
            image ? image.medium : `https://placehold.co/200x300?text=${name}`
          }
          alt=""
        />
        <p>Premiered: {yearPremiered}</p>
        <p>Rating: {rating ? rating : "Not available"}</p>
        <p>Genres: {genres.join(", ")}</p>
      </Link>
    );
  }
}

export default Show;
