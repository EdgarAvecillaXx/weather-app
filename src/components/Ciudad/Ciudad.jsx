import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../404Page/PageNotFound";
import { container, title, infoContainer, info } from "./Ciudad.module.css";

function Ciudad({ cities }) {
  const { ciudadId } = useParams();
  console.log(ciudadId);
  const city = cities.filter(city => city.id === parseInt(ciudadId));
  return (
    <>
      {city.length ? (
        <div className={container}>
          <h2 className={title}>{city[0].name}</h2>
          <div className={infoContainer}>
            <div>
              Temperatura: <span className={info}>{city[0].temp} ºC</span>
            </div>
            <div>
              Clima: <span className={info}>{city[0].weather}</span>
            </div>
            <div>
              Viento: <span className={info}>{city[0].wind} km/h</span>
            </div>
            <div>
              Cantidad de nubes: <span className={info}>{city[0].clouds}</span>
            </div>
            <div>
              Latitud: <span className={info}>{city[0].latitud}º</span>
            </div>
            <div>
              Longitud: <span className={info}>{city[0].longitud}º</span>
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}

export default Ciudad;
