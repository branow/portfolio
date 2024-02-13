import React from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import ecoTitle from "/public/projects/eco-title.png";
import VideoPlayer from "@/app/components/VideoPlayer";

const page = () => {
  return (
    <div className="flex flex-col">
            <Carousel
        elements={[
          <Image alt="Title Photo" src={ecoTitle} />,
          <VideoPlayer src="https://youtu.be/AiJNE-IVkMQ" />,
        ]}
      />
      <div className="flex flex-col gap-4 px-4 py-6 text-xl">
        <div className="text-center text-3xl font-bold">
          Environmental Monitoring
        </div>
        <p>
          <b>Environmental Monitoring of Enterprises</b> website as a
          comprehensive platform for processing indicators related to air
          emissions from specific enterprises during a given year. Users input
          key pollution values, categorized by different pollutants, for a
          particular company within a specific year.
        </p>
        <p>
          The platform facilitates the calculation of <b>diverse indicators</b> based
          on this data, including:
          
        </p>
        <p>
        <ul className="flex flex-col gap-3">
            <li>
              - assessment of the risk to public health resulting from
              pollution;
            </li>
            <li>
              - calculation of compensation for damages incurred by the state
              due to excessive emissions of pollutants;
            </li>
            <li>
              - estimation of environmental tax amounts for emissions from
              stationary pollution sources;
            </li>
            <li>
              - evaluation of losses resulting from the consequences of both
              man-made and natural emergencies.
            </li>
          </ul>
        </p>
        <p>
          Technology Used and Development: The project is developed using{" "}
          <mark>Java </mark>
          with the <mark>Spring Boot Framework</mark>. The backend, powered by{" "}
          <mark>Java</mark>, interacts with a <mark>MySQL</mark> database to
          retrieve and process the necessary data. The website's frontend
          primarily utilizes <mark>HTML</mark> and <mark>JavaScript</mark>, with{" "}
          <mark>Ajax</mark> calls communicating with the Java server to fetch
          and update information dynamically.
        </p>
        <span className="p-2 flex flex-col gap-3 text-lg ">
          <a className="hover:underline" href="https://github.com/branow/eco-monitoring" target="_blank">
            GitHub Repository
          </a>
        </span>
      </div>
    </div>
  );
};

export default page;
