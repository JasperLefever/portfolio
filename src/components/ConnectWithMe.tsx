import GithubIcon from "./socials/GithubIcon.tsx";
import LinkedinIcon from "./socials/LinkedinIcon.tsx";

interface ConnectWithMeProps {}

function ConnectWithMe({}: ConnectWithMeProps) {
  return (
    <div>
      <p className={"text-lg"}>
        Feel free to connect with me on the following platforms so we can share
        ideas and collaborate!
      </p>
      <div className="py-2 flex flex-row gap-4">
        <GithubIcon size={60} />
        <LinkedinIcon size={60} />
      </div>
    </div>
  );
}

export default ConnectWithMe;
