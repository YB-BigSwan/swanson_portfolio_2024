import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import LinkedInSVG from "@/assets/linkedin.svg";
import GitHubSVG from "@/assets/github.svg";
import CVSVG from "@/assets/cv.svg";
import Portrait from "@/assets/pixel-portrait.webp";
import Image from "next/image";

const HeroSection = () => (
  <div className="w-full h-dvh flex justify-center items-center bg-[url('../assets/hero-background.webp')] bg-cover bg-no-repeat">
    <div className="w-4/5 flex flex-row justify-between items-center">
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 className="text-7xl font-semibold bg-gradient-to-br from-violet-950 to-indigo-950 bg-clip-text text-transparent">
          Stephen Swanson
        </h1>

        <p className="text-indigo-950 text-2xl font-normal">
          Frontend focused full-stack developer
        </p>
        <div className="flex flex-row gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="flex flex-row gap-2 justify-center items-center p-5">
                  <LinkedInSVG />
                  <p className="text-lg font-light">LinkedIn</p>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visit my LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="flex flex-row gap-2 justify-center items-center p-5">
                  <GitHubSVG />
                  <p className="text-lg font-light">GitHub</p>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visit my GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="flex flex-row gap-2 justify-center items-center p-5">
                  <CVSVG />
                  <p className="text-lg font-light">Download CV</p>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download my CV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Image src={Portrait} alt="A pixel art portrait of Stephen" />
    </div>
  </div>
);

export default HeroSection;
