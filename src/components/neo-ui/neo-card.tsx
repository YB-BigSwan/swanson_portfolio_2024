"use client";
import { Card, CardContent } from "../ui/card";
import { CldImage } from "next-cloudinary";
import NeoButtonBlue from "./neo-button-blue";
import { Badge } from "../ui/badge";
import Image from "next/image";

type BadgeType = {
  badgeIcon: string;
  badgeName: string;
};

type cardTypes = {
  cardTitle: string;
  cardSubheading: string;
  cardDescription: string;
  badges: BadgeType[];
  buttonText: string;
  imageSource: string;
  imageAltText: string;
};

const NeoCard = ({
  cardTitle,
  cardSubheading,
  cardDescription,
  badges,
  buttonText,
  imageSource,
  imageAltText,
}: cardTypes) => (
  <div className="relative">
    {/* Background shadow */}
    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black"></div>
    {/* Actual card */}
    <div className="relative border-2 border-black">
      <Card className="bg-indigo-600">
        <CardContent className="flex flex-row p-0">
          {/* Text area */}
          <div className="p-7 text-gray-50 flex flex-col justify-between items-start">
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-4xl">{cardTitle}</h3>
              <p className="font-semibold text-lg">{cardSubheading}</p>
              <p className="font-normal max-w-lg text-sm">{cardDescription}</p>
              {/* Badge */}
              <div className="flex flex-row gap-2 mb-8">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="bg-gray-50 text-black flex flex-row justify-center items-center gap-2 w-fit"
                  >
                    <Image
                      src={badge.badgeIcon}
                      alt={badge.badgeName}
                      width={20}
                      height={20}
                    />
                    {badge.badgeName}
                  </Badge>
                ))}
              </div>
            </div>
            <NeoButtonBlue buttonText={buttonText} />
          </div>
          {/* Image */}
          <CldImage
            src={imageSource}
            width="500"
            height="350"
            alt={imageAltText}
            crop={{
              type: "auto",
              source: true,
            }}
          />
        </CardContent>
      </Card>
    </div>
  </div>
);

export default NeoCard;
