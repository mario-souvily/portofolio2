import Image from "next/image";

type StackProps = {
  name: string;
  image: string;
};

export const Stack = (props: StackProps) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-md hover:bg-accent/50 h-16 w-full">

      <Image src={props.image} alt={props.name} width={56} height={56} className="object-contain" />

      <div className="flex flex-col justify-center w-[80%] text-left">
        <p className="text-lg font-semibold leading-none">{props.name}</p>
      </div>
    </div>
  );
};
