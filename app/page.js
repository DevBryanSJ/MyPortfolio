import { GridBackgroundDemo } from "@/components/common/gridBackground";
import HeroSection, { About } from "@/components/common/template";

export default function Home() { 

  return (
    <>
      <div className="w-full h-auto">
        <HeroSection />
        <About />
      </div>
    </>
  );
}
