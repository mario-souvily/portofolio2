import Image from "next/image";

type StackProps = {
  name: string;
  image: string;
};

export const Stack = (props: StackProps) => {
  return (
    <div className="flex items-center gap-4 p-1 rounded-md hover:bg-accent/50">
      <span className="bg-accent text-accent-foreground rounded">
        <Image src={props.image} alt={props.name} width={45} height={45} />
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold">{props.name}</p>
      </div>
    </div>
  );
};
