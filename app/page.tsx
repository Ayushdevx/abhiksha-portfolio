import { Contact } from "@/components/main/contact";
import { ModernAbout } from "@/components/modern/modern-about";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { ElectronicsSkills } from "@/components/main/electronics-skills";
import { Testimonials } from "@/components/main/testimonials";
import { Achievements } from "@/components/main/achievements";
import { ParticleBackground } from "@/components/effects/particle-background";

export default function Home() {
  return (
    <main className="h-full w-full relative">
      <ParticleBackground />
      <Hero />
      <div className="flex flex-col gap-20 relative z-10">
        <ModernAbout />
        <Achievements />
        <ElectronicsSkills />
        <Encryption />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
