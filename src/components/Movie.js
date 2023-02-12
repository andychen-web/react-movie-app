import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

let movieIndex = 1;
const Movie = ({ movie }) => {
  // 設定like is clicked or not
  const [like, setLike] = useState(false);

  const saveShow = () => {
    setLike(!like);
    if (!like) {
      localStorage.setItem(`movie ${movieIndex}`, JSON.stringify({ movie }));
      movieIndex++;
    } else if (like) {
      movieIndex--;
      localStorage.removeItem(`movie ${movieIndex}`);
    }
  };
  return (
    <>
      <div className="h-auto w-[150px] md:w-[200px] lg:w-[250px] inline-flex cursor-pointer relative p-2">
        <img
          className="h-[120px] w-[210px] object-cover"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="hover:bg-black/90 hover:opacity-100 opacity-0 absolute top-0 w-full h-full text-white flex">
          <p onClick={saveShow} className="h-4 relative top-3 cursor-pointer ">
            {like ? <FaHeart /> : <FaRegHeart />}
          </p>
          <p className="w-2/3 whitespace-normal text-[5px] md:text-xs self-center">
            {movie.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
