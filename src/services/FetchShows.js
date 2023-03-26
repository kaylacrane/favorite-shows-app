export default (query) => {
  return fetch(`http://api.tvmaze.com/search/shows?q=${query}`).then(
    (response) => response.json()
  );
};
