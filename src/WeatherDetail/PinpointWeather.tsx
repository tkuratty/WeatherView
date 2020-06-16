import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import { CityWeatherInfo } from "../Utils/Weather";

/**
 * Show link for pin-point weather information by cards
 * @param props
 */
const PinpointWeather: React.FC<{
  cityWeather: CityWeatherInfo;
}> = (props) => {
  return (
    <>
      <h2>ピンポイント予報リンク</h2>
      {props.cityWeather.description.text !== "" && (
        <CardColumns>
          {props.cityWeather.pinpointLocations.map((item) => {
            return (
              <Card key={item.name}>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      )}
    </>
  );
};

export default PinpointWeather;
