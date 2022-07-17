import React from "react";

const Resume = () => {
  return (
    <div>
      <div className="container">
        <h1>Resume</h1>
        <p>A short blurb about me.</p>
        <h2>Credentials</h2>
        <ul>
          <li>
            <h3>Certified Scrum Master</h3>
            <p>In Life and on the field!</p>
          </li>
          <li>
            <h3>Completed Javascript full-stack boot camp.</h3>
            <p>Six month course on the MERN stack.</p>
          </li>
          <li>
            <h3>Certified Fork Lift Operator</h3>
            <p>
              I can not only drive a Fork-Lift, but i can also use it to pick
              stuff up and then put stuff down.
            </p>
          </li>
        </ul>
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Head of Fabrication and Machining</h3>
            <p>Created custom high end furniture for a top 1% etsy merchant.</p>
          </li>
          <li>
            <h3>Crypto Mining</h3>
            <p>
              I create Cryptocurrency mining solutions for various levels of
              investment strategies.
            </p>
          </li>
          <li>
            <h3>Technology Consultant for Gerarden Fabrication</h3>
            <p>
              Working to create custom solutions for a highly specialized
              environment.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
