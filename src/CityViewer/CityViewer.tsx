import React, { useState, useEffect } from "react";
import { Pref, City } from "./Area";
import PrefList from "./PrefList";
import { Row, Col } from "react-bootstrap";
import "./CityViewer.css";
import ListCityView from "./ListCityView";

const CityViewer: React.FC<{ area: Array<Pref> }> = (props) => {
  const [selectedPref, setSelectedPref] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const setPref = (prefName: string) => {
    setSelectedPref(prefName);
  };
  const setCity = (cityName: string) => {
    setSelectedCity(cityName);
  };
  const getCities = (): Array<City> => {
    const pref = props.area.find((value) => value.name === selectedPref);
    return pref === undefined ? new Array<City>() : pref.cities;
  };

  return (
    <>
      <p>City information</p>
      <div>
        City data is read from <br />
        <a href="http://weather.livedoor.com/forecast/rss/primary_area.xml">
          http://weather.livedoor.com/forecast/rss/primary_area.xml
        </a>
      </div>
      <div>
        <Row>
          <Col>
            <PrefList area={props.area} setPrefName={setPref} />
          </Col>
          <Col>
            <p>City List here</p>
            <p>{selectedPref}</p>
            <ListCityView cities={getCities()} setCity={setCity} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CityViewer;
