import React from "react";
import "../styles/scorecard.scss";

const ScoreCard = (props) => {
  return (
    <div className="scorecard">
      <div className="logo">test your mem</div>
      <div className="scores">
        <div className="current-score">current score: {props.currentScore}</div>
        <div className="best-score">best score: {props.bestScore}</div>
      </div>
    </div>
  );
};

export default ScoreCard;
