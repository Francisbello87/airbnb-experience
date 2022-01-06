import React from "react";
import star from "../images/Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card-content">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={process.env.PUBLIC_URL + props.coverImg}
        className="card-pic"
        alt="user pic"
      />
      <div className="rating">
        <img src={star} alt="rating star" className="rating-" />
        <span className="rating-num">{props.stats.rating}</span>
        <span className="count">
          ({props.stats.reviewCount})&#8226;{props.location}
        </span>
        <p>{props.description}</p>
      </div>
      <p>{props.title}</p>
      <p>
        <span>From ${props.price}</span> / person
      </p>
      <p>
        <strong>OpenSpots:</strong> {props.openSpots}
      </p>
    </div>
  );
}
