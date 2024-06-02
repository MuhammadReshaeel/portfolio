export const METADATA = {
  author: "Muhammad Reshaeel",
  title: "Portfolio | Muhammad Reshaeel",
  description:
    "Muhammad Reshaeel is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://portfolio-muhammad-reshaeels-projects.vercel.app/",
  keywords: [
    "Muhammad Reshaeel",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: reshaeelnisar71@gmail.com@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/muhammad-reshaeel-front-end-engineer/",
  },
  {
    name: "github",
    url: "https://github.com/MuhammadReshaeel",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/reshaeel_nisar/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "nodejs",
    "vite",
    "figma"  
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "chakra-ui",
  ],
  databases: [ "mongodb"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Fazier",
    image: "/projects/fazier.png",
    blurImage: "/projects/fazier.png",
    description: "Fazier app using NextJS + React Bootstrap",
    gradient: ["#F14658", "#DC2537"],
    url: "https://fazier.com/",
    tech: ["react", "nextjs"],
  },
  {
    name: "Piqosity",
    image: "/projects/piqosity.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Piqosity is an educational platform built using Angular 14 + Bootstrap",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://www.piqosity.com/",
    tech: ["angular", "bootstrap"],
  },
  {
    name: "Fivelumens",
    image: "/projects/fivelumens.png",
    blurImage: "/projects/fivelumens.png",
    description:
      "Fivelumens is a training application for agents built using Next Js and Bootstrap",
    gradient: ["#000066", "#6699FF"],
    url: "https://www.fivelumens.com/",
    tech: ["nextjs", "bootstrap"],
  },
  {
    name: "Sweepstakes",
    image: "/projects/sweepstakes.png",
    blurImage: "/projects/sweepstakes.png",
    description: "A project built using next js, bootstrap along with famous package like framer-motion.",
    gradient: ["#142D46", "#2E4964"],
    url: "https://mrsweepy.com/home",
    tech: ["nextjs", "bootstrap"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "3S-Solutions",
      description:
        "3S-Solutions is a software company that enables businesses to launch their online applications at ease. 3S-Solutions mainly deals with educational aplications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolving Role: From Intern to Frontend Engineer",
      description:
        "Since May 2022, I've progressed from an intern to a proficient Frontend Engineer. My experience now spans Reactjs, Nextjs, and Angular Frameworks, enabling me to adeptly fulfill my responsibilities.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },    
    {
      title: "Assisting Frontend Engineer - Educational Apps",
      description:
        " When I came as an intern here, My role was supporting the development of educational applications at 3S-Solutions. Collaborating with the team to implement features using ReactJS, Next.js, and Angular frameworks, and gaining hands-on experience in frontend development.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineering Intern
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Devnation",
      description:
        "Devnation is a preparation and mentorship platform for job-seekers that are seeking technical roles across top companies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ]
};

export const GTAG = "G-5HCTL2TJ5W";
