import { Degree } from "../../degrees.ts";
import React from "react";

interface DegreeCardProps {
  degree: Degree;
}

export const DegreeCard: React.FC<DegreeCardProps> = ({ degree }) => (
  <div className="bg-white rounded-lg shadow-md p-4 w-full">
    <h2 className="text-xl font-bold mb-2 accent-color">{degree.title}</h2>
    <h3 className="text-md font-semibold mb-2 accent-color">{degree.school}</h3>
    <p className="text-gray-700 mb-2">{degree.description}</p>
    <p className="text-gray-600">
      {degree.startDate.month} {degree.startDate.year} -{" "}
      {degree.endDate
        ? `${degree.endDate.month} ${degree.endDate.year}`
        : "Present"}
    </p>
  </div>
);

export default DegreeCard;
