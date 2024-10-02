import { Overpass_Mono } from "next/font/google";

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const About = () => (
  <div className="w-full flex justify-center items-center mt-0 lg:mt-10">
    <div className="w-11/12 md:w-4/5  flex flex-col lg:flex-row justify-between items-center mb-20">
      <div className="w-full lg:w-2/5">
        <h3
          className={`${overpassMono.className} text-4xl text-indigo-950 mb-5`}
        >
          About
        </h3>
        <div className="relative mb-10 lg:mb-0">
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black"></div>
          <div className="relative border-2 border-black">
            <div className="flex flex-col gap-2 justify-center items-center p-2 md:p-5  bg-indigo-600">
              <p className="text-lg font-light text-gray-50 p-5">
                A frontend-focused <b className="font-bold">full-stack</b>{" "}
                developer from Utah, United States, now living permanently in
                Helsinki, Finland.
                <br />
                <br />
                With a major in{" "}
                <b className="font-bold">software development</b> and a minor in{" "}
                <b className="font-bold">UX design</b>, I&apos;m passionate
                about building <b className="font-bold">robust</b>,{" "}
                <b className="font-bold">functional</b>, and{" "}
                <b className="font-bold">accessible</b> websites and web
                services.
                <br />
                <br />
                In my free time I like to work on ESP32 and ESP8266 based
                embedded and IoT projects, do design challenges, work on side
                projects, and practice classical guitar.
                <br />
                <br />
                To see more of <b className="font-bold">my work</b> check out my
                recent <b className="font-bold">projects below</b>!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <h3
          className={`${overpassMono.className} text-4xl text-indigo-950 mb-5`}
        >
          Experience
        </h3>
        <div className="relative">
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black"></div>
          <div className="relative border-2 border-black">
            <div className="flex flex-col gap-2 justify-center items-start p-2 md:p-5 bg-indigo-600">
              <p className="text-lg font-light text-gray-50 p-5">
                <b className="font-bold">Full-stack or frontend developer</b> •
                [your company name here]
                <br />
                <br />
                <b className="font-bold">Verkkovastaava</b> (present) •
                Satakuntalainen Osakunta
                <br />
                <br />
                <b className="font-bold">Solve the SDGs hackathon</b> • Aalto
                University
                <br />
                <br />
                <b className="font-bold">BRiDG3 24Hack hackathon</b> • Tampere
                University, category winner
                <br />
                <br />
                <b className="font-bold">Full-stack developer</b> • Sibelius
                Academy Project
                <br />
                <br />
                <b className="font-bold">Student</b> • BITE @ Haaga-Helia UAS
                (Software Development)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
