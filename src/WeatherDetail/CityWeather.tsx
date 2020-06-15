import React, { useState, useEffect } from "react";
import { Spinner, Card, Button, Accordion } from "react-bootstrap";
import { City } from "../Utils/Area";
import Forecast from "./Forecast";
import PinpointWeather from "./PinpointWeather";
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
        <div className="m-1">
          <div className="my-3">
            <h2>地点情報</h2>
            地域: {cityWeather.location.area}
            <br />
            都市名: {cityWeather.location.city}
          </div>
          <div className="my-3">
            <Forecast cityWeather={cityWeather} />
          </div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  天気概況
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{cityWeather.description.text}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <div className="my-3">
            <PinpointWeather cityWeather={cityWeather} />
          </div>
          <div className="my-3">
            <h2>都市データ</h2>
            <li>{props.selectedCity.id}</li>
            <li>{props.selectedCity.name}</li>
            <li>{props.selectedCity.source}</li>
          </div>
        </div>
      )}
    </>
  );
};

export default CityWeather;
