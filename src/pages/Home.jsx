import React from "react";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { heroSection, projectSection } from "../data/HomeData";

const Home = () => {
  const cards = [];
  projectSection.forEach((card, id) => {
    cards.push(
      <Card
        key={id}
        id={id}
        title={card.title}
        paragraph={card.paragraph}
        buttonLink={card.buttonLink}
        buttonText={card.buttonText}
      />
    );
  });

  return (
    <main>
      <Hero
        title={heroSection.title}
        paragraph={heroSection.paragraph}
        buttonText={heroSection.buttonText}
        buttonLink={heroSection.buttonLink}
        extend={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 inline ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>
        }
      />
      <section className="container mx-auto">
        <h1>Project Review</h1>
        <div className="mx-auto flex justify-center items-center flex-col md:flex-row md:flex-wrap max-w-5xl">
          {cards}
        </div>
      </section>
    </main>
  );
};

export default Home;
