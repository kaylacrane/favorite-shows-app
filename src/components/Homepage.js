import React, { useEffect, useState } from "react";
import { fetchShowData } from "../services/FetchShows";
import NotFound from "./NotFound";
import Search from "./Search";
import ShowList from "./ShowList";

export default function Homepage() {
  const [searchText, setSearchText] = useState("");
  const [showsList, setShowsList] = useState([]);

  const searchHandler = (event) => {
    setSearchText(event.target.value);
  };

  const resetHandler = () => {
    setSearchText("");
  };

  useEffect(() => {
    fetchShowData(searchText).then((data) => {
      setShowsList(data);
    });
  }, [searchText]);

  return (
    <>
      <h1>Homepage</h1>
      <Search
        searchText={searchText}
        searchHandler={searchHandler}
        resetHandler={resetHandler}
      />
      {showsList && showsList.length > 0 ? (
        <ShowList showList={showsList} />
      ) : (
        <NotFound />
      )}
    </>
  );
}
