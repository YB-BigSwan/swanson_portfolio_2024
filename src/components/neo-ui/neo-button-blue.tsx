import { Button } from "../ui/button";
import Link from "next/link";

type buttonTypes = {
  buttonImage?: React.ReactNode;
  buttonText: string;
  tooltipText?: string;
  buttonHref: string;
};

const NeoButtonBlue = ({
  buttonImage,
  buttonText,
  buttonHref = "/",
}: buttonTypes) => (
  <div className="relative">
    <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black rounded-md"></div>
    <div className="relative border-2 border-gray-50 rounded-md">
      <Link
        href={buttonHref}
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="flex flex-row gap-2 justify-center items-center p-5 bg-blue-300 rounded-sm hover:bg-indigo-100">
          {buttonImage}
          <p className="text-lg font-light text-black">{buttonText}</p>
        </Button>
      </Link>
    </div>
  </div>
);

export default NeoButtonBlue;
