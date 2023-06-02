import { useEffect, useState } from "react";
import SavedMovies from "../components/SavedMovies";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const Favorites = () => {
  const [keys, setKeys] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const favoriteMovies = Object.keys(localStorage);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft -= 250;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft += 250;
  };

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
      <div className="w-full sm:h-[450px] absolute top-12 left-0 flex items-center justify-center sm:pt-0">
        <div className="bg-black/70 rounded md:w-2/3 w-10/12 sm:h-4/5 min-h-[350px] pb-8 flex justify-center">
          <div className="text-center py-4 text-lg absolute">最愛電影</div>
          <div className="flex relative group pt-5">
            <BsCaretLeftFill
              onClick={slideLeft}
              className={`bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 absolute top-28 left-[-5px] z-10 text-black hidden ${
                favoriteMovies.length === 0
                  ? "group-hover:hidden"
                  : "group-hover:block"
              }`}
              size={30}
            />
            <div
              id={"slider"}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              <div className="h-auto max-w-[260px] inline-flex relative p-2 pr-[50px]">
                {Object.keys(localStorage).map((key) => (
                  <SavedMovies
                    movieKey={key}
                    key={key}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
            <BsCaretRightFill
              onClick={slideRight}
              className={`bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 absolute top-28 right-[-5px] z-10 text-black hidden ${
                favoriteMovies.length === 0
                  ? "group-hover:hidden"
                  : "group-hover:block"
              }`}
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
