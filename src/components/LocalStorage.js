import React, { useState } from "react";

const LocalStorage = ({ movieKey }) => {
  const item = localStorage.getItem(`${movieKey}`);
  const parsedItem = JSON.parse(item);
  let show = true;
  if (localStorage.length < 3) {
    show = false;
  }
  
  return (
    <>
      <div className="md:w-2/3 py-10 px-2 text-xs sm:text-sm self-end">
        {show ? parsedItem.movie.title : "請至少新增三部電影"}
        <div className="">
        {show ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${parsedItem.movie.backdrop_path}`}
            alt="favorite-movies"
          />
        ) : (
          ""
        )}
        </div>
      </div>
    </>
  );
};

export default LocalStorage;
