import React from "react";
import { CodepenProjects } from "../data/CodepenData";

export const Codepen = () => {
  const iframes = [];

  CodepenProjects.forEach((project, id) => {
    iframes.push(
      <div className="group mb-5" key={id}>
        <h1 className="text-center">{project.title}</h1>
        <div className="bg-secondary my-5 px-5 py-2 rounded-lg mx-5">
          <iframe
            className="h-96 my-3 w-80 md:w-[80vw] md:h-[50vh] shadow-md shadow-red-100 rounded-lg"
            scrolling="no"
            title={project.title}
            src={project.src}
            framborder="no"
          >
            See the Pen <a href={project.href}>{project.title}</a> by Anna (
            <a href="https://codepen.io/anna625">@anna625</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      </div>
    );
  });

  return (
    <div className="flex items-center justify-center flex-wrap">{iframes}</div>
  );
};
