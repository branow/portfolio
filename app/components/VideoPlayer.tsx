"use client";
import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerParams {
  src: string;
  width?: number;
  height?: number;
}

const VideoPlayer = ({ src, width, height }: VideoPlayerParams) => {
  return (
    <ReactPlayer
      width={width}
      height={height}
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
