import React, { useState } from "react";
import ScoreCard from "./components/ScoreCard";
import Card from "./components/Card";

import "./styles/App.scss";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [images, setImages] = useState([
    {
      path: require("./assets/1.jpg").default,
      alt: "New Levels New Devils",
      alreadyClicked: false,
    },
    {
      path: require("./assets/2.jpg").default,
      alt: "Technicolor",
      alreadyClicked: false,
    },
    {
      path: require("./assets/3.jpg").default,
      alt: "Effloresce",
      alreadyClicked: false,
    },
    {
      path: require("./assets/4.jpg").default,
      alt: "Newborn Sun",
      alreadyClicked: false,
    },
    {
      path: require("./assets/5.jpeg").default,
      alt: "The Most Hated",
      alreadyClicked: false,
    },
    {
      path: require("./assets/6.jpg").default,
      alt: "For Long Tomorrow",
      alreadyClicked: false,
    },
    {
      path: require("./assets/7.jpeg").default,
      alt: "Grow",
      alreadyClicked: false,
    },
    {
      path: require("./assets/8.jpg").default,
      alt: "Filoxiny",
      alreadyClicked: false,
    },
    {
      path: require("./assets/9.jpg").default,
      alt: "Sleep Dirt",
      alreadyClicked: false,
    },
    {
      path: require("./assets/10.jpg").default,
      alt: "Bottle It In",
      alreadyClicked: false,
    },
    {
      path: require("./assets/11.jpg").default,
      alt: "Broken Brights",
      alreadyClicked: false,
    },
    {
      path: require("./assets/12.jpg").default,
      alt: "Con Todo El Mundo",
      alreadyClicked: false,
    },
    {
      path: require("./assets/13.jpg").default,
      alt: "Chon",
      alreadyClicked: false,
    },
    {
      path: require("./assets/14.jpg").default,
      alt: "Man Steals The Stars",
      alreadyClicked: false,
    },
    {
      path: require("./assets/15.jpg").default,
      alt: "Jassbusters",
      alreadyClicked: false,
    },
  ]);

  const changeStatus = (i) => {
    console.log(images[i]);
  };

  return (
    <div>
      <ScoreCard currentScore={currentScore} bestScore={bestScore} />
      <div className="container">
        {images.map((image, index) => {
          return (
            <Card
              key={index}
              imagePath={image.path}
              alt={image.alt}
              onCardClicked={() => {
                changeStatus(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
