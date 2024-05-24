import linkedin from "../../assets/linkedin.svg";

interface LinkedinIconProps {
  size?: number;
}

function LinkedinIcon({ size = 40 }: LinkedinIconProps) {
  return (
    <a href="https://www.linkedin.com/in/jasperlefever/">
      <img
        src={linkedin}
        alt="Linkedin"
        className="h-auto"
        style={{ width: `${size}px` }}
      />
    </a>
  );
}

export default LinkedinIcon;
