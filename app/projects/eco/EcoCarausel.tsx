"use client";
import React from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import ecoTitle from "/public/projects/eco-title.png";
import VideoPlayer from "@/app/components/VideoPlayer";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { getVideoPlayerDimensions } from "@/app/utils/dimension";

const EcoCarausel = () => {
  const screenDimension = useWindowDimensions();
  const dimension = getVideoPlayerDimensions(screenDimension.width);
  return (
    <Carousel
      elements={[
        <Image alt="Title Photo" src={ecoTitle} />,
        <VideoPlayer
          src="https://youtu.be/AiJNE-IVkMQ"
          width={dimension.width}
          height={dimension.height}
        />
      ]}
    />
  );
}

export default EcoCarausel