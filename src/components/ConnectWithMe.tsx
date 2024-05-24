import GithubIcon from "./socials/GithubIcon.tsx";
import LinkedinIcon from "./socials/LinkedinIcon.tsx";

interface ConnectWithMeProps {}

function ConnectWithMe({}: ConnectWithMeProps) {
  return (
    <div>
      <p className={"text-lg"}>
        I'm always open to discussing new projects, collaborations, or
        opportunities to contribute to exciting ventures. Feel free to reach out
        to me via the following platforms:
      </p>
      <div className="py-2 flex flex-row gap-4">
        <GithubIcon size={60} />
        <LinkedinIcon size={60} />
      </div>
    </div>
  );
}

export default ConnectWithMe;
