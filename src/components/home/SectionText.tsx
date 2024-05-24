interface SectionTextProps {
  text: string;
}

function SectionText({ text, ...props }: SectionTextProps) {
  return (
    <p className="text-lg" {...props}>
      {text}
    </p>
  );
}

export default SectionText;
