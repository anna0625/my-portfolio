import React from "react";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { heroSection, projectSection } from "../data/HomeData";

const Home = () => {
  const cards = [];
  let count = 0;
  projectSection.forEach((card) => {
    count += 1;
    cards.push(
      <Card
        count={count}
        title={card.title}
        paragraph={card.paragraph}
        buttonText={card.buttonText}
      />
    );
  });

  return (
    <>
      <Hero
        title={heroSection.title}
        paragraph={heroSection.paragraph}
        buttonText={heroSection.buttonText}
      />
      <section className="container mx-auto">
        <div className="mx-auto flex justify-center items-center flex-col md:flex-row md:flex-wrap max-w-5xl">
          {cards}
        </div>
      </section>
    </>
  );
};

export default Home;
