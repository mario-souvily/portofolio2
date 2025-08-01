export const Hero = () => {
  return (
    <section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="text-4xl font-bold">Hello, I'm Mario</h2>
        <h3 className="text-2xl font-bold">Développeur Fullstack</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>
      <div className="flex-1">
        <Image src="/images/hero.jpg" alt="Hero" width={500} height={500} />
      </div>
    </section>
  )
}
