import { Overpass_Mono } from "next/font/google";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import NeoCard from "../neo-ui/neo-card";
import cardData from "../../json/project-cards.json";

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const ProjectsCarousel = () => (
  <div className="w-full flex justify-center items-center">
    <div className="w-11/12 md:w-4/5  flex flex-col justify-center items-start mb-20">
      <h3 className={`${overpassMono.className} text-4xl text-indigo-950 mb-5`}>
        Projects
      </h3>
      <Carousel className="w-full" opts={{ loop: true, dragThreshold: 10 }}>
        <div className="flex flex-col">
          <CarouselContent>
            {cardData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1 flex flex-row">
                  <NeoCard
                    cardTitle={item.cardTitle}
                    cardSubheading={item.cardSubheading}
                    cardDescription={item.cardDescription}
                    badges={item.badges.map((badge, badgeIndex) => ({
                      badgeIcon: badge.badgeIcon, // Pass the URL directly
                      badgeName: badge.badgeName,
                    }))}
                    buttonText={item.buttonText}
                    buttonHref={item.buttonHref}
                    imageSource={item.imageSource}
                    imageAltText={item.imageAltText}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  </div>
);

export default ProjectsCarousel;
