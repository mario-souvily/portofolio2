import type { Metadata } from "next";
import { ToolGarden } from "../../components/jardin/ToolGarden";
import { Blobs } from "../../components/site/Blobs";
import { NavBar } from "../../components/site/NavBar";

export const metadata: Metadata = {
  title: "Mon jardin d'outils - Mario Souvily-grieco | Développeur Web Fullstack",
  description:
    "Les technos de Mario Souvily-grieco : React, Next.js, TypeScript, Node.js, PostgreSQL et plus — un jardin d'outils à explorer par catégorie.",
  alternates: {
    canonical: "/jardin",
  },
};

export default function Jardin() {
  return (
    <main className="page-organique font-outfit relative min-h-screen overflow-hidden flex-1">
      <Blobs />
      <div className="relative">
        <NavBar />
        <div className="px-4 md:px-20 py-14 md:py-16 flex flex-col items-center gap-6">
          <span className="bg-white/85 text-[#567d0e] font-bold text-[13px] tracking-[3px] py-2 px-5 rounded-full shadow-[0_6px_18px_rgba(60,90,30,0.08)]">
            COMPÉTENCES
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#24310f] text-center">
            Mon jardin d&apos;outils
          </h1>
          <div className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#567d0e] text-center">
            <span className="cuedot"></span>
            Clique sur une catégorie — ou directement sur une bulle — pour la faire fleurir
          </div>
          <ToolGarden />
          <p className="text-[15px] text-[#55613f] max-w-xl text-center mt-4">
            Liste non exhaustive — ce que j&apos;aime avant tout, c&apos;est apprendre.
            La documentation est ma meilleure amie.
          </p>
        </div>
      </div>
    </main>
  );
}
