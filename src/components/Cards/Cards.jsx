import React from "react";
import Card from "../Card/Card";
import { cardsContainer, alert } from "./cards.module.css";

export default function Cards({ cities, onClose }) {
  //this render cards or show a no city line
  console.log("Cards, cities", cities);
  const renderCards = (() => {
    if (cities.length) {
      return cities.map(city => (
        <Card
          key={city.id}
          id={city.id}
          max={Math.round(city.max)}
          min={Math.round(city.min)}
          name={city.name}
          img={city.img}
          onClose={() => onClose(city.id)}></Card>
      ));
    }
    return <h1 className={alert}>No Hay ciudades</h1>;
  })();

  //Component render
  return <div className={cardsContainer}>{renderCards}</div>;
}
