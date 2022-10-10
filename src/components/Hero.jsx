import React from "react";
import PropTypes from "prop-types";
import "../index.css";

export const Hero = ({
  title,
  paragraph,
  paragraph2,
  buttonText,
  buttonLink,
  extend,
}) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-3 text-5xl font-bold">{title}</h1>
          <p className="pt-6">{paragraph}</p>
          <p className="mb-3 pb-6">{paragraph2}</p>
          <button className="btn btn-primary shadow-md hover:animate-bounce">
            <a
              href={buttonLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              {buttonText}
              {extend}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  title: "title",
  paragraph: "paragraph",
  paragraph2: "",
  buttonText: "button text",
  buttonLink: "#",
  extend: null,
};

Hero.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  paragraph2: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  extend: PropTypes.any,
};
