import { Overpass_Mono } from "next/font/google";
import NeoTechButton from "../neo-ui/neo-tech-button";
import cardData from "../../json/project-cards.json";
import languages from "../../json/lang.json";
import technologies from "../../json/tech.json";
import { Separator } from "../ui/separator";
import React from "react";

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const customTooltips: Record<string, string> = {
  HTML: "Used as JSX on most sites",
  CSS: "CSS and TailwindCSS used on most frontends",
  Python: "Mainly used for data analysis",
  "GitHub CI/CD":
    "Used for automating linting, testing, build, and deployment on hosted projects",
  "GitLab CI/CD": "Opiskelijoiden Mielipide Gallup",
  Docker: "Mostly used for running local ccontainerized databases",
  Cloudinary: "swansondev.me",
};

const getProjectsForLanguage = (languageName: string) => {
  const projects = cardData.filter((project) =>
    project.badges.some((badge) => badge.badgeName.includes(languageName))
  );
  return projects.map((project) => project.cardTitle);
};

const Skills = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-4/5  flex flex-col justify-between items-start mb-10 gap-20">
        <div>
          <h2
            className={`${overpassMono.className} text-4xl text-indigo-950 mb-5`}
          >
            Used Languages
          </h2>
          <div className="flex flex-wrap gap-4">
            {languages.map((language, index) => {
              const projects = getProjectsForLanguage(language.name);
              const customTooltip = customTooltips[language.name];

              const tooltipContent = customTooltip ? (
                customTooltip
              ) : (
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                  {projects.map((project, i) => (
                    <React.Fragment key={i}>
                      <li>{project}</li>
                      <Separator />
                    </React.Fragment>
                  ))}
                </ul>
              );

              return (
                <NeoTechButton
                  key={index}
                  buttonImage={language.icon}
                  buttonText={language.name}
                  tooltipText={tooltipContent}
                />
              );
            })}
          </div>
        </div>

        <div className="">
          <h2
            className={`${overpassMono.className} text-4xl text-indigo-950 mb-5`}
          >
            Leveraged Technologies
          </h2>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, index) => {
              const projects = getProjectsForLanguage(tech.name);
              const customTooltip = customTooltips[tech.name];

              const tooltipContent = customTooltip ? (
                customTooltip
              ) : (
                <ul className="list-none p-0 m-0">
                  {projects.map((project, i) => (
                    <React.Fragment key={i}>
                      <li>{project}</li>
                      <Separator />
                    </React.Fragment>
                  ))}
                </ul>
              );

              return (
                <NeoTechButton
                  key={index}
                  buttonImage={tech.icon}
                  buttonText={tech.name}
                  tooltipText={tooltipContent}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
