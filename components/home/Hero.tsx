"use client";
import Image from "next/image";
import { useState } from "react";

/* Les badges qui défilent quand on clique sur la photo */
const badges = [
  "Ex-commerçant → dev",
  "Alimenté au café",
  "Team documentation",
  "Toujours en train d'apprendre",
];

export const Hero = () => {
  const [badge, setBadge] = useState(0);

  return (
    <section className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-6 md:px-20 py-16 md:py-20">
      <div className="flex-[1.2] flex flex-col gap-6 items-start">
        <div className="inline-flex items-center gap-2.5 bg-white/85 py-2 px-5 rounded-full shadow-[0_6px_20px_rgba(60,90,30,0.08)] text-sm font-medium text-[#3a4433]">
          <span className="cuedot" style={{ width: 9, height: 9 }}></span>
          Disponible pour un nouveau poste
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.06] text-[#24310f]">
          Salut, moi c&apos;est Mario,
          <br />
          <span className="gradtext">développeur fullstack</span>
        </h1>
        <p className="text-lg leading-relaxed text-[#55613f] max-w-xl">
          20 ans dans le commerce, puis j&apos;ai troqué la caisse contre VS Code.
          Aujourd&apos;hui, je construis des applis qui marchent — et qui ont du style.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="#projets"
            className="inline-flex items-center gap-2.5 grad-vert text-white font-bold text-base py-4 px-7 rounded-full shadow-[0_12px_28px_rgba(90,140,20,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(90,140,20,0.3)]"
          >
            Voir mes projets
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12 L19 12 M13 6 L19 12 L13 18"></path>
            </svg>
          </a>
          <a
            href="mailto:mario.souvily@gmail.com"
            className="inline-flex items-center bg-white/90 text-[#24310f] font-semibold text-base py-4 px-7 rounded-full shadow-[0_8px_22px_rgba(60,90,30,0.1)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(60,90,30,0.16)]"
          >
            Me contacter
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={() => setBadge((badge + 1) % badges.length)}
          className="relative w-[300px] h-[320px] md:w-[400px] md:h-[420px] flex items-center justify-center cursor-pointer transition-transform hover:scale-[1.02] border-none bg-transparent p-0"
          aria-label="Changer le badge sous la photo"
        >
          <div
            className="absolute inset-2.5 rounded-full"
            style={{
              background: "linear-gradient(130deg, rgba(150, 210, 60, 0.55), rgba(240, 220, 90, 0.55))",
              filter: "blur(52px)",
            }}
          ></div>
          <Image
            src="/images/moi-hero.png"
            alt="Portrait de Mario"
            width={380}
            height={380}
            className="blobimg relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-cover border-[5px] border-white/95 shadow-[0_30px_60px_rgba(60,90,30,0.2)]"
          />
          <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-[#1c2413] text-[#eef8d8] py-2.5 px-6 rounded-full font-bold text-[15px] whitespace-nowrap shadow-[0_12px_26px_rgba(30,40,15,0.3)]">
            {badges[badge]}
          </span>
        </button>
        <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#567d0e] animate-bounce">
          <span className="cuedot"></span>
          Psst — clique sur la photo
        </div>
      </div>
    </section>
  );
};
