import Hero from "@/components/hero";
import Expertise from "@/components/expertise";
import Projects from "@/components/projects";
import Principles from "@/components/principles";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Hero />
      <Expertise />
      <Projects />
      <Principles />
      <TechStack />
    </main>
  );
}
