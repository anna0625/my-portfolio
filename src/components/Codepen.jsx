import React from "react";
import { CodepenProjects } from "../data/CodepenData";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();
//data-aos="zoom-in"

export const Codepen = () => {
  const iframes = [];

  CodepenProjects.forEach((project, id) => {
    iframes.push(
      <div className="group mx-auto mb-5" key={id}>
        <h2 className="md:hover:animate-bounce">{project.title}</h2>
        <div className="my-5 mx-5 rounded-xl bg-secondary px-5 py-2">
          <iframe
            className="my-3 h-96 w-80 rounded-md shadow-md shadow-red-100 md:h-[70vh] md:w-[70vw]"
            scrolling="no"
            title={project.title}
            src={project.src}
            loading="lazy"
            frameBorder="no"
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
    <>
      <div className="flex flex-wrap items-center justify-center">
        {iframes}
      </div>
    </>
  );
};
