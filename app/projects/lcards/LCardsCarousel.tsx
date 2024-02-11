"use client";
import React from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import lcardsTitle from "/public/projects/lcards-title.png";
import VideoPlayer from "@/app/components/VideoPlayer";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { getVideoPlayerDimensions } from "@/app/utils/dimension";

const LCardsCarousel = () => {
  const screenDimension = useWindowDimensions();
  const dimension = getVideoPlayerDimensions(screenDimension.width);
  return (
    <Carousel
      elements={[
        <Image alt="Title Photo" src={lcardsTitle} />,
        <VideoPlayer
          src="https://youtu.be/sNUnxD0BV1U"
          width={dimension.width}
          height={dimension.height}
        />
      ]}
    />
  );
}

export default LCardsCarousel