import React from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import memoTitle from "/public/projects/memo-title.png";
import VideoPlayer from "@/app/components/VideoPlayer";

const page = () => {
  return (
    <div className="flex flex-col">
      <Carousel
        elements={[
          <Image alt="Title Photo" src={memoTitle} />,
          <VideoPlayer src="https://youtu.be/McBXUoEl72A" />,
          <VideoPlayer src="https://youtu.be/3kwPVQeOuNo" />,
        ]}
      />
      <div className="flex flex-col gap-4 px-4 py-6 text-xl">
        <div className="text-center text-3xl font-bold">Memo</div>
        <p>
          <b>Memo</b> is a website designed for quick and efficient vocabulary
          memorization through the use of <b>flashcard techniques</b>. The
          distinctive features of Memo include a <b>flashcard constructor</b>{" "}
          and a <b>dynamic study evaluation</b> system.
        </p>
        <p>
          The flashcard constructor enables users to effortlessly create English
          language vocabulary flashcards by sourcing definitions and multimedia
          files from the Internet. The dynamic study evaluation system guides
          the learning process by providing time-limited marks, where correct
          responses lead to an extended validity period, ranging from seconds to
          months and even years.
        </p>
        <p>
          The project follows a <b>3-tier architecture</b>, comprising the
          client tier, business tier, and database tier.
        </p>
        <p>
          CLIENT Tier: Implemented using <mark>JavaScript</mark> with the{" "}
          <mark>React</mark> framework,
          <mark> HTML</mark>, and <mark>CSS</mark> (<mark>Tailwind</mark>),
          ensuring a responsive and visually appealing user interface.
        </p>
        <p>
          BUSINESS Tier Developed in <mark>Java</mark> using the{" "}
          <mark>Spring Boot Framework</mark>, incorporating technologies such as{" "}
          <mark>Oauth2 Resource Server</mark> (<mark>JWT</mark>),
          <mark> Spring Boot Mail</mark>, <mark>Lombok</mark>, and{" "}
          <mark>Flyway</mark> for <mark>MySQL</mark>. This layer handles the
          core business logic, user authentication, and interaction with the
          database.
        </p>
        <p>
          DATABASE Tier: Utilizes <mark>MySQL</mark>, leveraging functions,
          procedures, triggers, and views.
        </p>
        <span className="p-2 flex flex-col gap-3 text-lg">
          <a className="hover:underline" href="https://github.com/branow/memo-web-ui" target="_blank">
            GitHub Frontend Repository
          </a>
          <a className="hover:underline" href="https://github.com/branow/memo-web" target="_blank">
            GitHub Backend Repository
          </a>
        </span>
      </div>
    </div>
  );
};

export default page;
