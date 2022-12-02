import React from "react";
import LocalStorage from "../components/LocalStorage";

const Favorites = () => {
  return (
    <div className="w-full h-screen">
      <img
        src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="w-full h-[400px] absolute top-0 left-0 flex items-center justify-center pt-16">
        <div className="bg-black/70 rounded md:w-2/3 w-4/5 sm:h-4/5 h-50 min-h-[250px] flex justify-center">
          <h1 className="text-center py-4 text-lg absolute">前三名最愛電影</h1>
          <LocalStorage movieKey={localStorage.key(0)} />
          <LocalStorage movieKey={localStorage.key(1)}/>
          <LocalStorage movieKey={localStorage.key(2)}/>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
