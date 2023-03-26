import React, { Component } from "react";

class Show extends Component {
  render() {
    const { name, image, yearPremiered, rating, genres } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}

export default Show;
