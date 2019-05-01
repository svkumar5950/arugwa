import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

const Cart = props => {
  let total = 0;
  props.cart.map(item => {
    return (total += item.total);
  });

  return (
    <CSSTransition in={true} appear={true} timeout={400} classNames="pages">
      <div className="app-cart">
        {props.cart.length === 0 ? (
          <div className="cart-empty">
            <h3>Your Cart Is Empty</h3>
            <p>Continue Shopping....</p>
            <button className="btn">
              <Link to="/">Home</Link>
            </button>
          </div>
        ) : (
          props.cart.map((item, i) => {
            return (
              <div className="cart-items" key={i}>
                <img src={item.img} alt="Electronics..." />
                <h3>{item.head}</h3>
                <p>
                  <span>Price per each unit</span> {item.price} $
                </p>
                <span>Quantity :{item.count}</span>
              </div>
            );
          })
        )}
        {props.cart.length > 0 && (
          <div className="cart-total">
            <h3> Total Amount</h3>
            <p>{total} $</p>
          </div>
        )}
      </div>
    </CSSTransition>
  );
};

export default Cart;
