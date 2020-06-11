import React, { useState } from "react";
import { Pref, City, emptyCity } from "./Utils/Area";
import { Row, Col } from "react-bootstrap";
import CitySelector from "./CitySelector/CitySelector";

const Home: React.FC<{ area: Array<Pref> }> = (props) => {
  const [selectedCity, setSelectedCity] = useState(emptyCity);

  const setCity = (cityId: string) => {
    const allCities = props.area.flatMap((value) => {
      return value.cities;
    });
    console.log(allCities);
    const city = allCities.find((value) => value.id === cityId);
    if (city !== undefined) setSelectedCity(city);
  };

  return (
    <Row>
      <Col sm={4} className="overflow-auto" style={{ height: "300px" }}>
        <CitySelector area={props.area} setCity={setCity} />
      </Col>
      <Col>
        Weather Information
        {selectedCity.name !== "" && (
          <div>
            <li>{selectedCity.id}</li>
            <li>{selectedCity.name}</li>
            <li>{selectedCity.source}</li>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Home;
