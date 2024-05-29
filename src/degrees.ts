interface Degree {
  title: string;
  school: string;
  description: string;
  startDate: { month: string; year: number };
  endDate?: { month: string; year: number };
}

export const degrees: Degree[] = [
  {
    title:
      "Bachelor of Applied Science - BASc, Computer and Information Sciences and Support Services",
    school: "HoGent",
    description: "Full stack developer specialization",
    startDate: { month: "September", year: 2021 },
    endDate: { month: "June", year: 2024 },
  },
  {
    title: "Secondary education",
    school: "GO! Secundaire school De Beuk Aalter",
    description: "Human Sciences",
    startDate: { month: "September", year: 2015 },
    endDate: { month: "June", year: 2021 },
  },
];
