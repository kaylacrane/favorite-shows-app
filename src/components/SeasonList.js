import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { fetchSeasonData } from "../services/FetchShows";
import Season from "./Season";
import "../stylesheets/SeasonList.scss";

export default function SeasonList() {
  const { showId } = useParams();
  const { showName } = useLocation().state;
  const [seasonData, setSeasonData] = useState([]);

  useEffect(() => {
    fetchSeasonData(showId).then((data) => {
      setSeasonData(data);
    });
  }, []);

  return (
    <div className="season-list">
      <Link to={"/favorite-shows-app"} className="season-list__home-link">
        Return to Home
      </Link>
      <h1 className="season-list__title">{showName}</h1>
      <div className="season-list__seasons">
        {seasonData.map((singleSeason, index) => {
          return (
            <Season
              key={index}
              singleSeasonData={singleSeason}
              showInfo={{ showName: showName, showId: showId }}
            />
          );
        })}
      </div>
    </div>
  );
}
