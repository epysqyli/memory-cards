import React, { useState } from "react";
import ScoreCard from "./components/ScoreCard";

import "./styles/App.scss";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [images, setImages] = useState([
    {
      path: require("./assets/1.jpg").default,
      alt: "New Levels New Devils",
    },
    {
      path: require("./assets/2.jpg").default,
      alt: "Technicolor",
    },
    {
      path: require("./assets/3.jpg").default,
      alt: "Effloresce",
    },
    {
      path: require("./assets/4.jpg").default,
      alt: "Newborn Sun",
    },
    {
      path: require("./assets/5.jpeg").default,
      alt: "The Most Hated",
    },
    {
      path: require("./assets/6.jpg").default,
      alt: "For Long Tomorrow",
    },
    {
      path: require("./assets/7.jpeg").default,
      alt: "Grow",
    },
    {
      path: require("./assets/8.jpg").default,
      alt: "Filoxiny",
    },
    {
      path: require("./assets/9.jpg").default,
      alt: "Sleep Dirt",
    },
    {
      path: require("./assets/10.jpg").default,
      alt: "Bottle It In",
    },
    {
      path: require("./assets/11.jpg").default,
      alt: "Broken Brights",
    },
    {
      path: require("./assets/12.jpg").default,
      alt: "Con Todo El Mundo",
    },
    {
      path: require("./assets/13.jpg").default,
      alt: "Chon",
    },
  ]);

  return (
    <div>
      <ScoreCard currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
};

export default App;
