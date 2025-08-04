import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/30 font-mono border border-accent p-1 text-primary rounded-sm", className)} {...props} />;
};

export const Hero = () => {
  return (
    <section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl text-primary">Mario Souvily-Grieco</h2>
        <h3 className="text-3xl font-caption">Développeur Fullstack</h3>
        <p>En tant que développeur fullstack, <Code> youtube</Code> je suis passionné par la création d'applications web et mobile.
        </p>
      </div>
      <div className="flex-[1]">
        <img src="/images/image-moi.png"
          className="w-full h-auto max-w-48 rounded-lg"
          alt="Photo de Mario"
        />
      </div>
    </section>
  );
};
