import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  // 提供中小型裝置透過點擊icon使用slide功能
  const slideLeft = () => {
    // Scroll the contents of "slide" TO 300 pixels horizontally
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 300;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 300;
  };

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [fetchURL]);

  return (
    <>
      <h1>{title}</h1>
      {/* 使用Group 根據父元素狀態改變子元素樣式 */}
      <div className="flex relative group">
        <BsCaretLeftFill
          onClick={slideLeft}
          className="bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100  absolute top-7 left-0 z-10 text-black hidden group-hover:block"
          size={30}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie,id) => {
            return <Movie key={id} movie={movie} />;
          })}
        </div>
        <BsCaretRightFill
          onClick={slideRight}
          className="bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 absolute top-7 right-0 text-black hidden group-hover:block"
          size={30}
        />
      </div>
    </>
  );
};

export default Row;
