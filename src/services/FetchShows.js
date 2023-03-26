let showData = async (query) => {
  if (query === "") {
    const response = await fetch(`http://api.tvmaze.com/shows?page=0`);
    return await response.json();
  } else {
    const response_1 = await fetch(
      `http://api.tvmaze.com/search/shows?q=${query}`
    );
    return await response_1.json();
  }
};
export default showData;
