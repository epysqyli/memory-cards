import React, { useState } from "react";
import ScoreCard from "./components/ScoreCard";

import "./styles/App.scss";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  return (
    <div>
      <ScoreCard currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
};

export default App;
