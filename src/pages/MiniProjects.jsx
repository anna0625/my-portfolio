import React, { useEffect, useState } from "react";
import { Codepen } from "../components/Codepen";
import { Spinner } from "../components/Spinner";

const MiniProjects = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  return (
    <>
      <main
        className={
          !loading
            ? `mt-32 overflow-x-hidden container scroll-smooth`
            : `hidden`
        }
      >
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
      {loading ? <Spinner /> : null}
    </>
  );
};

export default MiniProjects;
