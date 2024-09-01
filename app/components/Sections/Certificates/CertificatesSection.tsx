import gf from "@/public/certificates/green-forest-english.png";
import english from "@/public/certificates/softserve-english.jpg";
import java from "@/public/certificates/softserve-javase.jpg";
import Image from "next/image";
import Carousel from "../../Carousel";
import Section from "../Section";

const CerticatesSection = () => {
  return (
    <>
      <Section
        id="certificates"
        title="Certificates"
        content={
          <Carousel
            elements={[
              <Image
                key="java"
                className="rounded-2xl"
                alt="Green Forest Certificate B2 English Course"
                src={gf}
              />,
              <Image
                key="java"
                className="rounded-2xl"
                alt="Java SoftServe Academy Certification"
                src={java}
              />,
              <Image
                key="english"
                className="rounded-2xl"
                alt="English SoftServe Academy Evaluation"
                src={english}
              />,
            ]}
          />
        }
      />
    </>
  );
};

export default CerticatesSection;
