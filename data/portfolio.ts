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
    linkedin: "https://www.linkedin.com/in/kandula-likhitha-650b49251",
    email: "likhithakandula1511@gmail.com",
    phone: "+91 7095499986",
    whatsapp: "https://wa.me/917095499986",
  },

  skills: [
    {
      category: "Backend",
      skills: [
        "Python",
        "FastAPI",
        "NestJS",
        "REST API Development",
        "API Integration",
        "Celery",
        "Redis",
      ],
      accent: "blue",
    },
    {
      category: "Frontend",
      skills: ["React", "React Native (Expo)", "Vite", "Tailwind CSS", "HTML", "CSS"],
      accent: "purple",
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
      accent: "teal",
    },
    {
      category: "Cloud / Deployment",
      skills: [
        "AWS S3",
        "AWS SQS",
        "AWS ECR",
        "Google Cloud Storage",
        "Azure Blob Storage",
        "Cloudinary",
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
      ],
      accent: "gold",
    },
    {
      category: "Tools",
      skills: ["Git", "GitLab", "Postman", "Swagger", "pytest", "FFmpeg"],
      accent: "red",
    },
    {
      category: "Professional Skills",
      skills: [
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "Workflow Automation (Temporal)",
        "Third-Party Integrations (Meta Developer APIs, Shotstack API)",
      ],
      accent: "blue",
    },
  ],

  projects: [
    {
      slug: "media-operations-automation-tool",
      name: "Media Operations Automation Tool",
      shortDescription:
        "A backend tool for social media publishing. Users can post text, photos and videos to Facebook, Instagram, Twitter and LinkedIn, either right away or at a scheduled time, and the tool can also create videos automatically from photos, text and audio.",
      whatIDid: [
        "Built the Post Service APIs using FastAPI and NestJS, so users can publish posts with text, hashtags, mentions and photos or videos",
        "Connected the app to Meta Developer APIs (setting up app credentials, access tokens and permissions) so posts go out to Facebook, Instagram, Twitter and LinkedIn",
        "Made posting work both instantly and at a scheduled time, using Temporal workflows that automatically retry a step if it fails",
        "Integrated the Shotstack API to create videos automatically: the video is described as a JSON timeline of images, text, audio and overlays, and Shotstack renders it",
        "Built upload pipelines to store and fetch media in AWS S3 and Cloudinary, using presigned URLs so files are uploaded securely",
        "Made the APIs faster by caching results in the database and cutting down repeated calls to external APIs",
        "Added JWT login, input validation, error handling, logging and Swagger API docs, and tested the APIs with Postman",
      ],
      cardSummary:
        "A tool that posts content to social media automatically and creates videos from photos, text and audio.",
      cardHighlights: [
        "Built APIs to post to Facebook, Instagram, Twitter and LinkedIn",
        "Added scheduled posting that retries if it fails",
        "Created videos automatically using Shotstack",
      ],
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
      image: "/projects/project-placeholder.svg",
      featured: true,
      isPrivate: true,
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
        processFlow: [
          "Content request received",
          "Video rendered with Shotstack (if needed)",
          "Media stored in Cloudinary / AWS S3",
          "Temporal workflow schedules the post",
          "Published to Facebook, Instagram, Twitter or LinkedIn",
        ],
      },
    },
    {
      slug: "flowx-media-intake-platform",
      name: "FlowX – Media Intake & Upload Platform",
      shortDescription:
        "A platform for newsrooms. Reporters and outside contributors upload large video files through a web page or a mobile app, and the videos are automatically processed and sent into the newsroom's workflow. Many organizations use the same platform, each with their own space.",
      whatIDid: [
        "Built the backend with FastAPI and MongoDB in clean layers (API → services → database), covering uploads, portals, forms, teamspaces, notifications and reports",
        "Made large video uploads fast and reliable: files are split into parts (S3 multipart upload) and sent directly from the user's device to cloud storage using presigned URLs, without passing through our servers",
        "Let each customer connect their own cloud storage (AWS S3, Google Cloud Storage or Azure Blob), with their login details stored encrypted",
        "Built automatic video conversion on GPU (FFmpeg + NVIDIA NVENC): when a file lands in S3, an event goes through SQS and a Celery worker starts converting it",
        "Built folder-watch automation: when new files appear in storage, the system automatically creates upload packages for them",
        "Built a no-code Portal Builder so organizations can create their own branded upload pages with custom form fields, including uploads from guests",
        "Added login and security features: JWT login, role-based access, API keys, user invites, audit logs, rate limiting and request tracing",
        "Built the React web app (upload monitor, reporter console, portal builder and admin pages) and the React Native mobile app, which saves uploads offline and retries them on poor networks",
        "Packaged the services with Docker, deployed them to Kubernetes through GitLab CI/CD, and wrote automated tests with pytest",
      ],
      cardSummary:
        "A platform where reporters upload large video files, which are then processed and sent to the newsroom.",
      cardHighlights: [
        "Built the backend using FastAPI and MongoDB",
        "Made big video files upload directly to cloud storage",
        "Built the web app and mobile app",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "MongoDB",
        "Celery",
        "Redis",
        "AWS S3",
        "AWS SQS",
        "AWS ECR",
        "React",
        "React Native (Expo)",
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
      ],
      mainFeatures: [
        "Large-file uploads with S3 multipart uploads and presigned URLs, straight from the user to cloud storage",
        "Bring-your-own storage: AWS S3, Google Cloud Storage and Azure Blob, with encrypted credentials",
        "GPU video transcoding with FFmpeg + NVIDIA NVENC on Celery workers, triggered by S3 events through SQS",
        "No-code Portal Builder and dynamic forms for branded upload pages, including guest uploads",
        "React Native (Expo) mobile app with an offline upload queue and retries for poor networks",
      ],
      role: "Software Developer",
      image: "/projects/project-placeholder.svg",
      featured: false,
      isPrivate: true,
      detail: {
        overview:
          "FlowX is a multi-tenant media intake platform. Reporters and outside contributors upload large video files through web portals or a mobile app, and the files are then processed and sent into the newsroom workflow.",
        problem:
          "Newsrooms receive large video files from many reporters and outside contributors, often over poor networks. Moving these files through application servers is slow and costly, and each organization wants its own branded upload pages and its own cloud storage.",
        solution:
          "Built a platform where files upload directly from the user to cloud storage using S3 multipart uploads and presigned URLs, then get transcoded on GPU workers automatically. Organizations connect their own storage (AWS S3, Google Cloud Storage or Azure Blob), build branded upload portals without code, and reporters can upload from a mobile app that keeps working offline.",
        role: "Built the FastAPI backend on MongoDB with clean layers (API → services → repositories) covering uploads, portals, forms, teamspaces, notifications and reports. Built large-file uploads with S3 multipart uploads and presigned URLs, and added multi-cloud storage support with encrypted customer credentials. Built GPU video transcoding with FFmpeg + NVIDIA NVENC on Celery workers, started automatically by S3 events through SQS, and folder-watch automation that creates upload packages from new files in storage. Built the no-code Portal Builder and dynamic forms. Added JWT login, RBAC, API keys, user invites, workspace branding and audit logs, and secured the API with rate limiting, security headers, request tracing and structured logging. Built the React web app and the React Native (Expo) mobile app, containerized the services with Docker, deployed them to Kubernetes through GitLab CI/CD and AWS ECR, and wrote automated tests with pytest.",
        frontend:
          "React + Vite + Tailwind web app (upload monitor, reporter console, portal builder and admin pages), and a React Native (Expo) mobile app for reporters with an offline upload queue using SQLite.",
        backend:
          "Python (FastAPI) with a layered architecture (API → services → repositories), Celery workers with Redis for background jobs, and FFmpeg + NVIDIA NVENC for GPU video transcoding.",
        database:
          "MongoDB for application data; AWS S3, Google Cloud Storage and Azure Blob for media storage; SQLite on mobile for the offline upload queue.",
        apis:
          "AWS S3 (multipart uploads, presigned URLs, event notifications), AWS SQS, AWS ECR, Google Cloud Storage and Azure Blob Storage. Deployed with Docker, Kubernetes and GitLab CI/CD.",
        mainFeatures: [
          "Multi-tenant teamspaces with uploads, portals, forms, notifications and reports",
          "S3 multipart uploads with presigned URLs — files never pass through the servers",
          "Bring-your-own cloud storage (AWS S3, Google Cloud Storage, Azure Blob) with encrypted credentials",
          "GPU video transcoding (FFmpeg + NVIDIA NVENC) on Celery workers, triggered by S3 events via SQS",
          "Folder-watch automation that creates upload packages from new files in storage",
          "No-code Portal Builder and dynamic forms for branded upload pages, including guest uploads",
          "JWT login, RBAC, API keys, user invites, workspace branding and audit logs",
          "Rate limiting, security headers, request tracing and structured logging",
          "React web app: upload monitor, reporter console, portal builder and admin pages",
          "React Native (Expo) mobile app with an offline SQLite upload queue and retries",
          "Dockerized services deployed to Kubernetes via GitLab CI/CD and AWS ECR, tested with pytest",
        ],
        userWorkflow: [
          "An organization connects its cloud storage and builds a branded upload portal with custom form fields.",
          "A reporter or guest contributor opens the portal (or the mobile app), fills in the form and selects their video files.",
          "The backend returns presigned URLs and the files upload directly to cloud storage in multipart chunks; on mobile, uploads are queued offline and retried on poor networks.",
          "When a file lands in S3, an S3 event goes through SQS and starts a Celery worker that transcodes the video on the GPU with FFmpeg + NVENC.",
          "The processed media appears in the upload monitor and is sent into the newsroom workflow, with notifications and audit logs along the way.",
        ],
        processFlow: [
          "Organization sets up storage and upload portal",
          "Reporter uploads video (web or mobile)",
          "File goes directly to cloud storage via presigned URL",
          "S3 event sent through SQS",
          "Celery worker transcodes video on GPU",
          "Media delivered to the newsroom workflow",
        ],
      },
    },
    {
      slug: "hrms-project",
      name: "HRMS Project",
      shortDescription:
        "A Human Resource Management System that helps a company manage its employees: adding new employees, tracking attendance, handling leave requests and keeping employee profiles up to date.",
      whatIDid: [
        "Built REST APIs with FastAPI for employee onboarding (adding new employees), attendance, leave requests and employee profiles",
        "Wrote the business logic and SQL queries behind each feature, storing the data in PostgreSQL and MySQL",
        "Added role-based access, so Admin, HR, Manager and Employee users can only see and do what their role allows",
        "Added request validation and error handling, so wrong or missing data is caught and a clear error message is returned",
        "Made every API return responses in the same standard format, so the frontend always gets consistent data",
      ],
      cardSummary:
        "A system to manage employees: joining, attendance, leave and employee profiles.",
      cardHighlights: [
        "Built APIs for joining, attendance, leave and profiles",
        "Stored the data in PostgreSQL and MySQL",
        "Gave different access to Admin, HR, Manager and Employee",
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "MySQL", "SQL"],
      mainFeatures: [
        "Role-based access control for Admin, HR, Manager, and Employee roles",
        "CRUD APIs for employee onboarding, attendance, and leave management",
        "Standardized API responses with validation and exception handling",
      ],
      role: "Software Developer",
      image: "/projects/project-placeholder.svg",
      featured: false,
      isPrivate: true,
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
        processFlow: [
          "User logs in",
          "Role checked (Admin, HR, Manager, Employee)",
          "Onboarding, attendance or leave request sent",
          "API validates the request",
          "Data saved in PostgreSQL / MySQL",
          "Response returned to the user",
        ],
      },
    },
  ],

  experience: [
    {
      company: "LakkshionsIT",
      role: "Software Developer",
      location: "Madhapur, Hitech City",
      startDate: "July 2025",
      endDate: "Present",
      responsibilities: [],
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
        "MongoDB",
        "Celery",
        "Redis",
        "AWS SQS",
        "React",
        "React Native",
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
      ],
      projectSlugs: [
        "media-operations-automation-tool",
        "flowx-media-intake-platform",
        "hrms-project",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Gayatri Vidya Parishad College of Engineering (Autonomous)",
      location: "Kommadi, Madhurawada",
      startDate: "September 2022",
      endDate: "March 2025",
      details: ["CGPA: 8.6"],
      accent: "blue",
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "GPTW-Bheemili",
      location: "Bheemili, Visakhapatnam",
      startDate: "June 2019",
      endDate: "May 2022",
      details: ["88.24%"],
      accent: "purple",
    },
    {
      degree: "SSC",
      institution: "Sree Vidya School",
      location: "Kommadi, Visakhapatnam",
      startDate: "June 2018",
      endDate: "March 2019",
      details: ["CGPA: 10"],
      accent: "teal",
    },
  ],

  hobbies: [
    {
      title: "Dance",
      description:
        "Classical and western dance, performed and practiced over several years.",
      accent: "purple",
    },
    {
      title: "YouTube Channel",
      description:
        "Run a YouTube channel focused on dance content with 600+ subscribers.",
      accent: "red",
    },
    {
      title: "Singing",
      description: "Singing as a personal creative outlet.",
      accent: "teal",
    },
    {
      title: "Content Creation",
      description:
        "Creating and producing content, including planning and shooting videos.",
      accent: "gold",
    },
    {
      title: "Video Editing",
      description: "Editing video content for the YouTube channel and other projects.",
      accent: "blue",
    },
  ],
};

export default portfolioData;
