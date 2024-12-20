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
import projects from "../projects.ts";
import ProjectCard from "../components/home/ProjectCard.tsx";
import pf from "../assets/pf.jpg";
import about from "../about.json";
import { degrees } from "../degrees.ts";
import DegreeCard from "../components/home/DegreeCard.tsx";
import { workExperiences } from "../workExperience.ts";
import WorkExperienceCard from "../components/home/WorkExperienceCard.tsx";

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
      <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center md:items-start gap-2">
          <h1 className="text-lg font-bold">Hya, I'm Jasper</h1>
          <p className="text-6xl font-extrabold accent-white">Full-Stack</p>
          <p className="text-6xl font-extrabold accent-white">Developer</p>
          <a
            className="underline underline-offset-4 font-bold text-sm"
            href="#connect-with-me"
          >
            Connect with me
          </a>
        </div>
        <div className="flex justify-center md:justify-end items-center ">
          <img src={pf} alt="Jasper Lefever" className="w-52 rounded-md" />
        </div>
      </div>
      <Section title={"about"}>
        <SectionText text={about.general}></SectionText>
        <br />
        <SectionText text={about.philosophy}></SectionText>
        <br />
        <SectionText text={about["personal-interests"]}></SectionText>
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
        <div className={"text-lg"}>
          <p>I currently prefer to work with:</p>
          <ul className={"list-disc list-inside"}>
            <li>Frontend: React</li>
            <li>Backend: .NET 8 or TypeScript node.js</li>
          </ul>
        </div>
      </Section>
      <Section title={"languages"}>
        <ul className={"text-lg"}>
          <li>🇧🇪 Dutch: native</li>
          <li>🇬🇧 English: conversational</li>
          <li>🇫🇷 French: basics</li>
        </ul>
      </Section>
      <Section title={"education"}>
        <div className="flex flex-col gap-4 w-full items-center mt-2">
          {degrees.map((degree, index) => (
            <DegreeCard key={index} degree={degree} />
          ))}
        </div>
      </Section>
      <Section title={"work experience"}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-2">
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </Section>
      <Section title={"projects and realizations"}>
        {/* Projects */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>
      <a id={"connect-with-me"}>
        <Section title={"connect with me"}>
          <ConnectWithMe />
        </Section>
      </a>
      <Section title={"thank you"}>
        <SectionText
          text={
            "Thank you for visiting my portfolio. I look forward to connect with you! 🚀. "
          }
        ></SectionText>
      </Section>
    </div>
  );
}

export default Home;
