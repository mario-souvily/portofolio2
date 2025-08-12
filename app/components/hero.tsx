
export const Hero = () => {
  return (
    <section className="flex max-md:flex-col items-start">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Mario Souvily-Grieco</h2>
        <h3 className="text-3xl font-caption">Développeur web Fullstack</h3>
        <p className="mb-4">
          Après plus de 20 ans d'expérience dans le domaine du commerce<br />
          en tant que commercial et responsable de magasin,<br />
          j'ai décidé de me reconvertir dans le développement web.<br />
          Aujourd'hui, je suis développeur web fullstack<br />
          passionné par la création d'applications web et web mobile.
        </p>
        <p className="mb-4">
          J'ai suivi une formation intensive de 9 mois <br />
          en développement web fullstack chez O'clock. <br />
          Par la suite, j'ai effectue un stage de 6 mois chez <br />
          <a href="https://www.wiser.com" target="_blank" className="text-primary">Wiser</a> <br />
          où j'ai pu appliquer mes compétences et découvrir le <br />
          métier de développeur web. <br />
          Aujourd'hui, je souhaite poursuivre ma montée en compétences <br />
          vers une nouvelle formation en tant que concepteur développeur d'applications <br />
          je suis donc à la recherche d'une entreprise <br />
          qui me permettra de faire cette formation. <br />
        </p>
      </div>
      <div className="flex-[2] flex justify-center md:justify-start">
        <img src="/images/image-moi.png"
          className="w-full h-auto max-w-48 rounded-lg  md:mt-20"
          alt="Photo de Mario"
        />
      </div>
    </section>
  );
};
