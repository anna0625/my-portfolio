import React, { useState, useEffect } from "react";
import { Codepen } from "../components/Codepen";
import { Spinner } from "../components/Spinner";
import { FaArrowCircleUp } from "react-icons/fa";
import { useScrollToTop } from "../hooks/useScrollToTop";

const MiniProjects = () => {
  const [loading, setLoading] = useState(true);
  const { showScroll, scrollTop } = useScrollToTop({ pageYOffset: 200 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);

  // deal with the delay of embedding codepens
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <>
      <main
        className={
          !loading ? `mt-32 overflow-x-hidden container relative` : `hidden`
        }
      >
        <h1 className="mb-2">50 mini projects with HTML/CSS & JS</h1>
        <h3 className="text-center mb-10">
          Learnt from Brad Traversy on Udemy
        </h3>
        <section className="mx-auto container min-h-screen">
          <Codepen />
        </section>
        <FaArrowCircleUp
          className="fixed bottom-5 right-4 z-50 h-10 w-10 hover:scale-125 transition hover:-translate-y-1 scrolltotop"
          onClick={scrollTop}
          style={{ display: showScroll ? "block" : "none" }}
        />
      </main>
      {loading ? <Spinner /> : null}
    </>
  );
};

export default MiniProjects;
