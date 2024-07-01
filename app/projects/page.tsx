import Heading from "@/components/heading";
import ProjectCards from "@/components/projects-card";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Quick Hooks - Reusable Hooks for React",
      description:
        "Currently under development. It is an open source project that provides a set of reusable hooks for React.",
      tags: ["React", "Typescript", "Shadcn Ui"],
      link: "https://github.com/ehte92/quick-hooks",
    },
    {
      title: "Contraction Timer",
      description:
        "Developed an app to help track and time contractions during labor for my wife.",
      tags: ["React", "Typescript", "Tailwind", "Zustand"],
      link: "https://github.com/ehte92/contraction-timer",
    },
    {
      title: "Pricer - Price Comparison Tool",
      description:
        "Developed a tool to compare prices of products across multiple online stores.",
      tags: ["Nextjs", "Typescript", "Tailwind", "MongoDB"],
      link: "https://github.com/ehte92/pricer",
    },
    {
      title: "Totok - Chat Application",
      description:
        "Built a Full Stack TikTok Clone Application using NextJS, Typescript, Google OAuth and Sanity",
      tags: ["Nextjs", "Typescript", "OAuth", "Sanity"],
      link: "https://github.com/ehte92/totok",
    },
    {
      title: "cliMate - Command Line Weather Tool",
      description:
        "Developed a command line tool to fetch and display weather information.",
      tags: ["Node", "JavaScript", "Express"],
      link: "https://github.com/ehte92/cliMate",
    },
    {
      title: "Local Weather App",
      description:
        "Created a local weather application to display current weather conditions based on the user's location.",
      tags: ["Vue", "Axios", "API"],
      link: "https://github.com/ehte92/local-weather",
    },
    {
      title: "Electro - E-commerce Platform",
      description:
        "Built an E-commerce platform focused on electronics with advanced filtering and search options.",
      tags: ["RNative", "Expo", "Freelancing", "Redux"],
      link: "https://github.com/ehte92/electro",
    },
    {
      title: "GramInsta - Instagram Clone",
      description:
        "Developed a social media platform similar to Instagram where users can share photos, follow other users, and interact through likes and comments.",
      tags: ["RNative", "Expo", "Redux", "Firebase"],
      link: "https://github.com/ehte92/graminsta",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
        Building projects is my passion. Here, you’ll find a collection of my creative and technical projects. Each project showcases my journey through innovation, problem-solving, and continuous learning. Dive in and explore my work, reflecting my dedication and expertise in web development.
        </p>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
