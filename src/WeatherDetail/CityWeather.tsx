import React, { useState, useEffect, useMemo } from "react";
import { ListGroup, Accordion, Card, Button } from "react-bootstrap";
import { Pref, City } from "../Utils/Area";
import GetWeather, { CityWeatherInfo, EmptyWeather } from "../Utils/Weather";

const CityWeather: React.FC<{
  selectedCity: City;
}> = (props) => {
  // TODO:マウントされた最初の一回だけ取りに行く?
  // 無限に繰り返し呼ばれてしまう
  const cityWeather = useMemo(() => {
    if (props.selectedCity.id !== "") {
      return GetWeather(props.selectedCity.id);
    } else {
      return EmptyWeather;
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
