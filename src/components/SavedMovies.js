import React, { useState } from "react";

const SavedMovies = ({ movieKey, onDelete }) => {
  const item = localStorage.getItem(movieKey);
  const parsedItem = JSON.parse(item);

  return (
    <>
      <div className="md:w-2/3 pt-5 px-2 text-xs sm:text-sm self-end">
        <div className="flex">
          {parsedItem.movie.title}
          <svg
            cursor="pointer"
            onClick={() => onDelete(movieKey)}
            className="h-4 w-4 text-black-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${parsedItem.movie.backdrop_path}`}
          alt="favorite-movies"
        />
      </div>
    </>
  );
};

export default SavedMovies;
