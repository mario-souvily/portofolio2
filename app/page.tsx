
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Hero } from "./components/hero";
import { Status } from "./components/status";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Status />
      </main>
      <Footer />
    </>
  );
}
