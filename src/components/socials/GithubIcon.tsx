import github from "../../assets/socials/github-mark-white.svg";

interface GithubIconProps {
  size?: number;
}

function GithubIcon({ size = 40 }: GithubIconProps) {
  return (
    <a href="https://github.com/JasperLefever" className="inline-block">
      <img
        src={github}
        alt="GitHub"
        className="h-auto"
        style={{ width: `${size}px` }}
      />
    </a>
  );
}

export default GithubIcon;
