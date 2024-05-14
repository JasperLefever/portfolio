import { NavLink as RouterLink } from "react-router-dom";
import React from "react";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
  icon?: React.ReactNode;
}

function NavLink({ to, children, icon }: NavLinkProps) {
  return (
    <div className="flex">
      {icon}
      <RouterLink
        className={({ isActive }) => (isActive ? "accent-color" : undefined)}
        to={to}
      >
        {children}
      </RouterLink>
    </div>
  );
}

export default NavLink;
