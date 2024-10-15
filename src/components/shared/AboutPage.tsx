import Image from "next/image";
import img from "../../assets/icon/ds.jpeg";
import AboutCard from "./AboutCard";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 lg:h-[61rem] md:h-[64rem] dark:bg-[#0E1628]">
      {/* about section */}
      <div>
        <div className="flex-1">
          <div className="text-2xl font-semibold text-dark-01 dark:text-dark-03 flex items-baseline gap-1 p-3 md:mt-12">
            <div className="text-[#3CD1B8]">About Me</div>
            <div className="w-48 border border-[#3CD1B8]"></div>
          </div>
          <div className="md:flex justify-center items-center gap-3 ">
            <div className=" flex-1 ">
              <Image
                src={img}
                width={320}
                height={345}
                alt="{img}"
                className="mx-auto border rounded-t-full"
              ></Image>
            </div>

            <div className="flex-1">
              <p className="sm:text-base md:text-lg font-medium max-w-5xl mx-auto  md:text-left p-3 text-dark-01 dark:text-white text-justify md:mt-4">
                <span className="font-semibold text-xl ">
                  Hi, I am{" "}
                  <span className="text-[#4ca1e7] hover:text-[#3CD1B8]">
                    Zulkar Naeem Rabby
                  </span>
                </span>
                <br />
                <br />
                <span className="font-normal text-gray-800 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-600">
                  {" "}
                  I am a highly motivated and self-taught MERN Stack Developer
                  with a passion for crafting dynamic and intuitive web
                  applications. Specializing in frontend development using
                  React.js and backend development with Node.js and Express.js,
                  I bring a wealth of knowledge and hands-on experience to
                  create seamless and engaging user experiences.{" "}
                </span>
                <br />
                <br />
                <span className="font-normal text-gray-700 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-600">
                  {" "}
                  I am a highly motivated and self-taught MERN Stack Developer
                  with a passion for crafting dynamic and intuitive web
                  applications.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutCard></AboutCard>
    </div>
  );
};

export default AboutPage;
// dark:bg-dark-bg-01 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]
