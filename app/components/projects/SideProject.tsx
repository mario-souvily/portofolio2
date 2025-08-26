"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SideProjectProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  stacks?: string[];
};

export const SideProject = (props: SideProjectProps) => {
  const [showMessage, setShowMessage] = useState(false);

  if (!props.url) {
    return (
      <div
        className="inline-flex items-center gap-4 hover:bg-accent hover:text-accent p-2 rounded-md cursor-pointer"
        onClick={() => setShowMessage(!showMessage)}
      >
        <span className="bg-accent text-accent-foreground">
          <Image src={props.image} alt={props.title} width={45} height={45} />
        </span>
        <div>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-md text-muted-foreground ">{props.description}</p>
          {props.stacks && (
            <div className="text-md text-muted-foreground flex flex-wrap gap-1">
              {props.stacks.map((stack, index) => (
                <span key={index} className="inline-block mr-2 text-sm bg-accent py-1 px-2 rounded-md">
                  {stack}
                </span>
              ))}
            </div>
          )}
          {showMessage && (
            <p className="text-sm text-primary font-medium mt-2">Mise à jour en cours ...</p>
          )}
        </div>
      </div>
    );
  }

  // Si URL présente, afficher le lien normal
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent hover:text-accent p-2 rounded-md"
    >
      <span className="bg-accent text-accent-foreground">
        <Image src={props.image} alt={props.title} width={45} height={45} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-md text-muted-foreground ">{props.description}</p>
        {props.stacks && (
          <div className="text-md text-muted-foreground flex flex-wrap gap-1">
            {props.stacks.map((stack, index) => (
              <span key={index} className="inline-block mr-2 text-sm bg-accent py-1 px-2 rounded-md">
                {stack}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};