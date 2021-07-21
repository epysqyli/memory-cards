import React from "react";
import "../styles/card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.imagePath}
        alt={props.imageAlt}
        onClick={props.onCardClicked}
      ></img>
      <div className={props.animationStatus ? "overlay" : ""}></div>
    </div>
  );
};

export default Card;
