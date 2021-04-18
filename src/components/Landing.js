import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-main-content">
      <div className="landing-content-section">
        <h1 className="landing-heading">Build Light, Deploy Faster with</h1>
        <span
          style={{
            display: "block",
            width: "12rem",
            fontSize: "2rem",
            fontWeight: "800",
            height: "4rem",
            textAlign: "center",
            backgroundColor: "#FFFF00",
            margin: " 0 0.5rem",
            padding: "0 1rem",
            borderRadius: "1rem",
          }}
        >
          Butter UI
        </span>
        <h3 style={{ margin: "1rem 6rem" }} className="landing-description">
          Just import in your CSS file and spread it over HTML to create quick
          components
        </h3>
        <Link className="link" to="/components">
          {" "}
          <button
            className="primary-button button-xtra-large button-link"
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              fontSize: "1rem",
              fontFamily: "Montserrat",
              width: "15rem",
              cursor:"pointer",
              fontWeight:"800"
            }}
          >
            Explore Components
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
