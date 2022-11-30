import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      {/* Navbar永遠置頂 Routes根據URL顯示組件，以React Router v6寫法為主 */}
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
