import React, { Component } from "react";
import Show from "./Show";

class ShowList extends Component {
  render() {
    const { showList } = this.props;
    return (
      <ul>
        {showList.map((element) => {
          if (element.show) {
            return (
              <Show
                key={element.show.id}
                name={element.show.name}
                image={element.show.image}
                yearPremiered={element.show.premiered}
                rating={element.show.rating.average}
                genres={element.show.genres}
              />
            );
          } else {
            return (
              <Show
                key={element.id}
                name={element.name}
                image={element.image}
                yearPremiered={element.premiered}
                rating={element.rating.average}
                genres={element.genres}
              />
            );
          }
        })}
      </ul>
    );
  }
}

export default ShowList;
