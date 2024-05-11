import { NavLink as RouterLink } from "react-router-dom";
import React from "react";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
  icon?: React.ReactNode;
}

function NavLink({ to, children, icon }: NavLinkProps) {
  return (
    <div className="flex gap-1 border-2 rounded-md px-3 py-1">
      {icon}
      <RouterLink
        className={({ isActive }) => (isActive ? "text-blue-400" : undefined)}
        to={to}
      >
        {children}
      </RouterLink>
    </div>
  );
}

export default NavLink;
