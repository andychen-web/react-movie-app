import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  // 設定顯示電影的state 初始值為空陣列
  const [movies, setMovies] = useState([]);
  // 用 Math.floor() & Math.random() 隨機選出索引值，再用索引值來取得元素.
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncateStr = (str, num) => {
    if (str?.length > num) {
      // 從第一個字切到最後一個英文字的空格位置
      return str?.slice(0,str?.lastIndexOf(" ",num))+"..."
    } else {
      return str
    }
  };
  // 設定每次網頁reload都利用axios提出API請求
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
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
          <div className="pb-2">
          </div>
          <p className="pb-2 text-gray-400">上映日 {movie?.release_date}</p>
          <p className="pb-2 w-full">
            簡介:{truncateStr(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
    // 
  );
};

export default Main;
