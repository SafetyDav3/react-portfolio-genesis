import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div>
      /* Display project cards */
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Project />
            <Project />
          </div>
          <div className="col-md-4">
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
