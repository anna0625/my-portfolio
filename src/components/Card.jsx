import React from "react";
import PropTypes from "prop-types";

export const Card = ({ id, title, paragraph, buttonText }) => {
  return (
    <div
      className={
        id % 2 === 0
          ? `bg-primary card w-80 md:w-96 text-primary-content my-2 md:mx-2`
          : `bg-secondary card w-80 md:w-96 text-primary-content my-2 md:mx-2`
      }
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="min-h-12">{paragraph}</p>
        <div className="card-actions justify-end">
          <button className="btn">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  id: 0,
  title: "Junior Web Developer",
  paragraph: "Create elegant webpages with HTML/CSS/JS and React.js",
  buttonText: "My Projects",
};

Card.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonText: PropTypes.string,
};
