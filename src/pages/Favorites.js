import React, { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { FaHeart } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Favorites = () => {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const removeFavorites = (favorite) => {
    const newLikeState = JSON.parse(localStorage.getItem(favorite.id)) || false; // get like state from local storage
    localStorage.setItem(favorite.id, JSON.stringify(!newLikeState)); // toggle like state in local storage
    const newFavorites = favorites.filter((item) => item.id !== favorite.id); // remove favorite from array
    setFavorites(newFavorites);
    if (currentIndex >= newFavorites.length) {
      setCurrentIndex(newFavorites.length - 1); // Update currentIndex to last index of new favorites array
    }
  };

  const slides = favorites.map((favorite) => {
    const imageURL = favorite.backdrop_path;
    return {
      id: favorite.id,
      title: favorite.original_title,
      url: `https://image.tmdb.org/t/p/w500/${imageURL}`,
    };
  });

  const slideBack = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const slideNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-[url(https://shorturl.at/aghz6)] h-screen w-screen bg-cover bg-repeat flex items-center">
      {slides[currentIndex] ? (
        <div className="md:h-[430px] h-[300px] md:w-[580px] w-[300px] m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full border rounded-2xl bg-center bg-cover bg-no-repeat duration-500"
          ></div>
          <div className="flex flex-col items-center w-full">
            <div className="text-white font-bold">
              {slides[currentIndex].title}
            </div>
            <FaHeart
              className="cursor-pointer text-2xl"
              onClick={() => removeFavorites(slides[currentIndex])}
            />
          </div>

          {/* 左右滾輪箭頭 */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={slideBack} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={slideNext} size={30} />
          </div>
        </div>
      ) : (
        <div className="m-auto items-center">
          <div className="bg-yellow-100 flex flex-col  text-black rounded p-5">
            <div> 還未收藏任何電影喔 </div>
            <button
              onClick={() => navigate("/")}
              className="bg-yellow-500 hover:bg-yellow-600 mt-4  text-white font-bold py-2 px-4 rounded"
            >
              回到首頁
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
