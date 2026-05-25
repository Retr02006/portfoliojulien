import { AmbientBackground } from "@/components/backgrounds/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CV } from "@/components/sections/CV";
import { Projects } from "@/components/sections/Projects";
import { Stages } from "@/components/sections/Stages";
import { Veille } from "@/components/sections/Veille";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <CV />
          <Projects />
          <Stages />
          <Veille />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
