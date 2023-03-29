import React, { useEffect, useState } from "react";
import { fetchShowData } from "../services/FetchShows";
import NotFound from "./NotFound";
import Search from "./Search";
import ShowList from "./ShowList";
import "../stylesheets/Homepage.scss";
import FavoritesList from "./FavoritesList";

export default function Homepage() {
  const [currentSearch, setCurrentSearch] = useState("");
  const [inputText, setInputText] = useState("");
  const [showsList, setShowsList] = useState([]);
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("recent-searches"))
  );
  const [savedFavs, setSavedFavs] = useState(
    JSON.parse(localStorage.getItem("saved-favs"))
  );
  const [showFavsList, setShowFavsList] = useState(false);

  const favoritesHandler = (event) => {
    event.preventDefault();
    const showId = `${event.target.dataset.showId}`;
    const showName = `${event.target.dataset.showName}`;
    const showInfo = { id: showId, name: showName };
    console.log(event);
    let favsList = JSON.parse(localStorage.getItem("saved-favs"));
    let actionPerformed = "";
    if (!favsList) {
      favsList = [showInfo];
      actionPerformed = "added";
    } else if (favsList && favsList.find((show) => show.id === showId)) {
      const index = favsList.indexOf(
        favsList.find((show) => show.id === showId)
      );
      console.log(index);
      favsList.splice(index, 1);
      actionPerformed = "removed";
    } else {
      favsList.push(showInfo);
      actionPerformed = "added";
    }
    localStorage.setItem("saved-favs", JSON.stringify(favsList));
    setSavedFavs(favsList);
    alert(`You just ${actionPerformed} a show`);
  };

  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const resetHandler = () => {
    setInputText("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!inputText) {
      return;
    }
    let newList = searchHistory;
    if (newList) {
      if (!newList.includes(inputText)) {
        newList.unshift(inputText);
      }
      if (newList.length > 5) {
        newList.pop();
      }
    } else {
      newList = [inputText];
    }
    setSearchHistory(newList);
    setCurrentSearch(inputText);
    resetHandler();
    localStorage.setItem("recent-searches", JSON.stringify(newList));
  };

  const clickHistoryHandler = (event) => {
    const itemClicked = event.target.innerHTML;
    setInputText(itemClicked);
  };

  const openModalHandler = () => {
    setShowFavsList(true);
  };
  const closeModalHandler = () => {
    setShowFavsList(false);
  };

  useEffect(() => {
    fetchShowData(currentSearch).then((data) => {
      setShowsList(data);
    });
  }, [currentSearch]);

  return (
    <div className="homepage">
      <h1 className="homepage__title">TVmaze Series Search</h1>
      <FavoritesList
        favsList={savedFavs}
        showFavsList={showFavsList}
        favoritesHandler={favoritesHandler}
        openModalHandler={openModalHandler}
        closeModalHandler={closeModalHandler}
      />
      <Search
        inputHandler={inputHandler}
        inputText={inputText}
        resetHandler={resetHandler}
        submitHandler={submitHandler}
        searchHistory={searchHistory}
        clickHistoryHandler={clickHistoryHandler}
      />
      {showsList && showsList.length > 0 ? (
        <ShowList
          showList={showsList}
          savedFavs={savedFavs}
          favoritesHandler={favoritesHandler}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
}
