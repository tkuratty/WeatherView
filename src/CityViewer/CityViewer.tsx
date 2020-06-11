import React, { useState, useEffect } from "react";
import { GetAreaData, Pref, City } from "./Area";
import xml2js from "xml2js";
import PrefList from "./PrefList";
import { Row, Col } from "react-bootstrap";
import "./CityViewer.css";

const CityViewer: React.FC = () => {
  const [area, setArea] = useState(new Array<Pref>());
  const [selectedPref, setSelectedPref] = useState("");
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

  return (
    <>
      <p>City information</p>
      <div>
        <Row>
          <Col>
            <PrefList area={area} setPrefName={setPref} />
          </Col>
          <Col>
            <p>City List here</p>
            <p>{selectedPref}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CityViewer;
