import React from "react";
import { Hero } from "./Hero";

export const ComingSoon = () => {
  return (
    <Hero
      title="Coming Soon"
      paragraph="This section is still being built :>"
      buttonText="My Github"
      buttonLink="https://github.com/anna0625/"
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
  );
};
