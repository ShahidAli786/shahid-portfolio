export interface Project {
  id: number;
  title: string;
  desc: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
}

const ProjectData: Project[] = [
  {
    id: 1,
    title: "Travel Logs",
    desc: "Multiple-page travel blog. Built with NextJS and GraphQL API from Hygraph CMS.",
    demoLink: "https://my-travel-logs.vercel.app/",
    githubLink: "https://github.com/naomi-pham/my-travel-logs/",
    tags: ["React", "NextJS", "GraphQL"],
  },
  {
    id: 2,
    title: "World Cuisines",
    desc: "Recipe Searching App. Made with ReactJS, DM Meal API, TailwindCSS & Daisy UI.",
    demoLink: "https://all-world-cuisines.netlify.app/",
    githubLink: "https://github.com/naomi-pham/world-cuisines",
    tags: ["ReactJS", "API", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Responsive Portfolio",
    desc: "Responsive Portfolio Website. Built with ReactJS and styled with Tailwind CSS",
    demoLink: "https://naomi-pham.netlify.app/",
    githubLink: "https://github.com/naomi-pham/naomi-portfolio",
    tags: ["React", "Tailwind", "Figma"],
  },
  {
    id: 4,
    title: "Simple Note",
    desc: "Aesthetic note-taking app with rich text and cloud storage (WIP).",
    demoLink: "https://github.com/naomi-pham/simple-notes",
    githubLink: "https://github.com/naomi-pham/simple-notes",
    tags: ["React", "Tailwind", "Figma"],
  },
];

export default ProjectData;
