export interface WorkExperience {
  title: string;
  company: string;
  description: string;
  type: string;
  startDate: { month: string; year: number };
  endDate?: { month: string; year: number };
  tags?: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    title: "Solutions Expert",
    company: "Citymesh",
    description:
        "Solutions Expert @ Citymesh Critical Solutions",
    type: "Part-time (3/5)",
    startDate: { month: "November", year: 2024 },
  },
  {
    title: "Student job Proxy Delhaize",
    company: "Delhaize",
    description:
      "Student job cashier and shelf filler @ Proxy Delhaize Oostduinkerke",
    type: "Student job",
    startDate: { month: "August", year: 2024 },
    endDate: { month: "August", year: 2024 },
  },
  {
    title: "Bartender",
    company: "The Possé",
    description: "Student job bartender @ The Possé",
    type: "Student job",
    startDate: { month: "August", year: 2024 },
    endDate: { month: "August", year: 2024 },
  },
  {
    title: "Student job events",
    company: "Citymesh",
    description:
      "Setup temporary LTE and WIFI networks on festivals, events, ... @ Citymesh Flex",
    type: "Student job",
    startDate: { month: "June", year: 2024 },
    endDate: { month: "July", year: 2024 },
  },
  {
    title: "Internship research",
    company: "delaware Consulting",
    description:
      "Intern in the Mobile web and IoT team at delaware GhentIntern in the Mobile web and IoT team at delaware Ghent",
    type: "Internship",
    startDate: { month: "February", year: 2024 },
    endDate: { month: "May", year: 2024 },
  },
  {
    title: "Student job Colruyt Aalter",
    company: "Colruyt Group",
    description: "Cashier, shelf filler and collect and go order picker",
    type: "Student job",
    startDate: { month: "March", year: 2020 },
    endDate: { month: "December", year: 2023 },
  },
  {
    title: "Student job Proxy Delhaize",
    company: "Delhaize",
    description: "Cashier @ Proxy Delhaize Oostduinkerke",
    type: "Student job",
    startDate: { month: "August", year: 2023 },
    endDate: { month: "August", year: 2023 },
  },
  {
    title: "Student job events",
    company: "Citymesh",
    description:
      "IT Helpdesk for camping wifi dishes and setup temporary LTE and WIFI networks on festivals, events, ...",
    type: "Student job",
    startDate: { month: "June", year: 2023 },
    endDate: { month: "July", year: 2023 },
  },
  {
    title: "ITLab helper",
    company: "ITLab @ HoGent",
    description:
      "The IT Lab is an initiative by and for applied computer science students at HOGENT. I was responsible for supporting students with exam material and/or projects or any IT related matter.",
    type: "Volunteer",
    startDate: { month: "September", year: 2022 },
    endDate: { month: "May", year: 2023 },
  },
  {
    title: "Student job warehouse worker",
    company: "Igepa Belux",
    description:
      "Order picking for all products related to Paper & Print, Visual Communication, Office, Packaging & Construction",
    type: "Student job",
    startDate: { month: "July", year: 2022 },
    endDate: { month: "August", year: 2022 },
  },
  {
    title: "Student job maintenance worker",
    company: "ISS Facility Services @ Friesland Campina",
    description: "Student job maintenance worker at Friesland Campina Aalter",
    type: "Student job",
    startDate: { month: "July", year: 2021 },
    endDate: { month: "August", year: 2021 },
  },
];
