import React, { useState, useEffect } from "react";
import { ListGroup, Accordion, Card, Button } from "react-bootstrap";
import { Pref, City } from "../Utils/Area";
import GetWeather from "../Utils/Weather";

const CityWeather: React.FC<{
  selectedCity: City;
}> = (props) => {
  const [weatherJson, setWeatherJson] = useState("");

  if (props.selectedCity.id !== "") {
    GetWeather(props.selectedCity.id).then((jsonData) => {
      //console.log(JSON.stringify(jsonData));
      setWeatherJson(jsonData);
    });
  }
  return (
    <>
      Weather Information
      {props.selectedCity.name !== "" && (
        <div>
          <li>{props.selectedCity.id}</li>
          <li>{props.selectedCity.name}</li>
          <li>{props.selectedCity.source}</li>
        </div>
      )}
    </>
  );
};

export default CityWeather;
