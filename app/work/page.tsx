import Heading from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const workExperiencePage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Work Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Work Experience</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            August 2020 - Present
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Full Stack Developer, <br /> Cyvo, Dubai, UAE
            </div>
            <p className=" font-poppins text-base w-full text-primary max-sm:text-xs">
              At Cyvo, I work as a Full Stack Developer using JavaScript,
              TypeScript, React, Vue, Next.js for frontend development, and
              Node.js for backend development. I design APIs, manage databases,
              and develop performance-driven applications. Additionally, I have
              contributed to the development of production-ready Android and iOS
              applications using React Native.
            </p>
          </div>
        </div>
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            December 2016 - March 2020
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Computer Science Engineer, <br /> Atos Syntel, Chennai, India
            </div>
            <p className=" font-poppins text-base w-full text-primary max-sm:text-xs">
              At Atos Syntel, I collaborated with American Express to enhance
              their Global Document Delivery application, stabilizing the system
              and adding new features. I implemented JavaScript functions into
              React components, applied extensive automations to bridge
              development and operations, and ensured non-functional
              requirements such as availability, performance, and security were
              met.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default workExperiencePage;
