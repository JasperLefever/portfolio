import React from "react";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

function Section({ title, children, ...props }: SectionProps) {
  return (
    <div {...props}>
      <div className="flex items-center gap-5">
        <p className="accent-color text-3xl font-extrabold">{title}</p>
        <div className="border flex-grow"></div>
      </div>
      <div className="max-w-3xl m-auto">{children}</div>
    </div>
  );
}

export default Section;
