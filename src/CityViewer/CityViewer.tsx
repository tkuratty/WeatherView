import React, { useState, useEffect } from "react";
import { GetAreaData, Pref, City } from "./Area";
import xml2js from "xml2js";
import PrefList from "./PrefList";
import ListSityView from "./ListCityView";
import { Row, Col } from "react-bootstrap";
import "./CityViewer.css";
import ListCityView from "./ListCityView";

const CityViewer: React.FC = () => {
  const [area, setArea] = useState(new Array<Pref>());
  const [selectedPref, setSelectedPref] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const xmlUrl = "/forecast/rss/primary_area.xml";

  useEffect(() => {
    // didMount
    fetch(xmlUrl)
      .then((res) => res.text())
      .then((xml) => {
        const parser = new xml2js.Parser();
        parser.parseString(xml, (err: Error, result: any) => {
          if (err === null) {
            //console.log(result.rss.channel[0]["ldWeather:source"][0].pref);
            setArea(
              GetAreaData(result.rss.channel[0]["ldWeather:source"][0].pref)
            );
          } else {
            console.log(err);
          }
        });
      });
  }, []);

  const setPref = (prefName: string) => {
    setSelectedPref(prefName);
  };
  const setCity = (cityName: string) => {
    setSelectedCity(cityName);
  };

  const getCities = (): Array<City> => {
    const pref = area.find((value) => value.name === selectedPref);
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
            <PrefList area={area} setPrefName={setPref} />
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
