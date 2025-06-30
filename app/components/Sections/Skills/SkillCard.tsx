import React from "react";
import Image from "next/image";

interface SkillCardParams {
  title: string;
  score: number;
  image: string;
}

const SkillCard = ({ title, score, image }: SkillCardParams) => {
  var value = 0;
  value = Math.max(value, score);
  value = Math.min(value, 100);

  return (
    <>
      <div className="w-fit p-6 pb-3 card glass shadow-lg">
        <div className="w-fit flex flex-col gap-2 justify-center">
          <div className="flex flex-row gap-2 justify-center items-end">
            <Image alt={title + " icon"} src={image} width={50} height={50} />
            <div className="text-2xl font-bold">{title}</div>
          </div>
          <div>
            <progress
              className="progress progress-warning w-full h-2"
              value={value}
              max="100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
