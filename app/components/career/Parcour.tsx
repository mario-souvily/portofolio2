import Image from "next/image";

type ParcoursProps = {
  title: string;
  description: string;
  image: string;
  date: string;
  role: string;
  stack?: string;
};

export const Parcour = (props: ParcoursProps) => {
  return (
    <div className="flex items-center gap-4 p-1 rounded-md hover:bg-accent/50">
      <span className="bg-accent text-accent-foreground rounded mb-4">
        <Image src={props.image} alt={props.title} width={45} height={45} />
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold mt-7">{props.title}</p>
        <p className="text-md text-muted-foreground flex flex-col gap-1">
          <span>{props.description}</span>
          <span>{props.role}</span>
          <span>{props.date}</span>
          {props.stack && <span>{props.stack}</span>}
        </p>
      </div>
    </div>
  );
}; 