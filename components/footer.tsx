import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-muted">
      <Section className="py-2 flex justify-center">
        <p className=" text-sm text-foreground">@copyright 2025 Mario Souvily-Grieco</p>
      </Section>
    </footer>
  );
};