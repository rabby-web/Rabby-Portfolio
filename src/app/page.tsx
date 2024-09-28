import Banner from "../components/Banner/Banner";
import AboutPage from "../components/shared/AboutPage";
import ProjectPage from "../components/shared/projectPage/ProjectPage";
import SkillPage from "../components/shared/SkillPage";
import TimelinePage from "../components/shared/TimelinePage";
import Contact from "./contact/page";
// import Skill from "./skill/page";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <section className="dark:bg-[#0E1628]">
        <AboutPage></AboutPage>
      </section>
      <section className="dark:bg-[#0E1628]">
        <ProjectPage></ProjectPage>
      </section>
      <section>
        <SkillPage></SkillPage>
      </section>
      <section id="timeline">
        <TimelinePage></TimelinePage>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </div>
  );
}
