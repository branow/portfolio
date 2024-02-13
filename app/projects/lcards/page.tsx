import React from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import lcardsTitle from "/public/projects/lcards-title.png";
import VideoPlayer from "@/app/components/VideoPlayer";

const page = () => {
  return (
    <div className="flex flex-col">
      <Carousel
        elements={[
          <Image alt="Title Photo" src={lcardsTitle} />,
          <VideoPlayer src="https://youtu.be/sNUnxD0BV1U" />,
        ]}
      />
      <div className="flex flex-col gap-4 px-4 py-6 text-xl">
        <div className="text-center text-3xl font-bold">LCards</div>
        <p>
          <b>LCards</b> is a desktop application designed for the rapid and
          effective memorization of English vocabulary using flashcard
          techniques. Users can create <b>personalized flashcards</b> or search
          for definitions and media files on the Internet to enhance their
          learning experience. The application intelligently utilizes previous
          flashcard performance data to
          <b> automatically schedule review sessions</b>, providing a systematic
          and long-term approach to memorization.
        </p>
        <p>
          Developed using <mark>Java</mark>, leverages the <mark>JavaFX</mark>{" "}
          libraries and the <mark>FXML</mark> user interface markup language to
          create an intuitive and user-friendly desktop application.
        </p>
        <span className="p-2 flex flex-col gap-3 text-lg ">
          <a className="hover:underline" href="https://github.com/branow/LCardsDesktop" target="_blank">
            GitHub Repository
          </a>
        </span>
      </div>
    </div>
  );
};

export default page;
