import React from "react";
import PropTypes from "prop-types";

export const Hero = ({ title, paragraph, buttonText }) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{paragraph}</p>
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  title: "Junior Web Developer",
  paragraph: "Create elegant webpages with HTML/CSS/JS and React.js",
  buttonText: "My Projects",
};

Hero.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonText: PropTypes.string,
};
