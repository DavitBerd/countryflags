import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import CountryDetail from "./pages/countryDetails";
import "./App.css";
import sunIcon from "./imgs/Path(1).png";
import moonIcon from "./imgs/Group 3(1).png";
const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container ${theme}`} data-theme={theme}>
      <div className="top-bar">
        <div className="top">
          <div>
            <h1>Where in the world?</h1>
          </div>
          <div>
            <button className="themeswitch" onClick={toggleTheme}>
              <img
                src={theme === "light" ? sunIcon : moonIcon}
                alt={theme === "light" ? "Sun icon" : "Moon icon"}
                className="theme-icon"
              />
              Dark Mode
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route
          path="/country/:index"
          element={<CountryDetail theme={theme} />}
        />
      </Routes>
    </div>
  );
};

export default App;
