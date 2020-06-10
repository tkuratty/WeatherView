import React, { useState, useEffect } from "react";
import { GetAreaData, Pref, City } from "./Area";
import xml2js from "xml2js";
import PrefList from "./PrefList";

const CityViewer: React.FC = () => {
  const [area, setArea] = useState(new Array<Pref>());
  const xmlUrl: string = "/forecast/rss/primary_area.xml";
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

  return (
    <div>
      <p>City information</p>
      <div>
        <PrefList area={area} />
      </div>
      {area.map((pref: Pref) => {
        const cities = pref.cities.map((city: City) => {
          return city.name;
        });
        return (
          <li key={pref.name}>
            {pref.name}(
            {cities.map((name: string): string => {
              return name + ",";
            })}
            )
          </li>
        );
      })}
    </div>
  );
};

export default CityViewer;
