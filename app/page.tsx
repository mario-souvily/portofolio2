import { Header } from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="text-center">
          <p className="mt-4 text-foreground">Bienvenue sur mon portfolio !</p>
        </div>
      </main>
    </>
  );
}
