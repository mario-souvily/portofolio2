import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
  return (

    <Section>
      <div className=" p-2 flex flex-col gap-2 ">
        <p className="text-xl font-bold text-primary">Mes Projets</p>
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
      </div>

      <div className="p-2 flex flex-col">
        <p className="text-xl font-bold text-primary">Mon Parcours</p>

        {Parcours.map((parcours, index) => (
          <Parcour
            key={index}
            title={parcours.title}
            description={parcours.description}
            image={parcours.image}
            date={parcours.date}
            role={parcours.role}
          />
        ))}
      </div>

    </Section>

  );
};

const SideProjects = [
  {
    image: "/images/Zombieland-1.png",
    title: "Zombieland",
    description: "Site réalisé en automomie pour le passage de mon diplôme de développeur web fullstack qui a pour thème les zombies.",
    url: "http://zombielandworld.surge.sh/"
  },
  {
    image: "/images/Ocoffee.png",
    title: "O'coofee",
    description: "Site vitrine réalisé en automomie a mis parcours durant ma formation. Les stacks utilisée sont javascript, html, css, express et nodejs pour le backend.",
    url: ""
  },
  {
    image: "/images/Pokedex.png",
    title: "Pokedex",
    description: "Site réalisé a mis parcours durant ma formation en utilisant l'api de pokémon.",
    url: ""
  },
];

type SideProjectProps = {

  title: string;
  description: string;
  url: string;
  image: string;
};

type ParcoursProps = {
  title: string;
  description: string;
  image: string;
  date: string;
  role: string;
  stack: string;
};


const Parcours = [
  {
    title: "Wiser Solution ",
    description: "Conception et implémentation d'une plateforme de benchmark produit ",
    stack: "Next.js, React, Tailwind CSS, TypeScript, Prisma, MySQL",
    role: "Stagiaire Développeur web fullstack",
    image: "/images/wiser.jpg",
    date: "2025-2025",

  },
  {
    title: "O'clock Formation de développeur web fullstack",
    description: "Formation au titre de développeur web fullstack",
    stack: "JavaScript, html, css, React, TypeScript, Express, Nodejs, PostgreSQL, Sequelize, Docker, Git, Github ",
    role: "Apprenant",
    image: "/images/oclock.jpg",
    date: "2024-2025",

  },
  {
    title: "Responsable de magasin et commercial",
    description: "Pret à porter, Immobilier, Restauration, Magasins",
    role: " Responsable",
    image: "",
    date: "2003-2024",

  },


];


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

const Parcour = (props: ParcoursProps) => {
  return (
    <div className="flex items-center gap-4 p-1 rounded-md hover:bg-accent/50">
      <span className="bg-accent text-accent-foreground rounded mb-4">
        <Image src={props.image} alt={props.title} width={45} height={45} />
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold mt-7">{props.title}</p>
        <p className="text-sm text-muted-foreground flex flex-col gap-1">
          <span>{props.description}</span>
          <span>{props.role}</span>
          <span>{props.date}</span>
          <span>{props.stack}</span>
        </p>
      </div>
    </div>
  );
};












