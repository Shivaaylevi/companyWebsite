import React from "react";
import "./Home.css";
import ParticlesComponent from "../Particles/Particles";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="canvas-container">
        <ParticlesComponent id="particle-canvas" />
        <div className="particle-content">
          <h1>Development</h1>
          <br />
          <h1>Industrial Automation </h1>
          <br />
          <h1>Education.</h1>
          <br />
          <h2 className="hh">Next Generation Embedded World </h2>
          <br />
          <br />
          <Link to="/contact-us" className="nav-links backgrounds">
            {" "}
            Let's Talk
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
