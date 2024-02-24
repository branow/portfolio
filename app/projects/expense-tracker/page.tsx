import React from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import et1 from "/public/projects/et-1.png";
import et2 from "/public/projects/et-2.png";

const page = () => {
  return (
    <div className="flex flex-col">
      <Carousel
        elements={[
          <Image key='1' alt="Endpoints" src={et1} />,
          <Image key='2' alt="Request/Response DTO" src={et2} />,
        ]}
      />
      <div className="flex flex-col gap-4 px-4 py-6 text-xl">
        <div className="text-center text-3xl font-bold">Expense Tracker</div>
        <p>
          This project encompassed the development of a <mark>REST API</mark> designed 
          to facilitate the tracking of user payment transactions. Leveraging <mark>Java</mark> and 
          various components of the <mark>Spring framework</mark> (Spring Boot, Spring Data, 
          Spring MVC, Spring Rest, Spring Security, Spring OAuth2), the API incorporates secure 
          authentication functionalities utilizing <b>JWT</b> and <b>Refresh Token</b> mechanisms. 
          Integration of <mark>Lombok</mark> contributed to the maintenance of concise and efficient code. 
        </p>
        <span className="p-2 flex flex-col gap-3 text-lg ">
          <a className="hover:underline" href="https://github.com/branow/expense_tracker" target="_blank">
            GitHub Repository
          </a>
        </span>
      </div>
    </div>
  );
};

export default page;
