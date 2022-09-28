import React from "react";
import { Codepen } from "../components/Codepen";

const MiniProjects = () => {
  return (
    <main className="mt-32 overflow-x-hidden">
      <h1 className="text-center mb-2 text-xl font-medium">
        50 mini projects with HTML/CSS & JS
      </h1>
      <p className="text-center mb-10 text-md font-light">
        Learnt from Brady Traversy on Udemy
      </p>
      <section className="mx-auto container min-h-screen">
        <Codepen />
      </section>
    </main>
  );
};

export default MiniProjects;
