import { cn } from "@/lib/utils";

export const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={cn("max-w-3xl px-4 m-auto", className)}>
      <div className="flex flex-col gap-4 p-4">
        {children}
      </div>
    </section>
  )
};