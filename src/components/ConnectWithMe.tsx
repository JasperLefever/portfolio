import { GithubIcon } from "./socials/GithubIcon.tsx";
import { LinkedinIcon } from "./socials/LinkedinIcon.tsx";

interface ConnectWithMeProps {}

function ConnectWithMe({}: ConnectWithMeProps) {
  return (
    <div>
      <p>Feel free to connect with me on the following platforms</p>
      <div className="py-2 flex flex-row gap-4">
        <GithubIcon />
        <LinkedinIcon />
      </div>
    </div>
  );
}

export default ConnectWithMe;
