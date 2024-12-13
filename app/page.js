import { GridBackgroundDemo } from "@/components/common/gridBackground";
import HeroSection, { About, Projects, Experience, Contact } from "@/components/common/template";

export default function Home() { 

  return (
    <>
      <div className="w-full h-auto pb-24">
        <HeroSection />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
