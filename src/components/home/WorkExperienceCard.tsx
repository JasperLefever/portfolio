import { WorkExperience } from "../../workExperience.ts";
import React from "react";

interface WorkExperienceProps {
  experience: WorkExperience;
}

const WorkExperienceCard: React.FC<WorkExperienceProps> = ({ experience }) => (
  <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden md:max-w-md w-full h-full place-self-center">
    <div className="p-4">
      <h2 className="text-xl font-bold accent-color">
        {experience.title}
      </h2>
      <h3 className="text-md font-semibold accent-color mb-2">
        {experience.company}
      </h3>
      <p className="text-gray-700 mb-4">{experience.description}</p>
      <p className="text-gray-600">
        {experience.startDate.month} {experience.startDate.year} -{" "}
        {experience.endDate
          ? `${experience.endDate.month} ${experience.endDate.year}`
          : "Present"}
      </p>
      <h5 className="text-sm font-semibold accent-color mb-2">Type: {experience.type}</h5>
      {experience.tags && (
        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          {experience.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default WorkExperienceCard;
