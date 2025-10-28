import { Parcours } from "@/app/data/career";
import { SideProjects } from "@/app/data/projects";
import { Stacks } from "@/app/data/stacks";
import { Section } from "./Section";
import { Parcour } from "./career/Parcour";
import { Stack } from "./competance/Stack";
import { SideProject } from "./projects/SideProject";

export const Status = () => {
  return (
    <Section>
      <div className="p-2 flex flex-col gap-4 items-center text-center">
        <p className="text-4xl font-bold text-primary mb-4 mt-4">Mes Stacks</p>
        <div className="grid grid-cols-2 gap-8 md:gap-x-20 md:gap-y-8 place-items-center">
          {Stacks.map((stack, index) => (
            <Stack
              key={index}
              name={stack.name}
              image={stack.image}
            />
          ))}
        </div>
      </div>
      <div className="p-2 flex flex-col gap-4 items-center text-center w-full ">
        <p className="text-4xl font-bold text-primary mb-4">Mes Projets</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch justify-items-stretch ">
          {SideProjects.map((project, index) => (
            <SideProject
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

      <div className="p-2 flex flex-col items-center text-center">
        <p className="text-4xl font-bold text-primary mb-4 mt-4">Mon Parcours</p>
        <div className="flex flex-col items-center">
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
      </div>
    </Section>
  );
};












