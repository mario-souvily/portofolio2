"use client";
import Image from "next/image";
import Link from "next/link";

export const CardHero = () => {
  return (
    <Link href="/Moi" className="block">
      <div className="group rounded overflow-hidden shadow-lg bg-accent flex flex-col md:flex-row items-start gap-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-primary/30">
        <div className="flex-[3] w-full flex flex-col gap-2 items-start text-left p-6">
          <h2 className="font-caption text-5xl text-primary">Mario Souvily-Grieco</h2>
          <h3 className="text-3xl font-caption">Développeur Web Fullstack</h3>
          <p className="mb-4 max-w-lg text-left text-muted-foreground">
            20 ans dans le commerce, puis j’ai troqué la caisse contre VS Code 💻.
            Aujourd’hui, je construis des applis qui marchent <span className="text-primary"> (et qui ont du style) </span>.
          </p>
          <div className="mt-auto">
            <span className="text-base text-primary underline">Cliquer ici si tu oses</span>
          </div>
        </div>
        <div className="flex-[2] flex justify-center md:justify-start p-6">
          <Image
            src="/images/moi-1.png"
            width={200}
            height={200}
            className="h-auto max-w-48 rounded-lg transition-transform duration-200 group-hover:scale-105"
            alt="Photo de Mario"
          />
        </div>
      </div>
    </Link>
  );
};
