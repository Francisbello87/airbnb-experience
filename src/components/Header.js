import React from "react";
import headerImage from "../images/Group 77.png";

export default function Header() {
  return (
    <section className="hero-section">
      <img src={headerImage} alt="images" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
