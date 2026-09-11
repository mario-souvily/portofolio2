import type { Metadata } from "next";
import { Timeline } from "../../components/chemin/Timeline";
import { Blobs } from "../../components/site/Blobs";
import { NavBar } from "../../components/site/NavBar";

export const metadata: Metadata = {
  title: "Mon chemin - Mario Souvily-grieco | Développeur Web Fullstack",
  description:
    "Le parcours de Mario Souvily-grieco : 20 ans dans le commerce, la formation O'clock, un stage chez Wiser — du commerce au code.",
  alternates: {
    canonical: "/chemin",
  },
};

export default function Chemin() {
  return (
    <main className="page-organique font-outfit relative min-h-screen flex-1">
      <Blobs />
      <div className="relative max-w-[1440px] mx-auto">
        <NavBar />
        <div className="px-4 md:px-20 py-14 md:py-16 flex flex-col items-center gap-6">
          <span className="bg-white/85 text-[#567d0e] font-bold text-[13px] tracking-[3px] py-2 px-5 rounded-full shadow-[0_6px_18px_rgba(60,90,30,0.08)]">
            PARCOURS
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#24310f]">Mon chemin</h1>
          <div className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#567d0e] text-center">
            <span className="cuedot"></span>
            Clique sur une étape pour la dérouler
          </div>
          <Timeline />
          <p className="text-[15px] text-[#55613f] max-w-xl text-center mt-6">
            Trois vies, un fil rouge : comprendre les gens pour construire ce qui leur est utile.
          </p>
        </div>
      </div>
    </main>
  );
}
