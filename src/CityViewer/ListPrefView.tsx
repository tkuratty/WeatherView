import React from "react";
import { ListGroup } from "react-bootstrap";
import { Pref } from "../Utils/Area";

const ListPrefView: React.FC<{
  area: Array<Pref>;
  setPrefName: (prefName: string) => void;
}> = (props) => {
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

  return (
    <>
      <ListGroup>
        {props.area.map((pref: Pref) => {
          return (
            <ListGroup.Item action onClick={itemClicked} key={pref.name}>
              {pref.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default ListPrefView;
