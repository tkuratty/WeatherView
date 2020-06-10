import React, { useState, useEffect } from "react";
import { GetAreaData, Pref, City } from "./Area";
import { ListGroup, Dropdown, Form } from "react-bootstrap";

const PrefList: React.FC<{
  area: Array<Pref>;
  setPrefName: (prefName: string) => void;
}> = (props) => {
  const [listSelected, setListSelected] = useState(true);

  /**
   * List item clicked
   * @param event
   */
  const itemClicked = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event.target instanceof HTMLButtonElement) {
      const b: HTMLButtonElement = event.target;
      if (!b.firstChild || !b.firstChild.nodeValue) return;
      else props.setPrefName(b.firstChild.nodeValue);
    }
  };

  const itemClicked2 = (event: any) => {
    console.log(event.target);
    if (event.target instanceof HTMLAnchorElement) {
      const a: HTMLAnchorElement = event.target;
      if (!a.firstChild || !a.firstChild.nodeValue) return;
      else props.setPrefName(a.firstChild.nodeValue);
    }
  };

  const radioClicked = (event: any) => {
    console.log(event.target);
    if (event.target instanceof HTMLInputElement) {
      const elm: HTMLInputElement = event.target;
      if (elm.id === "radio-list") {
        setListSelected(true);
      } else {
        setListSelected(false);
      }
    }
  };

  const ListPrefView: React.FC = () => {
    return (
      <ListGroup>
        {props.area.map((pref: Pref) => {
          return (
            <ListGroup.Item action onClick={itemClicked} key={pref.name}>
              {pref.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  };

  const DropPrefView: React.FC = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Pref
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {props.area.map((pref: Pref) => {
            return (
              <Dropdown.Item onClick={itemClicked2} key={pref.name}>
                {pref.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <div>
      <p>Pref list</p>
      <Form>
        <Form.Check
          type="radio"
          label="List"
          inline
          onClick={radioClicked}
          id="radio-list"
          checked={listSelected}
        />
        <Form.Check
          type="radio"
          label="Drop"
          inline
          onClick={radioClicked}
          id="radio-drop"
          checked={!listSelected}
        />
      </Form>
      <div>
        {listSelected && <ListPrefView />}
        {!listSelected && <DropPrefView />}
      </div>
    </div>
  );
};

export default PrefList;
