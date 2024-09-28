import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="">
      <div className="md:h-[60rem] h-[68rem] w-full dark:bg-[#0B1120] bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.1] ">
        {/* Radial gradient for the container to give a faded look */}
        <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto ">
          <div className="md:px-5 px-2">
            <div className="text-2xl font-semibold text-dark-01 dark:text-dark-03 flex items-baseline gap-1 p-3 md:mt-12">
              <div className="text-[#3CD1B8]">Contact</div>
              <div className="w-48 border border-[#3CD1B8]"></div>
            </div>
            <div className="max-w-7xl mx-auto p-10 my-20 flex flex-col-reverse md:flex-row gap-6 items-center shadow-md rounded-xl border border-gray-200">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="md:w-1/2"
              >
                <h2 className="text-[#3CD1B8] font-semibold text-3xl md:text-4xl mb-2">
                  Subscribe now
                </h2>
                <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
                <p className="text-dark-02 dark:text-white text-lg mb-5">
                  Get latest updates, deals, and exclusive offers Every time.
                </p>
                <form>
                  <input
                    className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    id=""
                  />
                  <input
                    className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    id=""
                  />
                  <button
                    className="py-3 px-10 text-white bg-[#3CD1B8] rounded inline-flex gap-3 items-center"
                    type="submit"
                  >
                    Subscribe <FaPaperPlane></FaPaperPlane>
                  </button>
                </form>
              </div>
              <div className="divider lg:divider-horizontal dark:text-white">
                OR
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="md:w-1/2 p-10"
              >
                <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2">
                  Contact now
                </h2>
                <div className="w-20 h-1.5 bg-dark-03 dark:text-white mb-5 ml-2"></div>
                <div className="flex gap-3 font-medium text-xl items-center ">
                  <FaWhatsapp className="text-dark-03 dark:text-[#3CD1B8] text-3xl" />
                  <a className="text-dark-01 dark:text-white" href="#">
                    01540643211
                  </a>
                </div>
                <div className="flex gap-3 font-medium text-xl items-center mt-2">
                  <MdEmail className="text-dark-03 dark:text-[#3CD1B8] text-3xl" />
                  <a
                    className="text-dark-01 dark:text-white"
                    href="mailto:rabby-webdeveloper@gmail.com"
                  >
                    rabby-webdeveloper@gmail.com
                  </a>
                </div>
                <div className="flex-1">
                  <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2 mt-2">
                    Social Link
                  </h2>
                  <div className="text-dark-03 dark:text-[#3CD1B8]  flex flex-col md:flex-row  gap-4 mt-4">
                    <a href="https://github.com/rabby-web">
                      <div className="flex items-center justify-center gap-2 border rounded px-2 py-1 hover:dark:text-rose-600 hover:dark:border-rose-600">
                        <FaGithub />
                        <h2>GitHub</h2>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/rabby-web/">
                      <div className="flex items-center justify-center gap-2 border rounded px-2 py-1 hover:dark:text-rose-600 hover:dark:border-rose-600">
                        <FaLinkedin />

                        <h2>Linkedin</h2>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/ridoy.babu.3538">
                      <div className="flex items-center justify-center gap-2 border rounded px-2 py-1 hover:dark:text-rose-600 hover:dark:border-rose-600">
                        <FaFacebook />
                        <h2>Facebook</h2>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <div className="flex gap-3 font-medium text-xl items-center ">
              <FaLinkedin className="text-dark-03 dark:text-white text-3xl" />
              <a
                className="text-dark-01 dark:text-white"
                href="mailto:rabby-webdeveloper@gmail.com"
              >
                Linkedin
              </a>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
