import React, { useState, useEffect } from "react";
import { ListGroup, Accordion, Card, Button } from "react-bootstrap";
import { Pref, City } from "../Utils/Area";

const CitySelector: React.FC<{
  area: Array<Pref>;
  setCity: (cityId: string) => void;
}> = (props) => {
  /**
   * List item clicked
   * @param event
   */
  const itemClicked = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    //console.log(event.target);
    if (event.target instanceof HTMLButtonElement) {
      const b: HTMLButtonElement = event.target;
      if (!b) return;
      else {
        props.setCity(b.id);
      }
    }
  };

  return (
    <>
      <Accordion>
        {props.area.map((pref: Pref) => {
          return (
            <Card key={pref.name}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={pref.name}
                  id={pref.name}
                >
                  {pref.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={pref.name}>
                <Card.Body>
                  <ListGroup>
                    {pref.cities.map((city: City) => {
                      return (
                        <ListGroup.Item
                          action
                          onClick={itemClicked}
                          key={city.id}
                          id={city.id}
                        >
                          {city.name}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </>
  );
};

export default CitySelector;
