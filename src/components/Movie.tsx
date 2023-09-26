import React, { useContext, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FavoritesContext } from "../context/FavoritesContext";
import { MoviesProp } from "./Row";
import { Favorite } from "../context/FavoritesContext";
const Movie = ({ movie }: MoviesProp) => {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const storedItem = localStorage.getItem(movie.id);
  const [like, setLike] = useState(storedItem ? JSON.parse(storedItem) : false);
  const addFavorites = () => {
    setLike((prevState: boolean) => {
      const newLikeState = !prevState;
      localStorage.setItem(movie.id, JSON.stringify(newLikeState)); // save like state to local storage
      return newLikeState;
    });
    setFavorites((prevFavorites: Favorite[]) => {
      const alreadyExists = prevFavorites.some(
        (favoriteMovie) => favoriteMovie.id === movie.id
      );
      if (alreadyExists) {
        const newFavorites = prevFavorites.filter(
          (favoriteMovie) => favoriteMovie.id !== movie.id
        );
        return newFavorites;
      } else {
        const newFavorite: Favorite = {
          id: movie.id,
          title: movie.title,
          backdrop_path: movie.backdrop_path,
        };
        return [...prevFavorites, newFavorite];
      }
    });
  };
  return (
    <>
      <div className="h-auto w-[150px] md:w-[200px] lg:w-[250px] inline-flex relative p-2">
        <img
          className="h-[120px] w-[210px] object-cover"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="hover:bg-black/90 hover:opacity-100 opacity-0 absolute top-0 w-full h-full text-white flex">
          <i
            onClick={() => addFavorites()}
            className="h-4 relative top-3 cursor-pointer "
          >
            {like ? <FaHeart /> : <FaRegHeart />}
          </i>
          <p className="w-2/3 whitespace-normal text-[5px] md:text-xs self-center">
            {movie.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
