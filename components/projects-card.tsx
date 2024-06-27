import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface projectcardprops {
  value: any;
}

const ProjectCards: React.FC<projectcardprops> = ({ value }) => {
  return (
    <Card className="max-w-[32%] max-lg:max-w-full">
      <CardHeader>
        <CardTitle>{value.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base font-poppins">{value.description}</p>
        <div className=" w-full h-fit flex mt-2 justify-center flex-row gap-3">
          {value.tags.map((itm: string, indx: number) => {
            // return <Badge key={indx}>{itm}</Badge>
            return (
              <span
                className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                  (itm === "Nextjs" && "bg-teal-100 text-teal-800") ||
                  (itm === "Freelancing" && "bg-yellow-100 text-yellow-800 ") ||
                  (itm === "Shadcn Ui" && "bg-blue-100 text-blue-800") ||
                  (itm === "Typescript" && "bg-red-100 text-red-800") ||
                  (itm === "RNative" && "bg-green-100 text-green-800") ||
                  (itm === "Redux" && "bg-purple-100 text-purple-800") ||
                  (itm === "Firebase" && "bg-pink-100 text-pink-800") ||
                  (itm === "React" && "bg-teal-100 text-teal-800") ||
                  (itm === "Node" && "bg-yellow-100 text-yellow-800 ") ||
                  (itm === "Tailwind" && "bg-blue-100 text-blue-800") ||
                  (itm === "Vue" && "bg-green-100 text-green-800") ||
                  "bg-gray-100 text-gray-800"
                }  `}
                key={indx}
              >
                {itm}
              </span>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="items-center justify-center flex">
        <Link
          href={value.link}
          target="blank"
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        >
          Visit Project
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCards;
