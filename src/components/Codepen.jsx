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
      <div className="group mb-5 mx-auto" key={id}>
        <h1 className="text-center hover:animate-bounce">{project.title}</h1>
        <div className="bg-secondary my-5 px-5 py-2 rounded-lg mx-5 hover:scale-110">
          <iframe
            className="h-96 my-3 w-80 md:w-[70vw] md:h-[70vh] shadow-md shadow-red-100 rounded-lg"
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
    <>
      <div className="flex items-center justify-center flex-wrap">
        {iframes}
      </div>
    </>
  );
};
