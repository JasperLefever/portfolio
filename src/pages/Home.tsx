import Section from "../components/home/Section.tsx";
import SectionText from "../components/home/SectionText.tsx";
import ConnectWithMe from "../components/ConnectWithMe.tsx";

function Home() {
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
        <SectionText text={"Hello, I'm Jasper"}></SectionText>
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
