import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import IconLink from "./IconLink";
import data from "../../portfolio";

interface SocialMediaLinkBarParams {
  iconSize: number;
}

const icons = new Map([
  ["linkedin", FaLinkedinIn],
  ["upwork", SiUpwork],
  ["github", FaGithub],
  ["facebook", FaFacebookF],
  ["twitter", FaXTwitter],
  ["instagram", FaInstagram],
]);

export const SocialMediaLinkBar = ({ iconSize } : SocialMediaLinkBarParams) => {
  return (
    <div className="flex flex-col gap-2">
      {data.hero.socialMediaLinks.map(sm => (
        <IconLink
          key={sm.name}
          Icon={icons.get(sm.name)!}
          href={sm.link}
          size={iconSize}
        />
      ))}
    </div>
  );
};
