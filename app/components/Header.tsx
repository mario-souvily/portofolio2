import Image from "next/image";
import Link from "next/link";



export const Header = () => {
  return (
    <header className="sticky top-0 ">
      <section className="flex items-center justify-between p-4">
        <h1 className="text-lg font-bold text-foreground text-primary">
          Portfolio de Mario Souvily-grieco
        </h1>
        <div className="flex items-center gap-4">

          <Link className="size-6 p-0"
            href="https://github.com/mario-souvily">
            <Image
              src="/images/github.jpg"
              alt="GitHub Logo"
              width={20}
              height={20}
              className="text-foreground"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/mario-grieco-a510263b/">
            <Image src="/images/linkedin.jpg"
              alt="LinkedIn Logo"
              width={20}
              height={20} />
          </Link>

        </div>
      </section>
    </header >
  );
};