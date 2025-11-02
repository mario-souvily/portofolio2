import Image from "next/image";
import Link from "next/link";

type ContactProps = {
  image: string;
  title: string;
  description: string;
  url: string;
};

export const Contact = (props: ContactProps) => {
  return (
    <div className="flex items-center gap-4 p-1 rounded-md hover:bg-accent/50">
      <span className="bg-accent text-accent-foreground rounded">
        <Image src={props.image} alt={props.title} width={45} height={45} />
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-base md:text-lg font-semibold">{props.title}</p>
        <Link href={props.url} className="text-xs md:text-sm text-muted-foreground hover:text-primary">
          {props.description}
        </Link>
      </div>
    </div>
  );
};

export const Contactme = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      <p className="text-lg md:text-xl font-bold text-primary mt-7 p-4">Contact</p>
      <div className="flex flex-col gap-4">
        <Contact
          title="Email"
          description="mario.souvily@gmail.com"
          url="mailto:mario.souvily@gmail.com"
          image="/images/email.png"
        />
        <Contact
          title="LinkedIn"
          description="Mario Souvily-Grieco"
          url="https://www.linkedin.com/in/mario-grieco-a510263b/"
          image="/images/linkedin.svg"
        />
        <Contact
          title="GitHub"
          description="mario-souvily"
          url="https://github.com/mario-souvily"
          image="/images/github-1.svg"
        />
      </div>
    </div>
  );
};