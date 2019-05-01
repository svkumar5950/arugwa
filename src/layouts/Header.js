import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  let count = 0;
  props.cart.map(item => {
    return (count += item.count);
  });
  return (
    <div className="app-header">
      <div className="app-brand">
        <h1>
          <a href="/">
            <i className="fab fa-atlassian" />
            rugwa
          </a>
        </h1>
      </div>
      <div className="app-cart">
        <div className="cart-btn">
          <Link to="/cart">
            <i className="fas fa-shopping-cart" />
            <span>{count}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
