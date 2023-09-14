import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { FavoritesProvider } from "./context/FavoritesContext";
const App = () => {
  return (
      <FavoritesProvider>
        {/* Navbar永遠置頂 Routes根據URL顯示組件，以React Router v6寫法為主 */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
  );
};

export default App;
