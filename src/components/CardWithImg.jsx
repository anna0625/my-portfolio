import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardWithImg = ({
  id,
  title,
  imgURL,
  paragraph,
  buttonText,
  buttonLink,
  badges,
}) => {
  const badges_list = [];
  badges?.forEach((badge) => {
    badges_list.push(<div className="badge badge-neutral">{badge}</div>);
  });

  return (
    <div
      className={
        id % 2 === 0
          ? `bg-primary card w-80 md:w-96 text-primary-content my-3 md:mx-3`
          : `bg-secondary card w-80 md:w-96 text-secondary-content my-3 md:mx-3`
      }
    >
      <figure>
        <img src={imgURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-accent">NEW</div>
        </h2>
        <p className="mb-3">{paragraph}</p>
        <div className="card-actions justify-end">{badges_list}</div>
        <button
          className={
            id % 2 === 0
              ? `btn hover:animate-bounce mt-3 bg-secondary text-secondary-content hover:text-primary`
              : `btn hover:animate-bounce mt-3 bg-primary text-primary-content hover:text-secondary`
          }
        >
          <Link to={buttonLink}>{buttonText}</Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 inline ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

CardWithImg.defaultProps = {
  id: 0,
  title: "TITLE",
  imgURL:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
  paragraph: "PARAGRAPH",
  buttonText: "BUTTON",
  buttonLink: "",
  badges: [],
};

CardWithImg.propTypes = {
  id: PropTypes.any,
  imgURL: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  badges: PropTypes.array,
};
