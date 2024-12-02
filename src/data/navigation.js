const menus = [
  {
    id: 1,
    name: "Home",
    path: "/home-11",
  },
  {
    id: 2,
    name: "Services",
    children: [
      {
        id: 1,
        name: "Application Security",
        path: "/application-security",
      },
      {
        id: 2,
        name: "Network Security",
        path: "/network-security",
      },
      {
        id: 3,
        name: "Compliance",
        children: [
          { id: 1, name: "Job list v1", path: "/job-1" },
          { id: 2, name: "Job list v2", path: "/job-2" },
          { id: 3, name: "Job list v3", path: "/job-3" },
          { id: 4, name: "Job Single", path: "/job-single" },
        ],
      },
      {
        id: 4,
        name: "Red Team",
        path: "/red-team", // Direct path for Red Team
      },
    ],
  },
  {
    id: 5,
    name: "Forensics",
    children: [
      {
        id: 1,
        name: "Forensics Services",
        children: [
          { id: 1, name: "Service v1", path: "/service-1" },
          { id: 2, name: "Service v2", path: "/service-2" },
          { id: 3, name: "Service v3", path: "/service-3" },
          { id: 4, name: "Service v4", path: "/service-4" },
          { id: 5, name: "Service v5", path: "/service-5" },
          { id: 6, name: "Service v6", path: "/service-6" },
          { id: 7, name: "Service v7", path: "/service-7" },
          { id: 8, name: "Service All", path: "/service-all" },
          { id: 9, name: "Service Single v1", path: "/service-single" },
          { id: 10, name: "Service Single v2", path: "/service-single-v2" },
          { id: 11, name: "Service Single v3", path: "/service-single-v3" },
        ],
      },
      {
        id: 2,
        name: "Forensics Product",
        children: [
          { id: 1, name: "Project v1", path: "/project-1" },
          { id: 2, name: "Project v2", path: "/project-2" },
          { id: 3, name: "Project v3", path: "/project-3" },
          { id: 4, name: "Project v4", path: "/project-4" },
          { id: 5, name: "Project Single v1", path: "/project-single" },
          { id: 6, name: "Project Single v2", path: "/project-single-v2" },
          { id: 7, name: "Project Single v3", path: "/project-single-v3" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "IT Products",
    children: [
      {
        id: 1,
        name: "Services",
        children: [
          { id: 1, name: "Service v1", path: "/service-1" },
          { id: 2, name: "Service v2", path: "/service-2" },
          { id: 3, name: "Service v3", path: "/service-3" },
          { id: 4, name: "Service v4", path: "/service-4" },
          { id: 5, name: "Service v5", path: "/service-5" },
          { id: 6, name: "Service v6", path: "/service-6" },
          { id: 7, name: "Service v7", path: "/service-7" },
          { id: 8, name: "Service All", path: "/service-all" },
          { id: 9, name: "Service Single v1", path: "/service-single" },
          { id: 10, name: "Service Single v2", path: "/service-single-v2" },
          { id: 11, name: "Service Single v3", path: "/service-single-v3" },
        ],
      },
      {
        id: 2,
        name: "Product",
        children: [
          { id: 1, name: "Project v1", path: "/project-1" },
          { id: 2, name: "Project v2", path: "/project-2" },
          { id: 3, name: "Project v3", path: "/project-3" },
          { id: 4, name: "Project v4", path: "/project-4" },
          { id: 5, name: "Project Single v1", path: "/project-single" },
          { id: 6, name: "Project Single v2", path: "/project-single-v2" },
          { id: 7, name: "Project Single v3", path: "/project-single-v3" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "About",
    children: [
      {
        id: 1,
        name: "About",
        path: "/about-2",
      },
      {
        id: 2,
        name: "Blog",
        path: "/blog",
      },
      {
        id: 3,
        name: "Career",
        path: "/career",
      },
    ],
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

export default menus;
