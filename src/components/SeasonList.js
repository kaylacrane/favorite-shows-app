import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { fetchSeasonData } from "../services/FetchShows";
import Season from "./Season";

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
    <div>
      <Link to={"/"}>Return to Homepage</Link>
      <h1>Season List for {showName}</h1>
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
  );
}
