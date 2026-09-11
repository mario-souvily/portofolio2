import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Blobs } from "../../components/site/Blobs";
import { NavBar } from "../../components/site/NavBar";

export const metadata: Metadata = {
  title: "Moi - Mario Souvily-grieco | Développeur Web Fullstack",
  description:
    "Qui est Mario Souvily-grieco ? Vingt ans de commerce, une reconversion réussie chez O'clock, un stage chez Wiser — portrait d'un développeur web fullstack.",
  alternates: {
    canonical: "/Moi",
  },
};

export default function Moi() {
  return (
    <main className="page-organique font-outfit relative min-h-screen overflow-hidden flex-1">
      <Blobs />
      <div className="relative">
        <NavBar />
        <section className="relative flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 px-6 md:px-20 py-14 md:py-20">
          <div className="flex-[1.3] flex flex-col gap-6 items-start">
            <span className="bg-white/85 text-[#567d0e] font-bold text-[13px] tracking-[3px] py-2 px-5 rounded-full shadow-[0_6px_18px_rgba(60,90,30,0.08)]">
              À PROPOS
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.06] text-[#24310f]">
              Moi, c&apos;est <span className="gradtext">Mario</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#567d0e]">
              Développeur Web Fullstack
            </h2>

            <div className="flex flex-col gap-5 text-base md:text-lg leading-relaxed text-[#55613f]">
              <p>
                Après plus de vingt ans d&apos;expérience dans le commerce et le management,
                j&apos;ai choisi de transformer ma curiosité pour le digital en véritable métier.
                Aujourd&apos;hui, je suis développeur web fullstack, animé par la volonté de créer
                des applications performantes, utiles et centrées sur l&apos;utilisateur.
              </p>
              <p>
                Formé intensivement chez <strong className="text-[#24310f]">O&apos;clock</strong>,
                j&apos;y ai acquis des bases solides en développement front-end et back-end.
                J&apos;ai ensuite intégré{" "}
                <a
                  href="https://www.wiser.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#567d0e] hover:text-[#8aa312] underline underline-offset-2"
                >
                  Wiser
                </a>{" "}
                pour un stage de six mois, où j&apos;ai contribué à la conception d&apos;une plateforme
                de benchmark produit, tout en évoluant dans un environnement agile et collaboratif.
              </p>
              <p>
                Mon objectif : continuer à progresser, relever de nouveaux défis techniques et
                humains, et rejoindre une équipe où la qualité du code, l&apos;innovation et
                l&apos;esprit d&apos;équipe sont au cœur des projets. Passionné, curieux et rigoureux,
                j&apos;aime transformer les idées en solutions concrètes qui font la différence.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-2">
              <Link
                href="/chemin"
                className="inline-flex items-center gap-2.5 grad-vert text-white font-bold text-base py-4 px-7 rounded-full shadow-[0_12px_28px_rgba(90,140,20,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(90,140,20,0.3)]"
              >
                Découvrir mon chemin
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12 L19 12 M13 6 L19 12 L13 18"></path>
                </svg>
              </Link>
              <Link
                href="/"
                className="text-[15px] font-semibold text-[#567d0e] hover:text-[#8aa312] underline underline-offset-2"
              >
                Tu veux sortir ? C&apos;est par ici
              </Link>
            </div>
          </div>

          <div className="relative flex-none w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            <div
              className="absolute inset-2.5 rounded-full"
              style={{
                background: "linear-gradient(130deg, rgba(150, 210, 60, 0.55), rgba(240, 220, 90, 0.55))",
                filter: "blur(52px)",
              }}
            ></div>
            <Image
              src="/images/moi-1.png"
              alt="Portrait de Mario"
              width={380}
              height={380}
              className="blobimg relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-cover border-[5px] border-white/95 shadow-[0_30px_60px_rgba(60,90,30,0.2)]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
