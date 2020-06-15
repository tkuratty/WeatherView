import React, { useState, useEffect } from "react";
import { Card, Row, Col, CardColumns } from "react-bootstrap";
import { City } from "../Utils/Area";
import GetWeather, { EmptyWeather, CityWeatherInfo } from "../Utils/Weather";

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
                  <Card.Text>{item.link}</Card.Text>
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
