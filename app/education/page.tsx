import Heading from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            2013 - 2016
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Master of Computer Applications, <br /> SRM University
            </div>
            <p className=" font-poppins text-base w-full text-primary max-sm:text-xs">
              I completed my Master of Computer Applications at SRM University.
              The program provided me with a comprehensive education in computer
              science, emphasizing both theoretical knowledge and practical
              skills. It has equipped me with the necessary expertise to excel
              in various areas of web development and software engineering.
            </p>
          </div>
        </div>
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            2010 - 2013
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Computer Applications, <br /> NIT
            </div>
            <p className=" font-poppins text-base w-full text-primary max-sm:text-xs">
              I completed my Bachelor of Computer Applications at NIT. This
              program laid a strong foundation in computer science principles
              and programming. It introduced me to various aspects of software
              development and honed my skills in coding, problem-solving, and
              system design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
