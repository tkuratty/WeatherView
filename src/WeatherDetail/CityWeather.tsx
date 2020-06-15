import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { City } from "../Utils/Area";
import GetWeather, { EmptyWeather } from "../Utils/Weather";

const CityWeather: React.FC<{
  selectedCity: City;
}> = (props) => {
  const [cityWeather, setCityWeather] = useState(EmptyWeather);

  /**
   * Execute when selectedCity is changed
   */
  useEffect(() => {
    if (props.selectedCity.id !== "") {
      GetWeather(props.selectedCity.id).then((weather) => {
        setCityWeather(weather);
      });
    }
  }, [props.selectedCity.id]);

  if ((cityWeather.title = "")) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
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
            <p>{cityWeather.location.city}</p>
            <p>{cityWeather.description.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CityWeather;
