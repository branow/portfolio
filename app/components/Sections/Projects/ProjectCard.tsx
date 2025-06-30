import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardParams {
  title: string;
  description: string;
  image: string;
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
        <div className="card w-[350px] shadow-xl hover:bg-subtle-shadow 
        xl:w-[370px] 2xl:w-[380px]">
          <figure className="relative w-full aspect-[2/1]">
            <Image className="object-cover" alt={title + " image"} src={image} fill />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-sm font-normal">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
