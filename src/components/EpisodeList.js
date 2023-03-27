import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { fetchSeasonEpisodeData } from "../services/FetchShows";
import Episode from "./Episode";
import NotFound from "./NotFound";

export default function EpisodeList() {
  const { seasonId } = useParams();
  const { showName, showId } = useLocation().state;
  const [seasonEpisodeData, setSeasonEpisodeData] = useState([]);

  useEffect(() => {
    fetchSeasonEpisodeData(showId).then((data) => {
      data = data.filter((episode) => episode.season == seasonId);
      setSeasonEpisodeData(data);
    });
  }, []);
  return (
    <div>
      <Link to={"/"}>Return to Homepage</Link>
      <h1>
        Episode List for {showName}: Season {seasonId}
      </h1>
      {seasonEpisodeData.length > 0 ? (
        seasonEpisodeData.map((singleEpisode, index) => {
          return (
            <Episode
              key={index}
              showInfo={{ showName: showName, showId: showId }}
              singleEpisodeData={singleEpisode}
            />
          );
        })
      ) : (
        <NotFound />
      )}
    </div>
  );
}
