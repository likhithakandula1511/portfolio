import type { PortfolioData } from "@/types/portfolio";

/**
 * CENTRAL PORTFOLIO DATA FILE
 * ---------------------------
 * Edit this file to update every piece of content on the site.
 * Anything wrapped in [ADD ...] is a placeholder — replace it with your
 * real information. Do not remove a field; leave the placeholder text
 * in place until you have the real content.
 */
const portfolioData: PortfolioData = {
  personal: {
    name: "KANDULA LIKHITHA",
    displayName: "Kandula Likhitha",
    headline: "Software Developer — Python, FastAPI, REST APIs, PostgreSQL",
    shortIntro:
      "Software Developer with 1 year of industry experience building backend applications with Python, FastAPI, NestJS, and SQL databases — including API development, authentication, media processing, and asynchronous workflows.",
    aboutIntro:
      "I'm a Software Developer with a year of industry experience at LakkshionsIT, working on backend applications using Python, FastAPI, NestJS, REST APIs, SQL, PostgreSQL, and MySQL. I've built APIs for authentication, database operations, third-party integrations, media processing, and asynchronous workflows using Temporal. I've also worked with Meta Developer APIs, Shotstack, AWS S3, and Cloudinary for application integrations and media workflows, and I have some exposure to frontend development with HTML and CSS.",
    careerInterests: [
      "Backend development and API design",
      "Workflow automation and asynchronous processing",
      "Cloud storage and media processing systems",
    ],
    strengths: [
      "REST API design and development",
      "Database design and query optimization",
      "Third-party API integration",
      "Debugging and problem solving",
    ],
    location: "[ADD YOUR LOCATION]",
    profileImage: "/images/profile.jpg",
    resumeUrl: "/resume.pdf",
  },

  social: {
    github: "[ADD GITHUB URL]",
    linkedin: "[ADD LINKEDIN URL]",
    email: "likhithakandula1511@gmail.com",
    phone: "+91 7095499986",
    whatsapp: "https://wa.me/917095499986",
  },

  skills: [
    {
      category: "Backend",
      skills: ["Python", "FastAPI", "NestJS", "REST API Development", "API Integration"],
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Cloud / Deployment",
      skills: ["AWS S3", "Cloudinary"],
    },
    {
      category: "Tools",
      skills: ["Git", "Postman", "Swagger"],
    },
    {
      category: "Professional Skills",
      skills: [
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "Workflow Automation (Temporal)",
        "Third-Party Integrations (Meta Developer APIs, Shotstack API)",
      ],
    },
  ],

  projects: [
    {
      slug: "media-operations-automation-tool",
      name: "Media Operations Automation Tool",
      shortDescription:
        "A backend system that automates content publishing and dynamic video generation across social platforms.",
      technologies: [
        "Python",
        "FastAPI",
        "NestJS",
        "Temporal",
        "Meta Developer APIs",
        "Shotstack API",
        "AWS S3",
        "Cloudinary",
        "JWT",
        "Swagger",
      ],
      mainFeatures: [
        "Post Service APIs for content publishing (text, hashtags, mentions, media attachments)",
        "Immediate and scheduled publishing across Facebook, Instagram, Twitter, and LinkedIn",
        "Temporal workflows for asynchronous processing with retry and failure-handling",
        "Dynamic video generation via Shotstack using JSON-based timelines",
        "Media upload/retrieval pipelines using Cloudinary and AWS S3",
        "Secure media transfer via S3 presigned URLs",
        "API performance optimization using polling short-circuit logic and database caching",
        "JWT authentication, request validation, error handling, and API logging",
      ],
      role: "Software Developer",
      githubUrl: "[ADD GITHUB LINK]",
      liveUrl: "[ADD LIVE DEMO LINK]",
      image: "/projects/project-placeholder.svg",
      featured: true,
      screenshots: ["/projects/project-placeholder.svg"],
      detail: {
        overview:
          "A backend system that automates content publishing and video generation for social media. It handles publishing posts — including text, hashtags, mentions, and media attachments — to platforms like Facebook, Instagram, Twitter, and LinkedIn, and it can also generate videos dynamically from a JSON-based timeline of media, text, audio, and images.",
        problem:
          "Publishing content across multiple social platforms and generating videos from raw media assets is manual and repetitive when done by hand — it involves separate publishing steps, scheduling, and video rendering for each platform.",
        solution:
          "Built a system that manages the whole media operations workflow — from authentication, through media processing, to publishing — including retries if something fails, so content and videos can be published or scheduled across platforms automatically.",
        role: "Designed and implemented the Post Service APIs for content publishing workflows. Developed REST APIs using FastAPI and NestJS for content publishing, media management, and social account integration. Worked with Meta Platforms Developer APIs to configure app credentials, access tokens, and permissions. Implemented end-to-end immediate and scheduled publishing workflows, and built Temporal workflows for asynchronous processing with retry and failure-handling. Integrated the Shotstack Video Rendering API for dynamic video generation, and built media upload pipelines using Cloudinary and AWS S3, including S3 presigned URL workflows for secure uploads. Optimized API performance using polling short-circuit logic and database caching. Implemented JWT authentication, request validation, error handling, API logging, and Swagger documentation, and tested APIs using Postman and Swagger.",
        frontend: "[ADD FRONTEND TECH DETAILS]",
        backend:
          "Python (FastAPI) and NestJS, providing REST APIs for content publishing, media management, and social account integration.",
        database: "[ADD DATABASE/STORAGE DETAILS]",
        apis:
          "Meta Platforms Developer APIs (Facebook, Instagram, Twitter, LinkedIn publishing) and the Shotstack Video Rendering API for dynamic video generation.",
        mainFeatures: [
          "Post Service APIs for content publishing (text, hashtags, mentions, media attachments)",
          "Immediate and scheduled publishing across Facebook, Instagram, Twitter, and LinkedIn",
          "Temporal workflows for asynchronous processing with retry and failure-handling",
          "Dynamic video generation via Shotstack using JSON-based timelines",
          "Media upload/retrieval pipelines using Cloudinary and AWS S3",
          "Secure media transfer via S3 presigned URLs",
        ],
        userWorkflow: [
          "A request comes in with the content to publish, including any media or a video timeline definition.",
          "If a video needs to be generated, the JSON timeline (overlays, text, audio, images) is sent to Shotstack for rendering.",
          "Rendered media is uploaded to Cloudinary/AWS S3 for storage, using presigned URLs for secure transfer.",
          "Temporal workflows manage the publishing step asynchronously — handling immediate or scheduled publishing, with retries if a step fails.",
          "The system publishes the final content (text, hashtags, mentions, and media) to the target platform (Facebook, Instagram, Twitter, or LinkedIn) via the Meta Developer APIs.",
        ],
        architectureDiagram: "/projects/mediaops-architecture-placeholder.svg",
      },
    },
    {
      slug: "hrms-project",
      name: "HRMS Project",
      shortDescription:
        "A Human Resource Management System with backend APIs for employee onboarding, attendance, leave management, and employee profiles.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "MySQL", "SQL"],
      mainFeatures: [
        "Role-based access control for Admin, HR, Manager, and Employee roles",
        "CRUD APIs for employee onboarding, attendance, and leave management",
        "Standardized API responses with validation and exception handling",
      ],
      role: "Backend Developer",
      githubUrl: "[ADD GITHUB LINK]",
      liveUrl: "[ADD LIVE DEMO LINK]",
      image: "/projects/project-placeholder.svg",
      featured: false,
      screenshots: ["/projects/project-placeholder.svg"],
      detail: {
        overview:
          "An HRMS (Human Resource Management System) built to handle core HR operations including employee onboarding, attendance tracking, leave management, and employee profile management.",
        problem:
          "[ADD THE PROBLEM THIS PROJECT SOLVES]",
        solution:
          "Built backend REST APIs using Python, FastAPI, PostgreSQL, MySQL, and SQL to manage employee onboarding, attendance, leave management, and employee profiles, with role-based access control for different user types.",
        role: "Developed backend APIs, business logic, database queries, request validation, and API response handling. Implemented role-based access control for Admin, HR, Manager, and Employee roles, along with validation, exception handling, and standardized API responses.",
        frontend: "[ADD FRONTEND TECH DETAILS]",
        backend: "Python, FastAPI",
        database: "PostgreSQL, MySQL, SQL",
        apis: "[ADD APIS/INTEGRATIONS USED]",
        mainFeatures: [
          "Employee onboarding workflows",
          "Attendance tracking",
          "Leave management",
          "Employee profile management",
          "Role-based access control (Admin, HR, Manager, Employee)",
        ],
        userWorkflow: ["[ADD USER WORKFLOW STEP]", "[ADD USER WORKFLOW STEP]"],
        architectureDiagram: "/projects/architecture-placeholder.svg",
      },
    },
    {
      slug: "indoor-localization",
      name: "Enhancing Indoor Localization Using Hybrid Deep Learning",
      shortDescription:
        "An academic project using a hybrid CNN and LSTM deep learning approach to improve indoor positioning accuracy.",
      technologies: ["Python", "Deep Learning", "CNN", "LSTM"],
      mainFeatures: [
        "Hybrid deep learning model combining CNN and LSTM techniques",
        "Data processing pipeline for indoor localization",
        "Model-based prediction for improved positioning accuracy",
      ],
      role: "Developer / Researcher",
      githubUrl: "[ADD GITHUB LINK]",
      liveUrl: "[ADD LIVE DEMO LINK]",
      image: "/projects/project-placeholder.svg",
      featured: false,
      screenshots: ["/projects/project-placeholder.svg"],
      detail: {
        overview:
          "An academic project focused on improving indoor localization accuracy using a hybrid deep learning approach.",
        problem: "[ADD THE PROBLEM THIS PROJECT SOLVES]",
        solution:
          "Developed a hybrid deep learning approach combining CNN and LSTM techniques for indoor localization, working on data processing and model-based prediction to improve indoor positioning accuracy.",
        role: "Worked on data processing and model-based prediction for improving indoor positioning accuracy.",
        frontend: "[ADD FRONTEND TECH DETAILS]",
        backend: "Python",
        database: "[ADD DATABASE/STORAGE DETAILS]",
        apis: "[ADD APIS/INTEGRATIONS USED]",
        mainFeatures: [
          "Hybrid CNN + LSTM model architecture",
          "Data processing for localization signals",
          "Model-based prediction",
        ],
        userWorkflow: ["[ADD USER WORKFLOW STEP]"],
        architectureDiagram: "/projects/architecture-placeholder.svg",
      },
    },
    {
      slug: "flood-monitoring-system",
      name: "Flood Monitoring System",
      shortDescription:
        "An academic project using Arduino and sensors to monitor environmental conditions for flood detection.",
      technologies: ["Arduino", "Sensors"],
      mainFeatures: [
        "Sensor integration for environmental monitoring",
        "Data collection and testing",
        "System monitoring",
      ],
      role: "Developer",
      githubUrl: "[ADD GITHUB LINK]",
      liveUrl: "[ADD LIVE DEMO LINK]",
      image: "/projects/project-placeholder.svg",
      featured: false,
      screenshots: ["/projects/project-placeholder.svg"],
      detail: {
        overview:
          "An academic project built to monitor environmental conditions relevant to flood detection using Arduino and sensors.",
        problem: "[ADD THE PROBLEM THIS PROJECT SOLVES]",
        solution:
          "Developed a flood monitoring system using Arduino and sensors to monitor environmental conditions, working on sensor integration, data collection, testing, and system monitoring.",
        role: "Worked on sensor integration, data collection, testing, and system monitoring.",
        frontend: "[ADD FRONTEND TECH DETAILS]",
        backend: "Arduino",
        database: "[ADD DATABASE/STORAGE DETAILS]",
        apis: "[ADD APIS/INTEGRATIONS USED]",
        mainFeatures: [
          "Environmental condition monitoring",
          "Sensor-based data collection",
        ],
        userWorkflow: ["[ADD USER WORKFLOW STEP]"],
        architectureDiagram: "/projects/architecture-placeholder.svg",
      },
    },
    {
      slug: "smart-garbage-monitoring-system",
      name: "Smart Garbage Monitoring System",
      shortDescription:
        "An academic project using Arduino, sensors, and Python to detect garbage-bin fill levels and trigger notifications.",
      technologies: ["Arduino", "Sensors", "Python"],
      mainFeatures: [
        "Garbage-bin fill level detection",
        "Automatic actions and notifications",
        "Server/municipal corporation reporting to help avoid odor and disease from overflowing garbage",
      ],
      role: "Developer",
      githubUrl: "[ADD GITHUB LINK]",
      liveUrl: "[ADD LIVE DEMO LINK]",
      image: "/projects/project-placeholder.svg",
      featured: false,
      screenshots: ["/projects/project-placeholder.svg"],
      detail: {
        overview:
          "An academic project designed to detect garbage-bin fill levels and notify relevant parties to help prevent overflowing garbage.",
        problem:
          "Overflowing garbage bins can cause odor and disease if not addressed promptly.",
        solution:
          "Developed a smart garbage monitoring system using Arduino, sensors, and Python that detects garbage-bin fill levels, automatically triggers actions and notifications, and sends information to the server or municipal corporation.",
        role: "Implemented the system to detect garbage-bin fill levels, trigger actions and notifications, and designed the reporting flow to the server or municipal corporation.",
        frontend: "[ADD FRONTEND TECH DETAILS]",
        backend: "Python, Arduino",
        database: "[ADD DATABASE/STORAGE DETAILS]",
        apis: "[ADD APIS/INTEGRATIONS USED]",
        mainFeatures: [
          "Fill-level detection using sensors",
          "Automatic notifications",
          "Reporting to server/municipal corporation",
        ],
        userWorkflow: ["[ADD USER WORKFLOW STEP]"],
        architectureDiagram: "/projects/architecture-placeholder.svg",
      },
    },
  ],

  experience: [
    {
      company: "LakkshionsIT",
      role: "Software Developer",
      location: "[ADD LOCATION]",
      startDate: "July 2025",
      endDate: "September 2026",
      responsibilities: [
        "Designed and implemented Post Service APIs to handle content publishing workflows including text, hashtags, mentions, and media attachments",
        "Developed REST APIs using Python FastAPI and NestJS for content publishing, media management, social account integration, and backend workflows",
        "Worked with Meta Platforms Developer APIs to configure and manage app credentials, access tokens, permissions, and social media publishing workflows",
        "Implemented end-to-end workflows for immediate and scheduled content publishing across Facebook, Instagram, Twitter, and LinkedIn",
        "Implemented Temporal workflows for asynchronous and scheduled publishing logic with retry and failure-handling mechanisms",
        "Integrated Shotstack Video Rendering API for dynamic video generation using JSON-based video timeline creation, media overlays, text, audio, and images",
        "Developed media upload pipelines using Cloudinary and AWS S3 for media storage, retrieval, and file management",
        "Implemented S3 presigned URL workflows for secure media upload and retrieval",
        "Implemented JWT authentication, request validation, error handling, API logging, and Swagger API documentation",
        "Developed backend APIs using Python FastAPI, PostgreSQL, MySQL, and SQL for employee onboarding, attendance, leave management, and employee profiles (HRMS Project)",
        "Implemented role-based access control for Admin, HR, Manager, and Employee roles",
        "Used Git for version control and collaborated with team members during development and debugging activities",
      ],
      achievements: [
        "Optimized API performance using polling short-circuit logic and database caching to reduce unnecessary external API calls",
        "Tested APIs using Postman and Swagger and participated in debugging and resolving backend API issues",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "NestJS",
        "PostgreSQL",
        "MySQL",
        "SQL",
        "Temporal",
        "Meta Developer APIs",
        "Shotstack API",
        "AWS S3",
        "Cloudinary",
        "JWT",
        "Git",
        "Postman",
        "Swagger",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "GVP College of Engineering for Women",
      location: "[ADD LOCATION]",
      startDate: "September 2022",
      endDate: "March 2025",
      details: ["CGPA: 8.6"],
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "GPTW-Bheemili",
      location: "[ADD LOCATION]",
      startDate: "June 2019",
      endDate: "May 2022",
      details: ["88.24%"],
    },
    {
      degree: "SSC",
      institution: "Sree Vidya School",
      location: "[ADD LOCATION]",
      startDate: "June 2018",
      endDate: "March 2019",
      details: ["CGPA: 10"],
    },
  ],

  hobbies: [
    {
      title: "Dance",
      description:
        "Classical and western dance, performed and practiced over several years.",
    },
    {
      title: "YouTube Channel",
      description:
        "Run a YouTube channel focused on dance content with 600+ subscribers.",
    },
    {
      title: "Singing",
      description: "Singing as a personal creative outlet.",
    },
    {
      title: "Content Creation",
      description:
        "Creating and producing content, including planning and shooting videos.",
    },
    {
      title: "Video Editing",
      description: "Editing video content for the YouTube channel and other projects.",
    },
  ],
};

export default portfolioData;
