import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = ({ id, title, paragraph, buttonText, buttonLink }) => {
  return (
    <div
      className={
        id % 2 === 0
          ? `card my-2 w-80 bg-primary text-primary-content shadow-md md:mx-2 md:w-96`
          : `card my-2 w-80 bg-secondary text-secondary-content shadow-md md:mx-2 md:w-96`
      }
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="min-h-12">{paragraph}</p>
        <div className="card-actions justify-end">
          <button
            className={
              id % 2 === 0
                ? `btn hover:animate-bounce`
                : `btn hover:animate-bounce`
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
  buttonLink: "/",
};

Card.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};
