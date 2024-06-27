import Aboutfooter from "@/components/about-footer";
import Heading from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";

const page = () => {
  const items = [
    { hobby: "Web Projects" },
    { hobby: "Open-Source" },
    { hobby: "New Technologies" },
    { hobby: "Tech Blogs" },
    { hobby: "Traveling" },
    { hobby: "Music" },
    { hobby: "Sci-Fi Movies" }
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Software Engineer And Web <br /> Developer, Based On Earth.
        </Heading>

        <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
          I am a dedicated Full Stack Developer based in Dubai, UAE, originally
          from Kolkata, West Bengal, India. With over 7 years of experience in
          web development, I am passionate about creating dynamic and engaging
          web projects and actively contributing to open-source communities. My
          expertise in JavaScript, TypeScript, Node.js, React.js and Next.js
          allows me to deliver pixel-perfect designs and highly responsive
          interfaces that enhance user experiences. I pride myself on my
          attention to detail and my ability to deliver projects efficiently.
          Throughout my career, I have successfully led and executed a range of
          projects, from CRM systems to retail applications, consistently
          exceeding client expectations and achieving top-notch performance and
          user satisfaction.
        </p>
      </div>
      <div className="w-full flex flex-row justify-between max-lg:flex-col ">
        <Aboutfooter />
      </div>
      <div className="block">
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
