import React from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import peerChatTitle from "/public/projects/peer-chat-title.png";
import VideoPlayer from "@/app/components/VideoPlayer";

const page = () => {
  return (
    <div className="flex flex-col">
      <Carousel
        elements={[
          <Image key='title' alt="Title Photo" src={peerChatTitle} />,
          <VideoPlayer key='v1' src="https://youtu.be/lE96EPxFyB8" />,
        ]}
      />
      <div className="flex flex-col gap-4 px-4 py-6 text-xl">
        <div className="text-center text-3xl font-bold">Peer Chat</div>
        <p>
          <b>Peer Chat</b> is a simple website for free peer-to-peer internet call 
          communication. It allows users to easily create or join rooms for 
          <b> real-time video calls</b> with a maximum of 2 participants per room. 
          The service requires no registration, and you can meet anyone with 
          just a single click.
        </p>
        <ul>
          <li>Create public or private rooms.</li>
          <li>Join existing rooms without any registration.</li>
          <li>Peer-to-peer communication (max 2 participants per room).</li>
          <li>Real-time communication using WebRTC.</li>
        </ul>
        <ul>
          <li><b>Go</b>: Backend server.</li>
          <li><b>JavaScript</b>: Client-side logic.</li>
          <li><b>HTMX</b>: For dynamic content loading.</li>
          <li><b>Websockets</b>: Real-time bidirectional communication.</li>
          <li><b>RTCPeerConnection</b>: For establishing peer-to-peer connections.</li>
        </ul>
        <span className="p-2 flex flex-col gap-3 text-lg">
          <a
            className="hover:underline"
            href="https://github.com/branow/peer-chat"
            target="_blank"
          >
            GitHub Repository
          </a>
        </span>
      </div>
    </div>
  );
};

export default page;
