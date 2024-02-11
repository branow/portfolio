"use client";
import React from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import memoTitle from "/public/projects/memo-title.png";
import VideoPlayer from "@/app/components/VideoPlayer";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { getVideoPlayerDimensions } from "@/app/utils/dimension";

export const MemoCarousel = () => {
  const screenDimension = useWindowDimensions();
  const dimension = getVideoPlayerDimensions(screenDimension.width);
  return (
    <Carousel
      elements={[
        <Image alt="Title Photo" src={memoTitle} />,
        <VideoPlayer
          src="https://youtu.be/McBXUoEl72A"
          width={dimension.width}
          height={dimension.height}
        />,
        <VideoPlayer
          src="https://youtu.be/3kwPVQeOuNo"
          width={dimension.width}
          height={dimension.height}
        />,
      ]}
    />
  );
};
