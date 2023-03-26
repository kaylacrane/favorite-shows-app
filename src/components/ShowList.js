import React, { Component } from "react";
import Show from "./Show";

class ShowList extends Component {
  render() {
    const { showList } = this.props;
    return (
      <ul>
        {showList.map((show) => {
          return (
            <Show
              key={show.id}
              name={show.name}
              image={show.image}
              yearPremiered={show.premiered}
              rating={show.rating.average}
              genres={show.genres}
            />
          );
        })}
      </ul>
    );
  }
}

export default ShowList;
