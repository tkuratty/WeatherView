import React, { useState, useEffect } from "react";
import { ListGroup, Accordion, Card, Button } from "react-bootstrap";
import { Pref, City } from "../Utils/Area";

const CityWeather: React.FC<{
  selectedCity: City;
}> = (props) => {
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
