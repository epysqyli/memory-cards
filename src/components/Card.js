import React from "react";
import "../styles/card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img
        className={props.gameOver ? "" : "active"}
        src={props.imagePath}
        alt={props.imageAlt}
        onClick={props.gameOver ? null : props.onCardClicked}
      ></img>
      <div className={props.animationStatus ? "overlay" : ""}></div>
    </div>
  );
};

export default Card;
