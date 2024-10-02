import LinkedInSVG from "@/assets/linkedin.svg";
import GitHubSVG from "@/assets/github.svg";
import CVSVG from "@/assets/cv.svg";
import Portrait from "@/assets/pixel-portrait.webp";
import Image from "next/image";
import NeoButton from "../neo-ui/neo-button";
import { Overpass_Mono } from "next/font/google";
import Link from "next/link";

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const HeroSection = () => (
  <div className="w-full h-screen flex justify-center items-start md:items-center bg-[url('../assets/hero-background.webp')] bg-cover bg-no-repeat">
    {/* Main Container */}
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-4 lg:px-0 lg:w-4/5">
      {/* Text Container */}
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-8 mt-4 lg:mt-0 lg:items-start">
        {/* Responsive Heading */}
        <h1
          className={`${overpassMono.className} text-3xl sm:text-4xl md:text-5xl md:mt-10 lg:text-6xl font-semibold text-indigo-950 text-center md:text-left`}
        >
          Stephen Swanson
        </h1>

        {/* Responsive Subheading */}
        <h2
          className={`${overpassMono.className} text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-indigo-950 text-center md:text-left`}
        >
          Frontend focused full-stack developer
        </h2>

        {/* Responsive Button Container */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:flex-row sm:justify-center md:justify-start">
          <Link
            href="https://www.linkedin.com/in/stephen-swanson-h/"
            target="_blank"
            rel="noreferrer noopener"
            passHref
          >
            <NeoButton
              buttonImage={<LinkedInSVG />}
              buttonText="LinkedIn"
              tooltipText="Visit my LinkedIn"
            />
          </Link>
          <Link
            href="https://github.com/YB-BigSwan"
            target="_blank"
            rel="noreferrer noopener"
            passHref
          >
            <NeoButton
              buttonImage={<GitHubSVG />}
              buttonText="GitHub"
              tooltipText="Check out my GitHub"
            />
          </Link>
          <Link
            href="/Stephen_Swanson_CV.pdf"
            download="Stephen_Swanson_CV.pdf"
            target="_blank"
            rel="noreferrer noopener"
            passHref
          >
            <NeoButton
              buttonImage={<CVSVG />}
              buttonText="Download CV"
              tooltipText="Download my CV"
            />
          </Link>
        </div>
      </div>

      {/* Keep the Image Container Unchanged */}
      <div className="sm:flex sm:justify-center sm:items-center sm:w-full sm:h-full lg:w-1/2 lg:h-1/2 flex-shrink-0 mb-8 md:mb-0">
        <Image
          src={Portrait}
          alt="A pixel art portrait of Stephen"
          quality={100}
          width={625} // Corresponding width for responsive sizing
          height={525} // Corresponding height for responsive sizing
          className="mt-24"
        />
      </div>
    </div>
  </div>
);

export default HeroSection;
