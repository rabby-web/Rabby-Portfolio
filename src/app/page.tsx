import AboutPage from "../components/shared/AboutPage";
import Banner from "../components/shared/Banner";
import ProjectPage from "../components/shared/projectPage/ProjectPage";
import SkillPage from "../components/shared/SkillPage";
import Contact from "./contact/page";
// import Skill from "./skill/page";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <div className="dark:bg-[#0F172A]">
        <AboutPage></AboutPage>
      </div>
      <div className="dark:bg-dark-bg-08">
        <ProjectPage></ProjectPage>
      </div>
      <SkillPage></SkillPage>
      <Contact></Contact>
    </div>
  );
}
