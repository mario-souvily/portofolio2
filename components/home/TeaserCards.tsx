import Link from "next/link";

/* Les deux grandes cartes qui invitent à visiter les pages Jardin et Chemin */
export const TeaserCards = () => {
  return (
    <div className="relative px-4 md:px-20 pt-10 pb-4 flex flex-col lg:flex-row gap-7">
      <Link
        href="/jardin"
        className="group flex-1 flex flex-col sm:flex-row items-center gap-6 bg-white/90 rounded-[30px] py-8 px-8 md:px-9 shadow-[0_20px_50px_rgba(60,90,30,0.12)] text-[#24310f] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_64px_rgba(60,90,30,0.2)]"
      >
        <span className="flex-none w-[74px] h-[74px] rounded-full grad-vert text-white flex items-center justify-center">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21 C 6 17 4 10 6 5 C 12 6 18 9 18 14 C 18 18 15 21 12 21 Z"></path>
            <path d="M12 21 C 12 15 10 10 7 7"></path>
          </svg>
        </span>
        <span className="flex-1 flex flex-col gap-1.5 text-center sm:text-left">
          <span className="flex items-center justify-center sm:justify-start gap-2.5">
            <span className="text-2xl font-extrabold">Mon jardin d&apos;outils</span>
            <span className="cuedot"></span>
          </span>
          <span className="text-[15px] text-[#55613f] leading-normal">
            13 technos à faire fleurir par catégorie — une page entière pour jouer avec.
          </span>
        </span>
        <span className="inline-flex items-center gap-2 font-bold text-[15px] text-[#567d0e] whitespace-nowrap transition-transform group-hover:translate-x-2">
          Explorer
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12 L19 12 M13 6 L19 12 L13 18"></path>
          </svg>
        </span>
      </Link>

      <Link
        href="/chemin"
        className="group flex-1 flex flex-col sm:flex-row items-center gap-6 bg-white/90 rounded-[30px] py-8 px-8 md:px-9 shadow-[0_20px_50px_rgba(60,90,30,0.12)] text-[#24310f] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_64px_rgba(60,90,30,0.2)]"
      >
        <span className="flex-none w-[74px] h-[74px] rounded-full grad-vert text-white flex items-center justify-center">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="19" r="2.2"></circle>
            <circle cx="18" cy="5" r="2.2"></circle>
            <path d="M6 16.5 C 6 10 18 14 18 7.5" strokeDasharray="3 3"></path>
          </svg>
        </span>
        <span className="flex-1 flex flex-col gap-1.5 text-center sm:text-left">
          <span className="flex items-center justify-center sm:justify-start gap-2.5">
            <span className="text-2xl font-extrabold">Mon chemin</span>
            <span className="cuedot"></span>
          </span>
          <span className="text-[15px] text-[#55613f] leading-normal">
            Du commerce au code — trois étapes à dérouler, une page pour raconter l&apos;histoire.
          </span>
        </span>
        <span className="inline-flex items-center gap-2 font-bold text-[15px] text-[#567d0e] whitespace-nowrap transition-transform group-hover:translate-x-2">
          Découvrir
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12 L19 12 M13 6 L19 12 L13 18"></path>
          </svg>
        </span>
      </Link>
    </div>
  );
};
