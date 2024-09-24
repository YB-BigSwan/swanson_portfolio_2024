import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import Image from "next/image";

type buttonTypes = {
  buttonImage: string;
  buttonText: string;
  tooltipText?: React.ReactNode;
};

const NeoTechButton = ({
  buttonImage,
  buttonText,
  tooltipText,
}: buttonTypes) => (
  <TooltipProvider>
    <Tooltip>
      <div className="relative">
        <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black rounded-md"></div>
        <div className="relative border-2 border-gray-50 rounded-md">
          <TooltipTrigger asChild>
            <Button className="flex flex-row gap-2 justify-center items-center p-5 rounded-sm bg-blue-300 text-gray-950 hover:bg-indigo-100">
              <Image
                src={buttonImage}
                alt={buttonText}
                width={30}
                height={30}
              />
              <p className="text-lg font-normal">{buttonText}</p>
            </Button>
          </TooltipTrigger>
        </div>
      </div>

      {/* Tooltip content */}
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default NeoTechButton;
