import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <CSSTransition in={true} appear={true} timeout={400} classNames="pages">
      <div className="app-home-component">
        <div className="home-content">
          <img src="./assets/home.jpg" alt="Laptops..." />
          <p> Solid-state drive (SSD) options: 128GB, 256GB, 512GB, or 1TB</p>
        </div>
        <div className="home-description">
          <h2>Surfaces</h2>
          <p>
            Surface Pro 6 123 Ultra-light and versatile. Get productive your way
            with new Surface Pro 6 — now faster than ever with the latest 8th
            Generation Intel® Core™ processor and the full Windows 10 Home
            experience.
          </p>
          <h3>Starting from $800</h3>
          <button className="btn">
            <Link to="/laptops">
              <i className="fas fa-shopping-basket" />
            </Link>
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Home;
