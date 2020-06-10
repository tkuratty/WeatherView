import React, { useState, useEffect } from "react";
import { GetAreaData, Pref, City } from "./Area";
import { ListGroup, ListGroupItemProps, ListGroupProps } from "react-bootstrap";

const PrefList: React.FC<{ area: Array<Pref> }> = (props) => {
  const itemClicked = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event.target instanceof HTMLButtonElement) {
      const b: HTMLButtonElement = event.target;
      console.log(b.firstChild);
    }
  };
  return (
    <div>
      <p>Pref list</p>
      <div>
        <ListGroup>
          {props.area.map((pref: Pref) => {
            return (
              <ListGroup.Item action onClick={itemClicked} key={pref.name}>
                {pref.name}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default PrefList;
