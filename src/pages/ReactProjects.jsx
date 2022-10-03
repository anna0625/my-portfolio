import React from "react";
import { CardWithImg } from "../components/CardWithImg";
import { projectSection } from "../data/ReactProjectData";

const ReactProjects = () => {
  const cards = [];
  projectSection.forEach((card, id) => {
    cards.push(
      <CardWithImg
        key={id}
        id={id}
        title={card.title}
        paragraph={card.paragraph}
        buttonLink={card.buttonLink}
        buttonText={card.buttonText}
        badges={card.badges}
      />
    );
  });

  return (
    <section className="container mx-auto mt-32">
      <h1>Project Review</h1>
      <div className="mx-auto flex justify-center items-center flex-col md:flex-row md:flex-wrap max-w-5xl md:items-stretch">
        {cards}
      </div>
    </section>
  );
};

export default ReactProjects;
