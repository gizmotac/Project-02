import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data"


export default function App() {
    const cards = data.map(item => {
      return (
      <Card
      img={item.img}
      country={item.country}
      title={item.title}
      date={item.date}
      text={item.text}
      />
      )
    })
  return (
    <div>
      <Navbar />
      <section className="cards-list">
                {cards}
            </section>
    </div>
  );
}
