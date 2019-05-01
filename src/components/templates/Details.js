import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

const Details = props => {
  // State for Button
  let [show, setShow] = useState(true);

  // State for Cart Count

  let [count, setCount] = useState(0);

  // Handlle Close Button Event

  let handleClose = () => {
    setShow(!show);
  };

  // Handle Click

  let handleClick = item => {
    item === "plus" && setCount((count += 1));
    item === "minus" && count > 0 && setCount((count -= 1));
  };

  // Handles Submit

  let handleSubmit = () => {
    count >= 1 &&
      props.updateCount({
        count,
        head: props.heading,
        img: props.src,
        price: props.price,
        total: count * props.price
      });
  };
  return (
    <CSSTransition in={true} appear={true} timeout={400} classNames="details">
      <div
        className={show ? "app-deatilComponent" : "app-deatilComponent close"}
      >
        <div className="details-close-btn">
          <button className="btn" onClick={handleClose}>
            <Link to={props.param}>
              <i className="far fa-times-circle" />
            </Link>
          </button>
        </div>
        <div className="details-items">
          <img src={props.src} alt={`${props.heading}...`} />
          <h3>{props.heading}</h3>
          <p>{props.desc}</p>
          <h4>{props.price} $</h4>
        </div>
        <div className="item-cart">
          <button className="btn" onClick={handleClick.bind(this, "minus")}>
            <i className="fas fa-minus" />
          </button>
          <button className="btn" onClick={handleSubmit}>
            Add to Cart <span>{count}</span>
          </button>
          <button className="btn" onClick={handleClick.bind(this, "plus")}>
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Details;
