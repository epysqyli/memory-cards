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
      <div className="animation-trigger"></div>
    </div>
  );
};

export default Card;
