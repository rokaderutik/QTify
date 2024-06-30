import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/HeroSection";
import AllAlbumSection from "./components/AllAlbumSections/AllAlbumSections";
import FaqSection from "./components/FaqSection/FaqSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AllAlbumSection />
      <FaqSection />
    </div>
  );
}

export default App;