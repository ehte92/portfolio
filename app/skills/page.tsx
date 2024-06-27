import Heading from "@/components/heading";
import SkillsFooter from "@/components/skills-footer";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "/public/html.png";
import css from "/public/css.png";
import node from "/public/node.png";
import js from "/public/js.png";
import ts from "/public/ts.png";
import react from "/public/react.png";
import nextjs from "/public/nextjs.jpeg";
import tailwind from "/public/tailwindcss.png";
import github from "/public/github.png";
import vscode from "/public/vscode.png";

const skillPage = () => {
  const language = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
  ];
  const framework = [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "node", img: node },
    { alt: "tailwind", img: tailwind },
    { alt: "github", img: github },
    { alt: "vscode", img: vscode },
  ];

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>

        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          I am a Full Stack Developer with extensive experience in HTML5, CSS3,
          JavaScript, TypeScript, and React. I specialize in building web
          applications using JavaScript, TypeScript, React, Next.js, and
          Node.js.
        </p>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={language} />
          </div>
        </div>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillPage;
