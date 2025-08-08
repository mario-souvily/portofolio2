import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
  return (

    <Section>

      <Card className=" p-2 flex flex-col gap-2 ">
        <p className="text-lg text-muted-foreground">Mes projets</p>
        <div className="flex flex-col gap-2">
          {SideProjects.map((project, index) => (
            <SideProject
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
              image={project.image}
            />
          ))}
        </div>
      </Card>
      <Card className="p-2">
        Mon travail
      </Card>

      <Card className="p-2">
        Contact
      </Card>

    </Section>

  );
};

const SideProjects = [
  {
    image: "/images/Zombieland-1.png",
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

        <Image src={props.image} alt={props.title} width={45} height={45} />

      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};












