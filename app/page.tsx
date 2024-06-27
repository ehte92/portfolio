import DownLoadResumeBtn from "@/components/download-resume-button";
import GithubButton from "@/components/github-button";
import HeroImage from "@/components/hero-image";
import HeroTexts from "@/components/hero-texts";
import SocialLinks from "@/components/social-links";

export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <div className=" h-full w-auto flex flex-col justify-start gap-4">
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </div>
      {/* RIGHT SIDE image  */}
      <div className="h-full w-[47%] relative block max-lg:hidden">
        {/* IMAGE  */}
        <HeroImage />
      </div>

      {/* GITHUB BUTTON  */}
      <GithubButton />
    </>
  );
}
