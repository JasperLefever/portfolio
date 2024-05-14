import { GithubIcon } from "../../socials/GithubIcon.tsx";

function Footer() {
  return (
    <footer className="flex flex-row justify-between px-4 py-3 border-b items-center">
      <div className="flex gap-2">
        <p className="font-bold">Jasper</p>
        <p>Lefever</p>
      </div>
      <div>
        <p>© 2024 Jasper Lefever</p>
      </div>
      <div>
        <GithubIcon />
      </div>
    </footer>
  );
}

export default Footer;
