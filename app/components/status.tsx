import { Parcours } from "@/app/data/career";
import { SideProjects } from "@/app/data/projects";
import { Section } from "./Section";
import { Parcour } from "./career/Parcour";
import { SideProject } from "./projects/SideProject";

export const Status = () => {
  return (
    <Section>
      <div className="p-2 flex flex-col gap-4">
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
            stack={parcours.stack}
          />
        ))}
      </div>
    </Section>
  );
};












