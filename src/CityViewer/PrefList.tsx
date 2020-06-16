import React, { useState } from "react";
import { Pref } from "../Utils/Area";
import { Form } from "react-bootstrap";
import ListPrefView from "./ListPrefView";
import DropPrefView from "./DropPrefView";

/**
 * Prefecture list
 * @param props
 */
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
      <div className="city-list-info-common">
        {listSelected && (
          <div className="overflow-auto" style={{ height: "inherit" }}>
            <ListPrefView setPrefName={props.setPrefName} area={props.area} />
          </div>
        )}
        {!listSelected && (
          <div className="overflow-auto" style={{ height: "inherit" }}>
            <DropPrefView setPrefName={props.setPrefName} area={props.area} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrefList;
