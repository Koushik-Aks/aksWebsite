const menus = [
  {
    id: 1,
    name: "Home",
    path: "/home-11",
    // No children array, as you don't want a dropdown
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
        children: [
          { id: 1, name: "Network Architecture Review ", path: "/project-1" },
          { id: 2, name: "Vulnerability Assessment ", path: "/project-2" },
          { id: 3, name: "Internal Penetration Testing", path: "/project-3" },
          { id: 4, name: "External Penetration Testing ", path: "/project-4" },
          { id: 5, name: "Secure Configuration Audit", path: "/project-single" },
          { id: 6, name: "Wireless Security Assessment", path: "/project-single-v2" },
          { id: 7, name: "Log Analysis", path: "/project-single-v3" },
        ],
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
        children: [
          { id: 1, name: "Phishing Campaign", path: "/job-1" },
          { id: 2, name: "Vishing Campaign", path: "/job-2" },
          { id: 3, name: "DoS / DDoS Assessment", path: "/job-3" },
          { id: 4, name: "Physical Security", path: "/job-single" },
          { id: 5, name: "Ransomware Readiness", path: "/job-single" },
          { id: 6, name: "External Penetration Testing", path: "/job-single" },
        ],
      },
    ],
  },
  
  // {
  //   id: 3,
  //   name: "Compliance",
  //   children: [
  //     {
  //       id: 1,
  //       name: "Dashboard",
  //       children: [
  //         { id: 1, name: "Dashboard", path: "/dashboard" },
  //         { id: 2, name: "Proposal", path: "/proposal" },
  //         { id: 3, name: "Saved", path: "/saved" },
  //         { id: 4, name: "Message", path: "/message" },
  //         { id: 5, name: "Reviews", path: "/reviews" },
  //         { id: 6, name: "Invoice", path: "/invoice" },
  //         { id: 7, name: "Payouts", path: "/payouts" },
  //         { id: 8, name: "Statement", path: "/statements" },
  //         { id: 9, name: "Manage Service", path: "/manage-services" },
  //         { id: 10, name: "Add Services", path: "/add-services" },
  //         { id: 11, name: "Manage Jobs", path: "/manage-jobs" },
  //         {
  //           id: 12,
  //           name: "Manage Project",
  //           path: "/manage-projects",
  //         },
  //         {
  //           id: 13,
  //           name: "Create Project",
  //           path: "/create-projects",
  //         },
  //         { id: 14, name: "My Profile", path: "/my-profile" },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: "Employee",
  //       children: [
  //         { id: 1, name: "Employee V1", path: "/employee-1" },
  //         { id: 2, name: "Employee V2", path: "/employee-2" },
  //         {
  //           id: 3,
  //           name: "Employee Single",
  //           path: "/employee-single",
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       name: "Freelancer",
  //       children: [
  //         { id: 1, name: "Freelancer V1", path: "/freelancer-1" },
  //         { id: 2, name: "Freelancer V2", path: "/freelancer-2" },
  //         { id: 3, name: "Freelancer V3", path: "/freelancer-3" },
  //         {
  //           id: 4,
  //           name: "Freelancer Single v1",
  //           path: "/freelancer-single",
  //         },
  //         {
  //           id: 5,
  //           name: "Freelancer Single v2",
  //           path: "/freelancer-single-v2",
  //         },
  //         {
  //           id: 6,
  //           name: "Freelancer Single v3",
  //           path: "/freelancer-single-v3",
  //         },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       name: "Become Seller",
  //       path: "/become-seller",
  //     },
  //   ],
  // },
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
          { id: 1, name: "Project v2", path: "/project-2" },
          { id: 1, name: "Project v3", path: "/project-3" },
          { id: 1, name: "Project v4", path: "/project-4" },
          { id: 2, name: "Project Single v1", path: "/project-single" },
          { id: 3, name: "Project Single v2", path: "/project-single-v2" },
          { id: 4, name: "Project Single v3", path: "/project-single-v3" },
        ],
      },
      // {
      //   id: 3,
      //   name: "Job View",
      //   children: [
      //     { id: 1, name: "Job list v1", path: "/job-1" },
      //     { id: 2, name: "Job list v2", path: "/job-2" },
      //     { id: 3, name: "Job list v3", path: "/job-3" },
      //     { id: 4, name: "Job Single", path: "/job-single" },
        // ],
      // },
    ],
  },
  {
    id: 6,
    name: "IT Products",
    children: [
      {
        id: 1,
        name: " Services",

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
          { id: 1, name: "Project v2", path: "/project-2" },
          { id: 1, name: "Project v3", path: "/project-3" },
          { id: 1, name: "Project v4", path: "/project-4" },
          { id: 2, name: "Project Single v1", path: "/project-single" },
          { id: 3, name: "Project Single v2", path: "/project-single-v2" },
          { id: 4, name: "Project Single v3", path: "/project-single-v3" },
        ],
      },
      // {
      //   id: 3,
      //   name: "Job View",
      //   children: [
      //     { id: 1, name: "Job list v1", path: "/job-1" },
      //     { id: 2, name: "Job list v2", path: "/job-2" },
      //     { id: 3, name: "Job list v3", path: "/job-3" },
      //     { id: 4, name: "Job Single", path: "/job-single" },
        // ],
      // },
    ],
  },
  {
    id: 6,
    name: "About",
    children: [
      {
        id: 1,
        name: "About",
        path: "/about",  // Direct path for About
      },
      {
        id: 2,
        name: "Blog",
        path: "/blog",  // Direct path for Blog
      },
    ],
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
]  

export default menus;
