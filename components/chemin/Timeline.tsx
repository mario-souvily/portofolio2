"use client";
import { Parcours } from "@/app/data/career";
import { useState } from "react";

/* Frise en accordéon : une étape ouverte à la fois, clic pour dérouler/replier */
export const Timeline = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="relative w-full max-w-[880px] flex flex-col gap-7 mt-4">
      <div className="absolute left-[26px] md:left-[30px] top-8 bottom-8 w-1 rounded grad-vert" style={{ background: "linear-gradient(180deg, #6fb50a, #c8b708)" }}></div>

      {Parcours.map((parcours, i) => {
        const open = step === i;
        return (
          <div key={parcours.id} className="flex gap-4 md:gap-7 items-start relative">
            <div className="flex-none w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full grad-vert text-white font-extrabold text-sm md:text-base flex items-center justify-center text-center leading-tight shadow-[0_10px_24px_rgba(90,140,20,0.3)] relative">
              {parcours.monogram}
            </div>
            <button
              type="button"
              onClick={() => setStep(open ? -1 : i)}
              aria-expanded={open}
              className="flex-1 bg-white/90 rounded-3xl py-5 px-5 md:py-6 md:px-8 shadow-[0_18px_44px_rgba(60,90,30,0.1)] cursor-pointer border-none text-left font-outfit transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(60,90,30,0.16)]"
            >
              <span className="flex flex-wrap justify-between items-center gap-3">
                <span className="flex items-center gap-3">
                  <span className="text-lg md:text-2xl font-bold text-[#24310f]">{parcours.title}</span>
                  {!open && <span className="cuedot"></span>}
                </span>
                <span className="flex items-center gap-3.5">
                  <span className="bg-[#eef8d8] text-[#4a7010] rounded-full py-1.5 px-4 text-[13px] font-bold whitespace-nowrap">
                    {parcours.date}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#567d0e"
                    strokeWidth="2.5"
                    className="transition-transform duration-300"
                    style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
                  >
                    <path d="M9 5 L16 12 L9 19"></path>
                  </svg>
                </span>
              </span>
              <span
                className="grid transition-all duration-500"
                style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
              >
                <span className="overflow-hidden min-h-0 block">
                  <span className="flex flex-col gap-2.5 items-start pt-3.5">
                    <span className="text-sm font-semibold text-[#567d0e]">{parcours.role}</span>
                    <span className="text-[15px] leading-relaxed text-[#55613f]">{parcours.description}</span>
                    <span className="flex flex-wrap gap-2 mt-1">
                      {parcours.stack.map((stack) => (
                        <span
                          key={stack}
                          className="bg-[#f4f9e8] text-[#4a7010] rounded-full py-1 px-3 text-xs font-semibold"
                        >
                          {stack}
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
