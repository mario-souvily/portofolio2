import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
      </main>
    </>
  );
}
