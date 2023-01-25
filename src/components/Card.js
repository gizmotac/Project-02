import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`./images/${props.img}`} className="card--image" />
      <div className="card--details">
        <img src="../logos/locationlogo.svg" className="card--locat" />
        <span className="bg">{props.country}</span>
        <span className="maps">View on Google Maps</span>
        <h2 className="text--rila">{props.title}</h2>
        <h4 className="text--date">{props.date}</h4>
        <p className="text">
          <span>{props.text}</span>
        </p>
      </div>
    </div>
  );
}




