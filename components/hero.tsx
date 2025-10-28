import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <section className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-start gap-6">
        <div className="flex-[3] w-full flex flex-col gap-2 items-start text-left">
          <h2 className="font-caption text-5xl text-primary">Mario Souvily-Grieco</h2>
          <h3 className="text-3xl font-caption">Développeur Web Fullstack</h3>
          <p className="mb-4 max-w-lg text-left">
            Après plus de vingt ans d’expérience dans le commerce et le management,
            j’ai choisi de transformer ma curiosité pour le digital en véritable métier.
            Aujourd’hui, je suis développeur web full stack, animé par la volonté de créer
            des applications performantes, utiles et centrées sur l’utilisateur.
          </p>
          <p className="mb-4 max-w-lg text-left">
            Formé intensivement chez <strong>O’clock</strong>, j’y ai acquis des bases solides
            en développement front-end et back-end. J’ai ensuite intégré
            <a href="https://www.wiser.com" target="_blank" className="text-primary"> Wiser </a>
            pour un stage de six mois, où j’ai contribué à la conception d’une plateforme
            de benchmark produit, tout en évoluant dans un environnement agile et collaboratif.
          </p>
          <p className="mb-4 max-w-lg text-left">
            Mon objectif : continuer à progresser, relever de nouveaux défis techniques et
            humains, et rejoindre une équipe où la qualité du code, l’innovation et
            l’esprit d’équipe sont au cœur des projets.
            Passionné, curieux et rigoureux, j’aime transformer les idées en solutions concrètes
            qui font la différence.
          </p>
        </div>
        <div className="px-5 mt-15">
          <Image src="/images/moi-1.png"
            width={200}
            height={200}
            className="h-auto max-w-50 clip-circle"
            alt="Photo de Mario"
            priority
          />
        </div>
      </section>

    </>
  );
};
