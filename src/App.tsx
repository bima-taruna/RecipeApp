import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/Main/MainContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
