import React from "react";
import { Pref } from "./Utils/Area";
import { Row, Col } from "react-bootstrap";

const Home: React.FC<{ area: Array<Pref> }> = (props) => {
  return (
    <Row>
      <Col sm={4}>City Selector</Col>
      <Col>Weather Information</Col>
    </Row>
  );
};

export default Home;
