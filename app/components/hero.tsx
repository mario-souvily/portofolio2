
export const Hero = () => {
  return (
    <section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl text-primary">Mario Souvily-Grieco</h2>
        <h3 className="text-3xl font-caption">Développeur web Fullstack</h3>
        <p>Aprés plus de 20 ans d'expérience dans le domaine du commerce
          en tant que commercial et responsable de magasin,
          j'ai décidé de me reconvertir dans le développement web.
          Aujourd'hui, je suis développeur fullstack
          passionné par la création d'applications web et web mobile.
        </p>
        <p>
          J'ai suivi une formation intensive de 9 mois en développement web fullstack chez O'clock où
          j'ai acquis des compétences dans les technologies suivantes :
        </p>
      </div>
      <div className="flex-[1]">
        <img src="/images/image-moi.png"
          className="w-full h-auto max-w-48 rounded-lg"
          alt="Photo de Mario"
        />
      </div>
    </section>
  );
};
