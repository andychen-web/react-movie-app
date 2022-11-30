import React from "react";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3 z-50 w-full absolute">
        <h1 className="text-red-600 text-2xl font-bold cursor-pointer">
          Ez 電影
        </h1>
      <div>
          <button className="pr-3">登入</button>
          <button className="bg-red-500 text-white px-3 py-2 rounded">
            註冊
          </button>
      </div>
    </div>
  );
};

export default Navbar;
