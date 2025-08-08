import Image from "next/image";
import Link from "next/link";

type SideProjectProps = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export const SideProject = (props: SideProjectProps) => {
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