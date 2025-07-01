import React from "react";
import Carousel from "@/app/components/Carousel";
import VideoPlayer from "@/app/components/VideoPlayer";

const page = () => {
  return (
    <div className="flex flex-col">
      <Carousel
        elements={[
          <VideoPlayer key='v1' src="https://github.com/user-attachments/assets/a6ea93fa-91de-488c-a34a-ea15cc18a578" />,
          <VideoPlayer key='v2' src="https://github.com/user-attachments/assets/a5173403-638a-4774-9737-fb442b3e825d" />,
          <VideoPlayer key='v3' src="https://github.com/user-attachments/assets/89deccde-0ca9-4ebc-99c7-444af8349a49" />,
          <VideoPlayer key='v4' src="https://github.com/user-attachments/assets/054bfe31-19d3-49fe-8298-003fce7a8fcc" />,
          <VideoPlayer key='v5' src="https://github.com/user-attachments/assets/9f2ce884-cc42-4c1a-a89b-449907ac47fa" />,
        ]}
      />
      <div className="flex flex-col gap-4 px-4 py-6 text-xl">
        <div className="text-center text-3xl font-bold">Webphone</div>
        <p>
          <b>Webphone</b> a web-based softphone system, empowering users to 
          make and receive Voice over IP (VoIP) calls directly from their 
          browser. It's a comprehensive app offering essential features like 
          efficient call management, a personalized address book, and detailed 
          call history tracking.
        </p>
        <p>
          The <b>frontend</b> is a standalone React application, serving as the 
          intuitive user interface. It handles all direct client-side 
          interactions, crucially managing WebRTC-based SIP signaling directly 
          with the Asterisk PBX.
        </p>
        <p>
          The <b>backend</b> functions as a dedicated Java Spring Boot REST API 
          server. Its primary role is to manage user data, execute business 
          logic, and ensure robust data persistence in MongoDB.
        </p>
        <p>
          To leverage specialized and robust solutions, we integrate with 
          powerful external services. <b>Keycloak</b> manages secure user 
          authentication and authorization, <b>Asterisk PBX</b> facilitates real-time 
          SIP communication, and <b>MongoDB</b> acts as the primary data store. 
          This decoupled and service-oriented approach boosts scalability, 
          maintainability, and flexibility, allowing each component to evolve 
          independently while benefiting from the stability and power of 
          established third-party technologies.
        </p>
        <span className="p-2 flex flex-col gap-3 text-lg">
          <a
            className="hover:underline"
            href="https://github.com/branow/webphone"
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
