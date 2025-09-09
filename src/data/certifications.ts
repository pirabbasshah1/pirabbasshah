export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  logo?: string;
};

export const certifications: Certification[] = [
  {
    id: "supervised-ml-stanford",
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "Stanford University, Deeplearning.ai",
    date: "2024",
    url: "https://coursera.org/share/37622e4720e3a7682693fb486181faa3",
    logo: "/stanford.jpg"
  },
  {
    id: "ai-for-everyone",
    title: "AI for Everyone",
    issuer: "Deeplearning.ai",
    date: "2024",
    url: "https://coursera.org/share/9c92893775f53cdfd09e6d5a8bcf217b",
    logo: "/dlai.png"
  },
  {
    id: "google-bi-certificate",
    title: "Google Business Intelligence Certificate",
    issuer: "Coursera",
    date: "2024",
    url: "https://www.credly.com/badges/94cff4c4-ac7b-42ad-9368-bd418bc45cdf/public_url",
    logo: "/GC.png"
  },
  {
    id: "ai-fundamentals-ibm",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2024",
    url: "https://www.credly.com/badges/15d68cfd-73f3-4959-bae8-cf8b7b963f19/public_url",
    logo: "/ibm.jpg"
  },
  {
    id: "power-query-udemy",
    title: "Master Microsoft POWER QUERY in POWER BI & Excel (ETL Tool)",
    issuer: "Udemy",
    date: "2024",
    url: "https://www.udemy.com/certificate/UC-35acd4cd-d96f-4f01-b2cc-3a81fba81846/",
    logo: "/MS.png"
  },
  {
    id: "python-intro-365",
    title: "Certificate of completion - Introduction to Python",
    issuer: "365 Data Science",
    date: "2024",
    url: "https://learn.365datascience.com/c/89e5b79f52/",
    logo: "/365.jpg"
  },
  {
    id: "it-essentials-cisco",
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    url: "https://www.credly.com/badges/ddef8588-e5f6-414b-847b-95dbf0f66f56/public_url",
    logo: "/cisco.jpg"
  },
  {
    id: "ccna-switching-routing",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    url: "https://www.credly.com/badges/663405df-677f-4c3e-bd01-d24962681362/public_url",
    logo: "/cisco.jpg"
  },
  {
    id: "ccna-intro-networks",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2024",
    url: "https://www.credly.com/badges/c4592ef1-ae37-4dc2-995c-3aed992187da/public_url",
    logo: "/cisco.jpg"
  },
  {
    id: "ccna-enterprise",
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    date: "2024",
    url: "https://www.credly.com/badges/9235786f-b945-4ea1-bfd5-9f9d922fb8a4/public_url",
    logo: "/cisco.jpg"
  }
];