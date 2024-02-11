"use client";
import React from "react";
import ReactPlayer from "react-player";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface VideoPlayerParams {
  src: string,
  width?: number,
  height?: number
}

const VideoPlayer = ({ src, width, height }: VideoPlayerParams) => {
  

  return (
    <ReactPlayer
      width={width}
      height={height}
      className="w-full object-cover"
      url={src}
      controls={true}
      // light is usefull incase of dark mode
      light={false}
      // picture in picture
      pip={true}
    />
  );
};

export default VideoPlayer;
