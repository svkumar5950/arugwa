import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Details from "./Details";

const Item = props => {
  // State for Displaying Description

  let [show, setShow] = useState(false);

  // Handles Click Event

  let handleClick = () => {
    setShow(!show);
  };

  const {
    item: { heading, description, src, param, price },
    updateCount
  } = props;
  return (
    <CSSTransition in={true} appear={true} timeout={400} classNames="items">
      <div className="app-itemComponent">
        <img src={src} alt={`${heading}...`} />
        <h3>{heading}</h3>
        <p>{description}</p>
        <button className="btn" onClick={() => handleClick()}>
          Details
        </button>
        {show && (
          <div className="item-details">
            <Details
              heading={heading}
              desc={description}
              src={src}
              param={param}
              price={price}
              updateCount={updateCount}
            />
          </div>
        )}
      </div>
    </CSSTransition>
  );
};

export default Item;
