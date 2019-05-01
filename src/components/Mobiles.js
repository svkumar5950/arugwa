import React from "react";
import { CSSTransition } from "react-transition-group";

import Item from "./templates/Item";
const Mobiles = props => {
  return (
    <CSSTransition in={true} appear={true} timeout={400} classNames="pages">
      <div className="app-mobileComponent">
        {props.data.map(item => {
          return (
            <Item key={item.id} item={item} updateCount={props.updateCount} />
          );
        })}
      </div>
    </CSSTransition>
  );
};

export default Mobiles;
