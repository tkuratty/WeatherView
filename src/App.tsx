import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
//import "./App.css";
import CityViewer from "./CityViewer/CityViewer";
import Home from "./Home";

function App() {
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
            <Route exact path="/" children={<Home />} />
            <Route exact path="/cityview" children={<CityViewer />} />
            <Route render={() => <h2>Not Found</h2>} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
