import NavLink from "./NavLink.tsx";

function Navbar() {
  return (
    <nav className="flex flex-row gap-3 px-4 py-3 border-b">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/projects"}>Projects</NavLink>
    </nav>
  );
}

export default Navbar;
