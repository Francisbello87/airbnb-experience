import React from "react";
import star from "../images/Star 1.png";

export default function Card(props) {
  return (
    <div className="card-content">
      <img src={props.coverImg} className="card-pic" alt="user pic" />
      <div className="rating">
        <img src={star} alt="rating star" className="rating-" />
        <span className="rating-num">{props.rating}</span>
        <span className="count">
          ({props.reviewCount})&#8226;{props.location}
        </span>
        <p>{props.description}</p>
      </div>
      <p>{props.title}</p>
      <p>
        <span>From ${props.price}</span> / person
      </p>
      <p>OpenSpots: {props.openSpots}</p>
    </div>
  );
}
