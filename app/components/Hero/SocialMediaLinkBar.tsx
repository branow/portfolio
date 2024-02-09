import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import IconLink from "./IconLink";

interface SocialMediaLinkBarParams {
  iconSize: number;
}

export const SocialMediaLinkBar = ({ iconSize } : SocialMediaLinkBarParams) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <IconLink
          Icon={FaLinkedinIn}
          href="https://www.linkedin.com/in/orest-bodnar"
          size={iconSize}
        />
        <IconLink
          Icon={SiUpwork}
          href="https://www.upwork.com/freelancers/~017873b23eb5e9bba6"
          size={iconSize}
        />
        <IconLink
          Icon={FaFacebookF}
          href="https://www.facebook.com/profile.php?id=61556098941984"
          size={iconSize}
        />
        <IconLink
          Icon={FaXTwitter}
          href="https://twitter.com/_branow_"
          size={iconSize}
        />
        <IconLink
          Icon={FaInstagram}
          href="https://www.instagram.com/_branow_/"
          size={iconSize}
        />
      </div>
    </>
  );
};
