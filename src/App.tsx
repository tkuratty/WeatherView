import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Button, Container, Spinner } from "react-bootstrap";
import GetArea, { Pref } from "./Utils/Area";
import CityViewer from "./CityViewer/CityViewer";
import Home from "./Home";
import "./App.css";

/**
 * Main component of the applicaiton
 */
function App() {
  const [area, setArea] = useState(new Array<Pref>());

  useEffect(() => {
    // didMount
    try {
      GetArea().then((areaData) => {
        setArea(areaData);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (area.length === 0) {
    return (
      <Container fluid>
        <div className="d-flex align-items-center align-items-center justify-content-center p-5">
          <span>
            <Spinner animation="grow" variant="primary" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </span>
        </div>
      </Container>
    );
  } else {
    return (
      <div className="App">
        <Container fluid>
          <BrowserRouter>
            <header className="d-flex">
              <span className="align-middle justify-content-center">
                <Link to="/">
                  <Button variant="primary">Home</Button>
                </Link>
                <Link to="/cityview">
                  <Button variant="primary">City Viewer</Button>
                </Link>
              </span>
            </header>
            <main>
              <Switch>
                <Route exact path="/" children={<Home area={area} />} />
                <Route
                  exact
                  path="/cityview"
                  children={<CityViewer area={area} />}
                />
                <Route render={() => <h2>Not Found</h2>} />
              </Switch>
            </main>
          </BrowserRouter>
          <footer>
            Footer<p>Weather information App</p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default App;
