import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import xml2js from "xml2js";
import { Button, Container, Spinner } from "react-bootstrap";
import { GetAreaData, Pref } from "./Utils/Area";
import CityViewer from "./CityViewer/CityViewer";
import Home from "./Home";

function App() {
  const [area, setArea] = useState(new Array<Pref>());
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

  if (area.length === 0) {
    return (
      <Container fluid>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <div className="App">
          <BrowserRouter>
            <div>
              <Link to="/">
                <Button variant="primary">Home</Button>
              </Link>
              <Link to="/cityview">
                <Button variant="primary">City Viewer</Button>
              </Link>
            </div>
            <hr />
            <Switch>
              <Route exact path="/" children={<Home area={area} />} />
              <Route
                exact
                path="/cityview"
                children={<CityViewer area={area} />}
              />
              <Route render={() => <h2>Not Found</h2>} />
            </Switch>
          </BrowserRouter>
        </div>
      </Container>
    );
  }
}

export default App;
