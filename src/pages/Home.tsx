import Section from "../components/home/Section.tsx";
import SectionText from "../components/home/SectionText.tsx";
import ConnectWithMe from "../components/ConnectWithMe.tsx";
import android from "../assets/skills/android.svg";
import angular from "../assets/skills/angular.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import csharp from "../assets/skills/csharp.svg";
import css3 from "../assets/skills/css-3.svg";
import docker from "../assets/skills/docker.svg";
import dotnet from "../assets/skills/dotnet.svg";
import html5 from "../assets/skills/html-5.svg";
import java from "../assets/skills/java.svg";
import javascript from "../assets/skills/javascript.svg";
import kotlin from "../assets/skills/kotlin.svg";
import mongodb from "../assets/skills/mongodb.svg";
import mysql from "../assets/skills/mysql.svg";
import nodejs from "../assets/skills/nodejs.svg";
import npm from "../assets/skills/npm.svg";
import python from "../assets/skills/python.svg";
import react from "../assets/skills/react.svg";
import spring from "../assets/skills/spring.svg";
import swift from "../assets/skills/swift.svg";
import tailwind from "../assets/skills/tailwind.svg";
import typescript from "../assets/skills/typescript.svg";
import ubuntu from "../assets/skills/ubuntu-.svg";
import vitejs from "../assets/skills/vitejs.svg";

function Home() {
  const skillsLogos = [
    { src: android, alt: "android" },
    { src: angular, alt: "angular" },
    { src: bootstrap, alt: "bootstrap" },
    { src: csharp, alt: "csharp" },
    { src: css3, alt: "css3" },
    { src: docker, alt: "docker" },
    { src: dotnet, alt: "dotnet" },
    { src: html5, alt: "html5" },
    { src: java, alt: "java" },
    { src: javascript, alt: "javascript" },
    { src: kotlin, alt: "kotlin" },
    { src: mongodb, alt: "mongodb" },
    { src: mysql, alt: "mysql" },
    { src: nodejs, alt: "nodejs" },
    { src: npm, alt: "npm" },
    { src: python, alt: "python" },
    { src: react, alt: "react" },
    { src: spring, alt: "spring" },
    { src: swift, alt: "swift" },
    { src: tailwind, alt: "tailwind" },
    { src: typescript, alt: "typescript" },
    { src: ubuntu, alt: "ubuntu" },
    { src: vitejs, alt: "vitejs" },
  ];
  return (
    <div className="flex flex-col gap-5 m-auto max-w-4xl">
      {/* Image */}
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center align-middle gap-2">
          <h1 className="text-lg font-bold">Hya, I'm Jasper</h1>
          <p className="text-5xl font-extrabold accent-color">Full stack</p>
          <p className="text-5xl font-extrabold accent-color ">Developer</p>
          <a className="underline underline-offset-4 font-bold text-sm">
            Connect with me
          </a>
        </div>
        <div className="flex justify-center align-middle">
          <img
            src="https://avatars.githubusercontent.com/u/33233024?v=4"
            alt="Jasper Lefever"
            className="w-48 rounded-full"
          />
        </div>
      </div>
      <Section title={"about"}>
        <SectionText text={"Hello, I'm Jasper"}></SectionText>
      </Section>
      <Section title={"skills"}>
        <SectionText
          text={"I'm proficient in the following technologies"}
        ></SectionText>
        {/* Skills */}
        <div className="flex flex-row flex-wrap gap-4 mb-4">
          {skillsLogos.map((logo) => (
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-auto"
              style={{ width: "60px" }}
              key={logo.alt}
            />
          ))}
        </div>
        <SectionText
          text={
            "And I'm always eager to learn more! At this moment I'm diving into the world of Next.js"
          }
        ></SectionText>
      </Section>
      <Section title={"languages"}>
        <ul className={"text-lg"}>
          <li>🇧🇪 Dutch: native</li>
          <li>🇬🇧 English: conversational</li>
          <li>🇫🇷 French: basics</li>
        </ul>
      </Section>
      <Section title={"projects and realizations"}>
        <SectionText text={"Hello, I'm Jasper"}></SectionText>
      </Section>
      <Section title={"connect with me"}>
        <ConnectWithMe />
      </Section>
    </div>
  );
}

export default Home;
