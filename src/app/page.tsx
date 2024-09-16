import HeroSection from "@/components/homepage/hero-section";
import NavBar from "@/components/general/navbar";
import About from "@/components/homepage/about";
import ProjectsCarousel from "@/components/homepage/projects-carousel";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <ProjectsCarousel />
      </div>
    </main>
  );
}
