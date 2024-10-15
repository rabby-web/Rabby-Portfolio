import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import LeftIcon from "../components/MainIcon/LeftIcon";
import RightText from "../components/MainIcon/RightText";

export const metadata: Metadata = {
  icons: {
    icon: "./favicon.ico",
  },
  title: "Zulkar Naeem Rabby",
  description:
    "Full-stack web developer skilled in JavaScript, React, Next.js, Redux, MUI, ShadcnUi, AntDesign, Node.js, Express js, MongoDB, PostgreSQL, Redis, and many other tools.",
  authors: [{ name: "Zulkar Naeem Rabby" }],
  openGraph: {
    title: "Full-Stack Web Development by Zulkar Naeem Rabby",
    description:
      "Take a look at my portfolio where I build dynamic and scalable web applications using technologies like JavaScript, React, Next.js, Redux, MongoDB, PostgreSQL, and more. Reach out for reliable web development services.",
    url: "#",
    type: "website",
  },
  keywords: [
    "Full-stack web developer",
    "JavaScript",
    "React",
    "Next.js",
    "Redux",
    "MongoDB",
    "Express Js",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Web development",
    "Front-end development",
    "Back-end development",
    "MERN stack developer",
    "Web application development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
          <div className="fixed left-16 bottom-0 text-[#3CD1B8] hidden md:block">
            <LeftIcon></LeftIcon>
          </div>
          <div className="fixed -right-20 bottom-0 text-[#3CD1B8] hidden md:block">
            <RightText></RightText>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
