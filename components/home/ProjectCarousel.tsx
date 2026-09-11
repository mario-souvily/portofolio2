"use client";
import { SideProjects } from "@/app/data/projects";
import Image from "next/image";
import { useState } from "react";

export const ProjectCarousel = () => {
  const [idx, setIdx] = useState(0);
  const total = SideProjects.length;

  return (
    <section id="projets" className="relative py-8 md:py-10 overflow-hidden">
      <div className="flex flex-col items-center gap-3 mb-10 px-6">
        <span className="bg-white/85 text-[#567d0e] font-bold text-[13px] tracking-[3px] py-2 px-5 rounded-full shadow-[0_6px_18px_rgba(60,90,30,0.08)]">
          PORTFOLIO
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#24310f]">Mes projets récents</h2>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#567d0e]">
          <span className="cuedot"></span>
          Clique sur l&apos;image pour visiter le projet — flèches ou cartes pour naviguer
        </div>
      </div>

      <div className="relative h-[540px] md:h-[660px]">
        {SideProjects.map((project, i) => {
          /* Position en boucle : -1 (à gauche), 0 (au centre), +1 (à droite) */
          const off = ((((i - idx) % total) + total + 1) % total) - 1;
          const active = off === 0;
          const href = project.url || project.gitHub;
          const hrefLabel = project.url ? "Visiter le site ↗" : "Voir le code ↗";
          return (
            <div
              key={project.id}
              onClick={() => !active && setIdx(i)}
              className="absolute left-1/2 top-0 w-[88vw] max-w-[660px]"
              style={{
                transform: `translateX(calc(-50% + ${off * 92}%)) scale(${active ? 1 : 0.85})`,
                opacity: active ? 1 : 0.55,
                zIndex: active ? 3 : 1,
                cursor: active ? "default" : "pointer",
                transition: "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease",
              }}
            >
              <div className="bg-white rounded-[28px] shadow-[0_30px_70px_rgba(60,90,30,0.16)] p-4">
                {active && href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group relative block overflow-hidden rounded-[18px]"
                    aria-label={`${hrefLabel} — ${project.title}`}
                  >
                    <Image
                      src={project.image}
                      alt={`Aperçu du site ${project.title}`}
                      width={880}
                      height={556}
                      className="w-full h-52 md:h-[340px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-[#1c2413]/0 transition-colors duration-300 group-hover:bg-[#1c2413]/25">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#24310f] font-bold text-sm py-2.5 px-5 rounded-full shadow-[0_10px_26px_rgba(30,40,15,0.3)]">
                        {hrefLabel}
                      </span>
                    </span>
                  </a>
                ) : (
                  <Image
                    src={project.image}
                    alt={`Aperçu du site ${project.title}`}
                    width={880}
                    height={556}
                    className="w-full h-52 md:h-[340px] object-cover rounded-[18px]"
                  />
                )}
                <div className="pt-5 px-3 pb-3 flex flex-col gap-3 items-start">
                  <h3 className="text-2xl md:text-[27px] font-bold text-[#24310f]">{project.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#55613f] text-left">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stacks.map((stack, s) => (
                      <span
                        key={stack}
                        className={
                          s % 2 === 0
                            ? "bg-[#eef8d8] text-[#4a7010] rounded-full py-1.5 px-3.5 text-xs font-semibold"
                            : "bg-[#faf4cf] text-[#8a7a10] rounded-full py-1.5 px-3.5 text-xs font-semibold"
                        }
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-1.5">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 grad-vert text-white text-sm font-bold py-2.5 px-5 rounded-full shadow-[0_8px_20px_rgba(90,140,20,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(90,140,20,0.3)]"
                      >
                        Voir le site
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12 L19 12 M13 6 L19 12 L13 18"></path>
                        </svg>
                      </a>
                    )}
                    {project.gitHub && (
                      <a
                        href={project.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 bg-[#1c2413] text-[#eef8d8] text-sm font-bold py-2.5 px-5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(30,40,15,0.3)]"
                      >
                        GitHub
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12 L19 12 M13 6 L19 12 L13 18"></path>
                        </svg>
                      </a>
                    )}
                    {!project.url && !project.gitHub && (
                      <span className="inline-flex items-center bg-[#f4f9e8] text-[#567d0e] text-sm font-semibold py-2.5 px-5 rounded-full">
                        Refonte en cours — bientôt en ligne
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          type="button"
          onClick={() => setIdx((idx + total - 1) % total)}
          aria-label="Projet précédent"
          className="w-[54px] h-[54px] rounded-full bg-white text-[#3a4433] shadow-[0_10px_26px_rgba(60,90,30,0.14)] inline-flex items-center justify-center transition-colors hover:bg-[#1c2413] hover:text-[#eef8d8] cursor-pointer border-none"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 5 L8 12 L15 19"></path>
          </svg>
        </button>
        <div className="flex gap-2 items-center">
          {SideProjects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Aller au projet ${project.title}`}
              className="h-[9px] rounded-full border-none cursor-pointer p-0 transition-all"
              style={{
                width: i === idx ? 30 : 9,
                background: i === idx ? "#6fb50a" : "rgba(60, 90, 30, 0.2)",
              }}
            ></button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIdx((idx + 1) % total)}
          aria-label="Projet suivant"
          className="w-[54px] h-[54px] rounded-full bg-white text-[#3a4433] shadow-[0_10px_26px_rgba(60,90,30,0.14)] inline-flex items-center justify-center transition-colors hover:bg-[#1c2413] hover:text-[#eef8d8] cursor-pointer border-none"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5 L16 12 L9 19"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};
