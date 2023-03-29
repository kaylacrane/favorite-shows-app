export const fetchShowData = (query, page = 0) => {
  if (query === "") {
    return fetch(`https://api.tvmaze.com/shows?page=${page}`).then((response) =>
      response.json()
    );
  } else {
    return fetch(`https://api.tvmaze.com/search/shows?q=${query}`).then(
      (response) => response.json()
    );
  }
};

export const fetchSeasonData = (showId) => {
  return fetch(`https://api.tvmaze.com/shows/${showId}/seasons`).then(
    (response) => response.json()
  );
};

export const fetchSeasonEpisodeData = (showId) => {
  return fetch(`https://api.tvmaze.com/shows/${showId}/episodes`).then(
    (response) => response.json()
  );
};
