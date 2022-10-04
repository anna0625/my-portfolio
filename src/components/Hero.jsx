import React from "react";
import PropTypes from "prop-types";

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
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="pt-6">{paragraph}</p>
          <p className="pb-6">{paragraph2}</p>
          <button className="btn btn-primary hover:animate-bounce shadow-md">
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
  paragraph2: "paragraph",
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
