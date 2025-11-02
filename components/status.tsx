import { Parcours } from "@/app/data/career";
import { SideProjects } from "@/app/data/projects";
import { Parcour } from "./career/Parcour";
import { SideProject } from "./projects/SideProject";
import { Section } from "./Section";
import { Stack } from "./Stack";

export const Status = () => {
  return (
    <Section>
      <Stack />

      <div className="p-2 flex flex-col gap-4 items-center text-center w-full ">
        <p className="text-3xl md:text-4xl font-bold text-primary mb-4">Mes Projets</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch justify-items-stretch  ">
          {SideProjects.map((project, index) => (
            <SideProject
              id={project.id}
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
              gitHub={project.gitHub}
              image={project.image}
              stacks={project.stacks}
            />
          ))}
        </div>
      </div>

      <div className="p-2 flex flex-col gap-4 items-center text-center w-full">
        <p className="text-3xl md:text-4xl font-bold text-primary mb-4 mt-4">Mon Parcours</p>
        <div className="flex flex-col gap-5 w-full max-w-4xl items-stretch">
          {Parcours.map((parcours, index) => (
            <Parcour
              id={parcours.id}
              key={index}
              title={parcours.title}
              description={parcours.description}
              image={parcours.image}
              date={parcours.date}
              role={parcours.role}
              stack={parcours.stack}
              bgColor={parcours.bgColor}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};