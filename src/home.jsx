import React from "react";
import "./home.css";

const Home = () => {
  const text = "I'M ROHAN MAHARJAN.";

  return (
    <div className="home-container" id="home">
      <h1 className="animated-text">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Home;
