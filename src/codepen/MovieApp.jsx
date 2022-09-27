import React from "react";
import Iframe from "react-iframe";

export const MovieApp = () => {
  return (
    <>
      <Iframe
        className="md:min-w-full w-96 h-96"
        scrolling="no"
        title="Movie App"
        src="https://codepen.io/anna625/embed/RwyjRem?default-tab=html%2Cresult&theme-id=dark"
        frameborder="no"
        loading="lazy"
        allowtransparency="true"
        allowfullscreen="true"
      >
        See the Pen{" "}
        <a href="https://codepen.io/anna625/pen/RwyjRem">Movie App</a> by Anna (
        <a href="https://codepen.io/anna625">@anna625</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </Iframe>
    </>
  );
};
