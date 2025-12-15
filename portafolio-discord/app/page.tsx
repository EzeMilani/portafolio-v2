import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center">
      <Navbar />

      {/* Sección Hero añadida */}
      <Hero />

      {/* Espacio temporal para seguir probando el scroll */}
      <div className="h-[50vh]"></div>
    </main>
  );
}
