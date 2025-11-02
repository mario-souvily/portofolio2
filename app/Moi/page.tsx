"use client";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../components/footer";
import { Header } from "../../components/Header";

export default function Moi() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 flex flex-col items-center text-center flex-1">
        <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
          <div className="flex-[3] w-full flex flex-col gap-4 items-start text-left">
            <h1 className="font-caption text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary">Mario Souvily-Grieco</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-caption">Développeur Web Fullstack</h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                Après plus de vingt ans d'expérience dans le commerce et le management,
                j'ai choisi de transformer ma curiosité pour le digital en véritable métier.
                Aujourd'hui, je suis développeur web full stack, animé par la volonté de créer
                des applications performantes, utiles et centrées sur l'utilisateur.
              </p>

              <p>
                Formé intensivement chez <strong>O'clock</strong>, j'y ai acquis des bases solides
                en développement front-end et back-end. J'ai ensuite intégré
                <a href="https://www.wiser.com" target="_blank" className="text-primary"> Wiser </a>
                pour un stage de six mois, où j'ai contribué à la conception d'une plateforme
                de benchmark produit, tout en évoluant dans un environnement agile et collaboratif.
              </p>

              <p>
                Mon objectif : continuer à progresser, relever de nouveaux défis techniques et
                humains, et rejoindre une équipe où la qualité du code, l'innovation et
                l'esprit d'équipe sont au cœur des projets.
                Passionné, curieux et rigoureux, j'aime transformer les idées en solutions concrètes
                qui font la différence.
              </p>
            </div>
            <p className="mb-4 max-w-lg text-left">
              <Link href="/" className="text-base text-primary underline">Tu veux sortir ? C'est par ici</Link></p>

          </div>

          <div className="flex-[2] flex justify-center md:justify-start w-full md:w-auto">
            <Image
              src="/images/moi-1.png"
              width={200}
              height={200}
              className="h-auto w-full max-w-48 md:max-w-64 rounded-lg animate-rotate-once"
              alt="Photo de Mario"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
