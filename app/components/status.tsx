import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-2 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Mes-projets</p>
          <div className="flex flex-col gap-2">
            {SideProjects.map((project, index) => (
              <SideProject
                key={index}
                logo={project.logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-2 flex-1">
          Work
        </Card>
        <Card className="p-2 flex-1">
          Contact
        </Card>
      </div>
    </Section>
  );
};

const SideProjects = [
  {
    image: "",
    title: "Zombieland",
    description: "Site réalisé en automomie pour le passage de mon diplôme de développeur web fullstack qui a pour thème les zombies",
    url: "http://zombielandworld.surge.sh/"
  },
  {
    image: "/images/Ocoffee.png",
    title: "O'coofee",
    description: "site réalisé a mis parcours durant ma formation ",
    url: ""
  },
  {
    image: "",
    title: "Pokedex",
    description: "site réalisé a mis parcours durant ma formation en utilisant l'api de pokémon",
    url: ""
  },
];

type SideProjectProps = {
  logo: string;
  title: string;
  description: string;
  url: string;
  image: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent hover:text-accent p-2 rounded-md"
    >
      <span className="bg-accent text-accent-foreground">
        {props.image && (
          <Image src={props.image} alt={props.title} width={16} height={16} />
        )}
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};












