import React from "react";
import "../styles/card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imagePath} alt={props.imageAlt}></img>
    </div>
  );
};

export default Card;
