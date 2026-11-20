import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden transition-colors duration-300">
      {/* Dynamic Ambient Background Effect */}
      <BackgroundEffect />

      {/* Sticky Interactive Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Projects />
        <Skills />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
