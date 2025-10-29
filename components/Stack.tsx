import Image from "next/image";
import { Section } from "./Section";


export const Stack = () => {
  return (
    <Section>
      <div>
        <div className="p-2 flex flex-col gap-4 items-center text-center">
          <p className="text-4xl font-bold text-primary mb-8 mt-8">Mes Stacks</p>
          <div className=" flex flex-col gap-1 text-center items-center justify-center space-y-1 text-lg">
            <p>Voici une liste des stacks que j'utilise pour développer mes projets.
              Cette liste est non exhaustive et est en constante évolution.</p>
            <p>Je suis capable de m'adapter à d'autres stacks si nécessaire.</p>
            <p>Ce que j'aime avant tout, c'est apprendre. Motivé, curieux et persévérant sont mes plus grands atouts que je met à profit sur chaques projets.
              La documentation est mon meilleur ami et je m'en sert à fond pour comprendre et apprendre de nouvelles choses.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-x-20 md:gap-y-8 place-items-center">
            <Image src="/images/back-end-1.png" alt="Backend" width={340} height={340} className="object-contain" />
            <Image src="/images/front_end.png" alt="Frontend" width={340} height={340} className="object-contain" />
            <Image src="/images/integration-1.png" alt="Integration" width={340} height={340} className="object-contain" />
            <Image src="/images/gestion.png" alt="Integration" width={340} height={340} className="object-contain" />
          </div>
        </div>
      </div>

    </Section >
  );
};