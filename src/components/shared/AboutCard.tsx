import Link from "next/link";
import React from "react";

const AboutCard = () => {
  return (
    <div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3 mt-10 md:mt-32 p-2">
        <div className="max-w-sm overflow-hidden shadow-lg w-full p-2 md:p-4  text-center flex flex-col justify-center items-center relative group hover:text-[#4ca1e7] text-[#3CD1B8] rounded-md bg-white dark:bg-opacity-[0.01] border border-white border-opacity-10 backdrop-blur-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-code-square w-10 h-10 text-[#3CD1B8]  hover:dark:text-[#4ca1e7] mb-3"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
          </svg>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#3CD1B8] hover:text-[#4ca1e7]">
              Frontend Development
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 hover:dark:text-gray-300 hover:text-gray-600">
            Front-end development is the process of building components that
            interact with users.
          </p>
          <Link
            href="coming"
            className="inline-flex font-medium items-center text-[#3CD1B8] hover:text-[#4ca1e7] hover:underline"
          >
            See our guideline
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </Link>
        </div>
        <div className="max-w-sm overflow-hidden shadow-lg w-full p-2 md:p-4  text-center flex flex-col justify-center items-center relative group hover:text-rose-600 text-[#3CD1B8] rounded-md bg-white dark:bg-opacity-[0.01] border border-white border-opacity-10 backdrop-blur-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-globe2 w-10 h-10 text-[#3CD1B8]  hover:dark:text-[#4ca1e7] mb-3"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
          </svg>

          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#3CD1B8] hover:text-[#4ca1e7]">
              Backend Development
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 hover:dark:text-gray-300 hover:text-gray-600">
            Backend development refers to the server-side aspect of web
            development, focusing on creating and managing the server logic,
            databases, and APIs.
          </p>
          <Link
            href="coming"
            className="inline-flex font-medium items-center text-[#3CD1B8] hover:text-[#4ca1e7] hover:underline"
          >
            See our guideline
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </Link>
        </div>
        <div className="max-w-sm overflow-hidden shadow-lg w-full p-2 md:p-4  text-center flex flex-col justify-center items-center relative group hover:text-rose-600 text-[#3CD1B8] rounded-md bg-white dark:bg-opacity-[0.01] border border-white border-opacity-10 backdrop-blur-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-activity w-10 h-10 text-[#3CD1B8] hover:dark:text-[#4ca1e7] mb-3"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
            />
          </svg>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#3CD1B8] hover:text-[#4ca1e7]">
              Full-Stack Development
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 hover:dark:text-gray-300 hover:text-gray-600">
            Full stack development is the process of developing both the
            frontend and backend of applications
          </p>
          <Link
            href="coming"
            className="inline-flex font-medium items-center text-[#3CD1B8] hover:text-[#4ca1e7] hover:underline"
          >
            See our guideline
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
