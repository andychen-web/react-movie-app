import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
export type MovieType = {
  id: string;
  title: string;
  genre_ids: number[];
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
};

const Main = () => {
  // 設定顯示電影的state 初始值為空陣列
  const [movies, setMovies] = useState<MovieType[]>([]);
  const truncateStr = (str: string, num: number) => {
    if (str?.length > num) {
      // 從第一個字切到最後一個英文字的空格位置
      return str?.slice(0, str?.lastIndexOf(" ", num)) + "...";
    } else {
      return str;
    }
  };
  const moviesExceptHorror = movies.filter(
    (movie) => !movie.genre_ids.includes(27)
  );
  const movie =
    moviesExceptHorror[Math.floor(Math.random() * moviesExceptHorror.length)];
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full h-[560px] text-white">
      <div className="w-full h-full flex items-center">
        <div className="h-[560px] w-full absolute bg-gradient-to-r from-black"></div>
        {/* 用可選串聯運算子取得巢狀物件的屬性 */}
        <img
          className="h-full w-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
        ></img>
        <div className="justify-start w-3/4 ml-4 absolute">
          <h1 className="text-xl md:text-3xl pb-2">{movie?.title}</h1>
          <div className="pb-2"></div>
          <p className="pb-2 text-gray-400">上映日 {movie?.release_date}</p>
          <p className="pb-2 w-full">
            簡介:{truncateStr(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
