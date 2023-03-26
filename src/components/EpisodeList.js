import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchSeasonEpisodeData } from "../services/FetchShows";
import Episode from "./Episode";

export default function EpisodeList() {
  const { seasonId } = useParams();
  const { showName, showId } = useLocation().state;
  const [seasonEpisodeData, setSeasonEpisodeData] = useState([]);

  useEffect(() => {
    fetchSeasonEpisodeData(seasonId).then((data) => {
      setSeasonEpisodeData(data);
    });
  }, []);
  return (
    <div>
      <h1>Episode List for {showName}</h1>
      {seasonEpisodeData["_embedded"].episodes.map((singleEpisode, index) => {
        return (
          <Episode
            key={index}
            showInfo={{ showName: showName, showId: showId }}
            singleEpisodeData={singleEpisode}
          />
        );
      })}
    </div>
  );
}
