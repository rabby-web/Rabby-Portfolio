import AboutPage from "../components/shared/AboutPage";
import Banner from "../components/shared/Banner";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Contact></Contact>
      <AboutPage></AboutPage>
    </div>
  );
}
