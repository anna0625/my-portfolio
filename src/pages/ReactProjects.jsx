import React, { useEffect, useState } from "react";
import { CardWithImg } from "../components/CardWithImg";
import { projectSection } from "../data/ReactProjectData";
import { FaArrowCircleUp } from "react-icons/fa";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Spinner } from "../components/Spinner";

const ReactProjects = () => {
  const [loading, setLoading] = useState(true);
  const { showScroll, scrollTop } = useScrollToTop({ pageYOffset: 200 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // deal with the deplay of fetching imgUrl
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  const cards = [];
  projectSection.forEach((card, id) => {
    // Will apply useContect for props
    cards.push(
      <CardWithImg
        key={id}
        id={id}
        title={card.title}
        imgUrl={card.imgUrl}
        paragraph={card.paragraph}
        buttonText={card.buttonText}
        buttonText2={card.buttonText2}
        buttonLink={card.buttonLink}
        buttonLink2={card.buttonLink2}
        badges={card.badges}
      />
    );
  });
  return (
    <>
      <main className={!loading ? "container mx-auto mt-32" : "hidden"}>
        <h1>Project Review</h1>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center md:flex-row md:flex-wrap md:items-stretch">
          {cards}
        </div>
        <FaArrowCircleUp
          className="scrolltotop fixed bottom-5 right-4 z-50 h-10 w-10 transition hover:-translate-y-1 hover:scale-125"
          onClick={scrollTop}
          style={{ display: showScroll ? "block" : "none" }}
        />
      </main>
      {loading ? <Spinner /> : null}
    </>
  );
};

export default ReactProjects;
