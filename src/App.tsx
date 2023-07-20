import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import SecondaryNav from "./components/navbar/SecondaryNav";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div
      className={`flex flex-col place-content-center mx-auto py-2 lg:px-40 px-4
                        ${darkMode ? "dark" : ""}`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <SecondaryNav />
      <Portfolio />
      <Article />
      <Contact />
    </div>
  );
}
