import { Card } from "@/components/ui/card";
import { Section } from "./Section";
export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <Card className="flex-[2] flex flex-col gap-2">
        Sideproject
      </Card>

      <div className="flex-[1]">
        <div>
          Work
        </div>
        <div>
          Contact
        </div>
      </div>
    </Section>
  );
};