import { useEffect, useState } from "react";
import SavedMovies from "../components/SavedMovies";

const Favorites = () => {
  const [keys, setKeys] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    setKeys(keys);

    const mediaQuery = window.matchMedia("(max-width: 400px)");
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // when component unmounts, call cleanup function that removes listener to avoid memory leak
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleDelete = (key) => {
    setKeys((prevKeys) => prevKeys.filter((prevKey) => prevKey !== key));
    localStorage.removeItem(key);
  };

  return (
    <div
      className="w-auto h-[800px] sm:h-[500px] bg-cover bg-repeat"
      style={{
        backgroundImage:
          "url(" +
          (isSmallScreen
            ? "https://images.unsplash.com/photo-1625687361215-d87365beca3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=268&q=80"
            : "https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") +
          ")",
      }}
    >
      <div className="w-full sm:h-[450px] absolute top-0 left-0 flex items-center justify-center pt-16">
        <div className="bg-black/70 rounded md:w-2/3 w-4/5 sm:h-4/5 sm:min-h-[350px] min-h-screen flex justify-center">
          <div className="text-center py-4 text-lg absolute">最愛電影</div>
          {/* Saved Movie */}
          <div className="flex flex-col justify-center sm:max-h-full max-h-5 sm:flex-row pt-5">
            {Object.keys(localStorage).map((key) => (
              <SavedMovies movieKey={key} key={key} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
