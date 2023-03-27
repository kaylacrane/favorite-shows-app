import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { fetchSeasonEpisodeData } from "../services/FetchShows";
import Episode from "./Episode";
import NotFound from "./NotFound";
import "../stylesheets/EpisodeList.scss";

export default function EpisodeList() {
  const { seasonId } = useParams();
  const { showName, showId } = useLocation().state;
  const [seasonEpisodeData, setSeasonEpisodeData] = useState([]);

  useEffect(() => {
    fetchSeasonEpisodeData(showId).then((data) => {
      console.log(data);
      data = data.filter((episode) => episode.season == seasonId);
      setSeasonEpisodeData(data);
    });
  }, []);
  return (
    <div className="episode-list">
      <Link to={"/"} className="episode-list__home-link">
        Return to Homepage
      </Link>
      <h1 className="episode-list__title">
        {showName}: <br />
        Season {seasonId} Episodes
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
