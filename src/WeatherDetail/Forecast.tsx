import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { City } from "../Utils/Area";
import GetWeather, { EmptyWeather, CityWeatherInfo } from "../Utils/Weather";

const Forecast: React.FC<{
  cityWeather: CityWeatherInfo;
}> = (props) => {
  return (
    <>
      <h2>予報</h2>
      {props.cityWeather.description.text !== "" && (
        <div>
          <Row>
            {props.cityWeather.forecasts.map((item) => {
              return (
                <Col key={item.dateLabel}>
                  <Card>
                    <Card.Header>{item.dateLabel}</Card.Header>
                    <Card.Body>
                      <Card.Text>{item.telop}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </>
  );
};

export default Forecast;
