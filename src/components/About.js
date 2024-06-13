import React from "react";
import './model.css'

const About = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="modal">
          <div className="modal-content">
            <h3>I am model</h3>
          </div>
        </div> 
      </div>
      <div
        className="ui raised very padded text container segments"
        style={{ marginTop: "80px" }}
      >
        <h3 className="ui header">About</h3>
        <p>
          Semantic empowers designers and developers by creating a shared
          vocabulary for UI. - Simple. Fast. Reliable. Content delivery at its
          finest. cdnjs is a free ...You've visited this page 2 times. Last
          visit: 29/4/23Semantic empowers designers and developers by creating a shared
          vocabulary for UI. - Simple. Fast. Reliable.
        </p>
      </div>
    </div>
  );
};

export default About;
