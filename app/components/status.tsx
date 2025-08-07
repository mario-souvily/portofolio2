import { Card } from "@/components/ui/card";
import { Link, LucideIcon } from "lucide-react";
import { Section } from "./Section";
import Image from "next/image";





export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-2 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Mes-projets</p>
          {SideProjects.map((project) => (
            <SideProject key={project.title} {...project} />
          ))}
        </Card>
      </div>
      <div className="flex-2 w-full flex flex-col h-full gap-4">
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
    logo: "",
    title: "zombieland",
    description: "Site réalisé en automomie pour le passage de mon diplôme de développeur web fullstack qui a pour thème les zombies",
    link: "http://zombielandworld.surge.sh/"
  },
  {
    logo: "",
    title: "O'coofee",
    description: "site réalisé a mis parcours durant ma formation ",
    link: ""
  },
  {
    logo: "",
    title: "Pokedex",
    description: "site réalisé a mis parcours durant ma formation en utilisant l'api de pokémon",
    link: ""
  },


];

const SideProject = (props: {

  logo: string,
  title: string,
  description: string,
  link: string
}) => {
  return (
    <Card className="w-full p-2 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image src={props.logo} alt={props.title} width={100} height={100} />
        <p className="text-lg text-muted-foreground">{props.title}</p>
      </div>
      <p className="text-sm text-muted-foreground">{props.description}</p>
      <Link href={props.link} className="text-sm text-muted-foreground">Voir le projet</Link>
    </Card>
  );
};












