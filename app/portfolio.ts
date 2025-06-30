export default {
  hero: {
    roles: {
      prefix: "Software",
      prefixes: ["Software", "Java", "Spring Boot", "REST API"],
      postfix: "Developer",
    },
    socialMediaLinks: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/orest-bodnar",
      },
      {
        name: "upwork",
        link: "https://www.upwork.com/freelancers/~017873b23eb5e9bba6",
      },
      {
        name: "github",
        link: "https://github.com/branow",
      },
      {
        name: "facebook",
        link: "https://www.facebook.com/profile.php?id=61556098941984",
      },
      {
        name: "twitter",
        link: "https://twitter.com/_branow_",
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/_branow_/",
      },
    ],
  },
  about: {
    paragraphs: [
      `I have been programming for several years, during which I've become familiar with various technologies. My strongest skill is backend development, particularly using *Java* and the *Spring framework* (including *Spring Security* and *Spring OAuth2*). Through my personal projects, I've also gained knowledge in frontend technologies like *React*, *Next.js* and *Tailwind CSS*. Additionally, I have experience working with databases and have knowledge of developer tools such as *Git* and *Docker*.,`,
      `Recently, I've started exploring *Golang* and its related tools and frameworks.`,
    ],
  },
  skills: [
    { title: "Golang", score: 40, image: "/skills/golang.png" },
    { title: "Java SE", score: 80, image: "/skills/java.png" },
    { title: "Spring Framework", score: 50, image: "/skills/spring.png" },
    { title: "MySQL RDMS", score: 80, image: "/skills/mysql.png" },
    { title: "React.js", score: 45, image: "/skills/reactjs.png" },
    { title: "Next.js", score: 30, image: "/skills/nextjs.png" },
    { title: "Tailwind CSS", score: 30, image: "/skills/tailwind.png" },
    { title: "Git VCS", score: 70, image: "/skills/git.png" },
    { title: "Docker", score: 30, image: "/skills/docker.png" },
  ],
  languages: [
    { title: "Ukrainian", level: "C2" },
    { title: "English", level: "B2" },
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
