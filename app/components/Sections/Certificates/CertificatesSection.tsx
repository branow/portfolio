import Image from "next/image";
import Carousel from "../../Carousel";
import Section from "../Section";
import data from "@/app/portfolio";

const CerticatesSection = () => {
  const elements = data.certificates.map(c => 
    <Image
      className="rounded-2xl"
      key={c.key}
      alt={c.alt}
      src={c.src}
      width={800}
      height={600}
    />,
  );

  return (
    <>
      <Section
        id="certificates"
        title="Certificates"
        content={
          <Carousel
            elements={elements}
          />
        }
      />
    </>
  );
};

export default CerticatesSection;
