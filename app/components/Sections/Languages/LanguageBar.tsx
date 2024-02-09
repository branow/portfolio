import React from "react";

interface LanguageBarParams {
  language: string;
  level: string;
}

const LanguageBar = ({ language, level }: LanguageBarParams) => {
  const levels: string[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  if (!levels.includes(level)) {
    throw new Error("Illegal Language Level:" + level);
  }

  return (
    <>
      <div className="flex flex-col p-2">
        <div className="p-4 text-3xl font-bold">{language}</div>
        <div className="flex flex-row gap-1">
          {levels.map((l) => {
            const className = (l <= level ? 'bg-gold' : 'bg-soft-dimness') + ' rounded-lg';
            return (
              <>
                <div className="flex flex-col" key={l}>
                  <div className="text-center">{l}</div>
                  <div className={className}>
                    <div className="w-12 h-2"></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LanguageBar;
