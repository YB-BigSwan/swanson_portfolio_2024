import LinkedInSVG from "@/assets/linkedin.svg";
import GitHubSVG from "@/assets/github.svg";
import CVSVG from "@/assets/cv.svg";
import Portrait from "@/assets/pixel-portrait.webp";
import Image from "next/image";
import NeoButton from "../neo-ui/neo-button";
import { Overpass_Mono } from "next/font/google";

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const HeroSection = () => (
  <div className="w-full h-dvh flex justify-center items-center bg-[url('../assets/hero-background.webp')] bg-cover bg-no-repeat">
    <div className="w-4/5 flex flex-row justify-between items-center">
      <div className="flex flex-col justify-center items-start gap-8">
        <h1
          className={`${overpassMono.className} text-7xl font-semibold text-indigo-950`}
        >
          Stephen Swanson
        </h1>

        <p
          className={`${overpassMono.className} text-indigo-950 text-2xl font-normal`}
        >
          Frontend focused full-stack developer
        </p>
        <div className="flex flex-row gap-2">
          <NeoButton
            buttonImage={<LinkedInSVG />}
            buttonText="LinkedIn"
            tooltipText="Visit my LinkedIn"
          />

          <NeoButton
            buttonImage={<GitHubSVG />}
            buttonText="GitHub"
            tooltipText="Check out my GitHub"
          />

          <NeoButton
            buttonImage={<CVSVG />}
            buttonText="Download CV"
            tooltipText="Download my CV"
          />
        </div>
      </div>
      <Image src={Portrait} alt="A pixel art portrait of Stephen" />
    </div>
  </div>
);

export default HeroSection;
