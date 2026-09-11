"use client";
import { toolCategories, tools, type ToolCategory } from "@/app/data/tools";
import { useState } from "react";

/* Tailles de bulles : 1 = grosse, 3 = petite */
const sizeClasses = {
  1: "py-4 px-8 text-[22px] font-bold",
  2: "py-3 px-6 text-[17px] font-semibold",
  3: "py-2.5 px-5 text-[15px] font-semibold",
};

export const ToolGarden = () => {
  const [cat, setCat] = useState<ToolCategory | "all">("all");

  const activeLine = toolCategories.find((c) => c.id === cat)?.line ?? "";

  const bubbleStyle = (toolCat: ToolCategory, rot: number) => {
    const lit = cat !== "all" && toolCat === cat;
    const faded = cat !== "all" && toolCat !== cat;
    return {
      background: lit ? "linear-gradient(115deg, #6fb50a, #c8b708)" : "rgba(255, 255, 255, 0.92)",
      color: lit ? "#ffffff" : faded ? "#9aa58a" : "#3a4433",
      opacity: faded ? 0.35 : 1,
      transform: `scale(${lit ? 1.1 : faded ? 0.88 : 1}) rotate(${rot}deg)`,
      boxShadow: lit ? "0 16px 34px rgba(90, 140, 20, 0.35)" : "0 8px 20px rgba(60, 90, 30, 0.08)",
      transition:
        "background 0.4s ease, color 0.4s ease, opacity 0.4s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease",
    };
  };

  const toggle = (toolCat: ToolCategory) => setCat(cat === toolCat ? "all" : toolCat);

  return (
    <>
      <div className="flex gap-2.5 flex-wrap justify-center mt-2">
        {toolCategories.map((category) => {
          const on = cat === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setCat(category.id)}
              className="border-none cursor-pointer rounded-full py-3 px-6 font-outfit text-[15px] font-bold shadow-[0_6px_18px_rgba(60,90,30,0.1)] transition-all"
              style={{
                background: on ? "#24310f" : "rgba(255, 255, 255, 0.85)",
                color: on ? "#eef8d8" : "#3a4433",
              }}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <p className="text-[17px] font-semibold text-[#567d0e] min-h-6">{activeLine}</p>

      {/* Jardin dispersé — écrans larges */}
      <div className="relative w-[1160px] h-[440px] mt-1 hidden xl:block">
        <div
          className="absolute top-8 left-44 w-[340px] h-[340px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(190, 227, 120, 0.35), rgba(190, 227, 120, 0))" }}
        ></div>
        <div
          className="absolute top-16 right-36 w-[320px] h-[320px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245, 229, 120, 0.35), rgba(245, 229, 120, 0))" }}
        ></div>
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="absolute anim-bob"
            style={{ left: tool.x, top: tool.y, animationDelay: `${tool.delay}s`, animationDuration: `${5 + tool.delay}s` }}
          >
            <button
              type="button"
              onClick={() => toggle(tool.cat)}
              className={`border-none cursor-pointer rounded-full font-outfit ${sizeClasses[tool.size]}`}
              style={bubbleStyle(tool.cat, tool.rot)}
            >
              {tool.name}
            </button>
          </div>
        ))}
      </div>

      {/* Version compacte — mobile et tablette */}
      <div className="flex flex-wrap justify-center gap-3.5 max-w-2xl mt-2 xl:hidden">
        {tools.map((tool) => (
          <button
            key={tool.name}
            type="button"
            onClick={() => toggle(tool.cat)}
            className="border-none cursor-pointer rounded-full font-outfit py-2.5 px-5 text-[15px] font-semibold"
            style={bubbleStyle(tool.cat, 0)}
          >
            {tool.name}
          </button>
        ))}
      </div>
    </>
  );
};
