import React, { useState, useEffect } from "react";
import ScoreCard from "./components/ScoreCard";
import Card from "./components/Card";

import "./styles/App.scss";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
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

  const updateScore = () => {
    setCurrentScore(currentScore + 1);
    if (bestScore <= currentScore) {
      setBestScore(bestScore + 1);
    }
  };

  const resetClickState = () => {
    let resetImages = [...images];
    resetImages.map((image) => {
      return (image.alreadyClicked = false);
    });
    setImages(resetImages);
  };

  const changeStatus = (i) => {
    const updateImages = [...images];
    if (updateImages[i].alreadyClicked === false) {
      updateImages[i].alreadyClicked = true;
      updateScore();
      updateRandomize();
    } else {
      setCurrentScore(0);
      resetClickState();
      alert("You lost");
    }
    setImages(updateImages);
  };

  const randomize = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const updateRandomize = () => {
    const imagesToBeShuffled = [...images];
    randomize(imagesToBeShuffled);
    setImages(imagesToBeShuffled);
  };

  useEffect(() => {
    updateRandomize();
    console.log("randomized");
    setIsClicked(true);
    console.log(isClicked);
  }, [currentScore]);

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
              animationStatus={isClicked}
              onCardClicked={() => {
                changeStatus(index);
                setIsClicked(false);
                console.log(isClicked);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
