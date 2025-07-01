export default {
  hero: {
    roles: {
      prefix: "Software",
      prefixes: ["Software", "Full-Stack", "Back-End", "Java", "React"],
      postfix: "Developer",
    },
    socialMediaLinks: [
      {
        name: "github",
        link: "https://github.com/branow",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/orest-bodnar",
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/_branow_/",
      },
      {
        name: "upwork",
        link: "https://www.upwork.com/freelancers/~017873b23eb5e9bba6",
      },
    ],
  },
  about: {
    paragraphs: [
      `*Full-stack* Developer with about *one year* of freelance experience delivering software solutions for international clients.`,
      `Around *half a year* at *EPAM* as a student and trainee, primarily focused on *Java* development, gaining practical industry experience.`,
      `Skilled in Java Backend development with strong expertise in *Spring Boot* and *React* frontend.`,
      `Holds a *Bachelor’s* degree in Computer Science.`,
      `*B2* level English speaker, confident in both verbal and written communication.`,
      `Motivated to learn new technologies and continuously grow technical skills.`,
    ],
  },
  skills: [
    { title: "Java", score: 70, image: "/skills/java.png" },
    { title: "Spring Framework", score: 50, image: "/skills/spring.png" },
    { title: "JavaScript", score: 40, image: "/skills/js.png" },
    { title: "TypeScript", score: 40, image: "/skills/ts.png" },
    { title: "React JS", score: 50, image: "/skills/reactjs.png" },
    { title: "Next JS", score: 30, image: "/skills/nextjs.png" },
    { title: "Tailwind CSS", score: 30, image: "/skills/tailwind.png" },
    { title: "Golang", score: 40, image: "/skills/golang.png" },
    { title: "MySQL RDMS", score: 80, image: "/skills/mysql.png" },
    { title: "PostgreSQL", score: 40, image: "/skills/postgres.png" },
    { title: "MongoDB", score: 30, image: "/skills/mongodb.png" },
    { title: "Git VCS", score: 70, image: "/skills/git.png" },
    { title: "Docker", score: 30, image: "/skills/docker.png" },
    { title: "AWS", score: 30, image: "/skills/aws.png" },
  ],
  languages: [
    { title: "Ukrainian", level: "C2" },
    { title: "English", level: "B2" },
  ],
  experience: [
    {
      title: "EPAM SYSTEMS: Java Developer [INTERNSHIP]",
      year: "JAN 2025 — NOW",
      description: `Completed an individual REST API project under the guidance of a senior developer. Contributed to a team developing AWS Lambda services for a scientific conference
management system.`,
    },
    {
      title: "UPWORK: Full Stack Developer [FREELANCING]",
      year: "JAN 2024 — NOW",
      description: `Delivered full-stack solutions for clients across the US, India, Slovenia, and more, working independently on feature development, debugging, and web application enhancements. Notably led the end-to-end development of a browser-based web phone app, including frontend, backend, database integration, and authentication architecture.`
    },
  ],
  education: [
    {
      title: "Computer Science: Bachelor",
      year: "2021-2025",
      description: `National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”`,
    },
    {
      title: "Economics: Junior Specialist",
      year: "2019-2021",
      description: "Separated Structural Unit Khmelnytskyi Polytechnic Professional College by Lviv Polytechnic National University"
    },
  ],
  projects: [
    {
      title: "Webphone",
      description: "'Webphone' a web-based softphone system, empowering users to make and receive Voice over IP (VoIP) calls directly from their browser.",
      image: "/projects/webphone-title.png",
      href: "/projects/webphone",
    },
    {
      title: "Peer Chat",
      description: "'Peer Chat' is a website for free peer-to-peer internet call communication.",
      image: "/projects/peerchat-title.png",
      href: "/projects/peer-chat",
    },
    {
      title: "Memo",
      description: "'Memo' is a website designed for quick and efficient vocabulary memorization through the use of flashcard techniques.",
      image: "/projects/memo-title.png",
      href: "/projects/memo",
    },
    {
      title: "Expense Tracker",
      description: "REST API designed to facilitate the tracking of user payment transactions",
      image: "/projects/et-1.png",
      href: "/projects/expense-tracker",
    },
    {
      title: "Environmental Monitoring of Enterprises",
      description: "The 'Environmental Monitoring of Enterprises' website as a comprehensive platform for processing indicators related to air emission",
      image: "/projects/eco-title.png",
      href: "/projects/eco",
    },
    {
      title: "LCards",
      description: "'LCards' is a desktop application designed for the rapid and effective memorization of English vocabulary using flashcard techniques.",
      image: "/projects/lcards-title.png",
      href: "/projects/lcards",
    },
  ],
  certificates: [
    {
      key: "green-forest",
      alt: "Green Forest Certificate B2 English Course",
      src: "/certificates/green-forest-english.png"
    },
    {
      key: "softserver-java",
      alt: "Java SoftServe Academy Certification",
      src: "/certificates/softserve-javase.jpg"
    },
    {
      key: "softserve-english",
      alt: "English SoftServe Academy Evaluation",
      src: "/certificates/softserve-english.jpg"
    },
  ],
}
