import React from "react";
import { Link  } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="flex items-center justify-between p-3 z-50 w-full absolute">
      <Link to="/">
        <h1 className="drop-shadow-lg text-red-600 text-2xl font-bold cursor-pointer">
          Ez 電影
        </h1>
      </Link>
      <Link to="/favorites">
        <button className="bg-red-500 text-white px-3 py-2 rounded">
          最愛電影
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
