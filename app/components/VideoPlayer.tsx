"use client";
import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerParams {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerParams) => {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
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
