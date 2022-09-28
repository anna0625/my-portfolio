import React from "react";
import Iframe from "react-iframe";
import { CodepenProjects } from "../data/CodepenData";

export const Codepen = () => {
  const iframes = [];

  CodepenProjects.forEach((props) => {
    iframes.push(
      <div className="bg-secondary my-5 px-5 py-2 rounded-lg mx-5">
        <Iframe
          className="h-96 my-3 w-80 md:w-[80vw] md:h-[50vh] shadow-sm shadow-red-300 rounded-lg"
          scrolling="no"
          title={props.title}
          src={props.src}
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen <a href={props.href}>{props.title}</a> by Anna (
          <a href="https://codepen.io/anna625">@anna625</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </Iframe>
      </div>
    );
  });

  return (
    <div className="flex items-center justify-center flex-wrap">{iframes}</div>
  );
};
