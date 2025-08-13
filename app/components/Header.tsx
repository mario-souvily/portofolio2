import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-background border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-primary">
          Portfolio de Mario Souvily-Grieco
        </h1>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/mario-souvily"
            className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/github-1.svg"
              alt="GitHub Logo"
              width={24}
              height={24}
              className="rounded"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mario-grieco-a510263b/"
            className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn Logo"
              width={24}
              height={24}
              className="rounded"
            />
          </Link>
          <Link
            href="mailto:mario.souvily@gmail.com"
            className="hover:opacity-80 transition-opacity">
            <Image
              src="./images/email.png"
              alt="Email Logo"
              width={24}
              height={24}
              className="rounded"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};