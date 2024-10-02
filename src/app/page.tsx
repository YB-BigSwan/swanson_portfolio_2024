import HeroSection from "@/components/homepage/hero-section";
import NavBar from "@/components/general/navbar";
import About from "@/components/homepage/about";
import ProjectsCarousel from "@/components/homepage/projects-carousel";
import Skills from "@/components/homepage/skills";
import ContactForm from "@/components/homepage/contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stephen Swanson</title>
        <meta name="author" content="Stephen Swanson" />
        <meta
          name="description"
          content="Hi! Welcome to my portfolio website! Here, you can learn about about my and check out the cool projects I've worked on"
        />
        <meta
          name="keywords"
          content="Web Development, Frontend, Backend, Full-stack, Swanson Portfolio, Portfolio, Coding, Software Development, Full-Stack Development, Stephen, Swanson, Stephen Swanson, YB-BigSwan, swansondev"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Stephen Swanson" />
        <meta
          property="og:description"
          content="Hi! Welcome to my portfolio website! Here, you can learn about about my and check out the cool projects I've worked on"
        />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://www.swansondev.me/" />
      </Head>
      <main>
        <NavBar />
        <div id="#top">
          <HeroSection />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <ProjectsCarousel />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
