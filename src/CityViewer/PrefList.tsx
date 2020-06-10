import React, { useState, useEffect } from "react";
import { GetAreaData, Pref, City } from "./Area";
import { ListGroup, Dropdown, Form } from "react-bootstrap";
import ListPrefView from "./ListPrefView";

const PrefList: React.FC<{
  area: Array<Pref>;
  setPrefName: (prefName: string) => void;
}> = (props) => {
  const [listSelected, setListSelected] = useState(true);

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
        {listSelected && (
          <ListPrefView setPrefName={props.setPrefName} area={props.area} />
        )}
        {!listSelected && <DropPrefView />}
      </div>
    </div>
  );
};

export default PrefList;
