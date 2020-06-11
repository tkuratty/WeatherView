import React, { useState, useEffect } from "react";
import { ListGroup, Modal, Button } from "react-bootstrap";
import { City } from "./Area";

const ListCityView: React.FC<{
  cities: Array<City>;
  setCity: (cityName: string) => void;
}> = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const emptyCity: City = { id: "", name: "", source: "" };
  const [selectedCity, setSelectedCity] = useState(emptyCity);

  /**
   * List item clicked
   * @param event
   */
  const itemClicked = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event.target instanceof HTMLButtonElement) {
      handleShow();
      const b: HTMLButtonElement = event.target;
      if (!b) return;
      else {
        props.setCity(b.id);
        const city = props.cities.find((value) => value.id === b.id);
        if (city !== undefined) setSelectedCity(city);
      }
    }
  };

  return (
    <>
      <ListGroup>
        {props.cities.map((city: City) => {
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>City information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          id: {selectedCity.id}
          <br />
          name: {selectedCity.name}
          <br />
          source:{selectedCity.source}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListCityView;
