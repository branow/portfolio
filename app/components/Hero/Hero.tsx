import myphoto from "@/public/main-photo.png";
import Image from "next/image";
import ShinyLink from "./ShinyLink";
import { SocialMediaLinkBar } from "./SocialMediaLinkBar";
import TypeAnimationText from "./TypeAnimationText";
import data from "../../portfolio";

const Hero = () => {
  return (
    <>
      <div
        className="p-5 py-12 relative flex flex-col gap-8 justify-around items-center
      lg:flex-row-reverse"
      >
        <div>
          <div className="relative w-[300px] sm:w-[400px] opacity-1">
            <Image
              alt="my-photo"
              src={myphoto}
              className="blur-lg w-fit object-cover"
            />
            <Image
              alt="my-photo"
              src={myphoto}
              className="absolute top-0 w-fit object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center lg:gap-10">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="p-2 flex flex-row justify-between items-end">
              <span className="p-1 text-xl font-medium text-deep-midnight md:text-2xl">
                I&apos;M
              </span>
              <span className="p-1 w-fit flex font-black ">
                <span
                  className="text-4xl text-center text-transparent 
              bg-clip-text bg-gradient-to-br from-soft-sunlight via-olive-yellow 
              to-soft-sunlight md:text-5xl"
                >
                  Orest Bodnar
                </span>
              </span>
            </div>
            <div className="text-xl md:text-2xl font-bold text-deep-midnight">
              <span className="md:hidden">{data.hero.roles.prefix}</span>
              <span className="hidden md:inline">
                <TypeAnimationText
                  duration={1500}
                  labels={data.hero.roles.prefixes}
                />
              </span>
              {" " + data.hero.roles.postfix}
            </div>
          </div>
          <div className="relative">
            <ShinyLink
              href="mailto:bodnarorestdraw@gmail.com"
              title="Contact Me"
            />
          </div>
        </div>
        <div
          className="w-fit h-fit fixed right-4 top-[10%] md:right-10 lg:right-[5%]
        lg:top-[15%] z-10"
        >
          <SocialMediaLinkBar iconSize={20} />
        </div>
      </div>
    </>
  );
};

export default Hero;
