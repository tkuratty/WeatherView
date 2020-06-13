import React from "react";
import { Dropdown } from "react-bootstrap";
import { Pref } from "../Utils/Area";

const DropPrefView: React.FC<{
  area: Array<Pref>;
  setPrefName: (prefName: string) => void;
}> = (props) => {
  const itemClicked = (event: any) => {
    console.log(event.target);
    if (event.target instanceof HTMLAnchorElement) {
      const a: HTMLAnchorElement = event.target;
      if (!a.firstChild || !a.firstChild.nodeValue) return;
      else props.setPrefName(a.firstChild.nodeValue);
    }
  };

  return (
    <>
      <Dropdown style={{ height: "inherit" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Pref
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {props.area.map((pref: Pref) => {
            return (
              <Dropdown.Item onClick={itemClicked} key={pref.name}>
                {pref.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropPrefView;
