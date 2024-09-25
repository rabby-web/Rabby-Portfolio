import AboutPage from "../components/shared/AboutPage";
import Banner from "../components/shared/Banner";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <AboutPage></AboutPage>
      <Contact></Contact>
    </div>
  );
}
