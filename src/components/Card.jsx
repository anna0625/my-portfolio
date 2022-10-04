import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = ({ id, title, paragraph, buttonText, buttonLink }) => {
  return (
    <div
      className={
        id % 2 === 0
          ? `bg-primary card w-80 md:w-96 text-primary-content my-2 md:mx-2 shadow-md`
          : `bg-secondary card w-80 md:w-96 text-primary-content my-2 md:mx-2 shadow-md`
      }
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="min-h-12">{paragraph}</p>
        <div className="card-actions justify-end">
          <button
            className={
              id % 2 === 0
                ? `btn hover:animate-bounce bg-secondary text-secondary-content`
                : `btn hover:animate-bounce `
            }
          >
            <Link to={buttonLink}>{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  id: 0,
  title: "TITLE",
  paragraph: "PARAGRAPH",
  buttonText: "BUTTON",
};

Card.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonText: PropTypes.string,
};
