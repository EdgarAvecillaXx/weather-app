/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

//* Components
import Nav from "../components/Nav/Nav";
import Cards from "../components/Cards/Cards";
import About from "../components/About/About";
import Ciudad from "../components/Ciudad/Ciudad";

//* Styles
import "./App.css";
import Footer from "../components/Footer/Footer";
import PageNotFound from "../components/404Page/PageNotFound";

function App() {
  // states
  const [cities, setCities] = useState([]); //saves city info from the API
  const [flag, setFlag] = useState(true); //is set false, the API dind't find the city
  const [pos, setPos] = useState(true);
  //API states
  const [search, setSearch] = useState(""); // recieves the city from the search box
  const [request, setRequest] = useState(true); // if true a request has been sendt

  // Weather API
  const apiKey = "353114f1eda9c627f7900d87707dd7d8";

  useEffect(() => {
    if (request) {
      //Request to the API
      const getWeather = async () => {
        //* La primera vez, se llama a la posición local del cliente si el usuario lo permite
        if (pos) {
          //* Funcion que llama a las coordenadas del usuario
          navigator.geolocation.getCurrentPosition(async pos => {
            const coords = pos.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === 200) {
              const ciudad = {
                min: Math.round(data.main.temp_min),
                max: Math.round(data.main.temp_max),
                img: data.weather[0].icon,
                id: data.id,
                wind: data.wind.speed,
                temp: data.main.temp,
                name: data.name,
                weather: data.weather[0].main,
                clouds: data.clouds.all,
                latitud: data.coord.lat,
                longitud: data.coord.lon,
              };
              setCities(oldcities => [...oldcities, ciudad]);
              if (!flag) setFlag(true);
            } else {
              if (flag) setFlag(false);
            }
          });
          setPos(false);
        } else {
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
          const response = await fetch(url);
          const data = await response.json();
          if (data.cod === 200) {
            const ciudad = {
              min: Math.round(data.main.temp_min),
              max: Math.round(data.main.temp_max),
              img: data.weather[0].icon,
              id: data.id,
              wind: data.wind.speed,
              temp: data.main.temp,
              name: data.name,
              weather: data.weather[0].main,
              clouds: data.clouds.all,
              latitud: data.coord.lat,
              longitud: data.coord.lon,
            };
            setCities(oldcities => [...oldcities, ciudad]);
            if (!flag) setFlag(true);
          } else {
            if (flag) setFlag(false);
          }
        }
        setRequest(false);
      };
      getWeather();
    }
  }, [request]);

  //saves the city recieved from the searchbox
  const handleSearch = async ciudad => {
    setSearch(ciudad);
  };

  // handles the close action on the card
  const handleClose = id => {
    setCities(oldcities => oldcities.filter(city => city.id !== id));
  };
  //Component render
  return (
    <div className="App">
      <Nav onSearch={handleSearch} flag={flag} setRequest={setRequest} />
      <div className="row">
        <Routes>
          <Route
            path="/"
            element={<Cards cities={cities} onClose={handleClose} />}></Route>
          <Route path="/about" element={<About />} />
          <Route
            path="/ciudad/:ciudadId"
            element={<Ciudad cities={cities} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
