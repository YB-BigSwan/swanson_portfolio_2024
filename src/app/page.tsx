import HeroSection from "@/components/homepage/hero-section";
import NavBar from "@/components/general/navbar";
import About from "@/components/homepage/about";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <About />
    </main>
  );
}
