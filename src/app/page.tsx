import AboutPage from "../components/shared/AboutPage";
import Banner from "../components/shared/Banner";
import SkillPage from "../components/shared/SkillPage";
import Contact from "./contact/page";
// import Skill from "./skill/page";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <div className="dark:bg-dark-bg-08">
        <AboutPage></AboutPage>
      </div>
      <SkillPage></SkillPage>
      <Contact></Contact>
    </div>
  );
}
