import React, { useEffect } from "react";
import { CardWithImg } from "../components/CardWithImg";
import { projectSection } from "../data/ReactProjectData";
import { FaArrowCircleUp } from "react-icons/fa";
import { useScrollToTop } from "../hooks/useScrollToTop";

const ReactProjects = () => {
  const { showScroll, scrollTop } = useScrollToTop({ pageYOffset: 200 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = [];
  projectSection.forEach((card, id) => {
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
    <main className="container mx-auto mt-32">
      <h1>Project Review</h1>
      <div className="mx-auto flex justify-center items-center flex-col md:flex-row max-w-5xl md:items-stretch">
        {cards}
      </div>
      <FaArrowCircleUp
        className="fixed bottom-5 right-4 z-50 h-10 w-10 hover:scale-125 transition hover:-translate-y-1 scrolltotop"
        onClick={scrollTop}
        style={{ display: showScroll ? "block" : "none" }}
      />
    </main>
  );
};

export default ReactProjects;
