import React, { Component } from "react";

class Show extends Component {
  render() {
    const { name, image, yearPremiered, rating, genres } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <img src={image.medium} alt="" height="150px" />
        <p>Premiered: {yearPremiered}</p>
        <p>Rating: {rating}</p>
        <p>Genres: {genres.join(", ")}</p>
      </div>
    );
  }
}

export default Show;
