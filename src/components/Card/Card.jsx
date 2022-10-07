import React from "react";
import { NavLink } from "react-router-dom";
import {
  container,
  cancel,
  title,
  containerCard,
  icon,
} from "./card.module.css";

export default function Card({ id, max, min, name, img, onClose }) {
  // acá va tu código

  return (
    <div className={container}>
      <button className={cancel} onClick={onClose}>
        X
      </button>
      <NavLink className={title} to={`/ciudad/${id}`}>
        <p>{name}</p>
      </NavLink>
      <div className={containerCard}>
        <div>
          <p>Max</p>
          <p>{`${max}ºC`}</p>
        </div>
        <div>
          <p>Min</p>
          <p>{`${min}ºC`}</p>
        </div>
      </div>
      <img
        className={icon}
        alt={img}
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
      />
    </div>
  );
}
