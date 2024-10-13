import Navbar from '@/components/Navbar';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="px-6">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
