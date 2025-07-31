import { Section } from "./section";
export const Header = () => {
  return (
    <header>
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary-foreground">Mario Souvily-grieco.com</h1>
        <p>Développeur Fullstack</p>
      </section>
    </header>
  );
};