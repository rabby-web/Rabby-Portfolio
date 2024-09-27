import Banner from "../components/Banner/Banner";
import AboutPage from "../components/shared/AboutPage";
import ProjectPage from "../components/shared/projectPage/ProjectPage";
import SkillPage from "../components/shared/SkillPage";
import Contact from "./contact/page";
// import Skill from "./skill/page";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <div className="dark:bg-[#0E1628]">
        <AboutPage></AboutPage>
      </div>
      <div className="dark:bg-[#0E1628]">
        <ProjectPage></ProjectPage>
      </div>
      <SkillPage></SkillPage>
      <Contact></Contact>
    </div>
  );
}
