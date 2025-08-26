import Image from "next/image";

type ParcoursProps = {
  title: string;
  description: string;
  image: string;
  date: string;
  role: string;
  stack?: string[];
};

export const Parcour = (props: ParcoursProps) => {
  return (
    <div className="w-full max-w-3xl flex items-start gap-4 hover:bg-accent hover:text-accent p-4 rounded-md">
      <Image src={props.image} alt={props.title} width={56} height={56} className="object-contain shrink-0" />
      <div className="flex flex-col gap-2 text-left">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-md text-muted-foreground">
          {props.description}
        </p>
        <p className="text-md text-muted-foreground">{props.role}</p>
        <p className="text-md text-muted-foreground">{props.date}</p>
        {props.stack && (
          <div className="text-md text-muted-foreground flex flex-wrap gap-1">
            {props.stack.map((stack, index) => (
              <span key={index} className="inline-block mr-2 text-sm bg-accent py-1 px-2 rounded-md">
                {stack}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 