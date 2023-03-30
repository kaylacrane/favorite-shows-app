import React from "react";
import "../stylesheets/FavoritesList.scss";

export default function FavoritesList(props) {
  const {
    favsList,
    showFavsList,
    favoritesHandler,
    openModalHandler,
    closeModalHandler,
  } = props;
  return (
    <div className="favorites-list">
      <button className="favorites-list__show-btn" onClick={openModalHandler}>
        ❤️ View Favorites List
      </button>

      <div className={`favorites-list__modal ${showFavsList ? "" : "hidden"}`}>
        <button
          type="button"
          className="favorites-list__modal__close-btn"
          onClick={closeModalHandler}
        >
          Close
        </button>
        <h1 className="favorites-list__modal__title">Favorite Shows</h1>
        <ul className="favorites-list__modal__list">
          {favsList && favsList.length ? (
            favsList.map((show) => {
              return (
                <li key={show.id}>
                  <button
                    className="favorites-list__modal__remove-btn"
                    onClick={favoritesHandler}
                    data-show-id={show.id}
                  >
                    ❌
                  </button>
                  <span>{show.name}</span>
                </li>
              );
            })
          ) : (
            <span>No favorites saved</span>
          )}
        </ul>
      </div>
    </div>
  );
}
