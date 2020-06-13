import React, { useState, useEffect, useMemo } from "react";
import { ListGroup, Accordion, Card, Button } from "react-bootstrap";
import { Pref, City } from "../Utils/Area";
import GetWeather, { CityWeatherInfo, EmptyWeather } from "../Utils/Weather";

const CityWeather: React.FC<{
  selectedCity: City;
}> = (props) => {
  const [cityWeather, setCityWeather] = useState(EmptyWeather);
  // マウントされた最初の一回だけ取りに行く
  useEffect(() => {
    if (props.selectedCity.id !== "") {
      GetWeather(props.selectedCity.id).then((weather) => {
        setCityWeather(weather);
      });
    }
  }, [props.selectedCity.id]);

  return (
    <>
      Weather Information
      {props.selectedCity.name !== "" && (
        <div>
          <li>{props.selectedCity.id}</li>
          <li>{props.selectedCity.name}</li>
          <li>{props.selectedCity.source}</li>
          <div>
            {cityWeather.location.area}
            <br />
            <p>{cityWeather.description.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CityWeather;
