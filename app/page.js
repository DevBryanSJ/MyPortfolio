import { GridBackgroundDemo } from "@/components/common/gridBackground";
import HeroSection, { About, Projects, Experience, Contact } from "@/components/common/template";

export default function Home() { 

  return (
    <>
      <div className="w-full h-auto space-y-16 pb-20">
        <HeroSection />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
