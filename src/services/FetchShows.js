export default (query) => {
  if (query == "") {
    return fetch(`http://api.tvmaze.com/shows?page=0`).then((response) =>
      response.json()
    );
  } else {
    return fetch(`http://api.tvmaze.com/search/shows?q=${query}`).then(
      (response) => response.json()
    );
  }
};
