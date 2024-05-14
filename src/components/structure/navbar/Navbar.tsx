import NavLink from "./NavLink.tsx";
import { GithubIcon } from "../../socials/GithubIcon.tsx";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between px-4 py-3 border-b items-center">
      <div className="flex gap-2">
        <p className="font-bold">Jasper</p>
        <p>Lefever</p>
      </div>
      <div className="flex flex-row gap-3">
        <NavLink to={"/"}>Home</NavLink>
      </div>
      <div>
        <GithubIcon />
      </div>
    </nav>
  );
}

export default Navbar;
