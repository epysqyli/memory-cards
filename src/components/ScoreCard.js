import React from "react";
import "../styles/scorecard.scss";

const ScoreCard = (props) => {
  return (
    <div className="scorecard">
      <div className="logo">test your mem</div>
      <div className="scores">
        <div className="current-score">
          <p>current score</p>
          <div>{props.currentScore}</div>
        </div>
        <div className="best-score">
          <p>best score</p>
          <div>{props.bestScore}</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
