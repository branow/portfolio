"use client";
import React, { useState } from "react";

interface CarouselParams {
  elements: JSX.Element[];
}

const Carousel = ({ elements }: CarouselParams) => {
  const [pointer, setPointer] = useState(0);

  const next = () => {
    setPointer(pointer < elements.length - 1 ? pointer + 1 : 0);
  };

  const previous = () => {
    setPointer(pointer > 0 ? pointer - 1 : elements.length - 1);
  };

  return (
    <>
      <div className="w-full shadow-xl rounded-2xl">
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute left-5 top-1/2 z-10">
            <button className="btn btn-circle" onClick={() => previous()}>
              ❮
            </button>
          </div>
          <div className="w-full aspect-video flex flex-col justify-center items-center rounded-xl">
            {elements[pointer]}
          </div>
          <div className="absolute ro-5 right-5 top-1/2 z-10">
            <button className="btn btn-circle" onClick={() => next()}>
              ❯
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
