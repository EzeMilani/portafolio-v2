import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col items-center w-full gap-10">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
