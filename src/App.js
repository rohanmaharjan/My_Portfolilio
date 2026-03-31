import React from "react";

import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Technologies from "./technologies";
import Contact from "./contact";
import Project from "./project";
import Footer from "./footer";
import Achievements from "./achievements";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Project />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}



export default App;
