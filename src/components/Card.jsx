import React from "react";
import Img from "../images/Katie.png";
import Str from "../images/Star.svg";
import "./card.css";
export default function Card(props) {
  return (
    <div className="card--container">
      <div className="card--img-container">
        <p className="card--text-img">SOLD OUT</p>
        <img className="card--img" src={Img} alt="Katie" />
      </div>
      <div className="card--info-container">
        <p className="card--rating">
          <img src={Str} width={14} height={14} alt="Star icon" />
          <span className="">5.0</span>
          <span className="gray">(6) •</span>
          <span className="gray">USA</span>
        </p>
      </div>
      <h2 className="card--text">Life lessons with Katie Zaferes</h2>
      <p className="card--price">
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
