import React, { useState, useEffect } from "react";
import { Pref, City } from "./Area";
import { Form } from "react-bootstrap";
import ListPrefView from "./ListPrefView";
import DropPrefView from "./DropPrefView";

const PrefList: React.FC<{
  area: Array<Pref>;
  setPrefName: (prefName: string) => void;
}> = (props) => {
  const [listSelected, setListSelected] = useState(true);

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
        {!listSelected && (
          <DropPrefView setPrefName={props.setPrefName} area={props.area} />
        )}
      </div>
    </div>
  );
};

export default PrefList;
