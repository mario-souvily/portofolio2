import { cn } from "@/lib/utils";

export const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={cn(" m-auto", className)}>
      <div className="flex flex-col gap-10 items-start">
        {children}
      </div>
    </section>
  )
};