import React from 'react'

function Landing() {
    return (
        <div className="landing-main-content">
        <div className="landing-content-section">
          <h1 className="landing-heading">
            Build Light, Deploy Faster with
            <span style={{color:"#FEFE00"}}> Butter UI </span>
          </h1>
          <h3 style={{margin: "1rem 6rem"}} className="landing-description">
            So, You know Swans. They are birds, right! But what makes them special is their ability to separate milk from water. The swan if offered a mixture of milk and water, is said to be able to drink the milk alone. Same way this UI component will give you all the CSS elements, without being heavy on your memory.        
          </h3>
          <div className="flex">
            <a
              className="primary-button button-xtra-large button-link"
            >
              Explore Components
            </a>
          </div>
        </div>
        </div>
  
    )
}

export default Landing
