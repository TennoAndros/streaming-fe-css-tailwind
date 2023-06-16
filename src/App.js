import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Newsletter from "./components/Νewsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Info />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
