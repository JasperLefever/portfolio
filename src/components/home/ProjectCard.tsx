import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  images?: string[];
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  images,
  tags,
}) => {
  return (
    <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden md:max-w-md place-self-center w-full h-full">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 accent-color">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-bold text-sm accent-color"
          >
            Visit Project
          </a>
        )}
        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        {images && images.length > 0 && (
          <div className="flex overflow-x-scroll gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project image ${index + 1}`}
                className="h-32 w-32 object-cover rounded-md"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
