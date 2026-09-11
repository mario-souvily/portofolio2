export const ContactCta = () => {
  return (
    <div className="relative px-4 md:px-20 pt-12 pb-10">
      <div
        className="rounded-[36px] py-14 px-6 md:px-14 flex flex-col items-center gap-5 text-center shadow-[0_30px_70px_rgba(60,90,30,0.12)]"
        style={{ background: "linear-gradient(120deg, #e3f4b6, #f7edaf)" }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#24310f]">Un projet en tête ?</h2>
        <p className="text-lg text-[#55613f] max-w-lg">
          Discutons-en autour d&apos;un café — je réponds vite, promis.
        </p>
        <a
          href="mailto:mario.souvily@gmail.com"
          className="inline-flex items-center gap-2.5 bg-[#1c2413] text-[#eef8d8] font-bold text-base py-4 px-6 md:px-9 rounded-full shadow-[0_14px_30px_rgba(30,40,15,0.3)] mt-2 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(30,40,15,0.35)]"
        >
          mario.souvily@gmail.com
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12 L19 12 M13 6 L19 12 L13 18"></path>
          </svg>
        </a>
        <div className="flex gap-6 mt-1.5">
          <a
            href="https://github.com/mario-souvily"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#567d0e] hover:text-[#8aa312]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mario-grieco-a510263b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#567d0e] hover:text-[#8aa312]"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="text-center text-[13px] text-[#7d8a68] mt-8">
        © 2026 Mario Souvily-Grieco — Développeur Web Fullstack
      </p>
    </div>
  );
};
