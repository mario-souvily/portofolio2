export const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className="max-w-3xl px-4 m-auto">
      <div className="flex flex-col gap-4 p-4">
        {children}
      </div>
    </section>
  )
};