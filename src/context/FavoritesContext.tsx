import React, { ReactNode, createContext, useEffect, useState } from "react";

export type Favorite = {
  id: string;
  title: string;
  backdrop_path: string;
};

type FavoritesContextType = [
  Favorite[],
  React.Dispatch<React.SetStateAction<Favorite[]>>
];
const initialFavorites: FavoritesContextType = [[], () => {}];

export const FavoritesContext =
  createContext<FavoritesContextType>(initialFavorites);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const storedItem = localStorage.getItem("favorites");

  // 在頁面刷新後還能取得useContext的內容
  const [favorites, setFavorites] = useState(
    storedItem ? JSON.parse(storedItem) : []
  );
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={[favorites, setFavorites]}>
      {children}
    </FavoritesContext.Provider>
  );
};
