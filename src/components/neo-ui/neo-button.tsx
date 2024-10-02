import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { Button } from "../ui/button";

type buttonTypes = {
  buttonImage?: React.ReactNode;
  buttonText: string;
  tooltipText?: string;
};

const NeoButton = ({ buttonImage, buttonText, tooltipText }: buttonTypes) => (
  <TooltipProvider>
    <Tooltip>
      <div className="relative">
        <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black rounded-md"></div>
        <div className="relative border-2 border-gray-50 rounded-md hover:translate-x-1 hover:translate-y-1 focus:translate-x-1 focus:translate-y-1 transition 300 ease">
          <TooltipTrigger asChild>
            <Button className="flex flex-row gap-2 justify-center items-center p-5 rounded-sm">
              {buttonImage}
              <p className="text-lg font-light">{buttonText}</p>
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

export default NeoButton;
