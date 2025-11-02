"use client";
import { useState } from "react";

type SideProjectProps = {
  id?: string;
  title: string;
  description: string;
  url?: string;
  gitHub?: string;
  image: string;
  stacks?: string[];
};

export const SideProject = (props: SideProjectProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const CardInner = (
    <div id={props.id}>
      <div className="group rounded overflow-hidden shadow-lg bg-card flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-primary/30">
        <div className="overflow-hidden">
          <img src={props.image} alt={props.title} className="w-full h-40 object-contain p-4 transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="px-4 md:px-6 py-4 md:py-8 flex-1 flex flex-col">
          <div className="font-bold text-lg md:text-xl py-1 md:py-2 text-green-800">{props.title}</div>
          <p className="text-sm md:text-base text-black transition-colors duration-500">{props.description}</p>

          {props.stacks && props.stacks.length > 0 && (
            <div id={props.id} className="mt-4 flex flex-wrap gap-2 items-center">
              {props.stacks.map((stack, index) => (
                <span
                  id={props.id}
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-1 py-1 mb-1 text-sm font-semibold text-gray-700 animate-pulse"
                >
                  {stack}
                </span>
              ))}
            </div>
          )}

          {showDetails && (
            <div id={props.id} className="mt-4 flex flex-col items-center justify-center gap-4 md:gap-7">
              {props.url ? (
                <a id={props.id} href={props.url} target="_blank" rel="noreferrer" className="text-sm md:text-base text-black underline">Voir le projet</a>
              ) : (
                <span className="text-sm md:text-base text-black">Mise à jour en cours ...</span>
              )}
              {props.gitHub && (
                <a id={props.id} href={props.gitHub} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm md:text-base text-black underline">
                  <img src="/images/github-1.svg" alt="GitHub" className="w-5 h-5 md:w-7 md:h-7" />
                  Voir le code source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="cursor-pointer h-full" onClick={() => setShowDetails(prev => !prev)}>
      {CardInner}
    </div>
  );
};