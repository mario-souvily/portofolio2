import { Blobs } from "../components/site/Blobs";
import { ContactCta } from "../components/site/ContactCta";
import { NavBar } from "../components/site/NavBar";
import { Hero } from "../components/home/Hero";
import { ProjectCarousel } from "../components/home/ProjectCarousel";
import { TeaserCards } from "../components/home/TeaserCards";

export default function Home() {
  return (
    <main className="page-organique font-outfit relative min-h-screen overflow-hidden flex-1">
      <Blobs />
      <div className="relative">
        <div className="max-w-[1440px] mx-auto">
          <NavBar />
          <Hero />
        </div>
        {/* Le carrousel prend toute la largeur : les cartes de côté
            dépassent sur les bords de l'écran au lieu d'être coupées */}
        <ProjectCarousel />
        <div className="max-w-[1440px] mx-auto">
          <TeaserCards />
          <ContactCta />
        </div>
      </div>
    </main>
  );
}
