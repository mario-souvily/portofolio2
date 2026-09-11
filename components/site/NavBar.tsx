"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/jardin", label: "Mon jardin d'outils" },
  { href: "/chemin", label: "Mon chemin" },
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="relative flex justify-center pt-6 px-4">
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8 py-3 px-5 md:px-7 bg-white/80 border border-white rounded-full shadow-[0_10px_34px_rgba(60,90,30,0.1)]">
        <Link href="/" className="flex items-center gap-2 font-bold text-[17px] text-[#24310f]">
          <span className="w-3 h-3 rounded-full grad-vert inline-block"></span>
          mario.dev
        </Link>
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[15px] transition-colors hover:text-[#6fb50a]",
                active
                  ? "font-bold text-[#24310f] border-b-2 border-[#6fb50a] pb-0.5"
                  : "font-medium text-[#3a4433]"
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <a
          href="mailto:mario.souvily@gmail.com"
          className="grad-vert text-white font-bold text-[15px] py-2.5 px-6 rounded-full shadow-[0_10px_24px_rgba(90,140,20,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(90,140,20,0.3)]"
        >
          Me contacter
        </a>
      </nav>
    </div>
  );
};
