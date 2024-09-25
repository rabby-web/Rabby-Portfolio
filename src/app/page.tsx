import AboutPage from "../components/shared/AboutPage";
import Banner from "../components/shared/Banner";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <div className="dark:bg-dark-bg-08">
        <AboutPage></AboutPage>
      </div>
      <Contact></Contact>
    </div>
  );
}
