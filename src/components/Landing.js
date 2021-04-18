import React from 'react'

function Landing() {
    return (
        <div className="landing-main-content">
        <div className="landing-content-section">
          <h1 className="landing-heading">
            Build Light, Deploy Faster with
          </h1>
          <span style={{display:"block", width:"12rem", fontSize:"2rem", fontWeight:"800", height:"4rem", textAlign:"center", backgroundColor:"#FFFF00", margin:" 0 0.5rem", padding:"0 1rem", borderRadius:"1rem"}}>Butter UI</span>
          <h3 style={{margin: "1rem 6rem"}} className="landing-description">
            Just import in your CSS file and spread it over HTML to create quick components
          </h3>
          <div className="flex">
            <button
              className="primary-button button-xtra-large button-link"
            >
              Explore Components
            </button>
          </div>
        </div>
        </div>
  
    )
}

export default Landing
