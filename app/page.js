import { GridBackgroundDemo } from "@/components/common/gridBackground";
import HeroSection, { About, Projects } from "@/components/common/template";

export default function Home() { 

  return (
    <>
      <div className="w-full h-auto">
        <HeroSection />
        <About />
        <Projects />
      </div>
    </>
  );
}
