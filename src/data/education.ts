export type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  logo?: string; // path in /public/logos e.g. /logos/ims.png
};

export const education: Education[] = [
  {
    id: "bs-data-science",
    degree: "Bachelor of Science in Data Science",
    institution: "Institute of Management Sciences",
    location: "Peshawar",
    startYear: "2021",
    endYear: "2025",
    logo: "/ims.png"
  }
];