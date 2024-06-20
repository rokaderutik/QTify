import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/HeroSection";
import AllAlbumSection from "./components/AllAlbumSections/AllAlbumSections";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AllAlbumSection />
    </div>
  );
}

export default App;