import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export const CardWithImg = ({
  id,
  title,
  imgUrl,
  createAt,
  paragraph,
  buttonText,
  buttonText2,
  buttonLink,
  buttonLink2,
  badges,
}) => {
  const badges_list = [];
  badges?.forEach((badge, id) => {
    badges_list.push(
      <div key={id} className="badge-neutral badge">
        {badge}
      </div>
    );
  });

  return (
    <div
      className={
        id % 2 === 0
          ? `card my-3 w-80 bg-primary text-primary-content shadow-lg md:mx-3`
          : `card my-3 w-80 bg-secondary text-secondary-content shadow-lg md:mx-3`
      }
    >
      <figure>
        <a href={buttonLink} target="_blank" rel="noreferrer">
          <img
            src={imgUrl}
            alt={title}
            className="h-64 w-80 object-cover shadow-sm transition delay-75 hover:scale-110 md:w-96"
          />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-accent">{createAt}</div>
        </h2>
        <p className="mb-3">{paragraph}</p>
        <div className="card-actions justify-end">{badges_list}</div>
        <div className="flex flex-row items-center justify-evenly">
          <button
            className={
              id % 2 === 0
                ? `btn mt-3 bg-secondary text-secondary-content hover:-translate-y-1 hover:scale-110 hover:text-primary`
                : `btn mt-3 bg-primary text-primary-content hover:-translate-y-1 hover:scale-110 hover:text-secondary`
            }
          >
            <a href={buttonLink} target="_blank" rel="noreferrer">
              {buttonText}
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="ml-2 inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
          </button>
          <button
            className={
              id % 2 === 0
                ? `btn mt-3 bg-secondary text-secondary-content hover:-translate-y-1 hover:scale-110 hover:text-primary`
                : `btn mt-3 bg-primary text-primary-content hover:-translate-y-1 hover:scale-110 hover:text-secondary`
            }
          >
            <a href={buttonLink2} target="_blank" rel="noreferrer">
              {buttonText2}
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

CardWithImg.defaultProps = {
  id: 0,
  title: "TITLE",
  imgUrl:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
  paragraph: "PARAGRAPH",
  buttonText: "BUTTON",
  buttonText2: "BUTTON2",
  buttonLink: "#",
  buttonLink2: "#",
  badges: [],
};

CardWithImg.propTypes = {
  id: PropTypes.any,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  createAt: PropTypes.string,
  paragraph: PropTypes.string,
  buttonText: PropTypes.string,
  buttonText2: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLink2: PropTypes.string,
  badges: PropTypes.array,
};
