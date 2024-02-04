import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardParams {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  href,
}: ProjectCardParams) => {
  return (
    <>
      <Link href={href}>
        <div className="card w-[400px] shadow-xl hover:bg-subtle-shadow">
          <figure>
            <Image alt={title + " image"} src={image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
