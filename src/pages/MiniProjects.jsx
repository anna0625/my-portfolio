import React, { useState } from "react";
import { Codepen } from "../components/Codepen";
import { Spinner } from "../components/Spinner";
import { FaArrowCircleUp } from "react-icons/fa";
import { useScrollToTop } from "../hooks/useScrollToTop";

const MiniProjects = () => {
  const [loading, setLoading] = useState(true);
  const { showScroll, scrollTop } = useScrollToTop({ pageYOffset: 200 });

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
            ? `mt-32 overflow-x-hidden container scroll-smooth relative`
            : `hidden`
        }
      >
        <h1>50 mini projects with HTML/CSS & JS</h1>
        <p className="text-center mb-10">Learnt from Brady Traversy on Udemy</p>
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
